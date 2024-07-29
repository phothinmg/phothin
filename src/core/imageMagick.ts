import { ImageMagick, initialize, MagickFormat } from "../dependencies/deps.ts";
import type { IMagickImage } from "../dependencies/deps.ts";

await initialize(); // make sure to initialize first!

const data: Uint8Array = await Deno.readFile("./images/nbt.png");

await ImageMagick.read(data, async (img: IMagickImage) => {
  img.resize(200, 100);

  await img.write(MagickFormat.Jpeg, (data: Uint8Array) =>
    Deno.writeFile("image-blur.jpg", data)
  );
});
