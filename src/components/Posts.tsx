import { Hono, memo } from "../dependencies/deps.ts";
import type { FC } from "../dependencies/deps.ts";
import {
  NaviBar,
  Footer,
  Layout,
  PostsList,
  PostComponent,
} from "./Components.tsx";
import type { SiteMetaData } from "../types/index.d.ts";
import configure from "../helpers/config.ts";
import { postLinksArray } from "../helpers/linksArray.ts";
import { JSX } from "jsr:@hono/hono@^4.4.6/jsx/jsx-runtime";

const postsList = (opts: SiteMetaData) => {
  const posts = new Hono();

  const data = configure(opts);
  const postsList = postLinksArray(data.postFiles);

  const Posts: FC = memo(() => (
    <>
      <Layout
        siteName={data.siteName}
        lang={data.lang}
        description={data.description}
        author={data.author}
        favicon={data.favicon}
      >
        <div class="nav-bar">
          <NaviBar />
        </div>
        <PostsList
          opts={{
            linkArray: postsList,
          }}
        />
        <Footer
          opts={{
            facebook: data.facebook,
            github: data.github,
            twitter: data.twitter,
            linkedin: data.linkedin,
            discord: data.discord,
            mastodon: data.mastodon,
          }}
        />
      </Layout>
    </>
  ));
  // deno-lint-ignore no-explicit-any
  posts.get("/", (c: { html: (arg0: JSX.Element) => any; }) => {
    return c.html(<Posts />);
  });
  return posts;
};

const postView = (opts: SiteMetaData) => {
  const pview = new Hono();
  const data = configure(opts);
  const postsList = postLinksArray(data.postFiles);

  // deno-lint-ignore no-explicit-any
  pview.get("/", (c: { req: { param: (arg0: string) => any; }; html: (arg0: JSX.Element) => any; }) => {
    const name = c.req.param("name");
    const filtered = postsList.find((i) => i.name === name);
    const file = filtered?.link ?? "";
    return c.html(
      <Layout
        siteName={data.siteName}
        lang={data.lang}
        description={data.description}
        author={data.author}
        favicon={data.favicon}
      >
        <div class="nav-bar">
          <NaviBar />
        </div>

        <PostComponent filePath={file} />

        <Footer
          opts={{
            facebook: data.facebook,
            github: data.github,
            twitter: data.twitter,
            linkedin: data.linkedin,
            discord: data.discord,
            mastodon: data.mastodon,
          }}
        />
      </Layout>
    );
  });
  return pview;
};

export { postsList, postView };
