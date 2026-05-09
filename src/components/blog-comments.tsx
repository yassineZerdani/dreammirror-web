"use client";

import dynamic from "next/dynamic";
import { getGiscusProps } from "@/lib/giscus-config";

const Giscus = dynamic(() => import("@giscus/react"), {
  ssr: false,
  loading: () => (
    <p className="mt-6 text-sm text-moondim">Loading discussion…</p>
  ),
});

const DEFAULT_HEADING = "Discussion";
const DEFAULT_LEAD =
  "Comments use GitHub — sign in to join the thread for this article. Be kind; this is a calm corner of the internet.";
const DEFAULT_ARIA = "Article discussion";

export type BlogCommentsProps = {
  heading?: string;
  lead?: string;
  ariaLabel?: string;
};

export function BlogComments({
  heading = DEFAULT_HEADING,
  lead = DEFAULT_LEAD,
  ariaLabel = DEFAULT_ARIA,
}: BlogCommentsProps = {}) {
  const props = getGiscusProps();
  if (!props) return null;

  return (
    <section
      id="discussion"
      aria-label={ariaLabel}
      className="mt-14 border-t border-line/40 pt-10 sm:mt-20 sm:pt-12"
    >
      <h2 className="font-serif text-2xl text-moon sm:text-3xl">
        {heading}
      </h2>
      <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-moondim">
        {lead}
      </p>
      <div className="giscus-anchor mt-8 min-h-[120px]">
        <Giscus {...props} />
      </div>
    </section>
  );
}
