import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccentIcon } from "@/components/ui/AccentIcon";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { features } from "@/lib/content/features";

export function FeatureGrid() {
  return (
    <section className="bg-surface-muted py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Everyday tools"
          title="Everything you need to track the journey"
          description="Four core tools mothers use every day — each color-coded, just like in the app."
          className="mb-14"
        />
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Reveal key={feature.slug}>
              <Link
                href={`/features#${feature.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-lg)] bg-surface p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
              >
                <AccentIcon accent={feature.accent} icon={feature.icon} />
                <h3 className="mt-4 text-[17px] font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-secondary">
                  {feature.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
