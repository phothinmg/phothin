
/**
 * ### Site configuration 
 */
export interface SiteMetaData {
  /**
   * **Name of the blog - default `"Hono Blog Template"`**
   */
  siteName?: string;
  logo?: string;
  /**
   * **Author name of the blog  - default `" "`**
   */
  author?: string;
   /**
   * **Description of the blog  - default `" "`**
   */
  description?: string;
   /**
   * **Lang for html  - default `en`**
   */
  lang?: string;
   /**
   * **Favicon for html  - default `" "`**
   */
  favicon?: string;
  ogImage?: string;
  /**
   * **Recommended for when deploy the blog, deployed URL.**
   */
  ogUrl?: string;
  /**
   * Facebook profile link
   */
  facebook?: string;
  /**
   * Github profile link
   */
  github?: string;
  /**
   * Twitter profile link
   */
  twitter?: string;
  /**
   * Discord profile link
   */
  discord?: string;
  /**
   * Mastodon profile link
   */
  mastodon?: string;
  /**
   *  Linkedin profile link
   */
  linkedin?: string;
  /**
   * **Directory for main  default `app`** 
   */
  appDir?: string;
  /**
   * **Directory under appDir for Post markdown files default `app/posts`** 
   * 
   */
  postDir?: string;
  /**
   * **Directory under appDir for Page markdown files default `app/pages`** 
   * 
   */
  pageDir?: string;
  /**
   * **Directory under appDir for image files default `app/images`** 
   * 
   * Supported image's file extensions
   * 
   * ```
   * ".png" , ".jpg" , ".jpeg" , ".ico"
   * 
   * ".svg" , ".webp"
   * ```
   * 
   */
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

export interface HomePageType {
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


