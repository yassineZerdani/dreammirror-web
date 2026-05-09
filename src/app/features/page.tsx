import type { Metadata } from "next";

import { Breadcrumb } from "@/components/seo/breadcrumb";
import { Container } from "@/components/container";
import { FeatureCard } from "@/components/feature-card";
import { CTABanner } from "@/components/cta-banner";
import {
  JsonLd,
  webPageSchema,
} from "@/components/seo/structured-data";
import { features } from "@/content/features";
import { siteConfig } from "@/lib/site";

const TITLE = "Features — what DreamMirror does";
const DESC =
  "DreamMirror’s features explained: AI dream reflections, recurring dream patterns, gentle morning reminders, and a private dream journal you actually own.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/features" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${siteConfig.url}/features`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
};

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-12 sm:pt-20 lg:pt-24">
        <Container size="narrow">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Features", href: "/features" },
            ]}
          />
          <h1 className="mt-5 font-serif text-[1.85rem] leading-[1.08] text-moon xs:text-[2.25rem] sm:text-5xl md:text-6xl">
            Features, in plain language.
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-moondim sm:text-base md:text-lg">
            DreamMirror is built around four small, considered ideas. Each one
            has its own page below — what it does, how it works, and the
            careful boundaries we set around it.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => (
              <li key={feature.slug}>
                <FeatureCard feature={feature} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner />

      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: DESC,
          url: "/features",
        })}
      />
    </>
  );
}
