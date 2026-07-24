// Copies user-authored screenshots from website/images/ into public/images/
// so Next.js can serve them as static assets. Runs automatically before
// `npm run dev` and `npm run build` via the predev/prebuild package.json hooks.
import { existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const sourceDir = join(root, "images");
const targetDir = join(root, "public", "images");

const allowedExt = new Set([".png", ".jpg", ".jpeg", ".webp"]);

if (!existsSync(sourceDir)) {
  process.exit(0);
}

mkdirSync(targetDir, { recursive: true });

const files = readdirSync(sourceDir).filter((file) =>
  allowedExt.has(extname(file).toLowerCase())
);

for (const file of files) {
  copyFileSync(join(sourceDir, file), join(targetDir, file));
}

if (files.length > 0) {
  console.log(`[sync-images] copied ${files.length} screenshot(s) to public/images/`);
}
