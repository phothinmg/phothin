"use client";
import { useEffect, useState } from "react";
import BlogCard from "@/components/posts/BlogCard";
import PagePagination from "@/components/posts/PagePaginate";
import type { PaginatePosts } from "@/lib/posts";

export default function AllPosts() {
  const [pages, setPages] = useState<PaginatePosts | null>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/api/posts")
        .then((res) => res.json())
        .then((data) => {
          setPages(data);
        });
    }
  }, []);
  const page = pages?.[idx] ?? null;
  const totalPage = pages?.length ?? 0;
  return (
    <section>
      <h3 style={{ marginBottom: "25px", textAlign: "center" }}>Posts</h3>
      <div className="all-posts">
        {page ? (
          page.map((p) => (
            <BlogCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              date={p.date}
              description={p.description}
              coverImg={p.coverImg}
            />
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </div>

      {page ? (
        <PagePagination fn={setIdx} index={idx} pages={totalPage} />
      ) : (
        <div />
      )}
    </section>
  );
}
