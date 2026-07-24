import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactCta({
  title = "Be the first to know when MaaSphere is ready for you",
  body = "Questions, feedback, or want early access? We'd love to hear from you.",
  ctaLabel = "Get in touch",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="py-24 sm:py-28">
      <Container className="overflow-hidden rounded-[var(--radius-2xl)] bg-hero-gradient px-8 py-16 text-center sm:px-16 sm:py-20">
        <h2 className="text-balance text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-warmth-cream sm:text-[40px]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-balance text-[16px] leading-relaxed text-warmth-cream/75">
          {body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" className="bg-warmth-gold text-ink hover:bg-warmth-cream">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
