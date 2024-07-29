import type { FC } from "hono/jsx";
import type { Documents } from "../utils.ts";

export const Post: FC<{ txt: Documents }> = ({ txt }) => {
  const ht = txt.attrs.tags as string[];
  const tags = ht.map((i) => `<small> ${i}</small>`).join('\n');
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
      <section dangerouslySetInnerHTML={{ __html: inner._html }} />
    </main>
  );
};
