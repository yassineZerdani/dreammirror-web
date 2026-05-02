import { siteConfig, supportConfig, apkConfig, ipaConfig } from "@/lib/site";

type JsonLdProps = { data: Record<string, unknown> | Array<Record<string, unknown>> };

/**
 * Embed JSON-LD as a `<script type="application/ld+json">` tag.
 * Using `dangerouslySetInnerHTML` is correct here — JSON-LD must be inline.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* --------------------------------------------------------------- */
/*  Schema builders — pure functions, easy to compose per page.     */
/* --------------------------------------------------------------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legal.company,
    url: siteConfig.legal.companyUrl,
    logo: `${siteConfig.url}/brand/mark.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      email: supportConfig.email,
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  } as const;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
  } as const;
}

function buildAppSchema(input: {
  os: "Android" | "iOS";
  version: string;
  downloadUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "Journaling",
    operatingSystem: input.os,
    softwareVersion: input.version,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    downloadUrl: input.downloadUrl.startsWith("http")
      ? input.downloadUrl
      : `${siteConfig.url}${input.downloadUrl}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legal.company,
      url: siteConfig.legal.companyUrl,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  } as const;
}

/**
 * Returns one MobileApplication schema per available platform.
 * Android is always present; iOS is added when NEXT_PUBLIC_IPA_URL is set.
 */
export function mobileApplicationSchemas() {
  const schemas: Array<ReturnType<typeof buildAppSchema>> = [
    buildAppSchema({
      os: "Android",
      version: apkConfig.version,
      downloadUrl: apkConfig.url,
    }),
  ];
  if (siteConfig.platforms.ios.available && ipaConfig.url) {
    schemas.push(
      buildAppSchema({
        os: "iOS",
        version: ipaConfig.version,
        downloadUrl: ipaConfig.url,
      }),
    );
  }
  return schemas;
}

/**
 * @deprecated Prefer `mobileApplicationSchemas()` which emits per-platform.
 * Kept for backward compatibility — returns the Android schema only.
 */
export function mobileApplicationSchema() {
  return mobileApplicationSchemas()[0];
}

export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.href.startsWith("http")
        ? item.href
        : `${siteConfig.url}${item.href}`,
    })),
  } as const;
}

export function articleSchema(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: readonly string[];
}) {
  const url = `${siteConfig.url}/blog/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    inLanguage: siteConfig.locale,
    keywords: input.keywords.join(", "),
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    author: {
      "@type": "Organization",
      name: siteConfig.legal.company,
      url: siteConfig.legal.companyUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legal.company,
      url: siteConfig.legal.companyUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/mark.svg`,
      },
    },
  } as const;
}

export function faqSchema(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } as const;
}

export function webPageSchema(input: {
  name: string;
  description: string;
  url: string;
}) {
  const absolute = input.url.startsWith("http")
    ? input.url
    : `${siteConfig.url}${input.url}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absolute,
    inLanguage: siteConfig.locale,
    isPartOf: { "@type": "WebSite", url: siteConfig.url, name: siteConfig.name },
  } as const;
}
