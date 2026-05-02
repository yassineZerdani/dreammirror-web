import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { Container } from "@/components/container";

type Item = {
  href: string;
  eyebrow: string;
  title: string;
  body?: string;
};

/**
 * Generic "Continue reading" / "Related features" rail. Used at the bottom
 * of feature pages and blog posts for crawlable internal linking.
 */
export function Related({
  heading,
  items,
}: {
  heading: string;
  items: Item[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="border-t border-line/40 bg-deep/30 py-14 sm:py-20">
      <Container>
        <header className="mb-8 sm:mb-10">
          <span className="pill">
            <span className="h-1 w-1 rounded-full bg-glow" />
            {heading}
          </span>
        </header>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="glass-card group relative flex h-full flex-col p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6"
              >
                <span className="text-[11px] uppercase tracking-wider2 text-glow">
                  {item.eyebrow}
                </span>
                <h3 className="mt-2 font-serif text-lg leading-snug text-moon sm:text-xl">
                  {item.title}
                </h3>
                {item.body ? (
                  <p className="mt-2.5 text-sm leading-relaxed text-moondim">
                    {item.body}
                  </p>
                ) : null}
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-star transition-colors group-hover:text-moon">
                  Read
                  <ArrowRightIcon width={12} height={12} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
