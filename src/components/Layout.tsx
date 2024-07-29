import { PropsWithChildren } from "hono/jsx";
import { config, lang } from "../lib/config.ts";
import { css_content } from "../lib/css.ts";
export interface LayoutProps {
  postTitle?: string;
}
export function Layout({
  postTitle,
  children,
}: PropsWithChildren<LayoutProps>) {
  const tit = postTitle
    ? `${config.site.name} | ${postTitle}`
    : config.site.name;
  const kw: string = config.site.keywords.join(",");
  return (
    <html lang={lang}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={config.site.description} />
        <meta name="keywords" content={kw} />
        <title>{tit}</title>
        <style>{css_content}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
