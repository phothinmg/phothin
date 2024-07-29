import { extractYaml, mark } from "../dependencies/deps.ts";
import { readFile } from "./utli.ts";
import type { PostData } from "../types/index.d.ts";

/**
 * Converts a markdown file to a PostData object.
 * @param filePath - The path to the markdown file.
 * @returns A PostData object containing the title, date, author, tags, intro, and html of the post.
 */
export default function markdown(filePath: string): PostData {
  const fileContent: string = readFile(filePath);
  const { attrs, body }: { attrs: Record<string, string>; body: string } =
    extractYaml(fileContent);
  const tagsArray: string[] =
    typeof attrs.tags === "string"
      ? attrs.tags.split(",").map((tag) => tag.trim())
      : [];
  const htm: string = mark.default.renderHtml({ text: body });
  return {
    title: attrs.title || "",
    date: new Date(attrs.date || new Date()).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      weekday: "short",
    }),
    author: attrs.author || "",
    tags: tagsArray,
    intro: attrs.intro || "",
    html: htm,
  };
}
