import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/seo/breadcrumb";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Related } from "@/components/related";
import {
  AndroidIcon,
  ArrowRightIcon,
  ShieldIcon,
} from "@/components/icons";
import {
  JsonLd,
  articleSchema,
  faqSchema,
} from "@/components/seo/structured-data";
import { formatDate } from "@/components/blog-card";
import { BlogComments } from "@/components/blog-comments";
import { getAllPosts, getPost, getPostsBySlug } from "@/content/blog";
import { features } from "@/content/features";
import { isBlogCommentsEnabled } from "@/lib/giscus-config";
import { siteConfig, supportConfig } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = getPost(slug);
  if (!found) return {};
  const { meta } = found;
  const url = `/blog/${meta.slug}`;
  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url: `${siteConfig.url}${url}`,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt ?? meta.publishedAt,
      authors: [siteConfig.legal.companyUrl],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const found = getPost(slug);
  if (!found) notFound();

  const { meta, default: Body } = found;
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Journal", href: "/blog" },
    { name: meta.title, href: `/blog/${meta.slug}` },
  ];

  const featureItems = meta.relatedFeatures
    .map((slug) => features.find((f) => f.slug === slug))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  const relatedPosts = getPostsBySlug(meta.relatedPosts);

  return (
    <>
      <article className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Breadcrumb items={breadcrumbs} />

          <header className="mt-7">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider2 text-star/80">
              <span className="pill">
                <span className="h-1 w-1 rounded-full bg-glow" />
                Journal
              </span>
              <time dateTime={meta.publishedAt}>
                {formatDate(meta.publishedAt)}
              </time>
              <span aria-hidden className="text-line">·</span>
              <span>{meta.readingMinutes} min read</span>
            </div>

            <h1 className="mt-5 font-serif text-[1.7rem] leading-[1.1] text-moon xs:text-[2rem] sm:text-4xl md:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-moondim sm:text-base md:text-lg">
              {meta.description}
            </p>

            <div className="mt-7 hairline" />
          </header>

          <div className="mt-10 sm:mt-12">
            <Body />
          </div>

          {meta.faq && meta.faq.length > 0 ? (
            <section
              id="faq"
              className="mt-14 border-t border-line/40 pt-10 sm:mt-20 sm:pt-12"
            >
              <h2 className="font-serif text-2xl text-moon sm:text-3xl">
                Quick answers
              </h2>
              <ul className="mt-6 divide-y divide-line/40 rounded-2xl border border-line/50 bg-surface/40">
                {meta.faq.map((item, idx) => (
                  <li key={idx}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 sm:items-center sm:gap-6 sm:px-7 sm:py-6 focus-ring">
                        <span className="font-serif text-base leading-snug text-moon sm:text-lg">
                          {item.question}
                        </span>
                        <span
                          aria-hidden
                          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/60 bg-deep/70 text-glow transition-transform duration-300 group-open:rotate-45 sm:mt-0"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-5 pb-5 text-[14.5px] leading-relaxed text-moondim sm:px-7 sm:pb-7 sm:text-[15px]">
                        {item.answer}
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {isBlogCommentsEnabled() ? <BlogComments /> : null}

          <section className="mt-14 rounded-2xl border border-line/60 bg-deep/60 p-6 sm:mt-20 sm:p-8">
            <p className="text-[11px] uppercase tracking-wider2 text-glow">
              Try DreamMirror
            </p>
            <h2 className="mt-3 font-serif text-2xl leading-snug text-moon sm:text-[1.75rem]">
              A quiet place for the dream you’re thinking about right now.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-moondim">
              DreamMirror is a private, calm dream journal for Android with
              optional gentle AI reflections. Free to install, no store
              account needed.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href="/download"
                size="lg"
                leadingIcon={<AndroidIcon width={18} height={18} />}
                trailingIcon={<ArrowRightIcon width={16} height={16} />}
                className="w-full justify-center sm:w-auto"
              >
                Download for Android
              </Button>
              <span className="inline-flex items-center gap-2 text-xs text-star/85">
                <ShieldIcon width={13} height={13} className="text-glow" />
                Private. No ads. No dream data sold.
              </span>
            </div>
          </section>

          <p className="mt-10 text-xs leading-relaxed text-star/80 sm:mt-12">
            DreamMirror articles are written to be useful and honest. They are
            not medical advice. If a recurring dream is causing distress,
            please reach out to a qualified professional. Questions or
            corrections welcome at{" "}
            <a
              href={`mailto:${supportConfig.email}`}
              className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
            >
              {supportConfig.email}
            </a>
            .
          </p>
        </Container>
      </article>

      {featureItems.length > 0 ? (
        <Related
          heading="Related features"
          items={featureItems.map((f) => ({
            href: `/features/${f.slug}`,
            eyebrow: "Feature",
            title: f.title,
            body: f.tagline,
          }))}
        />
      ) : null}

      {relatedPosts.length > 0 ? (
        <Related
          heading="Continue reading"
          items={relatedPosts.map((p) => ({
            href: `/blog/${p.slug}`,
            eyebrow: "Article",
            title: p.title,
            body: p.description,
          }))}
        />
      ) : null}

      <JsonLd
        data={[
          articleSchema({
            title: meta.title,
            description: meta.description,
            slug: meta.slug,
            publishedAt: meta.publishedAt,
            updatedAt: meta.updatedAt,
            keywords: meta.keywords,
          }),
          ...(meta.faq && meta.faq.length > 0 ? [faqSchema(meta.faq)] : []),
        ]}
      />
    </>
  );
}
