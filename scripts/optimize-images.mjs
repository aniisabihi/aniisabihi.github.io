import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = "public";
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;

function walk(dir) {
  const entries = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      entries.push(...walk(entryPath));
      continue;
    }

    if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      entries.push(entryPath);
    }
  }

  return entries;
}

async function optimizeImage(filePath) {
  const before = fs.statSync(filePath).size;
  const ext = path.extname(filePath).toLowerCase();

  try {
    const image = sharp(filePath, { failOn: "none" }).rotate();
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      console.warn(`Skipping unsupported image: ${filePath}`);
      return { before, after: before, skipped: true };
    }

    let pipeline = image.resize({
      width: metadata.width > MAX_WIDTH ? MAX_WIDTH : undefined,
      withoutEnlargement: true,
    });

    if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    } else {
      pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
    }

    const buffer = await pipeline.toBuffer();
    const after = buffer.length;

    if (after < before) {
      fs.writeFileSync(filePath, buffer);
    }

    return { before, after: Math.min(before, after), skipped: false };
  } catch (error) {
    console.warn(
      `Skipping ${filePath}: ${error instanceof Error ? error.message : error}`,
    );
    return { before, after: before, skipped: true };
  }
}

const files = walk(ROOT);
let saved = 0;

for (const file of files) {
  const result = await optimizeImage(file);
  saved += result.before - result.after;
}

console.log(
  `Optimized ${files.length} images, saved ${(saved / 1024 / 1024).toFixed(2)} MB`,
);
