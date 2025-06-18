import type { Post } from "@/lib";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  slug: Post["fileData"]["slug"];
  title?: Post["metaData"]["title"];
  date?: Post["metaData"]["date"];
  description?: Post["metaData"]["description"];
  coverImg?: Post["metaData"]["coverImg"];
  tags?: Post["metaData"]["tags"];
}

const BlogCard: React.FC<Partial<PostCardProps>> = ({
  slug,
  title,
  date,
  coverImg,
}) => {
  const _title = title ?? "";
  const _date = date ?? "";
  const img = coverImg ?? "";
  return (
    <div className="blog-card">
      <img src={img} alt={_title} />
      <div className="content">
        <h2>
          <Link href={`/blog/${slug}`}>{_title}</Link>
        </h2>
        <p>{_date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
