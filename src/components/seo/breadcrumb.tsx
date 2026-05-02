import Link from "next/link";

import { JsonLd, breadcrumbSchema } from "@/components/seo/structured-data";

type Crumb = { name: string; href: string };

/**
 * Renders a visual breadcrumb AND emits a corresponding `BreadcrumbList`
 * JSON-LD block — keep them in sync by always going through this component.
 *
 * The last crumb is rendered as plain text (current page) so we don't
 * generate a self-link.
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-star/80">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-moondim">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-star/80 transition-colors hover:text-moon"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden className="text-line">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(items)} />
    </nav>
  );
}
