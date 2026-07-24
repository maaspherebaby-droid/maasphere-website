import { cn } from "@/lib/cn";

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-full overflow-hidden rounded-[40px] border-[6px] border-ink bg-ink shadow-[var(--shadow-glass)]",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-2 z-10 h-[18px] w-[84px] -translate-x-1/2 rounded-full bg-ink"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-surface">
        {children}
      </div>
    </div>
  );
}
