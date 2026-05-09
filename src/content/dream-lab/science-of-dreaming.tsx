import { Callout, Prose } from "@/components/prose";
import type { DreamLabTopicMeta } from "@/content/types";

export const meta: DreamLabTopicMeta = {
  slug: "science-of-dreaming",
  title: "The science of dreaming",
  publishedAt: "2026-05-04",
  description:
    "REM sleep, memory, and what researchers can actually measure about dreams — a sober map of the lab side of the conversation.",
  keywords: [
    "science of dreams",
    "REM sleep dreaming",
    "dream research",
    "dream neuroscience",
    "sleep and memory",
  ],
};

export default function Body() {
  return (
    <Prose>
      <p>
        Dream science is not one tidy story. It is a patchwork of sleep
        staging, brain imaging, self-report, and clever behavioral tasks —
        each with limits. Still, there are a few ideas almost everyone in
        the field agrees are worth taking seriously.
      </p>

      <h2 id="rem">REM and the night&apos;s architecture</h2>
      <p>
        Sleep is divided into cycles. Rapid Eye Movement (REM) periods tend
        toward longer, denser dreams, especially in the second half of the
        night. Non-REM stages carry their own mental activity, sometimes
        reported as thought-like or fragmented imagery — not the Hollywood
        version of a “dream,” but not empty either.
      </p>

      <h2 id="memory">Dreams and memory — what we can say</h2>
      <p>
        There is ongoing debate about whether dreaming{" "}
        <em>causes</em> memory consolidation or is more of a side effect of
        processes that also support memory. What is clearer is that sleep as
        a whole matters for learning and emotional regulation, and dreams are
        one window into that machinery — not the only one.
      </p>

      <h2 id="measurement">Why measuring dreams is hard</h2>
      <p>
        The gold standard for content is still what someone remembers after
        waking. That introduces selection bias: vivid, emotional, or
        story-like dreams are easier to recall. Lab awakenings help, but they
        interrupt sleep and cannot capture a whole life of dreaming. Every
        grand claim should be weighed against that constraint.
      </p>

      <Callout label="Not medical advice">
        This page summarizes scientific themes for discussion. It does not
        diagnose sleep disorders or replace a clinician.
      </Callout>
    </Prose>
  );
}
