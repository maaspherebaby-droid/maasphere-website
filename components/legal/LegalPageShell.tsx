import { Container } from "@/components/ui/Container";

export function LegalPageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-background py-20 sm:py-28">
      <Container className="max-w-[760px]">
        <header className="mb-12 flex flex-col gap-4 border-b border-divider pb-10">
          <h1 className="text-[36px] font-semibold tracking-[-0.02em] text-ink sm:text-[44px]">
            {title}
          </h1>
          {intro ? (
            <p className="text-[16px] leading-relaxed text-text-secondary">{intro}</p>
          ) : null}
        </header>
        {children}
      </Container>
    </article>
  );
}
