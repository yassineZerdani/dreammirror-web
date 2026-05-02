import { Section } from "@/components/section";
import { CheckIcon } from "@/components/icons";

const items = [
  {
    title: "Built to feel kind, not clinical",
    body:
      "The voice of the app is calm, considered, and never alarmist. Reflections never claim to know what you’re feeling.",
  },
  {
    title: "Honest about what AI is",
    body:
      "Reflections are reflective insights. Not medical advice. Not diagnoses. Not predictions. We say so in the app and we say so here.",
  },
  {
    title: "Your nights stay yours",
    body:
      "Entries sync only to your account on our servers. Dream data is never sold and never used to train shared models or target ads.",
  },
  {
    title: "You can leave with everything",
    body:
      "Delete your account at any time and we erase your profile, dreams, analyses, and reports from our systems.",
  },
] as const;

export function WhyDreamMirror() {
  return (
    <Section
      id="why"
      eyebrow="Why DreamMirror"
      title="A quieter relationship with your own dreams."
      description="There are a lot of dream apps. Most of them want to tell you what your dreams mean, or sell you a script for your future. DreamMirror does something smaller, on purpose."
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass-card flex gap-4 p-5 sm:p-6 md:p-7"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-glow/30 bg-glow/10 text-glow">
              <CheckIcon width={16} height={16} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-moon">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-moondim">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
