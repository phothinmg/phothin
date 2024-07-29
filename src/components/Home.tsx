import { Hono, mark } from "../dependencies/deps.ts";
import type { FC } from "../dependencies/deps.ts";
import { NaviBar, Footer, Layout } from "./Components.tsx";
import type { HomePageType, SiteMetaData } from "../types/index.d.ts";
import configure from "../helpers/config.ts";
import { hpdata } from "../helpers/home.ts";
import { JSX } from "jsr:@hono/hono@^4.4.6/jsx/jsx-runtime";

const homepage = (opts: SiteMetaData) => {
  const home = new Hono();

  const data = configure(opts);

  const hpd: HomePageType = hpdata();
  const text: string = hpd.markdown ?? "";
  const logo: string = hpd.logo ?? "";
  const htm: string = mark.default.renderHtml({ text: text });
  const inner = { _html: htm };
  const logoLink: string = `./${data.imageFolder}/${logo}`;

  const Home: FC = () => {
    return (
      <>
        <Layout
          siteName={data.siteName}
          lang={data.lang}
          description={data.description}
          author={data.author}
          favicon={data.favicon}
        >
          <div class="top-hero">
            <img src={logoLink} alt="logo" class="logo-img" />
            <br />
            <h4 class="site-title">{hpd.site}</h4>
            <p>{hpd.bio}</p>
            <br />
            <NaviBar />
            <hr />
          </div>
          <div
            class="container"
            dangerouslySetInnerHTML={{ __html: inner._html }}
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
    );
  };
  // deno-lint-ignore no-explicit-any
  home.get("/", (c: { html: (arg0: JSX.Element) => any }) => {
    return c.html(<Home />);
  });
  return home;
};

export default homepage;
