declare interface SiteMetaData {
  author?: string;
  description?: string;
  lang?: string;
  favicon?: string;
  ogImage?: string;
  ogUrl?: string;
  facebook?: string;
  github?: string;
  twitter?: string;
  discord?: string;
  mastodon?: string;
  linkedin?: string;
  postDir?: string;
  pageDir?: string;
  imageDir?: string;
}

export interface PostData {
  title: string;
  date: string;
  author?: string;
  tags?: string[];
  intro?: string;
  html: string;
}

export interface PostArrayProPs {
  link: string;
  postTitle: string;
  name: string;
  pname: string;
  birthtime: Date | null;
}

declare interface HomePageType {
  site?: string;
  logo?: string;
  bio?: string;
  markdown?: string;
}

export interface ImageLinks {
  name: string | string[];
  fileLink: string;
  postImage?: string;
  pageImage?: string;
}

export interface StyleLinks {
  name: string | string[];
  fileLink: string;
  postStyle?: string;
  pageStyle?: string;
}

export interface FileArrays {
  imageFiles: string[];
  imageFolder: string;
  postFolder: string;
  pageFolder: string;
  styleFiles: string[];
  styleFolder: string;
}

export interface LayoutProps {
  siteName: string;
  lang: string;
  description: string;
  author: string;
  favicon?: string;
}

export interface SocialLinks {
  facebook: string;
  github: string;
  twitter: string;
  discord: string;
  linkedin: string;
  mastodon: string;
}

export type PostLinkType = {
  title: string;
  linkArray: Array<{
    link: string;
    postTitle: string;
    name: string;
    pname: string;
    birthtime: Date | null;
  }>;
};

export { SiteMetaData, HomePageType };
