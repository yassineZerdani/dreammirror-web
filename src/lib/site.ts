/**
 * Single source of truth for everything the marketing site needs to know
 * about the product. Override any value via environment variables in
 * `.env.local` (or your hosting provider's UI). See `.env.example`.
 *
 * Anything that is shown publicly is exposed through `NEXT_PUBLIC_*`
 * variables so it can be inlined safely at build time.
 */

const trim = (value: string | undefined, fallback: string) =>
  (value && value.trim().length > 0 ? value.trim() : fallback).replace(/\/$/, "");

/** Shipped APK on GitHub Releases (`dreammirror.apk` asset on the latest tag). */
const DEFAULT_APK_URL =
  "https://github.com/yassineZerdani/dreammirror-web/releases/latest/download/dreammirror.apk";

export const siteConfig = {
  name: "DreamMirror",
  tagline: "Your dream journal, gently mirrored.",
  description:
    "DreamMirror is a calm, private dream journal with gentle AI reflections. Capture your dreams before they fade and notice the patterns that quietly shape you.",
  url: trim(process.env.NEXT_PUBLIC_SITE_URL, "https://dreammirror.app"),
  ogImage: "/og.png",
  themeColor: "#0B0D12",
  locale: "en-US",
  twitterCard: "summary_large_image",
  // Android is direct-install via APK; iOS is direct-install via .ipa
  // (sideload required). `iosAvailable` flips on automatically when
  // NEXT_PUBLIC_IPA_URL is set.
  platforms: {
    android: { available: true },
    ios: {
      available: Boolean(process.env.NEXT_PUBLIC_IPA_URL?.trim()),
      comingSoon: !process.env.NEXT_PUBLIC_IPA_URL?.trim(),
    },
  },
  legal: {
    privacyPolicyUrl: "/privacy",
    deleteAccountUrl: "/delete-account",
    termsUrl: "/terms",
    // External canonical privacy page already used inside the mobile app.
    externalPrivacyPolicyUrl: "https://aeropyxtech.com/privacy/dreammirror/",
    externalAccountDeletionUrl: "https://aeropyxtech.com/dreammirror/delete-account/",
    company: "Aeropyx Tech",
    companyUrl: "https://aeropyxtech.com",
  },
} as const;

const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION?.trim() || "1.0.0";

export const apkConfig = {
  url: trim(process.env.NEXT_PUBLIC_APK_URL, DEFAULT_APK_URL),
  version: APP_VERSION,
  size: process.env.NEXT_PUBLIC_APK_SIZE?.trim() || "",
  filename: "dreammirror.apk",
  minPlatform: "Android 9 or later",
} as const;

export const ipaConfig = {
  url: process.env.NEXT_PUBLIC_IPA_URL?.trim() || "",
  version:
    process.env.NEXT_PUBLIC_IPA_VERSION?.trim() || APP_VERSION,
  size: process.env.NEXT_PUBLIC_IPA_SIZE?.trim() || "",
  filename: "dreammirror.ipa",
  minPlatform: "iOS 15 or later",
} as const;

export const supportConfig = {
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "support@dreammirror.app",
} as const;

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/blog", label: "Journal" },
  { href: "/dream-lab", label: "Dream Lab" },
  { href: "/#faq", label: "FAQ" },
  { href: "/download", label: "Download" },
] as const;

export const footerLinks = {
  product: [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/download", label: "Download" },
    { href: "/#faq", label: "FAQ" },
  ],
  features: [
    { href: "/features/ai-reflections", label: "AI reflections" },
    { href: "/features/dream-patterns", label: "Dream patterns" },
    { href: "/features/morning-reminders", label: "Morning reminders" },
    { href: "/features/private-journal", label: "Private journal" },
  ],
  journal: [
    { href: "/blog", label: "All articles" },
    { href: "/blog/how-to-remember-dreams", label: "How to remember dreams" },
    { href: "/blog/how-to-start-a-dream-journal", label: "Starting a dream journal" },
    { href: "/blog/recurring-dreams-and-patterns", label: "Recurring dreams & patterns" },
  ],
  dreamLab: [
    { href: "/dream-lab", label: "Dream Lab home" },
    { href: "/dream-lab/science-of-dreaming", label: "Science of dreaming" },
    { href: "/dream-lab/psychology-and-symbolism", label: "Psychology & symbolism" },
    { href: "/dream-lab/evolution-and-function", label: "Evolution & function" },
    { href: "/dream-lab/culture-and-tradition", label: "Culture & tradition" },
    { href: "/dream-lab/lucidity-and-consciousness", label: "Lucidity & consciousness" },
  ],
  legal: [
    { href: siteConfig.legal.privacyPolicyUrl, label: "Privacy policy" },
    { href: siteConfig.legal.deleteAccountUrl, label: "Delete account" },
    { href: siteConfig.legal.termsUrl, label: "Terms" },
  ],
} as const;
