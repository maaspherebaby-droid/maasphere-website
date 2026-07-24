import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-warmth-cream hover:bg-ink-elevated shadow-[var(--shadow-raised)]",
  secondary:
    "bg-surface text-text-primary border border-divider hover:border-warmth-gold-deep hover:text-ink",
  ghost: "text-text-primary hover:text-ink underline-offset-4 hover:underline",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-[15px] font-semibold transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: CommonProps & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
)) {
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    const linkRest = rest as Omit<React.ComponentProps<typeof Link>, "href" | "className">;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
