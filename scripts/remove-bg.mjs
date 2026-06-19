import { readFile, writeFile } from "node:fs/promises";
import { removeBackground } from "@imgly/background-removal-node";
import sharp from "sharp";

const input = process.argv[2];
const output = process.argv[3];
const alphaThreshold = Number(process.argv[4] ?? 0);

if (!input || !output) {
  console.error("Usage: node remove-bg.mjs <input> <output> [alphaThreshold]");
  process.exit(1);
}

const inputBuffer = await readFile(input);
const blob = new Blob([inputBuffer], { type: "image/png" });

console.log("Removing background...");
const resultBlob = await removeBackground(blob);
let cutoutBuffer = Buffer.from(await resultBlob.arrayBuffer());

if (alphaThreshold > 0) {
  console.log(`Hardening alpha (threshold ${alphaThreshold})...`);
  const { data, info } = await sharp(cutoutBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  for (let i = 0; i < data.length; i += channels) {
    const alpha = data[i + channels - 1];
    if (alpha < alphaThreshold) {
      data[i + channels - 1] = 0;
    }
  }

  cutoutBuffer = await sharp(data, {
    raw: { width: info.width, height: info.height, channels },
  })
    .png()
    .toBuffer();
}

console.log("Trimming transparent margins...");
const trimmed = await sharp(cutoutBuffer)
  .trim({ threshold: 10 })
  .png()
  .toBuffer();

await writeFile(output, trimmed);
console.log("Done:", output);
