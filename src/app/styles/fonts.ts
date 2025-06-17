import {
  Poppins,
  Roboto_Mono,
  PT_Serif,
  Josefin_Slab,
  Padauk,
} from "next/font/google";

const padauk = Padauk({
  subsets: ["myanmar"],
  weight: ["400", "700"],
  variable: "--font-mm",
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
const fontVariable = [poppins, pt, mono, josefin, padauk]
  .map((font) => font.variable)
  .join(" ");

export default fontVariable;
