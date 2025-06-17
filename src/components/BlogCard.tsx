import type { Post } from "@/textile";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  slug: Post["slug"];
  title?: Post["parsedData"]["title"];
  date?: Post["parsedData"]["date"];
  description?: Post["parsedData"]["description"];
  coverImg?: Post["parsedData"]["coverImg"];
}

const BlogCard: React.FC<PostCardProps> = ({
  slug,
  title,
  date,
  description,
  coverImg,
}) => {
  const _title = title ?? "";
  const _date = date ?? "";
  const des = description ?? "";
  const img = coverImg ?? "";
  return (
    <div className="blog-card">
      <img src={img} alt={_title} />
      <div className="content">
        <h2>
          <Link href={`/posts/${slug}`}>{_title}</Link>
        </h2>
        <p>{_date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
