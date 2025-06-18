import { homePage } from "@/lib";

export default function Home() {
  const html = { __html: homePage.parsedHtml };
  return <div className="markdown" dangerouslySetInnerHTML={html} />;
}
