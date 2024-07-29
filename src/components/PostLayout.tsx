import type { FC } from "hono/jsx";
import type { Documents } from "../lib/utils.ts";

export const PostLayout: FC<{ txt: Documents }> = ({ txt }) => {
  const ht = txt.attrs.tags as string[];
  const tags = ht.map((i) => `<small class="badge"> ${i}</small>`).join("  ");
  const inner_1 = {_tags: tags}
  const htm = txt.body;
  const inner = { _html: htm };

  return (
    <main>
      <div>
        <h2>{txt.attrs.title}</h2>
        <p>{txt.attrs.description}</p>
        <p>{txt.attrs.date}</p>
        <div dangerouslySetInnerHTML={{ __html: inner_1._tags }} />
      </div>
      <br />
      <hr />
      <br />
      <section dangerouslySetInnerHTML={{ __html: inner._html }} />
    </main>
  );
};
