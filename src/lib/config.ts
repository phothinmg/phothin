import { parse } from "yaml";
import { read_file } from "../lib/utils.ts";
import { join } from "path";
const root = Deno.cwd();
const config_yaml = join(root, "config.yaml");
const app = join(root, "app");
export interface Config {
  site: {
    name: string;
    description: string;
    author: string;
    locale: string;
    keywords: string[];
  };
  social: {
    github: string;
    twitter: string;
    facbook: string;
  };
  og: {
    type: string;
    image: string;
  };
  directories: {
    posts: string;
    pages: string;
    images: string;
    style: string;
  };
}

const txt = read_file(config_yaml);

export const config = parse(txt) as Config;
export const md_dir = join(app, config.directories.posts);
export const img_dir = join(app, config.directories.images);
export const style_dir = join(app, config.directories.style);
export const lang = config.site.locale.split("-")[0];
