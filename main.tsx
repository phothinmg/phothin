import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { Layout } from "./src/components/Layout.tsx";
import { Post } from "./src/components/Post.tsx";
import { mark } from "./src/utils.ts";
const txt = mark("./posts/jsrio.md");
const app = new Hono();

const Home: FC = () => {
  return (
    <Layout>
      <Post txt={txt} ></Post>
    </Layout>
  );
};

app.get("/", (c) => {
  return c.html(<Home />);
});

Deno.serve(app.fetch);
