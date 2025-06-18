import type { Post } from "@/lib/posts";
import type { FC } from "react";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/helpers";
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
        {prev.bool ? (
          <a href={prev.slug}>Previous Post : {prev.title}</a>
        ) : (
          <p>{prev.title}</p>
        )}
        {next.bool ? (
          <a href={next.slug}>Next Post : {next.title}</a>
        ) : (
          <p>{next.title}</p>
        )}
      </div>
    </section>
  );
};

export default PostLayout;
