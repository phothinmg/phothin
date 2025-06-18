import { marked } from "marked";
import shikimarked from "./hooks/shiki";
import matter from "./matter";
import responsiveTabelHook from "./hooks/table";

export type MetaData = {
  title: string;
  date?: string;
  description?: string;
  tags?: string[];
  coverImg?: string;
};

export default async function markedParser(rawMd: string) {
  const { mdContent, metaData } = matter<MetaData>(rawMd);
  marked.use(shikimarked());
  let parsedHtml = await marked.parse(mdContent, { async: true, gfm: true });
  parsedHtml = responsiveTabelHook(parsedHtml);
  return { parsedHtml, metaData };
}
