import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FeatureSpotlight } from "@/components/sections/FeatureSpotlight";
import { ContactCta } from "@/components/sections/ContactCta";
import {
  features,
  dhruvAiFeature,
  doctorFeature,
  partnerFeature,
} from "@/lib/content/features";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description:
    "Explore every MaaSphere feature: pregnancy timeline, 3D baby viewer, kick counter, medicine tracker, Dhruv AI, and dashboards for doctors and partners.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient py-20 sm:py-28">
        <Container className="max-w-[760px] text-center">
          <Reveal>
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-warmth-gold">
              Features
            </span>
            <h1 className="mt-5 text-balance text-[38px] font-semibold leading-[1.15] tracking-[-0.02em] text-warmth-cream sm:text-[48px]">
              Every tool, built around one calm journey
            </h1>
            <p className="mx-auto mt-5 max-w-[560px] text-balance text-[17px] leading-relaxed text-warmth-cream/75">
              From your first scan to the fourth trimester — here&apos;s exactly what MaaSphere does,
              and just as importantly, what it doesn&apos;t.
            </p>
          </Reveal>
        </Container>
      </section>

      {features.map((feature, index) => (
        <FeatureSpotlight
          key={feature.slug}
          id={feature.slug}
          feature={feature}
          reverse={index % 2 === 1}
          tone={index % 2 === 1 ? "muted" : "light"}
        />
      ))}

      <FeatureSpotlight
        id={dhruvAiFeature.slug}
        feature={dhruvAiFeature}
        reverse={features.length % 2 === 1}
        tone={features.length % 2 === 1 ? "muted" : "light"}
        cta={{ label: "Learn more about Dhruv AI", href: "/dhruv-ai" }}
      />
      <FeatureSpotlight
        id={doctorFeature.slug}
        feature={doctorFeature}
        reverse={(features.length + 1) % 2 === 1}
        tone={(features.length + 1) % 2 === 1 ? "muted" : "light"}
        cta={{ label: "Explore the Doctor Dashboard", href: "/doctors" }}
      />
      <FeatureSpotlight
        id={partnerFeature.slug}
        feature={partnerFeature}
        reverse={(features.length + 2) % 2 === 1}
        tone={(features.length + 2) % 2 === 1 ? "muted" : "light"}
      />

      <ContactCta />
    </div>
  );
}
