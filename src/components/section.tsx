import { Container } from "@/components/container";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  align?: "left" | "center";
  size?: "default" | "narrow" | "wide";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  innerClassName,
  align = "left",
  size = "default",
}: SectionProps) {
  const isCentered = align === "center";
  return (
    <section
      id={id}
      className={cn(
        "relative py-14 sm:py-20 md:py-24 lg:py-28",
        className,
      )}
    >
      <Container size={size} className={cn(innerClassName)}>
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "mb-10 sm:mb-12 md:mb-16",
              isCentered && "text-center mx-auto max-w-2xl",
            )}
          >
            {eyebrow ? (
              <span className="pill mb-4 sm:mb-5">
                <span className="h-1 w-1 rounded-full bg-glow" />
                {eyebrow}
              </span>
            ) : null}
            {title ? (
              <h2 className="font-serif text-[1.75rem] leading-[1.1] text-moon sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={cn(
                  "mt-4 text-[15px] leading-relaxed text-moondim sm:mt-5 sm:text-base md:text-lg",
                  isCentered ? "mx-auto max-w-prose" : "max-w-prose",
                )}
              >
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
