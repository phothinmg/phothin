import { marked } from "marked";
import markedAlert from "marked-alert";
import shikimarked from "./marked-extension/shiki";
import matter from "./matter";

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
  const parsedHtml = await marked.parse(mdContent, { async: true });
  return { parsedHtml, metaData };
}
