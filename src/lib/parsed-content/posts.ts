import path from "node:path";
import { readContentFromFolder, type FileData } from "./nodejs";
import markedParser, { type MetaData } from "@/lib/marked";
import { formatDate } from "./helpers";
interface _Post {
  fileData: FileData;
  parsedHtml: string;
  metaData: MetaData;
}
export interface Post extends _Post {
  prev: {
    bool: boolean;
    title: string;
    slug: string;
  };
  next: {
    bool: boolean;
    title: string;
    slug: string;
  };
}
export type Posts = Post[];

export type PaginatePosts = {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImg: string;
  tags: string[];
}[][];

const postsPath = path.resolve(process.cwd(), "src/contents/posts");
const postsData: FileData[] = await readContentFromFolder(postsPath);

const _posts: _Post[] = await Promise.all(
  postsData.map(async (data) => {
    const _post = await markedParser(data.content);
    return {
      fileData: data,
      parsedHtml: _post.parsedHtml,
      metaData: _post.metaData,
    };
  })
);
_posts.sort((a, b) => b.fileData.birthtimeMs - a.fileData.birthtimeMs);

export const posts: Posts = _posts.map((post) => {
  const length = _posts.length;
  const idx = _posts.indexOf(post);
  const _prev =
    idx <= 0
      ? { bool: false, title: "No Post Found", slug: "" }
      : {
          bool: true,
          title: _posts[idx - 1].metaData.title,
          slug: _posts[idx - 1].fileData.slug,
        };
  const _next =
    idx >= length - 1
      ? { bool: false, title: "No Post Found", slug: "" }
      : {
          bool: true,
          title: _posts[idx + 1].metaData.title,
          slug: _posts[idx + 1].fileData.slug,
        };
  return {
    ...post,
    prev: _prev,
    next: _next,
  };
});

export function paginatePosts(size = 4): PaginatePosts {
  const post_pages_count = Math.ceil(posts.length / size);
  const postPages = Array.from({ length: post_pages_count }, (_, i) => {
    const _index = i * size;
    const _posts = posts.slice(_index, _index + size);
    const _page = _posts.map((post) => {
      return {
        slug: post.fileData.slug,
        title: post.metaData.title ?? "",
        date: post.metaData.date ? formatDate(post.metaData.date) : "",
        description: post.metaData.description ?? "",
        coverImg: post.metaData.coverImg ?? "",
        tags: post.metaData.tags ?? [],
      };
    });
    return _page;
  });
  return postPages;
}
