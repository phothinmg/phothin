import type { Post } from "@/lib";
import type { FC } from "react";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib";
import {
  NoButton,
  NextPostButton,
  PrevPostButton,
} from "@/components/icons/PaginateBtn";
interface PostsProps {
  prev: Post["prev"];
  next: Post["next"];
  body?: Post["parsedHtml"];
  title?: Post["metaData"]["title"];
  date?: Post["metaData"]["date"];
}

const PostLayout: FC<PostsProps> = ({ prev, next, body, title, date }) => {
  const html = { __html: body ?? notFound() };
  const _title = title ?? "";
  const _date = date ? formatDate(date) : "";
  return (
    <section>
      <div className="posthead">
        <h1>{_title}</h1>
        <p>{_date}</p>
      </div>
      <div className="markdown" dangerouslySetInnerHTML={html} />
      <div className="pagination">
        {next.bool ? (
          <NextPostButton title={next.title} href={next.slug} />
        ) : (
          <NoButton text="Post" />
        )}
        {prev.bool ? (
          <PrevPostButton title={prev.title} href={prev.slug} />
        ) : (
          <NoButton text="Post" />
        )}
      </div>
    </section>
  );
};

export default PostLayout;
