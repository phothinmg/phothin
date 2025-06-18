import type { MarkedExtension } from "marked";
import { codeToHtml, type BundledLanguage, bundledLanguages } from "./bundle";

async function hightlighter(code: string, lang: BundledLanguage) {
  return await codeToHtml(code, {
    lang: lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });
}
/**
 * Determines the language from a given string.
 * @param {string} str - The input string to evaluate.
 * @returns {BundledLanguage | ""} - Returns a BundledLanguage if found, otherwise an empty string.
 */
const getLang = (str: string): BundledLanguage | "" => {
  const cleanedStr: string = str.replace(/\s+/g, " ");
  const firstWord: string = cleanedStr.split(" ")[0];
  return Object.keys(bundledLanguages).includes(firstWord)
    ? (firstWord as BundledLanguage)
    : "";
};
export default function shikimarked(): MarkedExtension {
  const cache = new Map<string, string>();
  return {
    async: true,
    async walkTokens(token) {
      if (token.type === "code") {
        const str = token.lang;
        const code = token.text;
        const lang = getLang(str);
        let htm = cache.get(str);
        if (!htm) {
          if (lang !== "") {
            htm = await hightlighter(code, lang);
          } else {
            htm = str;
          }
          cache.set(str, htm as string);
        }
        Object.assign(token, {
          type: "html",
          block: true,
          text: `${htm}\n`,
        });
      }
    },
  };
}
