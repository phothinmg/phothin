import { readFile } from "./utli.ts";
import { extractYaml, join } from "../dependencies/deps.ts";
import type { HomePageType } from "../types/index.d.ts";

/**
 * Retrieves the data from the "index.md" file and extracts the attributes and body using YAML parsing.
 * Returns an object containing the name, site, logo, bio, and markdown content of the file.
 *
 * @return {HomePageType} An object containing the extracted data from the file.
 */
export function hpdata(): HomePageType {
  const cwd = Deno.cwd();
  const homePageFile = join(cwd, "index.md");
  const fileContent: string = readFile(homePageFile);
  const { attrs, body }: { attrs: Record<string, string>; body: string } =
    extractYaml(fileContent);
  return {
    site: attrs.site,
    logo: attrs.logo,
    bio: attrs.bio,
    markdown: body,
  };
}
