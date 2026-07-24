import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyMaaSphere } from "@/components/sections/WhyMaaSphere";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FeatureSpotlight } from "@/components/sections/FeatureSpotlight";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactCta } from "@/components/sections/ContactCta";
import { dhruvAiFeature, doctorFeature, partnerFeature } from "@/lib/content/features";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "MaaSphere — Your Pregnancy Journey. One Trusted Companion.",
  description:
    "MaaSphere is an AI-powered maternal and early-childhood wellbeing platform — pregnancy timeline, 3D baby viewer, kick counter, medicine tracker, and Dhruv AI, all in one calm, trusted space.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyMaaSphere />
      <FeatureGrid />
      <FeatureSpotlight
        feature={dhruvAiFeature}
        eyebrow="Dhruv AI"
        cta={{ label: "Learn how Dhruv AI works", href: "/dhruv-ai" }}
      />
      <FeatureSpotlight
        feature={doctorFeature}
        reverse
        tone="muted"
        eyebrow="For doctors"
        cta={{ label: "Explore the Doctor Dashboard", href: "/doctors" }}
      />
      <FeatureSpotlight
        feature={partnerFeature}
        eyebrow="For partners"
        cta={{ label: "See the Partner Dashboard", href: "/features#partner-dashboard" }}
      />
      <FaqSection />
      <ContactCta />
    </>
  );
}
