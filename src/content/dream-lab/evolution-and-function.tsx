import { Callout, Prose } from "@/components/prose";
import type { DreamLabTopicMeta } from "@/content/types";

export const meta: DreamLabTopicMeta = {
  slug: "evolution-and-function",
  title: "Evolution and possible functions",
  publishedAt: "2026-05-04",
  description:
    "Threat simulation, overnight therapy, creativity priming — evolutionary and cognitive hypotheses about why dreaming persisted.",
  keywords: [
    "why do we dream",
    "evolution of dreaming",
    "threat simulation theory dreams",
    "function of dreams",
  ],
};

export default function Body() {
  return (
    <Prose>
      <p>
        If dreaming is costly — extra brain activity, disrupted sleep when
        nightmares intrude — evolutionary thinkers ask what benefit might
        balance that cost. No consensus exists; what follows are influential
        <em> hypotheses</em>, each with supporters and critics.
      </p>

      <h2 id="threat">Threat rehearsal and simulation</h2>
      <p>
        Some researchers suggest dreams disproportionately feature pursuit,
        aggression, and social tension because they help us rehearse
        responses to real risks. Others note the evidence is mixed and that
        dream content is also whimsical, mundane, or absurd — not only
        survival drama.
      </p>

      <h2 id="emotion">Emotional processing</h2>
      <p>
        Another line of thought links REM-related dreaming to dampening
        emotional charge around memories. Sleep neuroscience has interesting
        correlates, but jumping from brain scans to “dreams heal trauma” is
        still a long leap. Nuance matters.
      </p>

      <h2 id="creativity">Creativity and problem solving</h2>
      <p>
        Artists and scientists sometimes report insights after sleep. Whether
        dreams <em>cause</em> creativity or simply coincide with rest is hard
        to disentangle. The anecdotes are old; rigorous tests are fewer.
      </p>

      <Callout label="Theories, not facts of purpose">
        “Why we dream” is still open. Treat bold claims — especially viral
        ones — with the same skepticism you would bring to any complex science
        story.
      </Callout>
    </Prose>
  );
}
