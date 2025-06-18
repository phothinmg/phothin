import { Poppins, Roboto_Mono, PT_Serif, Josefin_Slab } from "next/font/google";
import localFont from "next/font/local";

const burmese = localFont({
  src: "./fonts/burmese.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-burmese",
  display: "swap",
});
const mm28 = localFont({
  src: "./fonts/mm28.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-mm28",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const pt = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt",
});

const josefin = Josefin_Slab({
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
  variable: "--font-josefin",
  display: "swap",
});
// https://stackoverflow.com/questions/76832162/next-js-fonts-and-css-vars
const fontVariable = [poppins, pt, mono, josefin, burmese,mm28]
  .map((font) => font.variable)
  .join(" ");

export default fontVariable;
