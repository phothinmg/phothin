import { extract } from "front-matter/yaml";
import module from "mm-mark";
export interface Attrs {
  type: "post" | "page";
  title: string;
  date?: Date | string;
  tags?: string[] | [];
  description?: string;
}

export interface Documents {
  attrs: Attrs;
  body: string;
}

const { renderHtml } = module;
export function read_file(fpath: string): string {
  const tx = Deno.readFileSync(fpath);
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(tx);
}

export function mark(fpath: string): Documents {
  const txt = read_file(fpath);
  const extracted = extract(txt);
  const attr = extracted.attrs as Attrs;
  const body: string = renderHtml({ text: extracted.body });
  const attrs: Attrs = {
    type: attr.type,
    title: attr.title,
    date: (attr.date ?? new Date()).toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "short",
    }),
    tags: attr.tags ?? [],
    description: attr.description ?? "",
  };
  return {
    body,
    attrs,
  };
}
