import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { aboutDescription } from "@/lib/content/legal";
import { siteConfig } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: aboutDescription,
  path: "/about",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Honest about limitations",
    body: "MaaSphere never presents itself as a substitute for medical care. Every AI response, every tracking tool, carries a clear reminder of what it can and can't do.",
  },
  {
    icon: HeartHandshake,
    title: "Built for the whole journey",
    body: "Pregnancy isn't a solo experience. MaaSphere connects mothers, partners, and doctors around one shared, permission-controlled record.",
  },
  {
    icon: Sparkles,
    title: "Calm over alarming",
    body: "From kick-counter summaries to daily check-ins, the tone is reassuring by design — informative without ever being clinical or anxiety-inducing.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient py-24 sm:py-32">
        <Container className="max-w-[760px] text-center">
          <Reveal>
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-warmth-gold">
              About {siteConfig.name}
            </span>
            <h1 className="mt-5 text-balance text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-warmth-cream sm:text-[52px]">
              A calmer way to navigate pregnancy and early parenthood.
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-balance text-[18px] leading-relaxed text-warmth-cream/80">
              {aboutDescription}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our mission"
              title="Give every family one trusted place for the journey"
              description="Pregnancy involves dozens of small decisions and a constant stream of questions, often at odd hours. MaaSphere brings tracking, guidance, and a knowledgeable AI companion into one calm space — without ever pretending to replace your care team."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our vision"
              title="A connected circle of care, not another silo"
              description="Mothers, partners, and doctors currently work from disconnected notes, memory, and hallway conversations. MaaSphere gives each of them a role-appropriate view of the same journey, so support actually reaches the person who needs it."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-muted py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Principles that shape every screen"
            className="mb-14"
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <Reveal key={value.title}>
                <Card className="h-full">
                  <value.icon className="text-warmth-gold-deep" size={26} aria-hidden="true" />
                  <h3 className="mt-4 text-[18px] font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                    {value.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container className="max-w-[680px] text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Who's behind it"
              title="Built by Elegance Professional"
              description={`MaaSphere is developed and operated by ${siteConfig.legalEntity}. For legal, privacy, or partnership questions, reach us at ${siteConfig.supportEmail}.`}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
