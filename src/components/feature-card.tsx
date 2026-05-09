import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import type { FeatureMeta } from "@/content/types";

export function FeatureCard({ feature }: { feature: FeatureMeta }) {
  return (
    <Link
      href={`/features/${feature.slug}`}
      className="glass-card group relative flex h-full min-w-0 flex-col p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6 md:p-7"
    >
      <h3 className="break-words font-serif text-lg text-moon sm:text-xl">
        {feature.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-moondim sm:mt-3">
        {feature.tagline}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-glow transition-colors group-hover:text-accent">
        Learn more
        <ArrowRightIcon width={12} height={12} />
      </span>
    </Link>
  );
}
