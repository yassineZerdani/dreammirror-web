import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import type { BlogPostMeta } from "@/content/types";

export function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-card group relative flex h-full min-w-0 flex-col p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6 md:p-7"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider2 text-star/80">
        <time dateTime={post.publishedAt} className="text-star/85">
          {formatDate(post.publishedAt)}
        </time>
        <span aria-hidden className="text-line">
          ·
        </span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h3 className="mt-3 break-words font-serif text-lg leading-snug text-moon xs:text-xl sm:text-2xl">
        {post.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-moondim">
        {post.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-glow transition-colors group-hover:text-accent">
        Read article
        <ArrowRightIcon width={12} height={12} />
      </span>
    </Link>
  );
}
