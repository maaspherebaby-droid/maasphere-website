import { existsSync } from "node:fs";
import { join } from "node:path";

const PUBLIC_IMAGES_DIR = join(process.cwd(), "public", "images");

/** True once the real screenshot has been synced into public/images/. */
export function screenshotExists(filename: string): boolean {
  try {
    return existsSync(join(PUBLIC_IMAGES_DIR, filename));
  } catch {
    return false;
  }
}

export function screenshotSrc(filename: string): string {
  return `/images/${filename}`;
}
