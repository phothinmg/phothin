import { Hono, serveStatic } from "./dependencies/deps.ts";
import type { SiteMetaData } from "./types/index.ts";
import homepage from "./lib/Home.tsx";
import { postsList, postView } from "./lib/Posts.tsx";
import { filesarrays } from "./helpers/links.ts";
import configure from "./helpers/config.ts";

const blog = (options: SiteMetaData) => {
  const honoapp = new Hono();
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

  honoapp.route("/", home);
  honoapp.route(`/${data.postFolder}`, posts);
  honoapp.route(`/${data.postFolder}/:name`, postview);



  honoapp.use(`/${data.imageFolder}/*`, serveStatic({ root: "./" }));
  imageFileArray.map((i) => {
    const postimage = i.postImage ?? "";
    return honoapp.use(postimage, serveStatic({ path: i.fileLink }));
  }); // Images from posts dir
  imageFileArray.map((i) => {
    const pageimage = i.pageImage ?? "";
    return honoapp.use(pageimage, serveStatic({ path: i.fileLink }));
  }); // Images from pages dir

  // style files route
  honoapp.use(`/${data.styleFolder}/*`, serveStatic({ root: "./" }));
  styleFileArray.map((i) => {
    const poststyle = i.postStyle ?? "";
    return honoapp.use(poststyle, serveStatic({ path: i.fileLink }));
  });
  styleFileArray.map((i) => {
    const pagestyle = i.pageStyle ?? "";
    return honoapp.use(pagestyle, serveStatic({ path: i.fileLink }));
  });

  return honoapp;
};

export default blog;
