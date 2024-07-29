import { globSync, join } from "../dependencies/deps.ts";
import type { SiteMetaData } from "../types/index.ts";

export default function configure(opts: SiteMetaData) {
  const root = Deno.cwd();
  const appDir = opts.appDir ?? "app";
  const postFolder: string = opts.postDir ?? "app/posts";
  const pageFolder: string = opts.pageDir ?? "app/pages";
  const imageFolder: string = opts.imageDir ?? "app/images";
  const styleFolder: string = "src/styles";
  const logo_file = opts.logo ?? "logo.png";

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
  const indexFile = join(appDir, "index.md");
  const logoFile = join(image_folder, logo_file);
  return {
    siteName: opts.siteName ?? "Hono Blog Template",
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
    indexFile,
    logoFile,
  };
}
