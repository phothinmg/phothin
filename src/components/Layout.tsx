import { type PropsWithChildren } from "../dependencies/deps.ts";
import type { LayoutProps } from "../types/index.ts";

export function Layout({
    siteName,
    lang,
    description,
    author,
    favicon,
    children,
  }: PropsWithChildren<LayoutProps>) {
    const title: string = siteName;
    return (
      <html prefix="og: https://ogp.me/ns#" lang={lang}>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={description} />
          <meta name="author" content={author} />
          {/* pico css */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.6/css/pico.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.colors.min.css"
          />
          <link rel="stylesheet" href="./src/styles/index.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/hono-icons/sicons.css" />
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
          {/* google font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
            rel="stylesheet"
          />
          {/* script */}
          <script
            src="https://kit.fontawesome.com/50c925d5df.js"
            crossorigin="anonymous"
          ></script>
          {/* title */}
          <title>{title}</title>
          {/* pico css  */}
        </head>
        <body>
          <main class="container">{children}</main>
        </body>
      </html>
    );
  }
  
