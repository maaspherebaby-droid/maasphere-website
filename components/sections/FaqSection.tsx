import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/lib/content/features";
import { faqJsonLd } from "@/lib/seo";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <Container className="max-w-[760px]">
        <SectionHeading eyebrow="FAQ" title="Common questions" className="mb-12" />
        <div className="flex flex-col divide-y divide-divider rounded-[var(--radius-lg)] border border-divider bg-surface">
          {faqs.map((faq) => (
            <Reveal key={faq.question} as="div">
              <details className="group px-6 py-5 open:pb-6 sm:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-ink">
                  {faq.question}
                  <Plus
                    size={18}
                    className="shrink-0 text-warmth-gold-deep transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
