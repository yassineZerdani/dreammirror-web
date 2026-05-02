import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

/**
 * Long-form content wrapper. Use semantic HTML inside (h2, h3, p, ul, etc.);
 * the `.prose-quiet` class in globals.css handles the typography.
 */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("prose-quiet", className)}>{children}</div>;
}

/**
 * Short prompt callout used inside long-form content. Renders as a
 * `<figure class="callout">` so the prose CSS picks up the styling.
 */
export function Callout({
  label = "Note",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <figure className="callout">
      <figcaption>{label}</figcaption>
      <p>{children}</p>
    </figure>
  );
}

/**
 * Pull quote / one-liner. Designed to break up dense long-form sections.
 */
export function Pullquote({ children }: { children: ReactNode }) {
  return <blockquote>{children}</blockquote>;
}

/**
 * Internal link that always uses Next.js routing for crawlable navigation.
 */
export function ProseLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
}
