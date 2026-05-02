import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { siteConfig, supportConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Plain-language terms for using ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updatedAt="May 1, 2026"
      intro={
        <>
          Plain language for the deal between you and {siteConfig.name}. By
          downloading or using the app, you agree to the points below. If
          something is unclear, write to{" "}
          <a
            href={`mailto:${supportConfig.email}`}
            className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
          >
            {supportConfig.email}
          </a>
          .
        </>
      }
    >
      <LegalSection title="Your account">
        <p>
          You are responsible for keeping your account credentials safe. If
          you suspect someone else has accessed your account, change your
          password and let us know.
        </p>
      </LegalSection>

      <LegalSection title="Your content stays yours">
        <p>
          Dream entries, tags, and exports you create in {siteConfig.name}{" "}
          belong to you. We store and process them only to provide the
          features described in our{" "}
          <a
            href="/privacy"
            className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
          >
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="What the AI is, and isn’t">
        <p>
          The optional AI reflections in {siteConfig.name} are intended as
          gentle, journal-side reflective insights. They are{" "}
          <strong className="text-moon">not</strong> medical advice, mental
          health diagnosis, scientific fact, spiritual prophecy, or
          predictions about your future. Don’t rely on them as such.
        </p>
        <p>
          If you are struggling, please reach out to a qualified professional
          or local support service.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>
          Don’t use {siteConfig.name} to harass others, attempt to break the
          app, or abuse the AI features. We may suspend accounts that do.
        </p>
      </LegalSection>

      <LegalSection title="Subscriptions">
        <p>
          {siteConfig.name} offers a small Pro tier for users who want deeper
          features. Subscriptions are billed through the platform you signed
          up on (for example, Google Play) and renew until you cancel through
          that platform.
        </p>
      </LegalSection>

      <LegalSection title="Changes to the app or these terms">
        <p>
          We will keep developing {siteConfig.name}. Some features may change,
          improve, or be removed. When these terms change in a meaningful way,
          we’ll update the date above and notify you in the app where
          appropriate.
        </p>
      </LegalSection>

      <LegalSection title="No warranty">
        <p>
          {siteConfig.name} is provided as-is. We try hard to make it stable
          and useful, but we can’t promise it will be error-free or available
          every minute of every day.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Reach us any time at{" "}
          <a
            href={`mailto:${supportConfig.email}`}
            className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
          >
            {supportConfig.email}
          </a>
          . {siteConfig.name} is built by {siteConfig.legal.company}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
