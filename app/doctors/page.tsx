import type { Metadata } from "next";
import {
  CalendarClock,
  Pill,
  Activity,
  ClipboardList,
  FileCheck2,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { doctorFeature } from "@/lib/content/features";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "For Doctors",
  description:
    "MaaSphere's Doctor Dashboard: a read-only, EMR-style view of your patients' pregnancy timeline, medicines, symptoms, and kick counter history.",
  path: "/doctors",
});

const chartSections = [
  { icon: CalendarClock, title: "Pregnancy Timeline", body: "Week-by-week context for every patient, at a glance." },
  { icon: Pill, title: "Medicine Adherence", body: "See what's been taken, skipped, or missed — and issue your own instructions." },
  { icon: Activity, title: "Kick Counter History", body: "Session-by-session movement tracking your patient has logged." },
  { icon: ClipboardList, title: "Symptoms & Weight", body: "A running record of what your patient has reported, in one place." },
  { icon: FileCheck2, title: "Your Notes & Instructions", body: "Clinical notes and instructions you've issued, all attached to the patient." },
  { icon: ShieldCheck, title: "Audit Timeline", body: "A read-only log of your own actions on each patient's record." },
];

export default function DoctorsPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-warmth-gold">
              For Doctors
            </span>
            <h1 className="mt-5 text-balance text-[38px] font-semibold leading-[1.15] tracking-[-0.02em] text-warmth-cream sm:text-[48px]">
              A read-only, EMR-style view built for a clinical workflow
            </h1>
            <p className="mt-5 max-w-[520px] text-balance text-[17px] leading-relaxed text-warmth-cream/75">
              Connect with your patients on MaaSphere and see the context that usually gets lost
              between visits — without adding another system to maintain.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-[240px] sm:w-[280px]">
            <ScreenshotFrame
              filename={doctorFeature.screenshot}
              alt={doctorFeature.screenshotAlt}
              accent="slate"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Patient record"
            title="Everything you need, nothing you don't"
            description="Opening a patient shows a sectioned, read-only chart — not a firehose of raw logs."
            className="mb-14"
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chartSections.map((section) => (
              <Reveal key={section.title}>
                <Card className="h-full">
                  <section.icon className="text-slate-deep" size={24} aria-hidden="true" />
                  <h3 className="mt-4 text-[16px] font-semibold text-ink">{section.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                    {section.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-surface-muted py-24 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative flex justify-center">
            <div className="w-[240px] sm:w-[280px]">
              <ScreenshotFrame
                filename="doctor-my-patients.png"
                alt="MaaSphere My Patients screen showing a searchable patient list"
                accent="slate"
              />
            </div>
            {doctorFeature.secondaryScreenshot ? (
              <div className="absolute -bottom-8 -right-2 hidden w-[180px] rotate-3 drop-shadow-xl sm:block">
                <ScreenshotFrame
                  filename={doctorFeature.secondaryScreenshot}
                  alt={doctorFeature.secondaryScreenshotAlt ?? doctorFeature.screenshotAlt}
                  accent="slate"
                />
              </div>
            ) : null}
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-divider bg-surface px-3.5 py-1.5 text-[13px] font-semibold text-text-secondary">
              <BadgeCheck size={15} className="text-slate-deep" aria-hidden="true" />
              Verification &amp; permissions
            </span>
            <h2 className="mt-5 text-balance text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[34px]">
              Vetted access, honestly scoped
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-text-secondary">
              Doctors go through a verification step before they can connect with patients.
              Patients accept each connection individually, and can revoke it at any time.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              Today, an accepted connection shares a patient&apos;s full record so you have real
              clinical context — granular, category-by-category sharing controls for patients are
              on our roadmap, not live yet. We&apos;d rather tell you that plainly than let you assume
              otherwise.
            </p>
          </Reveal>
        </Container>
      </section>

      <ContactCta
        title="Interested in connecting with your patients on MaaSphere?"
        body="Reach out and we'll help you get verified and set up."
        ctaLabel="Contact us"
      />
    </div>
  );
}
