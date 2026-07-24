import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-divider bg-surface px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
