import { extract } from "front-matter/yaml";
import { extract_document } from "./src/utils.ts";

const tx = extract_document("./posts/jsrio.md");

console.log(tx.attrs);
