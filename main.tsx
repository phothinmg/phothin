/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Pho Thin",
  description: "Personal Blog",
  avatar: "./img/phothin.png",
  avatarClass: "rounded-full",
  author: "Pho Thin",
  links: [
    { title: "GitHub", url: "https://github.com/phothinmg" },
    { title: "Email", url: "mailto:phothinmg@gmail.com" },
    { title: "Twitter", url: "https://twitter.com/phothinmg" },
  ],
  lang: "en",
  favicon: "./img/favicon/favicon.ico",
  theme: "dark",
  port: 5454,
});


