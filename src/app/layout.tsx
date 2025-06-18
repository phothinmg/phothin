import type { Metadata } from "next";
import fontVariable from "@/app/styles/fonts";
import sitedata from "@/sitedata";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: sitedata.siteName,
    template: `${sitedata.siteName} | %s`,
  },
  description: sitedata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariable}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
