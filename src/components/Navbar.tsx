"use client";
import React from "react";
import Link from "next/link";
import sitedata from "@/sitedata";

type ActiveClass = "active" | "noop";
const NavBar = React.memo(function NavBar() {
  const [activeClass, setActiveClass] = React.useState<ActiveClass>("noop");
  return (
    <div className="navbar">
      <Link href={"/"}>{sitedata.siteName}</Link>
      <div className={activeClass}>
        <ul>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        id="menu-btn"
        onClick={() =>
          activeClass === "noop"
            ? setActiveClass("active")
            : setActiveClass("noop")
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
});

export default NavBar;
