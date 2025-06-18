import path from "node:path";
import { readContentFromFile } from "./nodejs";
import markedParser from "@/lib/marked";

const homePath = path.resolve(process.cwd(), "src/contents/index.md");
const homeFileData = await readContentFromFile(homePath);
const home_page = await markedParser(homeFileData.content);
const homePage = {
  slug: homeFileData.slug,
  title: home_page.metaData.title,
  parsedHtml: home_page.parsedHtml,
};

export default homePage;
