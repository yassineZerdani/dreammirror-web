import { Section } from "@/components/section";

const steps = [
  {
    number: "01",
    title: "Wake. Open. Write.",
    body:
      "A morning reminder gives you a soft cue. Open DreamMirror and put the dream — even a fragment — into your own words.",
  },
  {
    number: "02",
    title: "Tag what mattered",
    body:
      "Add a few quiet tags: people, places, feelings, symbols. They’re yours — no taxonomy is forced on you.",
  },
  {
    number: "03",
    title: "Optional reflection",
    body:
      "Ask DreamMirror for a reflection if you want one. It will read carefully, and answer in language that explores rather than declares.",
  },
  {
    number: "04",
    title: "Watch the patterns settle",
    body:
      "Over weeks, the Insights view surfaces what keeps returning — without telling you what it means. That part stays yours.",
  },
] as const;

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="Four small moments — that’s the whole app."
      description="DreamMirror is intentionally narrow. There’s no feed, no streak guilt, no infinite scroll. Just the loop below, repeated whenever your nights have something to say."
    >
      <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {steps.map((step, idx) => (
          <li
            key={step.number}
            className="glass-card relative overflow-hidden p-6 sm:p-7 md:p-8"
          >
            <div className="absolute right-5 top-5 font-serif text-4xl leading-none text-line/80 sm:right-6 sm:top-6 sm:text-5xl">
              {step.number}
            </div>
            <h3 className="pr-12 font-serif text-lg text-moon sm:text-xl">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-moondim">
              {step.body}
            </p>
            {idx < steps.length - 1 ? (
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line/50 to-transparent"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
