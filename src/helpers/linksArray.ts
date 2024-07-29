import markdown from "./markdown.ts";
import type { PostArrayProPs } from "../types/index.d.ts";

export function postLinksArray(postFiles: string[]): Array<PostArrayProPs> {
  const pla: Array<PostArrayProPs> = [];
  postFiles.forEach((i: string) => {
    const title: string = markdown(i).title;
    const tit: string = title.toLowerCase();
    const fname: string = tit.split(" ").join("-");
    const btime = Deno.statSync(i).birthtime;
    const p: PostArrayProPs = {
      link: i,
      postTitle: title,
      name: fname,
      pname: `/posts/${fname}`,
      birthtime: btime,
    };
    pla.push(p);
  });
  pla.sort((a, b) => {
    if (a.birthtime && b.birthtime) {
      return b.birthtime.getTime() - a.birthtime.getTime();
    } else {
      // Handle the case when either a.birthtime or b.birthtime is null
      // You can decide how you want to handle this case
      return 0;
    }
  });
  return pla;
}
