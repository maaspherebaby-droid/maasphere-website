import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalBody } from "@/components/legal/LegalBody";
import { aiDisclaimerBody } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI Disclaimer",
  description:
    "What Dhruv AI can and cannot do, and how MaaSphere's AI-powered pregnancy companion should be used.",
  path: "/legal/ai-disclaimer",
});

export default function AiDisclaimerPage() {
  return (
    <LegalPageShell
      title="AI Disclaimer"
      intro="This is the exact AI Disclaimer shown inside the MaaSphere app (Settings > AI Disclaimer), kept word-for-word in sync between the app and this page."
    >
      <LegalBody body={aiDisclaimerBody} />
    </LegalPageShell>
  );
}
