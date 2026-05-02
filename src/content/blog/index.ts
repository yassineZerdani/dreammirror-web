/**
 * Blog post registry.
 *
 * Each post lives in its own `.tsx` file alongside this one and exports:
 *   - `meta`    : BlogPostMeta
 *   - `default` : a React component that renders the post body inside <Prose>
 *
 * The registry orders posts most-recent first.
 */

import * as howToRemember from "./how-to-remember-dreams";
import * as howToStart from "./how-to-start-a-dream-journal";
import * as recallTips from "./dream-recall-tips";
import * as recurring from "./recurring-dreams-and-patterns";
import * as trackSymbols from "./how-to-track-dream-symbols";
import * as morningHabits from "./morning-habits-for-dream-memory";

import type { BlogPostModule } from "@/content/types";

export const posts: readonly BlogPostModule[] = [
  howToRemember,
  howToStart,
  recallTips,
  recurring,
  trackSymbols,
  morningHabits,
] as const;

const orderedPosts = [...posts].sort(
  (a, b) =>
    new Date(b.meta.publishedAt).getTime() -
    new Date(a.meta.publishedAt).getTime(),
);

export function getAllPosts() {
  return orderedPosts.map((p) => p.meta);
}

export function getPost(slug: string) {
  return orderedPosts.find((p) => p.meta.slug === slug);
}

export function getPostsBySlug(slugs: readonly string[]) {
  return slugs
    .map((slug) => orderedPosts.find((p) => p.meta.slug === slug)?.meta)
    .filter((m): m is NonNullable<typeof m> => Boolean(m));
}

export function getPostSlugs() {
  return orderedPosts.map((p) => p.meta.slug);
}
