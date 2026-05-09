import { Container } from "@/components/container";
import { cn } from "@/lib/cn";

type LegalPageProps = {
  title: string;
  intro?: React.ReactNode;
  updatedAt: string;
  children: React.ReactNode;
  className?: string;
};

export function LegalPage({
  title,
  intro,
  updatedAt,
  children,
  className,
}: LegalPageProps) {
  return (
    <article
      className={cn(
        "relative pb-16 pt-12 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24",
        className,
      )}
    >
      <Container size="narrow">
        <header>
          <p className="text-xs uppercase tracking-wider2 text-glow">Legal</p>
          <h1 className="mt-3 font-serif text-[1.7rem] leading-tight text-moon xs:text-[2rem] sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-4 text-[15px] leading-relaxed text-moondim sm:mt-5 sm:text-base md:text-lg">
              {intro}
            </p>
          ) : null}
          <p className="mt-5 text-xs text-star/80 sm:mt-6">
            Last updated: {updatedAt}
          </p>
          <div className="mt-7 hairline sm:mt-8" />
        </header>

        <div className="prose-quiet mt-8 space-y-6 text-[15px] leading-relaxed text-moondim sm:mt-10">
          {children}
        </div>
      </Container>
    </article>
  );
}

type SectionBlockProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ title, children }: SectionBlockProps) {
  return (
    <section>
      <h2 className="font-serif text-xl text-moon sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
