import type { Metadata } from "next";
import AllPosts from "./Posts";
export const metadata: Metadata = {
  title: "Blog",
};

export default function Posts() {
  return <AllPosts />;
}
