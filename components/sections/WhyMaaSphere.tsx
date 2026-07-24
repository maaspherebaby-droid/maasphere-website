import { ShieldCheck, HeartHandshake, Sparkles, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

const pillars = [
  {
    icon: Sparkles,
    title: "Calm by design",
    body: "Warm, editorial screens instead of a clinical dashboard — reassuring, not alarming, at every step.",
  },
  {
    icon: HeartHandshake,
    title: "Connected care",
    body: "Mother, partner, and doctor each get a role-appropriate view of the same journey, with your permission.",
  },
  {
    icon: ShieldCheck,
    title: "Honest about limits",
    body: "Every AI answer and every tool is clear about what it can and can't do — never a substitute for your doctor.",
  },
  {
    icon: Lock,
    title: "Privacy by default",
    body: "Your data is never sold. AI processing runs through MaaSphere's own backend, never straight from your device.",
  },
];

export function WhyMaaSphere() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why MaaSphere"
          title="Built around trust, not just tracking"
          description="Pregnancy apps are easy to make noisy. MaaSphere is built to feel like one calm, dependable companion — for the parent, the partner, and the doctor."
          className="mb-14"
        />
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <div className="h-full rounded-[var(--radius-lg)] bg-surface p-6 shadow-[var(--shadow-soft)]">
                <pillar.icon className="text-warmth-gold-deep" size={26} aria-hidden="true" />
                <h3 className="mt-4 text-[17px] font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
