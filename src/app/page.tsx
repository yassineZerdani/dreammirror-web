import type { Metadata } from "next";

import { CTABanner } from "@/components/cta-banner";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Showcase } from "@/components/showcase";
import { WhyDreamMirror } from "@/components/why-dreammirror";
import { Related } from "@/components/related";
import {
  JsonLd,
  faqSchema,
  mobileApplicationSchemas,
} from "@/components/seo/structured-data";
import { getAllPosts } from "@/content/blog";
import { homeFaqItems } from "@/content/home-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — AI dream journal app for Android & iOS`,
  description:
    "DreamMirror is an AI dream journal app for Android and iOS. Capture your dreams before they fade, ask for gentle AI reflections, and notice the patterns that quietly recur over time. Free to install, private by design.",
  alternates: { canonical: "/" },
  keywords: [
    "AI dream journal",
    "dream journal app",
    "dream diary app",
    "dream journal for Android",
    "dream journal for iPhone",
    "dream journal for iOS",
    "dream journal with reflections",
    "DreamMirror",
  ],
};

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      <HowItWorks />
      <WhyDreamMirror />
      <FAQ />

      {recentPosts.length > 0 ? (
        <Related
          heading="From the journal"
          items={recentPosts.map((post) => ({
            href: `/blog/${post.slug}`,
            eyebrow: "Article",
            title: post.title,
            body: post.description,
          }))}
        />
      ) : null}

      <CTABanner />

      <JsonLd
        data={[...mobileApplicationSchemas(), faqSchema(homeFaqItems)]}
      />
    </>
  );
}
