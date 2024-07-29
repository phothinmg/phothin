import type { ImageLinks, StyleLinks, FileArrays } from "../types/index.ts";

export const filesarrays = (opts: FileArrays) => {
  // deno-lint-ignore prefer-const
  let imageFileArray: Array<ImageLinks> = [];

  opts.imageFiles.forEach((i) => {
    const fn = i.split("/").slice(-1);
    const fl = `./${opts.imageFolder}/${fn}`;
    const postLink = `/${opts.postFolder}/${opts.imageFolder}/${fn}`;
    const pageLink = `/${opts.pageFolder}/${opts.imageFolder}/${fn}`;
    const a: ImageLinks = {
      name: fn,
      fileLink: fl,
      postImage: postLink,
      pageImage: pageLink,
    };
    imageFileArray.push(a);
  });
  // deno-lint-ignore prefer-const
  let styleFileArray: Array<StyleLinks> = [];
  opts.styleFiles.forEach((i) => {
    const fn = i.split("/").slice(-1);
    const fl = `./${opts.styleFolder}/${fn}`;
    const postLink = `/${opts.postFolder}/${opts.styleFolder}/${fn}`;
    const pageLink = `/${opts.pageFolder}/${opts.styleFolder}/${fn}`;
    const a: StyleLinks = {
      name: fn,
      fileLink: fl,
      postStyle: postLink,
      pageStyle: pageLink,
    };
    styleFileArray.push(a);
  });

  return {
    imageFileArray,
    styleFileArray,
  };
};
