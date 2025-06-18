"use client";
import React from "react";
import {
  NoButton,
  NextButton,
  PrevButton,
} from "@/components/icons/PaginateBtn";
interface PaginateProps {
  fn: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  pages: number;
  size?: number;
}

const PagePagination = React.memo(function PagePagination({
  fn,
  index,
  pages,
  size,
}: PaginateProps) {
  const _size = size ?? 45;
  return (
    <div className="page-pagination">
      {index < pages - 1 ? (
        <NextButton fn={fn} index={index} pages={pages} size={_size} />
      ) : (
        <NoButton text="Page" />
      )}

      {index > 0 ? (
        <PrevButton fn={fn} index={index} pages={pages} size={_size} />
      ) : (
        <NoButton text="Page" />
      )}
    </div>
  );
});
export default PagePagination;
