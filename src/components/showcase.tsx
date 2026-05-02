import { Section } from "@/components/section";
import { PhoneMockup } from "@/components/phone-mockup";

export function Showcase() {
  return (
    <Section
      id="showcase"
      eyebrow="Inside the app"
      title="A quiet place to write down your night."
      description="Three of the screens you’ll use most — built around words, not noise. Dark mode is the only mode."
      align="center"
      className="bg-gradient-to-b from-transparent via-deep/30 to-transparent"
    >
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        <PhoneMockup variant="home" caption="Home — what stayed with you?" />
        <PhoneMockup
          variant="entry"
          caption="Entry — write, tag, reflect"
          className="lg:translate-y-6"
        />
        {/* Third phone spans both columns on tablet so it doesn't sit alone. */}
        <PhoneMockup
          variant="insights"
          caption="Insights — quiet patterns"
          className="sm:col-span-2 lg:col-span-1"
        />
      </div>

      <p className="mx-auto mt-12 max-w-prose text-center text-xs leading-relaxed text-star/80 sm:mt-14">
        The screens above are rendered with the app’s real design tokens —
        the same fonts, palette, and copy you’ll see after install. We don’t
        fake screenshots, and we don’t embellish.
      </p>
    </Section>
  );
}
