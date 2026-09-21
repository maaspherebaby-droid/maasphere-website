import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { BabyModelViewer } from "@/components/sections/BabyModelViewer";
import { siteConfig } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-warmth-gold/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-blush/20 blur-[110px]"
      />

      <Container className="relative grid gap-16 py-24 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-warmth-cream/90">
              AI-powered maternal &amp; early-childhood wellbeing
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 text-balance text-[42px] font-semibold leading-[1.12] tracking-[-0.02em] text-warmth-cream sm:text-[56px] lg:text-[60px]">
              Your Pregnancy Journey.
              <br />
              <span className="text-gradient-gold">One Trusted Companion.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[520px] text-balance text-[18px] leading-relaxed text-warmth-cream/75">
              {siteConfig.description}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href={siteConfig.appStoreUrl}
                target="_blank" rel="noopener noreferrer"
                variant="primary"
                className="bg-warmth-gold text-ink hover:bg-warmth-cream"
              >
                Download on the App Store
              </Button>
              <Button
                href={siteConfig.playStoreUrl}
                target="_blank" rel="noopener noreferrer"
                variant="secondary"
                className="border-white/20 bg-white/5 text-warmth-cream hover:border-warmth-gold hover:bg-white/10"
              >
                Get it on Google Play
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[420px]">
          <BabyModelViewer defaultWeek={28} />
          <p className="mt-3 text-center text-[12px] text-warmth-cream/50">
            A real MaaSphere 3D model — drag to rotate, pick a week below.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
