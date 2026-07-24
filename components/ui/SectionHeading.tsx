import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-warmth-gold-deep">
          {eyebrow}
        </span>
      ) : null}
      <As
        className={cn(
          "text-balance font-semibold tracking-[-0.02em] text-ink",
          "text-[32px] leading-[1.15] sm:text-[40px] sm:leading-[1.12]"
        )}
      >
        {title}
      </As>
      {description ? (
        <p
          className={cn(
            "text-balance text-[17px] leading-[1.6] text-text-secondary",
            align === "center" ? "max-w-[620px]" : "max-w-[560px]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
