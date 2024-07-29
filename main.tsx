import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { Layout } from "./src/components/Layout.tsx";
import { PostLayout } from "./src/components/PostLayout.tsx";
import { mark } from "./src/lib/utils.ts";
const txt = mark("./posts/jsrio.md");
const app = new Hono();

const Home: FC = () => {
  return (
    <Layout postTitle={txt.attrs.title}>
      <PostLayout txt={txt}></PostLayout>
    </Layout>
  );
};

app.get("/", (c) => {
  return c.html(<Home />);
});

Deno.serve(app.fetch);
