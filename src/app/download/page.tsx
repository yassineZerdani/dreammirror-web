import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumb } from "@/components/seo/breadcrumb";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import {
  AndroidIcon,
  AppleIcon,
  ArrowRightIcon,
  InfoIcon,
  ShieldIcon,
} from "@/components/icons";
import {
  JsonLd,
  mobileApplicationSchemas,
  webPageSchema,
} from "@/components/seo/structured-data";
import {
  apkConfig,
  ipaConfig,
  siteConfig,
  supportConfig,
} from "@/lib/site";

const iosAvailable = siteConfig.platforms.ios.available;

export const metadata: Metadata = {
  title: "Download DreamMirror — dream journal app for Android & iOS",
  description: `Direct download of ${siteConfig.name} v${apkConfig.version}. APK for Android, .ipa for iOS sideload. A private dream journal with gentle AI reflections, recurring-pattern tracking, and morning reminders.`,
  alternates: { canonical: "/download" },
  keywords: [
    "DreamMirror APK download",
    "DreamMirror IPA download",
    "DreamMirror Android",
    "DreamMirror iOS",
    "dream journal app for Android",
    "dream journal app for iPhone",
    "dream journal APK",
    "dream journal IPA sideload",
    "AI dream journal Android",
    "AI dream journal iOS",
  ],
  openGraph: {
    title: "Download DreamMirror — dream journal app for Android & iOS",
    description: `Direct APK and .ipa downloads of ${siteConfig.name} v${apkConfig.version}.`,
    url: `${siteConfig.url}/download`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download DreamMirror — Android APK & iOS IPA",
    description: `Direct downloads of ${siteConfig.name} v${apkConfig.version}.`,
  },
};

const androidSteps = [
  {
    step: "1",
    title: "Tap Download APK",
    body:
      "The .apk file saves to your Downloads folder. Most modern phones download it in a few seconds.",
  },
  {
    step: "2",
    title: "Allow the install if Android asks",
    body:
      "If your phone asks to allow installs from your browser, tap Settings → enable “Allow from this source”, then go back.",
  },
  {
    step: "3",
    title: "Open DreamMirror",
    body:
      "Tap Install, wait a moment, then open the app. Sign up or sign in and you’re ready to write your first dream.",
  },
] as const;

const iosSteps = [
  {
    step: "1",
    title: "Install a sideloading tool on your computer",
    body:
      "iOS doesn’t allow direct .ipa installs from a browser. Use a tool like AltStore or Sideloadly on your Mac or PC. Both are free.",
  },
  {
    step: "2",
    title: "Download the .ipa from this page",
    body:
      "On a computer, save the .ipa file. You’ll point your sideloading tool at this file.",
  },
  {
    step: "3",
    title: "Sign and install with your Apple ID",
    body:
      "Connect your iPhone, sign the .ipa with your Apple ID, and install it. The first time you open DreamMirror, go to Settings → General → VPN & Device Management and trust the developer profile.",
  },
] as const;

export default function DownloadPage() {
  return (
    <>
      <DownloadHero />
      <PlatformPicker />
      <AndroidInstructions />
      {iosAvailable ? <IOSInstructions /> : null}
      <DownloadFAQ />
      <JsonLd
        data={[
          ...mobileApplicationSchemas(),
          webPageSchema({
            name: "Download DreamMirror for Android and iOS",
            description: `Direct APK and .ipa download of ${siteConfig.name} v${apkConfig.version}.`,
            url: "/download",
          }),
        ]}
      />
    </>
  );
}

function DownloadHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-12 sm:pt-20 lg:pt-24">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-accent/10 blur-xl sm:h-[340px] sm:w-[340px] sm:blur-2xl md:blur-3xl" />
      </div>
      <Container size="narrow" className="text-center">
        <div className="mb-7 flex justify-center">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Download", href: "/download" },
            ]}
          />
        </div>
        <div className="relative mx-auto h-16 w-16 shadow-moon sm:h-20 sm:w-20">
          <Image
            src="/brand/mark.svg"
            alt={`${siteConfig.name} app icon`}
            fill
            sizes="80px"
            className="object-contain"
            priority
          />
        </div>

        <h1 className="mt-6 font-serif text-[1.7rem] leading-tight text-moon xs:text-[2rem] sm:mt-7 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Download DreamMirror
        </h1>
        <p className="mx-auto mt-4 max-w-prose text-[15px] leading-relaxed text-moondim sm:mt-5 sm:text-base md:text-lg">
          DreamMirror is currently distributed directly from this site —{" "}
          <span className="text-moon">APK on Android</span>
          {iosAvailable ? (
            <>
              {" "}and <span className="text-moon">.ipa on iOS</span> via
              sideload. No store account required.
            </>
          ) : (
            <>. iPhone version is on the way.</>
          )}
        </p>

        <div className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-line/50 bg-deep/40 px-4 py-2 text-xs text-star/85 sm:mt-8">
          <ShieldIcon width={13} height={13} className="text-glow" />
          Hosted by us — never modified by third parties.
        </div>
      </Container>
    </section>
  );
}

function PlatformPicker() {
  return (
    <Section
      align="center"
      size="default"
      className="!pt-2 sm:!pt-4"
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        <PlatformCard
          icon={<AndroidIcon width={20} height={20} />}
          name="Android"
          version={apkConfig.version}
          size={apkConfig.size}
          minPlatform={apkConfig.minPlatform}
          ctaLabel={`Download APK · v${apkConfig.version}`}
          ctaHref={apkConfig.url}
          ctaFilename={apkConfig.filename}
          tagline="Direct install — no store account."
          stepsAnchor="#android-install"
          variant="primary"
        />
        {iosAvailable ? (
          <PlatformCard
            icon={<AppleIcon width={20} height={20} />}
            name="iOS"
            version={ipaConfig.version}
            size={ipaConfig.size}
            minPlatform={ipaConfig.minPlatform}
            ctaLabel={`Download IPA · v${ipaConfig.version}`}
            ctaHref={ipaConfig.url}
            ctaFilename={ipaConfig.filename}
            tagline="Sideload required — needs a desktop tool."
            stepsAnchor="#ios-install"
            variant="ghost"
          />
        ) : (
          <ComingSoonIOSCard />
        )}
      </div>
    </Section>
  );
}

type PlatformCardProps = {
  icon: React.ReactNode;
  name: string;
  version: string;
  size: string;
  minPlatform: string;
  ctaLabel: string;
  ctaHref: string;
  ctaFilename: string;
  tagline: string;
  stepsAnchor: string;
  variant: "primary" | "ghost";
};

function PlatformCard(props: PlatformCardProps) {
  return (
    <div className="glass-card flex flex-col p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-glow/15 text-glow">
          {props.icon}
        </span>
        <div>
          <p className="font-serif text-lg text-moon">{props.name}</p>
          <p className="text-xs text-star/80">{props.tagline}</p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
        <div>
          <dt className="text-star/70">Version</dt>
          <dd className="text-moondim">v{props.version}</dd>
        </div>
        <div>
          <dt className="text-star/70">Requires</dt>
          <dd className="text-moondim">{props.minPlatform}</dd>
        </div>
        {props.size ? (
          <div>
            <dt className="text-star/70">Size</dt>
            <dd className="text-moondim">{props.size}</dd>
          </div>
        ) : null}
        <div>
          <dt className="text-star/70">Distribution</dt>
          <dd className="text-moondim">Direct from us</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-col gap-3">
        <Button
          href={props.ctaHref}
          size="lg"
          variant={props.variant}
          external
          download={props.ctaFilename}
          leadingIcon={props.icon}
          trailingIcon={<ArrowRightIcon width={16} height={16} />}
          className="w-full justify-center"
        >
          {props.ctaLabel}
        </Button>
        <a
          href={props.stepsAnchor}
          className="text-center text-xs text-star/85 underline-offset-4 hover:text-moon hover:underline focus-ring rounded-md"
        >
          See {props.name} install steps
        </a>
      </div>
    </div>
  );
}

function ComingSoonIOSCard() {
  return (
    <div className="glass-card flex flex-col p-6 opacity-95 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-line/40 text-star">
          <AppleIcon width={20} height={20} />
        </span>
        <div>
          <p className="font-serif text-lg text-moon">iOS</p>
          <p className="text-xs text-star/80">Coming later — not ready yet.</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-moondim">
        An iPhone version is on the roadmap. We’ll publish it from this page
        when the .ipa is real and signed — no fake countdowns.
      </p>
      <p className="mt-5 text-xs text-star/75">
        Want a heads-up?{" "}
        <a
          href={`mailto:${supportConfig.email}?subject=Notify%20me%20about%20DreamMirror%20for%20iOS`}
          className="text-glow underline-offset-4 hover:underline focus-ring rounded-md"
        >
          Email us
        </a>{" "}
        and we’ll let you know.
      </p>
    </div>
  );
}

function AndroidInstructions() {
  return (
    <Section
      id="android-install"
      eyebrow="Android — install in 3 steps"
      title="Quick, safe, and over in a minute."
      description="DreamMirror installs like any other Android app. Android may ask permission once for direct installs, then it’s done."
      align="center"
      size="narrow"
    >
      <ol className="space-y-3 sm:space-y-4">
        {androidSteps.map((s) => (
          <li
            key={s.step}
            className="glass-card flex items-start gap-4 p-5 sm:gap-5 sm:p-7"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-glow/40 bg-glow/10 font-serif text-base text-glow">
              {s.step}
            </div>
            <div>
              <h3 className="font-serif text-lg text-moon">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-moondim sm:mt-2">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-center text-xs leading-relaxed text-star/80 sm:mt-10">
        After install, you can revoke that permission again in{" "}
        <span className="text-moondim">
          Settings → Apps → Special access → Install unknown apps
        </span>
        . DreamMirror won’t need it after the first install.
      </p>
    </Section>
  );
}

function IOSInstructions() {
  return (
    <Section
      id="ios-install"
      eyebrow="iOS — sideload install"
      title="A bit more setup, but it works."
      description="iOS doesn’t allow installing apps directly from a website. The path below is honest about what that means."
      align="center"
      size="narrow"
    >
      <div className="mb-7 flex items-start gap-3 rounded-2xl border border-glow/30 bg-glow/5 p-4 text-left sm:mb-8 sm:p-5">
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-glow/15 text-glow">
          <InfoIcon width={16} height={16} />
        </span>
        <div className="text-sm leading-relaxed text-moondim">
          <p className="text-moon">Before you start, a heads-up:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-star/60">
            <li>
              You’ll need a Mac or PC for the first install.
            </li>
            <li>
              With a free Apple ID, the install signature lasts about{" "}
              <span className="text-moon">7 days</span>, then DreamMirror needs
              to be re-signed. A paid Apple Developer account extends this to
              about a year.
            </li>
            <li>
              We don’t recommend jailbreaking. The flow below works on a normal
              iPhone.
            </li>
          </ul>
        </div>
      </div>

      <ol className="space-y-3 sm:space-y-4">
        {iosSteps.map((s) => (
          <li
            key={s.step}
            className="glass-card flex items-start gap-4 p-5 sm:gap-5 sm:p-7"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-glow/40 bg-glow/10 font-serif text-base text-glow">
              {s.step}
            </div>
            <div>
              <h3 className="font-serif text-lg text-moon">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-moondim sm:mt-2">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-center text-xs leading-relaxed text-star/80 sm:mt-10">
        We don’t bundle a sideloading tool. Install AltStore or Sideloadly from
        their official websites, then come back here for the .ipa.
      </p>
    </Section>
  );
}

function DownloadFAQ() {
  const items = [
    {
      q: "Is the APK safe?",
      a: "We sign and host the file ourselves on this domain. The same DreamMirror team that builds the app builds and uploads the APK.",
    },
    iosAvailable
      ? {
          q: "Why does iOS need a sideloading tool?",
          a: "iOS doesn’t allow installing apps directly from a website — only the App Store and TestFlight can do that. Sideloading tools like AltStore or Sideloadly let you install your own .ipa with your Apple ID. We use that path while we’re still pre-launch on the App Store.",
        }
      : null,
    iosAvailable
      ? {
          q: "Why does the iOS app stop working after a week?",
          a: "Free Apple IDs only sign apps for about 7 days. To keep DreamMirror installed, re-sign it through your sideloading tool, or use a paid Apple Developer account, which extends the signature to a year.",
        }
      : null,
    {
      q: "Will I get updates automatically?",
      a: "Not while we are distributing direct APK / IPA. When a new version is out, we’ll update this page — re-download to upgrade. Your dreams stay safe in your account.",
    },
    {
      q: "Why not the app stores yet?",
      a: "We’re finishing review prerequisites and want the first store release to be polished. Until then, direct install keeps DreamMirror available without compromise.",
    },
    {
      q: "Something went wrong with the install.",
      a: `Write to ${supportConfig.email} with your phone model and OS version. We’ll respond as a person, not a ticket bot.`,
    },
  ].filter(Boolean) as ReadonlyArray<{ q: string; a: string }>;

  return (
    <Section
      eyebrow="Download FAQ"
      title="A few things people usually ask."
      align="center"
      size="narrow"
    >
      <ul className="divide-y divide-line/40 rounded-2xl border border-line/50 bg-surface/70">
        {items.map((item, idx) => (
          <li key={idx}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 focus-ring sm:items-center sm:gap-6 sm:px-7 sm:py-6">
                <span className="font-serif text-base leading-snug text-moon sm:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/60 bg-deep/70 text-glow transition-transform duration-300 group-open:rotate-45 sm:mt-0"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-[14.5px] leading-relaxed text-moondim sm:px-7 sm:pb-7 sm:text-[15px]">
                {item.a}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
