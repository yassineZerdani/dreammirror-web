import type { Metadata } from "next";

import { Breadcrumb } from "@/components/seo/breadcrumb";
import { BlogCard } from "@/components/blog-card";
import { Container } from "@/components/container";
import { CTABanner } from "@/components/cta-banner";
import {
  JsonLd,
  webPageSchema,
} from "@/components/seo/structured-data";
import { getAllPosts } from "@/content/blog";
import { siteConfig } from "@/lib/site";

const TITLE = "DreamMirror Journal — practical writing about dreams";
const DESC =
  "Calm, practical articles about remembering, journaling, and noticing patterns in your dreams. No mystical interpretations — just honest, useful writing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESC,
    url: `${siteConfig.url}/blog`,
    inLanguage: siteConfig.locale,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasPart: posts.map((p) => ({
      "@type": "Article",
      headline: p.title,
      description: p.description,
      url: `${siteConfig.url}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
    })),
  } as const;

  return (
    <>
      <section className="pt-12 sm:pt-20 lg:pt-24">
        <Container size="narrow">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Journal", href: "/blog" },
            ]}
          />
          <h1 className="mt-5 font-serif text-[2.25rem] leading-[1.06] text-moon sm:text-5xl md:text-6xl">
            The DreamMirror Journal
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-moondim sm:text-base md:text-lg">
            Practical, honest writing about dreams — how to remember them,
            how to journal them, and what it actually looks like to notice
            patterns over time. We don’t do dream-meaning lookups, and we
            don’t pretend the inside of a dream is a lab.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner />

      <JsonLd
        data={[
          webPageSchema({ name: TITLE, description: DESC, url: "/blog" }),
          collectionSchema,
        ]}
      />
    </>
  );
}
