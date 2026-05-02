import Link from "next/link";

import { Section } from "@/components/section";
import { ArrowRightIcon } from "@/components/icons";
import {
  BellIcon,
  FeatherIcon,
  LockIcon,
  MoonIcon,
  PatternIcon,
  SparkleIcon,
} from "@/components/icons";

const features = [
  {
    icon: FeatherIcon,
    title: "Capture dreams before they fade",
    body:
      "Open the app the moment you wake. Type, dictate, or drift through prompts — without judgement, autocomplete chatter, or a counter ticking next to your words.",
  },
  {
    icon: SparkleIcon,
    title: "Gentle AI reflections",
    body:
      "Ask for an optional reflection and DreamMirror responds in calm, careful language. Reflections are possibilities for your journal — never diagnoses, predictions, or advice.",
    href: "/features/ai-reflections",
  },
  {
    icon: PatternIcon,
    title: "Recurring patterns over time",
    body:
      "Symbols, places, people, and feelings quietly cluster as you write. Your insights view shows what keeps coming back — without telling you what it ‘means’.",
    href: "/features/dream-patterns",
  },
  {
    icon: BellIcon,
    title: "Morning reminders",
    body:
      "A single, soft nudge in the morning so dreams stand a chance against the day. Reminders live on your device. Skip them whenever you want.",
    href: "/features/morning-reminders",
  },
  {
    icon: LockIcon,
    title: "Private, calm journaling",
    body:
      "Lock the app with a device PIN, hide previews from lists, and mark sensitive entries as private. Your dream data is never sold and never used for ads.",
    href: "/features/private-journal",
  },
  {
    icon: MoonIcon,
    title: "Designed for the night",
    body:
      "Dark by default, with a quiet serif voice and warm moonlit accents. DreamMirror is built to feel kind at 3am — and still beautiful at sunrise.",
  },
] as const;

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="What it does"
      title={<>A small, considered space for your dreams.</>}
      description="Six things DreamMirror tries to do well, instead of a hundred things badly. Everything below is built into the Android app today."
      align="center"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard
            key={f.title}
            icon={<f.icon width={20} height={20} />}
            title={f.title}
            body={f.body}
            href={"href" in f ? f.href : undefined}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          href="/features"
          className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-deep/70 px-5 py-2.5 text-sm text-moon transition-colors hover:border-accent/60 focus-ring"
        >
          See all features
          <ArrowRightIcon width={14} height={14} />
        </Link>
      </div>
    </Section>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href?: string;
}) {
  const Body = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line/60 bg-deep/80 text-glow transition-colors duration-300 group-hover:text-accent sm:h-11 sm:w-11">
        {icon}
      </div>
      <h3 className="mt-4 font-serif text-lg text-moon sm:mt-5 sm:text-xl">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-moondim sm:mt-3">
        {body}
      </p>
      {href ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider2 text-glow transition-colors group-hover:text-accent">
          Learn more
          <ArrowRightIcon width={12} height={12} />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="glass-card group relative flex h-full flex-col p-5 transition-colors duration-300 hover:border-accent/40 focus-ring sm:p-6 md:p-7"
      >
        {Body}
      </Link>
    );
  }

  return (
    <article className="glass-card group relative h-full p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6 md:p-7">
      {Body}
    </article>
  );
}
