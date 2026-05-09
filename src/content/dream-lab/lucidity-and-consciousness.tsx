import { Callout, Prose } from "@/components/prose";
import type { DreamLabTopicMeta } from "@/content/types";

export const meta: DreamLabTopicMeta = {
  slug: "lucidity-and-consciousness",
  title: "Lucidity and consciousness",
  publishedAt: "2026-05-04",
  description:
    "Lucid dreaming in the lab, metacognition during sleep, and what altered awareness might tell us about the mind — without hype.",
  keywords: [
    "lucid dreaming research",
    "consciousness and dreams",
    "lucid dreaming science",
    "metacognition sleep",
  ],
};

export default function Body() {
  return (
    <Prose>
      <p>
        A lucid dream is often defined as a dream in which you know you are
        dreaming while it is happening. Reports exist across history; modern
        sleep labs have tried to verify lucidity with pre-arranged eye
        signals — a fragile but fascinating bridge between first-person report
        and third-person measurement.
      </p>

      <h2 id="lab">What labs can test</h2>
      <p>
        Controlled studies look at induction techniques, frequency
        differences between individuals, and overlaps with sleep stages.
        Results vary widely by population and method. Lucidity is real enough
        in experience for many people; how common, teachable, or beneficial
        it is remains debated.
      </p>

      <h2 id="consciousness">Consciousness puzzles</h2>
      <p>
        Philosophers use dreams when discussing imagination, selfhood, and
        skepticism. Neuroscientists ask which brain networks support reflective
        awareness during sleep. The two lines of inquiry do not always meet —
        but both show up in Dream Lab threads.
      </p>

      <h2 id="safety">Safety and sleep quality</h2>
      <p>
        Some induction practices disrupt sleep architecture for some people.
        If you experiment, treat sleep debt as a real cost and listen to your
        body — especially if you use alarms at odd hours.
      </p>

      <Callout label="Not a how-to zone">
        This lane is for ideas and evidence, not step-by-step induction
        coaching. Share resources, not pressure.
      </Callout>
    </Prose>
  );
}
