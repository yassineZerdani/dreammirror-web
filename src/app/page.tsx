import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import {
  JsonLd,
  faqSchema,
  mobileApplicationSchemas,
} from "@/components/seo/structured-data";
import { getAllPosts } from "@/content/blog";
import { homeFaqItems } from "@/content/home-faq";
import { siteConfig } from "@/lib/site";

const Showcase = dynamic(() =>
  import("@/components/showcase").then((m) => ({ default: m.Showcase })),
);
const HowItWorks = dynamic(() =>
  import("@/components/how-it-works").then((m) => ({ default: m.HowItWorks })),
);
const WhyDreamMirror = dynamic(() =>
  import("@/components/why-dreammirror").then((m) => ({ default: m.WhyDreamMirror })),
);
const FAQ = dynamic(() => import("@/components/faq").then((m) => ({ default: m.FAQ })));
const Related = dynamic(() =>
  import("@/components/related").then((m) => ({ default: m.Related })),
);
const CTABanner = dynamic(() =>
  import("@/components/cta-banner").then((m) => ({ default: m.CTABanner })),
);

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
