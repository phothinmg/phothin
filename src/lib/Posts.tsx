import { Hono, memo } from "../dependencies/deps.ts";
import type { FC } from "../dependencies/deps.ts";
import { NavBar } from "../components/Navigation.tsx";
import { PostsList, PostComponent } from "../components/Components.tsx";
import { Layout } from "../components/Layout.tsx";
import { Footer } from "../components/Footer.tsx";
import type { SiteMetaData } from "../types/index.ts";
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
          <NavBar />
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
  posts.get("/", (c: { html: (arg0: JSX.Element) => any }) => {
    return c.html(<Posts />);
  });
  return posts;
};

const postView = (opts: SiteMetaData) => {
  const pview = new Hono();
  const data = configure(opts);
  const postsList = postLinksArray(data.postFiles);

  pview.get(
    "/",
    (c: {
      // deno-lint-ignore no-explicit-any
      req: { param: (arg0: string) => any };
      // deno-lint-ignore no-explicit-any
      html: (arg0: JSX.Element) => any;
    }) => {
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
            <NavBar />
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
    }
  );
  return pview;
};

export { postsList, postView };
