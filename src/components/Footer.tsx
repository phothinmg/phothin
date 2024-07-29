import { type FC, memo, html } from "../dependencies/deps.ts";
import type { SocialLinks } from "../types/index.ts";

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
      </footer>
    </div>
  </>
));
