import { Callout, Prose } from "@/components/prose";
import type { DreamLabTopicMeta } from "@/content/types";

export const meta: DreamLabTopicMeta = {
  slug: "culture-and-tradition",
  title: "Culture and tradition",
  publishedAt: "2026-05-04",
  description:
    "How different societies have listened to dreams — from oracles to ancestors — without flattening them into one universal rulebook.",
  keywords: [
    "cultural dreams",
    "anthropology of dreaming",
    "dream traditions",
    "cross cultural dreams",
  ],
};

export default function Body() {
  return (
    <Prose>
      <p>
        Anthropologists and historians show that dreams have been taken
        seriously as social signals, spiritual encounters, jokes, warnings,
        and private experiences — sometimes all at once within one
        community. No culture “owns” the correct frame.
      </p>

      <h2 id="authority">Authority and interpretation</h2>
      <p>
        In some settings, certain people (elders, healers, priests) were
        expected to interpret dreams for others. In others, dreams stayed
        mostly inside the household. Power shapes who gets to name what a
        dream <em>is</em> — a theme worth noticing when we talk online today.
      </p>

      <h2 id="comparison">Comparison without flattening</h2>
      <p>
        Cross-cultural study can deepen humility: what feels obvious in one
        language may be untranslatable in another. It can also tempt
        overgeneralization (“Indigenous people believe X”) that erases
        diversity. Good conversation holds both specificity and respect.
      </p>

      <h2 id="modern">Living between worlds</h2>
      <p>
        Many people today inherit multiple traditions — scientific,
        religious, secular, folk — and patch them together privately. Dream
        Lab can be a place to describe that stitching without demanding
        allegiance to a single story.
      </p>

      <Callout label="Respect the living sources">
        When citing traditions you do not practice, prefer firsthand accounts
        and scholarly work over stereotypes. Correct gently, cite generously.
      </Callout>
    </Prose>
  );
}
