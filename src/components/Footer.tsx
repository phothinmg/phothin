"use client";
import React from "react";
import sitedata from "@/sitedata";

const Footer = React.memo(function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul>
        <li>
          {year} {sitedata.siteName}
        </li>
      </ul>
    </footer>
  );
});

export default Footer;
