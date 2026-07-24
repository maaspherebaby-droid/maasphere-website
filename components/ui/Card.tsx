import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-white/15 bg-white/10 p-6 shadow-[var(--shadow-glass)] backdrop-blur-xl sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
