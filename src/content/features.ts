import type { FeatureMeta, FeatureSlug } from "@/content/types";

/**
 * The four feature pages. Each one is a real conversion page with a clear
 * primary keyword, an honest tagline, and explicit links into the blog.
 *
 * These are deliberately calm and concrete — no superlatives, no fake
 * metrics, no pseudo-clinical claims.
 */
export const features: readonly FeatureMeta[] = [
  {
    slug: "ai-reflections",
    title: "AI dream reflections",
    heading: "Gentle AI reflections — never interpretations.",
    tagline:
      "Optional, careful AI responses that help you re-read your dream — not predict your future.",
    description:
      "DreamMirror’s AI reflections read your dream entry and respond in calm, considered language. They are reflective insights, not diagnoses, predictions, or dream interpretations.",
    primaryKeyword: "AI dream reflections",
    keywords: [
      "AI dream reflections",
      "dream journal with AI",
      "dream journal app with reflections",
      "AI dream journal",
    ],
    mockupVariant: "entry",
    highlights: [
      {
        title: "On request, never automatic",
        body: "You write your dream first. Reflections happen only when you tap ‘Reflect’ — your words are never sent for AI processing without you asking.",
      },
      {
        title: "Reflective, not prescriptive",
        body: "Reflections explore possibilities your dream might be circling. They never tell you what your dream means or what to do about it.",
      },
      {
        title: "Anchored in your entry",
        body: "Each reflection is generated from the dream you just wrote — not a generic ‘dream dictionary’. They live in the entry alongside your text.",
      },
    ],
    caveat:
      "Reflections are reflective insights — not medical advice, mental-health diagnosis, or predictions about your life.",
    relatedPostSlugs: [
      "how-to-track-dream-symbols",
      "recurring-dreams-and-patterns",
    ],
  },
  {
    slug: "dream-patterns",
    title: "Dream patterns and insights",
    heading: "See the shapes that keep coming back.",
    tagline:
      "A quiet, honest look at the symbols, places, and feelings that recur across your dream entries.",
    description:
      "DreamMirror surfaces the symbols, people, places, and emotions that recur in your dream journal over time. Patterns describe — they don’t predict.",
    primaryKeyword: "recurring dream tracker",
    keywords: [
      "recurring dream tracker",
      "dream pattern tracker",
      "dream symbol tracker",
      "dream insights app",
    ],
    mockupVariant: "insights",
    highlights: [
      {
        title: "Symbols, places, people, emotions",
        body: "Tag entries however feels right. Over weeks, the patterns view shows what keeps surfacing — without naming a meaning for you.",
      },
      {
        title: "Trends across time windows",
        body: "Switch between 7, 30, or 90-day windows to see how recent your themes are or whether they’ve been quietly with you for months.",
      },
      {
        title: "Quiet — never alarming",
        body: "Patterns are presented as information, not as judgements. We don’t score your dreams or rank your nights.",
      },
    ],
    caveat:
      "Patterns describe what you’ve written. They are not predictions, diagnoses, or proof of meaning.",
    relatedPostSlugs: [
      "recurring-dreams-and-patterns",
      "how-to-track-dream-symbols",
    ],
  },
  {
    slug: "morning-reminders",
    title: "Morning dream-journal reminders",
    heading: "A soft cue, before the day pulls you away.",
    tagline:
      "One quiet reminder in the morning so dreams stand a chance against your inbox.",
    description:
      "DreamMirror can send a single, gentle reminder shortly after you wake — long enough to capture the dream before the day overwrites it. No streaks. No guilt.",
    primaryKeyword: "morning dream journal reminder",
    keywords: [
      "dream journal reminder app",
      "morning reminder for dream journal",
      "remember dreams reminder",
      "habit reminder dream journal",
    ],
    mockupVariant: "home",
    highlights: [
      {
        title: "One nudge, your time",
        body: "Pick the time that matches your wake-up. We don’t pile on reminders or send ‘you missed yesterday’ guilt.",
      },
      {
        title: "Lives on your device",
        body: "Reminders are scheduled locally on your phone — no need for an always-on server connection or noisy push backend.",
      },
      {
        title: "Easy to skip, easy to keep",
        body: "Pause reminders for a day, a week, or forever — your dream journal isn’t a streak to defend.",
      },
    ],
    relatedPostSlugs: [
      "morning-habits-for-dream-memory",
      "how-to-remember-dreams",
    ],
  },
  {
    slug: "private-journal",
    title: "Private, calm dream journal",
    heading: "Your nights stay yours.",
    tagline:
      "A private dream journal with on-device app lock, hidden previews, and account deletion that actually deletes.",
    description:
      "DreamMirror is a private dream journal: lock the app on your device, hide entry previews from lists, mark sensitive entries as private, and delete your account whenever you want.",
    primaryKeyword: "private dream journal",
    keywords: [
      "private dream journal",
      "secure dream journal app",
      "encrypted dream journal",
      "dream journal app with PIN",
    ],
    mockupVariant: "home",
    highlights: [
      {
        title: "App-lock with a device PIN",
        body: "Set a PIN that lives only on this device. We never see it, and it locks DreamMirror the moment you leave the app.",
      },
      {
        title: "Hidden previews",
        body: "Hide dream text from home and journal lists so titles and dates show without text excerpts. Sensitive entries always hide previews.",
      },
      {
        title: "Delete-account that means it",
        body: "From inside the app, permanently remove your profile, dreams, analyses, and saved reports from our servers. No soft-delete. No undo.",
      },
    ],
    caveat:
      "DreamMirror does not sell your dream data, does not show ads, and does not use your dreams to train shared AI models.",
    relatedPostSlugs: [
      "how-to-start-a-dream-journal",
      "how-to-track-dream-symbols",
    ],
  },
] as const;

export function getFeature(slug: FeatureSlug) {
  return features.find((f) => f.slug === slug);
}

export function getFeatureSlugs(): FeatureSlug[] {
  return features.map((f) => f.slug);
}
