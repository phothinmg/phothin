import { transformContent, type LTR } from "bagancss";
import { globSync } from "glob";
import { style_dir } from "./config.ts";
import { read_file } from "./utils.ts";

const cssFiles = globSync(`${style_dir}/**/*.css`);

const content: string[] = [];
cssFiles.forEach((i) => {
  const c = read_file(i);
  content.push(c);
});

const css: string = content.join("\n");
const transformed = transformContent({
  content: css,
  minify: true,
}) as LTR;

export const css_content = transformed.csscode;
