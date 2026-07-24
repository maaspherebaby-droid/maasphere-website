import type { Metadata } from "next";
import Link from "next/link";
import { Mail, HelpCircle, UserX, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with MaaSphere support, find answers, or manage your account.",
  path: "/contact",
});

const links = [
  {
    icon: HelpCircle,
    title: "Frequently asked questions",
    body: "Common questions about Dhruv AI, data sharing, and safety, answered in one place.",
    href: "/#faq",
    cta: "View FAQ",
  },
  {
    icon: UserX,
    title: "Delete your account",
    body: "Step-by-step instructions for deleting your MaaSphere account and data.",
    href: "/legal/delete-account",
    cta: "Delete account instructions",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="py-24 sm:py-32">
        <Container className="max-w-[680px] text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="We're here to help"
              description="Whether it's a question, a bug report, or something about your account — our support team reads every message sent to the address below."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mt-8 inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] bg-ink px-7 py-3.5 text-[16px] font-semibold text-warmth-cream transition-all hover:bg-ink-elevated active:scale-[0.98]"
            >
              <Mail size={18} aria-hidden="true" />
              {siteConfig.supportEmail}
            </a>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-24">
        <Container>
          <RevealGroup className="mx-auto grid max-w-[860px] gap-6 sm:grid-cols-2">
            {links.map((link) => (
              <Reveal key={link.title}>
                <Card className="h-full">
                  <link.icon className="text-warmth-gold-deep" size={24} aria-hidden="true" />
                  <h2 className="mt-4 text-[18px] font-semibold text-ink">{link.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                    {link.body}
                  </p>
                  <Link
                    href={link.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:underline"
                  >
                    {link.cta}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </div>
  );
}
