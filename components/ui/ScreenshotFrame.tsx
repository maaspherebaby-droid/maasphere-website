import Image from "next/image";
import { ImageOff } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { screenshotExists, screenshotSrc } from "@/lib/screenshots";
import { accentClasses } from "@/lib/accent";
import type { AccentColor } from "@/lib/content/features";
import { cn } from "@/lib/cn";

/**
 * Renders a real app screenshot inside a phone frame once it exists in
 * public/images/ (synced from website/images/ by scripts/sync-images.mjs).
 * Until then, shows a soft placeholder so the page never breaks and never
 * shows fabricated UI.
 *
 * `unoptimized` is required here: these screenshots are replaced in place
 * (same filename, new bytes) whenever the app UI changes. Next's built-in
 * image optimizer caches on-disk keyed only by request URL, so a same-URL
 * replacement would keep serving the previous file for up to
 * `images.minimumCacheTTL` (4h by default) with no way to bust it that
 * doesn't involve a URL/query change. Serving these unoptimized routes them
 * through plain static file serving instead, which sets ETag/Last-Modified
 * from the file's actual on-disk state — so a replaced file is reflected on
 * the very next request, in dev and in production.
 */
export function ScreenshotFrame({
  filename,
  alt,
  accent = "gold",
  className,
  priority,
}: {
  filename: string;
  alt: string;
  accent?: AccentColor;
  className?: string;
  priority?: boolean;
}) {
  const exists = screenshotExists(filename);
  const classes = accentClasses[accent];

  return (
    <PhoneFrame className={className}>
      {exists ? (
        <Image
          src={screenshotSrc(filename)}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 360px, 80vw"
          className="object-cover object-top"
          priority={priority}
          unoptimized
        />
      ) : (
        <div
          className={cn(
            "flex h-full w-full flex-col items-center justify-center gap-3 px-8 text-center",
            classes.bg
          )}
        >
          <ImageOff className={classes.deepText} size={28} aria-hidden="true" />
          <p className={cn("text-[13px] font-medium leading-snug", classes.deepText)}>
            Screenshot coming soon
          </p>
        </div>
      )}
    </PhoneFrame>
  );
}
