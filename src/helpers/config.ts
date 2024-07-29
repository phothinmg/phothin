import { globSync, join } from "../dependencies/deps.ts";
import type { SiteMetaData } from "../types/index.d.ts";
import { hpdata } from "./home.ts";
const siteName: string | undefined = hpdata().site;

export default function configure(opts: SiteMetaData) {
  const root = Deno.cwd();
  const postFolder: string = opts.postDir ?? "posts";
  const pageFolder: string = opts.pageDir ?? "pages";
  const imageFolder: string = opts.imageDir ?? "images";
  const styleFolder: string = "src/styles";

  const post_folder = join(root, postFolder);
  const page_folder = join(root, pageFolder);
  const image_folder = join(root, imageFolder);
  const style_folder = join(root, styleFolder);

  const postFiles = globSync(`${post_folder}/**/*.md`);
  const pageFiles = globSync(`${page_folder}/**/*.md`);
  const imageFiles = globSync(
    `${image_folder}/**/*.{png,jpeg,jpg,ico,svg,webp}`
  );
  const styleFiles = globSync(`${style_folder}/**/*.css`);

  return {
    siteName: siteName ?? "Nyein Blog Template",
    author: opts.author ?? "",
    description: opts.description ?? "Blog with Deno and Hono",
    lang: opts.lang ?? "en",
    favicon: opts.favicon ?? "",
    ogImage: opts.ogImage ?? "",
    ogUrl: opts.ogUrl ?? "",
    facebook: opts.facebook ?? "",
    github: opts.github ?? "",
    twitter: opts.twitter ?? "",
    discord: opts.discord ?? "",
    mastodon: opts.mastodon ?? "",
    linkedin: opts.linkedin ?? "",
    postFolder,
    postFiles,
    pageFolder,
    pageFiles,
    imageFolder,
    imageFiles,
    styleFolder,
    styleFiles,
  };
}
