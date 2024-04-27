/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Pho Thin",
  description: "Personal Blog",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  // footer: `<footer>Your custom footer</footer>`,
  avatar: "./img/phothin.png",
  avatarClass: "rounded-full",
  author: "Pho Thin",
  links: [
    { title: "GitHub", url: "https://github.com/phothinmg" },
    { title: "Email", url: "mailto:phothinmg@gmail.com" },
    { title: "Twitter", url: "https://twitter.com/phothinmg" },
  ],
  lang: "en",
  favicon: "./img/favicons/favicon.ico",
  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
