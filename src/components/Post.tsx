import type { FC } from "hono/jsx";
import type { Documents } from "../utils.ts";

export const Post: FC<{ txt: Documents }> = ({ txt }) => {
  return (
    <main>
      <div>
        <h2>{txt.attrs.title}</h2>
        <p>{txt.attrs.description}</p>
        <span>{txt.attrs.tags?.map((i) => `<small>${i}</small>`)}</span>
        <small>{txt.attrs.date}</small>
      </div>
      <section>{txt.body}</section>
    </main>
  );
};
