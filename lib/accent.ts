import type { AccentColor } from "@/lib/content/features";

// Tailwind v4 scans source text for literal class names, so every class used
// below must appear as a literal string (not string-templated) somewhere in
// the project. Keeping the full literal list here in one place satisfies
// that regardless of which accent a given feature picks at runtime.
type AccentClasses = {
  bg: string;
  deepBg: string;
  deepText: string;
  border: string;
};

export const accentClasses: Record<AccentColor, AccentClasses> = {
  blush: { bg: "bg-blush", deepBg: "bg-blush-deep", deepText: "text-blush-deep", border: "border-blush-deep" },
  sage: { bg: "bg-sage", deepBg: "bg-sage-deep", deepText: "text-sage-deep", border: "border-sage-deep" },
  lavender: { bg: "bg-lavender", deepBg: "bg-lavender-deep", deepText: "text-lavender-deep", border: "border-lavender-deep" },
  "sky-blue": { bg: "bg-sky-blue", deepBg: "bg-sky-blue-deep", deepText: "text-sky-blue-deep", border: "border-sky-blue-deep" },
  peach: { bg: "bg-peach", deepBg: "bg-peach-deep", deepText: "text-peach-deep", border: "border-peach-deep" },
  butter: { bg: "bg-butter", deepBg: "bg-butter-deep", deepText: "text-butter-deep", border: "border-butter-deep" },
  mint: { bg: "bg-mint", deepBg: "bg-mint-deep", deepText: "text-mint-deep", border: "border-mint-deep" },
  lilac: { bg: "bg-lilac", deepBg: "bg-lilac-deep", deepText: "text-lilac-deep", border: "border-lilac-deep" },
  terracotta: { bg: "bg-terracotta", deepBg: "bg-terracotta-deep", deepText: "text-terracotta-deep", border: "border-terracotta-deep" },
  sand: { bg: "bg-sand", deepBg: "bg-sand-deep", deepText: "text-sand-deep", border: "border-sand-deep" },
  slate: { bg: "bg-slate", deepBg: "bg-slate-deep", deepText: "text-slate-deep", border: "border-slate-deep" },
  coral: { bg: "bg-coral", deepBg: "bg-coral-deep", deepText: "text-coral-deep", border: "border-coral-deep" },
  gold: { bg: "bg-warmth-cream", deepBg: "bg-warmth-gold-deep", deepText: "text-warmth-gold-deep", border: "border-warmth-gold-deep" },
};
