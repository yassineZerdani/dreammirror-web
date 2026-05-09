import { Callout, Prose } from "@/components/prose";
import type { DreamLabTopicMeta } from "@/content/types";

export const meta: DreamLabTopicMeta = {
  slug: "psychology-and-symbolism",
  title: "Psychology and symbolism",
  publishedAt: "2026-05-04",
  description:
    "From Freud’s wishfulfillment model to Jung’s collective imagery — interpretive traditions as lenses, not verdicts on your dream.",
  keywords: [
    "psychology of dreams",
    "Jung dreams",
    "Freud dreams",
    "dream symbolism theories",
    "dream interpretation psychology",
  ],
};

export default function Body() {
  return (
    <Prose>
      <p>
        Psychological approaches treat dreams as meaningful{" "}
        <em>to the dreamer</em> in ways that can be explored in therapy,
        writing, or conversation. They are theories about how minds organize
        experience — not single keys that unlock a hidden message.
      </p>

      <h2 id="psychoanalytic">Psychoanalytic roots</h2>
      <p>
        Early psychoanalytic work emphasized disguise, conflict, and material
        from waking life resurfacing in metaphorical form. Later schools
        softened or reworked those claims. Historians of psychology disagree
        about how literally to read the classics today; the useful thread is
        that dreams can echo concerns we have not fully articulated.
      </p>

      <h2 id="jungian">Archetypes and images</h2>
      <p>
        Jungian-influenced thinkers describe recurring figures and motifs as
        part of a shared human imagination. Whether those patterns are
        “collective” in a literal sense is contested; what resonates for many
        people is that dreams borrow from myth, film, religion, and family
        stories — the cultural soup we all swim in.
      </p>

      <h2 id="modern-clinical">Modern clinical views</h2>
      <p>
        Contemporary therapists often blend approaches: dreams as narratives
        worth curiosity, as checkpoints for mood, or as neutral content that
        only gains meaning in dialogue. None of these require you to believe
        dreams predict the future.
      </p>

      <Callout label="DreamMirror’s stance">
        The app does not offer dream dictionaries or authoritative
        interpretations. Dream Lab is a place to compare{" "}
        <em>theories</em>, not to tell strangers what their dream “really
        means.”
      </Callout>
    </Prose>
  );
}
