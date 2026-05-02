import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { siteConfig, supportConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles your data — written plainly.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="May 1, 2026"
      intro={
        <>
          {siteConfig.name} is built around the idea that your dreams stay
          yours. This page explains, in plain words, what we collect, why we
          collect it, and what you can do about it. The same policy applies to
          the Android app and this website.
        </>
      }
    >
      <LegalSection title="What we collect">
        <p>
          When you create an account we collect your email address and a
          password (stored as a salted hash — never in the clear). When you
          write a dream, that dream entry, its tags, and any AI reflection you
          ask for are stored under your account.
        </p>
        <p>
          Optional usage telemetry — basic counters like “how many dreams were
          written” and “did the app crash?” — helps us improve the product. It
          contains no dream content.
        </p>
      </LegalSection>

      <LegalSection title="What we do with it">
        <p>
          We use your email and password only to authenticate you and send
          account-related messages (like password reset codes). We use your
          dreams only to show them back to you, sync them across devices, and
          power the optional reflections you ask for.
        </p>
        <p>
          We <strong className="text-moon">do not</strong> sell your dream
          data. We do not use it for advertising. We do not train shared,
          general-purpose AI models on your dreams.
        </p>
      </LegalSection>

      <LegalSection title="AI reflections">
        <p>
          When you ask DreamMirror for a reflection, the entry text is sent to
          our AI provider for that single request. The reflection is returned
          to you, stored against your entry, and the request is not used to
          train shared models. Reflections are reflective insights — not
          medical advice, not diagnoses, not predictions.
        </p>
      </LegalSection>

      <LegalSection title="Where it lives">
        <p>
          Account data and dream entries live on our managed servers, secured
          in transit (HTTPS) and at rest. Your device may also keep a local
          cache for offline reading and exports — that copy is yours to clear.
        </p>
      </LegalSection>

      <LegalSection title="Your controls">
        <ul className="list-disc space-y-2 pl-6 marker:text-star/70">
          <li>
            Lock the app on this device with a PIN — the PIN never leaves your
            phone.
          </li>
          <li>
            Hide dream previews on the home and journal screens so titles and
            dates appear without text excerpts.
          </li>
          <li>
            Mark sensitive entries as private; their previews are always
            hidden.
          </li>
          <li>
            Export or delete individual entries at any time from inside the
            app.
          </li>
          <li>
            <a
              href="/delete-account"
              className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
            >
              Delete your account
            </a>{" "}
            — this permanently removes your profile, dreams, analyses, and
            reports from our systems.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          DreamMirror is intended for adults. We do not knowingly create
          accounts for users under 13. If you believe a child has created an
          account, write to{" "}
          <a
            href={`mailto:${supportConfig.email}`}
            className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
          >
            {supportConfig.email}
          </a>{" "}
          and we’ll remove it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          When the policy meaningfully changes, we’ll update the “Last
          updated” date at the top of this page and, where appropriate, notify
          you in the app.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about your data? Write to{" "}
          <a
            href={`mailto:${supportConfig.email}`}
            className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
          >
            {supportConfig.email}
          </a>
          . A real person responds.
        </p>
        <p className="text-xs text-star/80">
          A canonical mirror of this policy is also published at{" "}
          <a
            href={siteConfig.legal.externalPrivacyPolicyUrl}
            className="underline underline-offset-4 decoration-line hover:decoration-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            {siteConfig.legal.externalPrivacyPolicyUrl}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
