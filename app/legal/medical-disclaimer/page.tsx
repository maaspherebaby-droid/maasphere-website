import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalBody } from "@/components/legal/LegalBody";
import { medicalDisclaimerBody } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Medical Disclaimer",
  description:
    "MaaSphere is an informational and organizational tool, not a substitute for professional medical advice.",
  path: "/legal/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <LegalPageShell
      title="Medical Disclaimer"
      intro="This is the exact Medical Disclaimer shown inside the MaaSphere app (Settings > Medical Disclaimer), kept word-for-word in sync between the app and this page."
    >
      <LegalBody body={medicalDisclaimerBody} />
    </LegalPageShell>
  );
}
