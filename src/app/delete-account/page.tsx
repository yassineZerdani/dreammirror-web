import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { siteConfig, supportConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: `How to permanently delete your ${siteConfig.name} account and all associated data.`,
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your account"
      updatedAt="May 1, 2026"
      intro={
        <>
          You can permanently delete your {siteConfig.name} account at any
          time. There are two ways to do it.
        </>
      }
    >
      <LegalSection title="Option 1 — From inside the app (fastest)">
        <ol className="list-decimal space-y-2 pl-6 marker:text-star/70">
          <li>Open DreamMirror on your Android device.</li>
          <li>
            Go to <span className="text-moon">Settings → Privacy &amp;
            device security → Delete account &amp; all data</span>.
          </li>
          <li>
            Confirm with your account password. Your profile, dreams,
            analyses, and saved reports are erased from our systems.
          </li>
        </ol>
        <p className="text-xs text-star/80">
          Your device may still hold a local cache or any exports you saved —
          only you can remove those, from your phone’s file manager or
          Downloads folder.
        </p>
      </LegalSection>

      <LegalSection title="Option 2 — Email request">
        <p>
          If you’ve lost access to your account or simply prefer email, write
          to{" "}
          <a
            href={`mailto:${supportConfig.email}?subject=Delete%20my%20DreamMirror%20account`}
            className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
          >
            {supportConfig.email}
          </a>{" "}
          from the address you signed up with and ask us to delete your
          account.
        </p>
        <p>
          Please include the subject line{" "}
          <span className="rounded bg-deep/80 px-1.5 py-0.5 text-moon">
            Delete my DreamMirror account
          </span>
          . We confirm and complete the deletion within 7 days, usually much
          sooner.
        </p>
      </LegalSection>

      <LegalSection title="What gets deleted">
        <ul className="list-disc space-y-2 pl-6 marker:text-star/70">
          <li>Your account profile and authentication data</li>
          <li>Every dream entry, tag, and attached metadata</li>
          <li>Every AI reflection generated for your entries</li>
          <li>Every saved insight report</li>
          <li>Subscription and billing records tied to your account</li>
        </ul>
        <p>
          Anonymous, aggregated counts (for example: total reflections served
          across all users in a given month) may remain in our analytics, but
          they cannot be linked back to you.
        </p>
      </LegalSection>

      <LegalSection title="What happens after deletion">
        <p>
          Account deletion is permanent and immediate. There is no recovery,
          no “undo”, and no soft-delete window. If you sign up again later
          with the same email, it will be a brand-new, empty account.
        </p>
      </LegalSection>

      <LegalSection title="Need help first?">
        <p>
          If you’re considering deleting because something’s broken or
          frustrating, we’d genuinely like to hear about it. Write to{" "}
          <a
            href={`mailto:${supportConfig.email}`}
            className="text-moon underline underline-offset-4 decoration-line hover:decoration-accent"
          >
            {supportConfig.email}
          </a>{" "}
          before you go. No pressure either way.
        </p>
        <p className="text-xs text-star/80">
          A canonical mirror of this page is also published at{" "}
          <a
            href={siteConfig.legal.externalAccountDeletionUrl}
            className="underline underline-offset-4 decoration-line hover:decoration-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            {siteConfig.legal.externalAccountDeletionUrl}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
