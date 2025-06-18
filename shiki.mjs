import { codegen } from "shiki-codegen";
import fs from "node:fs/promises";

const file = "src/markdown/marked-extension/shiki/bundle.ts";
const { code } = await codegen({
  langs: [
    "js",
    "ts",
    "jsx",
    "tsx",
    "json",
    "bash",
    "html",
    "css",
    "c",
    "c++",
    "yaml",
  ],
  themes: ["github-dark", "github-light"],
  engine: "javascript",
  typescript: true,
});

await fs.writeFile(file, code);
