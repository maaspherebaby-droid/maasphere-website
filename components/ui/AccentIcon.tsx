import { accentClasses } from "@/lib/accent";
import { featureIcons } from "@/lib/icons";
import type { AccentColor, Feature } from "@/lib/content/features";
import { cn } from "@/lib/cn";

export function AccentIcon({
  accent,
  icon,
  size = "md",
}: {
  accent: AccentColor;
  icon: Feature["icon"];
  size?: "sm" | "md" | "lg";
}) {
  const Icon = featureIcons[icon];
  const classes = accentClasses[accent];
  const sizes = {
    sm: { wrap: "h-9 w-9 rounded-[var(--radius-sm)]", icon: 16 },
    md: { wrap: "h-12 w-12 rounded-[var(--radius-md)]", icon: 20 },
    lg: { wrap: "h-14 w-14 rounded-[var(--radius-lg)]", icon: 24 },
  }[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        classes.bg,
        sizes.wrap
      )}
    >
      <Icon className={classes.deepText} size={sizes.icon} strokeWidth={2} aria-hidden="true" />
    </span>
  );
}
