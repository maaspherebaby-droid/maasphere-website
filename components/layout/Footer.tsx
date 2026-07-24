import Link from "next/link";
import Image from "next/image";
import { footerNav, siteConfig } from "@/lib/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-divider bg-surface">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
            <Image
              src="/brand/maasphere-logo.png"
              alt=""
              width={32}
              height={32}
              className="rounded-[var(--radius-sm)]"
            />
            <span className="text-[18px] font-semibold text-ink">{siteConfig.name}</span>
          </Link>
          <p className="max-w-[280px] text-[14px] leading-relaxed text-text-secondary">
            {siteConfig.description}
          </p>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-text-primary hover:text-ink hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-divider">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-text-secondary sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalEntity}. All rights reserved.
          </p>
          <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-ink hover:underline">
            {siteConfig.supportEmail}
          </a>
        </Container>
      </div>
    </footer>
  );
}
