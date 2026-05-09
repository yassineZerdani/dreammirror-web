import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogComments } from "@/components/blog-comments";
import { formatDate } from "@/components/blog-card";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { Container } from "@/components/container";
import { Related } from "@/components/related";
import { JsonLd, articleSchema, webPageSchema } from "@/components/seo/structured-data";
import { getAllTopicMetas, getTopic, getTopicSlugs } from "@/content/dream-lab";
import { isBlogCommentsEnabled } from "@/lib/giscus-config";
import { siteConfig, supportConfig } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = getTopic(slug);
  if (!found) return {};
  const { meta } = found;
  const url = `/dream-lab/${meta.slug}`;
  const title = `${meta.title} · Dream Lab`;
  return {
    title,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${meta.title} · ${siteConfig.name}`,
      description: meta.description,
      url: `${siteConfig.url}${url}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} · ${siteConfig.name}`,
      description: meta.description,
    },
  };
}

export default async function DreamLabTopicPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const found = getTopic(slug);
  if (!found) notFound();

  const { meta, default: Body } = found;
  const others = getAllTopicMetas().filter((t) => t.slug !== meta.slug);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Dream Lab", href: "/dream-lab" },
    { name: meta.title, href: `/dream-lab/${meta.slug}` },
  ];

  return (
    <>
      <article className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Breadcrumb items={breadcrumbs} />

          <header className="mt-7">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider2 text-star/80">
              <span className="pill">
                <span className="h-1 w-1 rounded-full bg-glow" />
                Dream Lab
              </span>
              <time dateTime={meta.publishedAt} className="text-star/85">
                {formatDate(meta.publishedAt)}
              </time>
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

          <p className="mt-10 text-xs leading-relaxed text-star/80 sm:mt-12">
            Dream Lab hosts theory and conversation, not clinical guidance. If
            nightmares, sleep loss, or distress are ongoing, please talk to a
            qualified professional. Questions or corrections welcome at{" "}
            <a
              href={`mailto:${supportConfig.email}`}
              className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
            >
              {supportConfig.email}
            </a>
            .
          </p>

          {isBlogCommentsEnabled() ? (
            <BlogComments
              heading="Discuss this lane"
              lead="Theories, critiques, and questions welcome. Stay curious and respectful — no one here speaks for your unconscious. Sign in with GitHub to post."
              ariaLabel="Dream Lab topic discussion"
            />
          ) : null}
        </Container>
      </article>

      {others.length > 0 ? (
        <Related
          heading="Other lanes"
          items={others.map((t) => ({
            href: `/dream-lab/${t.slug}`,
            eyebrow: "Theory lane",
            title: t.title,
            body: t.description,
          }))}
        />
      ) : null}

      <JsonLd
        data={[
          webPageSchema({
            name: meta.title,
            description: meta.description,
            url: `/dream-lab/${meta.slug}`,
          }),
          articleSchema({
            title: meta.title,
            description: meta.description,
            slug: meta.slug,
            publishedAt: meta.publishedAt,
            keywords: meta.keywords,
            section: "dream-lab",
          }),
        ]}
      />
    </>
  );
}
