import type { GiscusProps, Repo, Theme } from "@giscus/react";

function trimEnv(key: string): string {
  return (process.env[key] ?? "").trim();
}

/**
 * Threaded discussion via [Giscus](https://giscus.app) (GitHub Discussions).
 * Used on Journal posts and Dream Lab pages (`mapping: pathname`).
 * Set all `NEXT_PUBLIC_GISCUS_*` variables from the giscus setup widget to enable.
 */
export function isBlogCommentsEnabled(): boolean {
  const repo = trimEnv("NEXT_PUBLIC_GISCUS_REPO");
  const repoId = trimEnv("NEXT_PUBLIC_GISCUS_REPO_ID");
  const category = trimEnv("NEXT_PUBLIC_GISCUS_CATEGORY");
  const categoryId = trimEnv("NEXT_PUBLIC_GISCUS_CATEGORY_ID");
  return (
    repo.length > 0 &&
    repoId.length > 0 &&
    category.length > 0 &&
    categoryId.length > 0 &&
    repo.includes("/")
  );
}

export function getGiscusProps(): GiscusProps | null {
  if (!isBlogCommentsEnabled()) return null;

  const repo = trimEnv("NEXT_PUBLIC_GISCUS_REPO") as Repo;
  const repoId = trimEnv("NEXT_PUBLIC_GISCUS_REPO_ID");
  const category = trimEnv("NEXT_PUBLIC_GISCUS_CATEGORY");
  const categoryId = trimEnv("NEXT_PUBLIC_GISCUS_CATEGORY_ID");
  const themeRaw = trimEnv("NEXT_PUBLIC_GISCUS_THEME");
  const theme: Theme =
    themeRaw.length > 0 ? (themeRaw as Theme) : "transparent_dark";

  return {
    repo,
    repoId,
    category,
    categoryId,
    mapping: "pathname",
    strict: "0",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "bottom",
    theme,
    lang: "en",
    loading: "lazy",
  };
}
