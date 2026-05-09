import type { Metadata } from "next";
import Link from "next/link";

import { BlogComments } from "@/components/blog-comments";
import { ArrowRightIcon } from "@/components/icons";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { Container } from "@/components/container";
import { CTABanner } from "@/components/cta-banner";
import { JsonLd, webPageSchema } from "@/components/seo/structured-data";
import { getAllTopicMetas } from "@/content/dream-lab";
import { isBlogCommentsEnabled } from "@/lib/giscus-config";
import { siteConfig } from "@/lib/site";

const TITLE = "Dream Lab — theories worth arguing about gently";
const DESC =
  "Short primers on science, psychology, evolution, culture, and lucidity — then open threads to compare notes. Not dream dictionaries; not medical advice.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/dream-lab" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${siteConfig.url}/dream-lab`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
};

export default function DreamLabIndexPage() {
  const topics = getAllTopicMetas();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESC,
    url: `${siteConfig.url}/dream-lab`,
    inLanguage: siteConfig.locale,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasPart: topics.map((t) => ({
      "@type": "Article",
      headline: t.title,
      description: t.description,
      url: `${siteConfig.url}/dream-lab/${t.slug}`,
      datePublished: t.publishedAt,
    })),
  } as const;

  return (
    <>
      <section className="pt-12 sm:pt-20 lg:pt-24">
        <Container size="narrow">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Dream Lab", href: "/dream-lab" },
            ]}
          />
          <p className="mt-5 text-[11px] uppercase tracking-wider2 text-star/80">
            <span className="pill inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-glow" />
              Community
            </span>
          </p>
          <h1 className="mt-4 font-serif text-[1.85rem] leading-[1.08] text-moon xs:text-[2.25rem] sm:text-5xl md:text-6xl">
            Dream Lab
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-moondim sm:text-base md:text-lg">
            The Journal stays practical. Dream Lab is where we zoom out —
            compare frameworks, argue about papers, and stay curious without
            turning anyone&apos;s night into a verdict. Pick a lane below,
            read the short primer, then jump into the thread.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {topics.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/dream-lab/${topic.slug}`}
                  className="glass-card group relative flex h-full min-w-0 flex-col p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6 md:p-7"
                >
                  <span className="text-[11px] uppercase tracking-wider2 text-glow">
                    Theory lane
                  </span>
                  <h2 className="mt-3 break-words font-serif text-lg leading-snug text-moon xs:text-xl sm:text-2xl">
                    {topic.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-moondim">
                    {topic.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-star transition-colors group-hover:text-moon">
                    Open lane
                    <ArrowRightIcon width={12} height={12} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {isBlogCommentsEnabled() ? (
        <Container size="narrow">
          <BlogComments
            heading="Hallway"
            lead="Meet other readers, drop a paper link, or float a half-formed idea before you pick a lane above. Same GitHub sign-in as the Journal."
            ariaLabel="Dream Lab general discussion"
          />
        </Container>
      ) : null}

      <CTABanner />

      <JsonLd
        data={[
          webPageSchema({
            name: TITLE,
            description: DESC,
            url: "/dream-lab",
          }),
          collectionSchema,
        ]}
      />
    </>
  );
}
