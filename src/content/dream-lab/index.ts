/**
 * Dream Lab — short primers on dream *theories* (not advice, not “meanings”).
 * Each topic has its own URL so Giscus can map `/dream-lab/<slug>` to a thread.
 */

import * as culture from "./culture-and-tradition";
import * as evolution from "./evolution-and-function";
import * as lucidity from "./lucidity-and-consciousness";
import * as psychology from "./psychology-and-symbolism";
import * as science from "./science-of-dreaming";

import type { DreamLabTopicModule } from "@/content/types";

export const topics: readonly DreamLabTopicModule[] = [
  science,
  psychology,
  evolution,
  culture,
  lucidity,
] as const;

export function getAllTopicMetas() {
  return topics.map((t) => t.meta);
}

export function getTopic(slug: string) {
  return topics.find((t) => t.meta.slug === slug);
}

export function getTopicSlugs() {
  return topics.map((t) => t.meta.slug);
}
