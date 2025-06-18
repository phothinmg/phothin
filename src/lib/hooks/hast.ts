import type { ElementContent,Element } from "hast";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import { toHtml } from "hast-util-to-html";
import { visit } from "unist-util-visit";



export function tableVisitor(str: string) {
  const tree = fromHtmlIsomorphic(str);

  const findVal = (ch: ElementContent): string => {
    if (ch.type === "element" && ch.tagName === "th") {
      const val = ch.children?.find((i) => i.type === "text");
      return val ? val.value : "";
    }
    return "";
  };

  visit(tree, (node) => {
    if (node.type === "element" && node.tagName === "table") {
      const headers = node.children
        .filter((ch) => ch.type === "element" && ch.tagName === "thead")
        .flatMap((thead) => (thead as Element).children)
        .filter((row) => row.type === "element" && row.tagName === "tr")
        .flatMap((tr) => (tr as Element).children)
        .map(findVal);

      node.children
        .filter(
          (child) => child.type === "element" && child.tagName === "tbody"
        )
        .forEach((tbody) => {
          (tbody as Element).children
            .filter((tr) => tr.type === "element" && tr.tagName === "tr")
            .forEach((tr) => {
              (tr as Element).children.forEach((chld, i) => {
                if (chld.type === "element") {
                  chld.properties["data-label"] = headers[i];
                }
              });
            });
        });
    }
  });

  return toHtml(tree);
}
