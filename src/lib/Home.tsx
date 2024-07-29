import { Hono, mark, extractYaml } from "../dependencies/deps.ts";
import type { FC } from "../dependencies/deps.ts";
import { Footer } from "../components/Footer.tsx";
import { Layout } from "../components/Layout.tsx";
import { NavBar } from "../components/Navigation.tsx";
import type { SiteMetaData } from "../types/index.ts";
import configure from "../helpers/config.ts";
import { JSX } from "jsr:@hono/hono@^4.4.6/jsx/jsx-runtime";
import { readFile } from "../helpers/utli.ts";

const homepage = (opts: SiteMetaData) => {
  const home = new Hono();

  const data = configure(opts);
  const txt: string = readFile(data.indexFile);
  const text: string = extractYaml(txt).body;
  const logo: string = data.logoFile ?? "";
  const htm: string = mark.default.renderHtml({ text: text });
  const inner = { _html: htm };
  const logoLink: string = logo;

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
            <h4 class="site-title">{data.siteName}</h4>
            <p>{data.description}</p>
            <br />
            <NavBar />
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
