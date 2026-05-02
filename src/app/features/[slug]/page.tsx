import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/seo/breadcrumb";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { CTABanner } from "@/components/cta-banner";
import { PhoneMockup } from "@/components/phone-mockup";
import { Related } from "@/components/related";
import {
  AndroidIcon,
  ArrowRightIcon,
  CheckIcon,
  ShieldIcon,
} from "@/components/icons";
import { JsonLd, webPageSchema } from "@/components/seo/structured-data";
import { features, getFeature, getFeatureSlugs } from "@/content/features";
import { getPostsBySlug } from "@/content/blog";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getFeatureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug as ReturnType<typeof getFeatureSlugs>[number]);
  if (!feature) return {};
  const url = `/features/${feature.slug}`;
  const title = `${feature.title}`;
  return {
    title,
    description: feature.description,
    keywords: [...feature.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${feature.title} · ${siteConfig.name}`,
      description: feature.description,
      url: `${siteConfig.url}${url}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${feature.title} · ${siteConfig.name}`,
      description: feature.description,
    },
  };
}

export default async function FeatureDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const feature = getFeature(slug as ReturnType<typeof getFeatureSlugs>[number]);
  if (!feature) notFound();

  const otherFeatures = features.filter((f) => f.slug !== feature.slug);
  const relatedPosts = getPostsBySlug(feature.relatedPostSlugs);
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: feature.title, href: `/features/${feature.slug}` },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-32 -left-24 h-[280px] w-[280px] rounded-full bg-accent/10 blur-[90px] sm:-top-40 sm:-left-32 sm:h-[460px] sm:w-[460px] sm:blur-[120px]" />
        </div>

        <Container>
          <Breadcrumb items={breadcrumbs} />

          <div className="mt-6 grid items-center gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="pill">
                <span className="h-1.5 w-1.5 rounded-full bg-glow" />
                Feature
              </span>
              <h1 className="mt-5 font-serif text-[2.25rem] leading-[1.06] text-moon sm:text-5xl md:text-6xl lg:text-[4rem]">
                {feature.heading}
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-moondim sm:text-base md:text-lg">
                {feature.tagline}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button
                  href="/download"
                  size="lg"
                  leadingIcon={<AndroidIcon width={18} height={18} />}
                  trailingIcon={<ArrowRightIcon width={16} height={16} />}
                  className="w-full justify-center sm:w-auto"
                >
                  Download for Android
                </Button>
                <Button
                  href="/features"
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center sm:w-auto"
                >
                  All features
                </Button>
              </div>

              {feature.caveat ? (
                <p className="mt-7 inline-flex items-start gap-2 rounded-2xl border border-line/50 bg-deep/40 px-4 py-3 text-xs leading-relaxed text-star/85">
                  <ShieldIcon
                    width={14}
                    height={14}
                    className="mt-0.5 shrink-0 text-glow"
                  />
                  {feature.caveat}
                </p>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <div className="mx-auto max-w-md">
                <PhoneMockup variant={feature.mockupVariant} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <Container>
          <header className="mx-auto max-w-2xl text-center">
            <span className="pill">
              <span className="h-1 w-1 rounded-full bg-glow" />
              How it works
            </span>
            <h2 className="mt-5 font-serif text-[1.75rem] leading-[1.1] text-moon sm:text-3xl md:text-4xl">
              Three honest highlights.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-moondim sm:text-base">
              Everything below is in the Android app today.
            </p>
          </header>

          <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {feature.highlights.map((h) => (
              <li
                key={h.title}
                className="glass-card relative h-full p-5 sm:p-6 md:p-7"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-glow/30 bg-glow/10 text-glow">
                  <CheckIcon width={16} height={16} />
                </div>
                <h3 className="mt-4 font-serif text-lg text-moon sm:text-xl">
                  {h.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-moondim">
                  {h.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {relatedPosts.length > 0 ? (
        <Related
          heading="Continue reading"
          items={relatedPosts.map((post) => ({
            href: `/blog/${post.slug}`,
            eyebrow: "Article",
            title: post.title,
            body: post.description,
          }))}
        />
      ) : null}

      <Related
        heading="Other features"
        items={otherFeatures.map((f) => ({
          href: `/features/${f.slug}`,
          eyebrow: "Feature",
          title: f.title,
          body: f.tagline,
        }))}
      />

      <CTABanner />

      <JsonLd
        data={webPageSchema({
          name: feature.title,
          description: feature.description,
          url: `/features/${feature.slug}`,
        })}
      />
    </>
  );
}
