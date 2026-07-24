import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalBody } from "@/components/legal/LegalBody";
import { termsOfServiceBody } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that govern your access to and use of MaaSphere.",
  path: "/legal/terms",
});

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      intro="This is the exact Terms of Service shown inside the MaaSphere app (Settings > Terms of Service), kept word-for-word in sync between the app and this page."
    >
      <LegalBody body={termsOfServiceBody} />
    </LegalPageShell>
  );
}
