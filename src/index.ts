import { Hono, serveStatic } from "./dependencies/deps.ts";

import type { SiteMetaData } from "./types/index.d.ts";
import homepage from "./components/Home.tsx";
import { postsList, postView } from "./components/Posts.tsx";
import { filesarrays } from "./helpers/links.ts";
import configure from "./helpers/config.ts";

const nyein = (options: SiteMetaData) => {
  const nyeinapp = new Hono();
  const home = homepage(options);
  const posts = postsList(options);
  const postview = postView(options);

  const data = configure(options);
  const fileArray = filesarrays({
    imageFiles: data.imageFiles,
    imageFolder: data.imageFolder,
    styleFiles: data.styleFiles,
    styleFolder: data.styleFolder,
    pageFolder: data.pageFolder,
    postFolder: data.postFolder,
  });
  const styleFileArray = fileArray.styleFileArray;
  const imageFileArray = fileArray.imageFileArray;

  nyeinapp.route("/", home);
  nyeinapp.route(`/${data.postFolder}`, posts);
  nyeinapp.route(`/${data.postFolder}/:name`, postview);



  nyeinapp.use(`/${data.imageFolder}/*`, serveStatic({ root: "./" }));
  imageFileArray.map((i) => {
    const postimage = i.postImage ?? "";
    return nyeinapp.use(postimage, serveStatic({ path: i.fileLink }));
  }); // Images from posts dir
  imageFileArray.map((i) => {
    const pageimage = i.pageImage ?? "";
    return nyeinapp.use(pageimage, serveStatic({ path: i.fileLink }));
  }); // Images from pages dir

  // style files route
  nyeinapp.use(`/${data.styleFolder}/*`, serveStatic({ root: "./" }));
  styleFileArray.map((i) => {
    const poststyle = i.postStyle ?? "";
    return nyeinapp.use(poststyle, serveStatic({ path: i.fileLink }));
  });
  styleFileArray.map((i) => {
    const pagestyle = i.pageStyle ?? "";
    return nyeinapp.use(pagestyle, serveStatic({ path: i.fileLink }));
  });

  return nyeinapp;
};

export default nyein;
