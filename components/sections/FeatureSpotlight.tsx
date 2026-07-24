import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AccentIcon } from "@/components/ui/AccentIcon";
import { Badge } from "@/components/ui/Badge";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { Reveal } from "@/components/motion/Reveal";
import type { Feature } from "@/lib/content/features";
import { accentClasses } from "@/lib/accent";
import { cn } from "@/lib/cn";

export function FeatureSpotlight({
  feature,
  reverse = false,
  eyebrow,
  id,
  tone = "light",
  cta,
}: {
  feature: Feature;
  reverse?: boolean;
  eyebrow?: string;
  id?: string;
  tone?: "light" | "muted";
  cta?: { label: string; href: string };
}) {
  const classes = accentClasses[feature.accent];

  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", tone === "muted" && "bg-surface-muted")}
    >
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className={cn(reverse ? "lg:order-2" : "lg:order-1")}>
          <AccentIcon accent={feature.accent} icon={feature.icon} size="lg" />
          <Badge className="mt-6">{eyebrow ?? feature.title}</Badge>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[38px]">
            {feature.tagline}
          </h2>
          <ul className="mt-7 flex flex-col gap-4">
            {feature.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-[16px] leading-relaxed text-text-primary">
                <Check
                  className={cn("mt-0.5 shrink-0", classes.deepText)}
                  size={19}
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {cta ? (
            <a
              href={cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-ink px-6 py-3 text-[15px] font-semibold text-warmth-cream transition-colors hover:bg-ink-elevated"
            >
              {cta.label}
            </a>
          ) : null}
        </Reveal>

        <Reveal
          delay={0.1}
          className={cn("relative flex justify-center", reverse ? "lg:order-1" : "lg:order-2")}
        >
          <div className={cn("absolute inset-x-8 inset-y-10 -z-10 rounded-[var(--radius-2xl)] blur-2xl", classes.bg)} />
          <div className="w-[240px] sm:w-[280px]">
            <ScreenshotFrame
              filename={feature.screenshot}
              alt={feature.screenshotAlt}
              accent={feature.accent}
            />
          </div>
          {feature.secondaryScreenshot ? (
            <div className="absolute -bottom-8 -right-2 hidden w-[180px] rotate-3 drop-shadow-xl sm:block">
              <ScreenshotFrame
                filename={feature.secondaryScreenshot}
                alt={feature.secondaryScreenshotAlt ?? feature.screenshotAlt}
                accent={feature.accent}
              />
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
