"use client";
import React from "react";

interface PaginateButtonProps {
  fn: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  pages: number;
  size?: number;
}

const NoButton = React.memo(function NoPage({
  text,
}: {
  text: "Page" | "Post";
}) {
  return (
    <button type="button" className="nopage-icon">
      <span>No</span>
      <span>{text}</span>
    </button>
  );
});

const NextButton = React.memo(function NextButton({
  fn,
  index,
  pages,
  size = 45,
}: PaginateButtonProps) {
  return (
    <button
      type="button"
      onClick={() => fn((index + pages - 1) % pages)}
      className="arrow-icon"
    >
      <svg
        fill="currentcolor"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />

        <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
      </svg>
    </button>
  );
});

const PrevButton = React.memo(function PrevButton({
  fn,
  index,
  pages,
  size = 45,
}: PaginateButtonProps) {
  return (
    <button
      type="button"
      onClick={() => fn((index + pages + 1) % pages)}
      className="arrow-icon"
    >
      <svg
        fill="currentcolor"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="24"
          height="24"
          transform="rotate(-90 12 12)"
          opacity="0"
        />

        <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
      </svg>
    </button>
  );
});

const NextPostButton = React.memo(function NextPostButton({
  title,
  href,
  size = 45,
}: {
  title: string;
  href: string;
  size?: number;
}) {
  return (
    <a role="button" id="nextPostButton" className="post-icon" href={href}>
      <svg
        fill="currentcolor"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />

        <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
      </svg>
      <span>{title}</span>
      <span className="np">Prev</span>
    </a>
  );
});

const PrevPostButton = React.memo(function PrevPostButton({
  title,
  href,
  size = 45,
}: {
  title: string;
  href: string;
  size?: number;
}) {
  return (
    <a role="button" id="nextPostButton" className="post-icon" href={href}>
      <span className="np">Next</span>
      <span>{title}</span>
      <svg
        fill="currentcolor"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />

        <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
      </svg>
    </a>
  );
});

export { NoButton, NextButton, PrevButton, NextPostButton, PrevPostButton };
