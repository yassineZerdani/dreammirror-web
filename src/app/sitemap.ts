import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { features } from "@/content/features";
import { getAllPosts } from "@/content/blog";

/**
 * Static + dynamic sitemap. Run at build time so changes to features/posts
 * propagate without a separate publishing step.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: "/", changeFrequency: "monthly", priority: 1 },
      { url: "/download", changeFrequency: "weekly", priority: 0.9 },
      { url: "/features", changeFrequency: "monthly", priority: 0.85 },
      { url: "/blog", changeFrequency: "weekly", priority: 0.85 },
      { url: "/privacy", changeFrequency: "yearly", priority: 0.5 },
      { url: "/delete-account", changeFrequency: "yearly", priority: 0.5 },
      { url: "/terms", changeFrequency: "yearly", priority: 0.4 },
    ] as const
  ).map((entry) => ({
    url: `${siteConfig.url}${entry.url}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const featureRoutes: MetadataRoute.Sitemap = features.map((feature) => ({
    url: `${siteConfig.url}/features/${feature.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...featureRoutes, ...postRoutes];
}
