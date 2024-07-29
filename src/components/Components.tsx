import type { FC, PropsWithChildren } from "../dependencies/deps.ts";
import { memo, html, Style } from "../dependencies/deps.ts";
import type {
  LayoutProps,
  SocialLinks,
  PostArrayProPs,
  PostData,
  PostLinkType,
} from "../types/index.d.ts";
import { readingTime } from "../helpers/utli.ts";
import markdown from "../helpers/markdown.ts";
// ---------

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
        <Style />
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
        {html`
          <script src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/theme.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/modal.min.js"></script>
        `}
      </body>
    </html>
  );
}

// ----
const ThemeModal: FC = memo(() => (
  <>
    <dialog id="modal-theme">
      <article>
        <header>
          <button
            aria-label="Close"
            rel="prev"
            data-target="modal-theme"
            onclick="toggleModal(event)"
          ></button>
          <p>Select Theme</p>
        </header>
        <a
          href="#"
          data-theme-switcher="auto"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="System"
        >
          <i class="fa-solid fa-gear"></i>
        </a>
        <a
          href="#"
          data-theme-switcher="light"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="Light"
        >
          <i class="fa-regular fa-sun"></i>
        </a>
        <a
          href="#"
          data-theme-switcher="dark"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="Dark"
        >
          <i class="fa-regular fa-moon"></i>
        </a>
        <footer></footer>
      </article>
    </dialog>
  </>
));

//--
export const NaviBar: FC = memo(() => (
  <>
    <nav>
      <ul>
        <li>
          <a href="/" class="outline secondary sc-link" data-tooltip="Home">
            <i class="fa fa-home"></i>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="/posts"
            class="outline secondary sc-link"
            data-tooltip="Posts"
          >
            <i class="fa fa-folder-open"></i>
          </a>
        </li>
        <li>
          {" "}
          <a
            id="model"
            class="outline secondary  sc-link"
            data-target="modal-theme"
            onclick="toggleModal(event)"
            data-tooltip="Theme"
          >
            <i class="fa-solid fa-paint-roller"></i>
          </a>
        </li>
      </ul>
    </nav>

    <ThemeModal />
  </>
));
//----
export const Header: FC<{ siteName: string }> = memo(({ siteName }) => (
  <>
    <header
      class="container"
      style={"border-bottom: 0.3px solid rgb(224, 221, 221);"}
    >
      <nav>
        <ul>
          <li>
            <h3>{siteName}</h3>
          </li>
        </ul>
        <ul>
          <NaviBar />
        </ul>
      </nav>
    </header>
  </>
));

const SocialIcons: FC<{ socialLinks: SocialLinks }> = ({ socialLinks }) => {
  const social = [
    {
      link: socialLinks.facebook,
      icon: html`<i class="fa-brands fa-facebook"></i>`,
    },
    {
      link: socialLinks.github,
      icon: html`<i class="fa-brands fa-github"></i>`,
    },
    {
      link: socialLinks.twitter,
      icon: html`<i class="fa-brands fa-square-x-twitter"></i>`,
    },
    {
      link: socialLinks.discord,
      icon: html`<i class="fa-brands fa-discord"></i>`,
    },
    {
      link: socialLinks.linkedin,
      icon: html`<i class="fa-brands fa-linkedin"></i>`,
    },
    {
      link: socialLinks.mastodon,
      icon: html`<i class="fa-brands fa-mastodon"></i>`,
    },
  ];

  return (
    <>
      {social.map((i) => {
        if (i.link !== "") {
          return (
            <a href={i.link} target="_blank" class="outline secondary sc-link">
              {i.icon}
            </a>
          );
        }
      })}
    </>
  );
};

export const Footer: FC<{ opts: SocialLinks }> = memo(({ opts }) => (
  <>
    <div class="container">
      <hr />
      <footer>
        <SocialIcons
          socialLinks={{
            facebook: opts.facebook,
            github: opts.github,
            twitter: opts.twitter,
            discord: opts.discord,
            linkedin: opts.linkedin,
            mastodon: opts.mastodon,
          }}
        />
        <iframe
          src="https://nyeindenodev.instatus.com/embed-status/e16ddcdb/light-md"
          width="230"
          height="61"
          frameBorder="0"
          scrolling="no"
          style="border: none;"
        ></iframe>
      </footer>
    </div>
  </>
));

export const PostLink: FC<{ opts: PostLinkType }> = ({ opts }) => {
  const filtered: PostArrayProPs | undefined = opts.linkArray.find(
    (i) => i.postTitle === opts.title
  );

  return (
    <a href={filtered?.pname}>
      <h2>{filtered?.postTitle}</h2>
    </a>
  );
};
type PostCardType = {
  filePath: string;
  linkData: {
    linkArray: {
      link: string;
      postTitle: string;
      name: string;
      pname: string;
      birthtime: Date | null;
    }[];
  };
};
/**
 * Renders a post card component with the given options.
 * @param opts - The options for the post card, including the file path and link data.
 * @returns The post card component.
 */
export const PostCard: FC<{ opts: PostCardType }> = ({ opts }) => {
  const data: PostData = markdown(opts.filePath);
  return (
    <article id="article">
      <header>
        <PostLink
          opts={{
            title: data.title,
            linkArray: opts.linkData.linkArray,
          }}
        />
        <span>
          <small>{data.date}</small>
        </span>
        <p>{data.tags}</p>
      </header>
      <p>{data.intro}</p>
      <footer>
        <small>Reading Time: {readingTime(data.html)} minutes</small>
      </footer>
    </article>
  );
};

type PostsListType = {
  linkArray: {
    link: string;
    postTitle: string;
    name: string;
    pname: string;
    birthtime: Date | null;
  }[];
};
export const PostsList: FC<{ opts: PostsListType }> = memo(({ opts }) => (
  <>
    {opts.linkArray.map((obj) => (
      <PostCard
        opts={{
          filePath: obj.link,
          linkData: {
            linkArray: [
              {
                link: obj.link,
                postTitle: obj.postTitle,
                name: obj.name,
                pname: obj.pname,
                birthtime: obj.birthtime,
              },
            ],
          },
        }}
      />
    ))}
  </>
));

export const PostComponent: FC<{ filePath: string }> = ({
  filePath,
}: {
  filePath: string;
}) => {
  const data: PostData = markdown(filePath);
  const inner = { _html: data.html };
  return (
    <div class="container">
      <article>
        <header>
          <h2>{data.title}</h2>
          <span>
            <small>{data.date}</small>{" "}
            <small>Reading Time: {readingTime(data.html)} minutes</small>
          </span>
          <p>{data.tags}</p>
          <p>{data.intro}</p>
        </header>
        <div
          class="container"
          dangerouslySetInnerHTML={{ __html: inner._html }}
        />
      </article>
    </div>
  );
};
