/*
 In Next 15, Dynamic APIs have been made asynchronous. 
 - The `params` and `searchParams` props that get provided to posts, layouts, metadata APIs, and route handlers.
 - `cookies()`, `draftMode()`, and `headers()` from `next/headers`
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib";
import PostLayout from "@/components/posts/PostLayout";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.fileData.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const slug = (await params).slug;
  const post = posts.find((p) => p.fileData.slug === slug);
  if (!post) return;

  return {
    title: post.metaData.title,
    description: post.metaData.description,
  };
}
export default async function Post({
  params,
}: {
  // Params must be promise
  params: Promise<{ slug: string }>;
}) {
  // asynchronous access of `params.slug`.
  const slug = (await params).slug;
  const post = posts.find((post) => post.fileData.slug === slug);

  if (!post) {
    notFound();
  }
  return (
    <PostLayout
      prev={post.prev}
      next={post.next}
      body={post.parsedHtml}
      date={post.metaData.date}
      title={post.metaData.title}
    />
  );
}
