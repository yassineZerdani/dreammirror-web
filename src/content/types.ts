/**
 * Shared content types for the SEO-driven content layer.
 * Feature pages and blog posts both live as TypeScript modules so the
 * authoring story stays type-checked and we never ship fake metadata.
 */

import type { ReactNode } from "react";

export type FeatureSlug =
  | "ai-reflections"
  | "dream-patterns"
  | "morning-reminders"
  | "private-journal";

export type FeatureMeta = {
  slug: FeatureSlug;
  title: string;
  /** Short H1 — usually the same as `title` minus the brand. */
  heading: string;
  /** Sentence-length tagline used as both metadescription and H1 lead. */
  tagline: string;
  /** Long-form `meta description` — distinct from tagline. */
  description: string;
  primaryKeyword: string;
  keywords: readonly string[];
  /** Phone-mockup variant to render in the hero. */
  mockupVariant: "home" | "entry" | "insights";
  /** Internal anchor labels rendered as a sub-feature grid on the page. */
  highlights: ReadonlyArray<{
    title: string;
    body: string;
  }>;
  /** Honest, calm caveat shown on the page (e.g. "not medical advice"). */
  caveat?: string;
  /** Slugs of related blog posts, used for internal linking. */
  relatedPostSlugs: readonly string[];
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601, e.g. "2026-05-01" */
  publishedAt: string;
  /** ISO 8601, optional. */
  updatedAt?: string;
  primaryKeyword: string;
  keywords: readonly string[];
  /** Used for the article hero "x min read" badge. */
  readingMinutes: number;
  /** Internal links rendered in the "Continue reading" section. */
  relatedFeatures: readonly FeatureSlug[];
  relatedPosts: readonly string[];
  /** If present, renders FAQPage JSON-LD + a visual FAQ. */
  faq?: ReadonlyArray<{ question: string; answer: string }>;
};

export type BlogPostModule = {
  meta: BlogPostMeta;
  default: () => ReactNode;
};

export type DreamLabTopicSlug =
  | "science-of-dreaming"
  | "psychology-and-symbolism"
  | "evolution-and-function"
  | "culture-and-tradition"
  | "lucidity-and-consciousness";

export type DreamLabTopicMeta = {
  slug: DreamLabTopicSlug;
  title: string;
  /** Meta description + card copy. */
  description: string;
  /** ISO 8601 date for structured data. */
  publishedAt: string;
  keywords: readonly string[];
};

export type DreamLabTopicModule = {
  meta: DreamLabTopicMeta;
  default: () => ReactNode;
};
