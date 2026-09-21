import Link from "next/link";
import Image from "next/image";
import { primaryNav, siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-divider/70 bg-background/85 backdrop-blur-lg">
      <div className="relative mx-auto flex h-20 w-full max-w-[1180px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/brand/maasphere-logo.png"
            alt=""
            width={36}
            height={36}
            className="rounded-[var(--radius-sm)]"
            priority
          />
          <span className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-[var(--radius-sm)] px-4 py-2 text-[15px] font-medium text-text-primary transition-colors hover:bg-surface-muted hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.appStoreUrl} target="_blank" rel="noopener noreferrer">
            Download App
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
