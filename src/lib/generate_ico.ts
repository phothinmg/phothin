import { icoGenerator } from "hono-image";
import { logo_image } from "./config.ts";

await icoGenerator(logo_image);
