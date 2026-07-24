import type { Metadata } from "next";
import { CheckCircle2, Mail } from "lucide-react";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { Card } from "@/components/ui/Card";
import { deleteAccountInstructions, SUPPORT_EMAIL } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Delete Your Account",
  description: "How to permanently delete your MaaSphere account and data, in-app or by email.",
  path: "/legal/delete-account",
});

export default function DeleteAccountPage() {
  const { inApp, byEmail, retention } = deleteAccountInstructions;

  return (
    <LegalPageShell
      title="Delete Your Account"
      intro="You're always in control of your MaaSphere data. Here's exactly how account deletion works."
    >
      <div className="flex flex-col gap-6">
        <Card>
          <h2 className="text-[20px] font-semibold text-ink">{inApp.title}</h2>
          <ol className="mt-5 flex flex-col gap-4">
            {inApp.steps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warmth-cream text-[13px] font-semibold text-warmth-gold-deep">
                  {index + 1}
                </span>
                <span className="text-[15px] leading-relaxed text-text-primary">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3 rounded-[var(--radius-md)] bg-surface-muted p-4">
            <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={18} aria-hidden="true" />
            <p className="text-[14px] leading-relaxed text-text-secondary">{inApp.effect}</p>
          </div>
        </Card>

        <Card className="bg-surface-muted">
          <h2 className="text-[20px] font-semibold text-ink">{byEmail.title}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-primary">{byEmail.body}</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20my%20MaaSphere%20account`}
            className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-ink px-5 py-3 text-[15px] font-semibold text-warmth-cream transition-colors hover:bg-ink-elevated"
          >
            <Mail size={17} aria-hidden="true" />
            Email {SUPPORT_EMAIL}
          </a>
        </Card>

        <p className="text-[14px] leading-relaxed text-text-secondary">{retention}</p>
      </div>
    </LegalPageShell>
  );
}
