import homePage from "@/lib/homePage";

export default function Home() {
  const html = { __html: homePage.parsedHtml };
  return <div className="markdown" dangerouslySetInnerHTML={html} />;
}
