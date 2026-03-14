/**
 * Generates app/favicon.ico from scripts/favicon.svg
 * Run: node scripts/generate-favicon.mjs
 * Requires: npm install sharp to-ico (dev)
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "scripts", "favicon.svg");
const outPath = join(root, "app", "favicon.ico");

const svg = readFileSync(svgPath);
const sizes = [16, 32, 48];

const pngBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(svg).resize(size, size).png().toBuffer()
  )
);

const ico = await toIco(pngBuffers);
writeFileSync(outPath, ico);
console.log("Written:", outPath);
