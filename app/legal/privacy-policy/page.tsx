import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalBody } from "@/components/legal/LegalBody";
import { privacyPolicyBody } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How MaaSphere collects, uses, stores, and protects your personal and pregnancy information.",
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      intro="This is the exact Privacy Policy shown inside the MaaSphere app (Settings > Privacy Policy), kept word-for-word in sync between the app and this page."
    >
      <LegalBody body={privacyPolicyBody} />
    </LegalPageShell>
  );
}
