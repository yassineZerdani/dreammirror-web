import { cn } from "@/lib/cn";

type PhoneMockupProps = {
  variant?: "home" | "entry" | "insights";
  className?: string;
  caption?: string;
};

/**
 * Tasteful phone-mockup. We don't use fake screenshots — these are honest
 * visual previews of the real screens (Home, Dream Entry, Insights), built
 * with the same brand tokens as the mobile app itself.
 */
export function PhoneMockup({ variant = "home", className, caption }: PhoneMockupProps) {
  return (
    <figure className={cn("relative", className)}>
      <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[300px]">
        {/* Glow halo behind device */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 rounded-[100px] bg-[radial-gradient(ellipse_at_center,_rgba(139,157,195,0.18),_transparent_60%)] blur-xl sm:-inset-12 sm:rounded-[120px] sm:blur-2xl"
        />

        <div className="relative aspect-[9/19] rounded-[40px] border border-line/80 bg-void p-2 shadow-moon moon-ring sm:rounded-[44px]">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-void sm:h-5 sm:w-24" />

          <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0d1018] via-[#0a0c12] to-[#050608] sm:rounded-[36px]">
            {variant === "home" ? <HomeContent /> : null}
            {variant === "entry" ? <EntryContent /> : null}
            {variant === "insights" ? <InsightsContent /> : null}
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-5 text-center text-xs uppercase tracking-wider2 text-star/80 sm:mt-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function HomeContent() {
  return (
    <div className="flex h-full flex-col px-5 pt-10">
      <p className="text-[8.5px] uppercase tracking-wider2 text-star/80">
        Friday · May 1
      </p>
      <h3 className="mt-2 font-serif text-[19px] leading-tight text-moon">
        What stayed with you?
      </h3>
      <p className="mt-1.5 font-serif text-[10px] leading-snug text-moondim/90">
        When you’re ready, give it a quiet page — no rush, no audience.
      </p>

      <div className="mt-3 rounded-full bg-moon py-2 text-center text-[11px] font-medium text-night">
        Write a dream
      </div>

      <div className="mt-2.5 rounded-xl border border-line/60 bg-deep/80 px-3 py-2.5">
        <p className="text-[8px] uppercase tracking-wider2 text-glow">Go Pro</p>
        <p className="mt-0.5 text-[9px] leading-snug text-star">
          Deeper reflections, letters, export, and custom styles
        </p>
      </div>

      <div className="my-3 h-px bg-line/40" />
      <p className="text-[8.5px] uppercase tracking-wider2 text-glow">Recent</p>
      <p className="mt-0.5 text-[9px] text-star/80">
        Tap a card to open; pull down to refresh.
      </p>

      <div className="mt-3 space-y-2.5">
        <DreamCard
          date="Apr 28"
          title="The library at dusk"
          excerpt="Long shelves taller than buildings. Every book opened to a page already underlined."
          tags={["library", "search"]}
        />
        <DreamCard
          date="Apr 26"
          title="Returning to a coast I’d never seen"
          excerpt="The water was warm and I knew the names of three of the boats."
          tags={["sea", "calm"]}
        />
        <DreamCard
          date="Apr 21"
          title="A staircase that kept going"
          excerpt="With each landing the air got softer. Someone was waiting at the top."
          tags={["climb"]}
        />
      </div>
    </div>
  );
}

function DreamCard({
  date,
  title,
  excerpt,
  tags,
}: {
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}) {
  return (
    <div className="rounded-xl border border-line/40 bg-surface/80 px-3 py-2.5">
      <p className="text-[7.5px] uppercase tracking-wider2 text-star/80">
        {date}
      </p>
      <p className="mt-0.5 font-serif text-[11px] leading-snug text-moon">
        {title}
      </p>
      <p className="mt-1 text-[9px] leading-snug text-moondim/90 line-clamp-2">
        {excerpt}
      </p>
      <div className="mt-1.5 flex flex-wrap gap-1">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line/50 bg-deep/70 px-1.5 py-px text-[7.5px] text-star"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function EntryContent() {
  return (
    <div className="flex h-full flex-col px-5 pt-10">
      <div className="flex items-center justify-between">
        <p className="text-[8.5px] uppercase tracking-wider2 text-star/80">
          New entry
        </p>
        <p className="text-[8.5px] text-star/70">2:14 AM</p>
      </div>
      <h3 className="mt-2 font-serif text-[19px] leading-tight text-moon">
        The library at dusk
      </h3>

      <div className="mt-3 rounded-2xl border border-line/40 bg-surface/70 p-3">
        <p className="font-serif text-[12px] leading-relaxed text-moon">
          Long shelves taller than buildings. Every book I pulled was already
          underlined in someone else’s pencil.{" "}
          <span className="text-moondim">
            I kept reading lines I felt I had written but couldn’t remember
            writing. Outside, the city was missing one street.
          </span>
        </p>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="rounded-full border border-line/50 bg-deep/70 px-2.5 py-1 text-[9px] text-star">
          library
        </span>
        <span className="rounded-full border border-line/50 bg-deep/70 px-2.5 py-1 text-[9px] text-star">
          search
        </span>
        <span className="rounded-full border border-line/50 bg-deep/70 px-2.5 py-1 text-[9px] text-star">
          quiet
        </span>
      </div>

      <div className="mt-3 rounded-2xl border border-line/40 bg-deep/60 p-3">
        <p className="text-[8.5px] uppercase tracking-wider2 text-glow">
          Reflection
        </p>
        <p className="mt-1.5 font-serif text-[10.5px] leading-relaxed text-moondim">
          A familiar reading-room shape often shows up when something feels
          like it’s asking to be re-read, gently. Worth noticing what you keep
          returning to this week.
        </p>
        <p className="mt-2 text-[8px] leading-snug text-star/80">
          Not a diagnosis. Not a prediction. Just a possibility for your
          journal.
        </p>
      </div>

      <div className="mt-auto pb-4 pt-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-line/60 bg-deep/70 px-3 py-1.5 text-[9px] text-moondim">
            Save draft
          </span>
          <span className="rounded-full bg-moon px-3 py-1.5 text-[9px] font-medium text-night">
            Reflect
          </span>
        </div>
      </div>
    </div>
  );
}

function InsightsContent() {
  const bars = [
    { label: "water", v: 0.92 },
    { label: "library", v: 0.74 },
    { label: "stairs", v: 0.61 },
    { label: "letter", v: 0.48 },
    { label: "house", v: 0.34 },
  ];
  const trend = [0.32, 0.42, 0.38, 0.55, 0.5, 0.62, 0.71];

  return (
    <div className="flex h-full flex-col px-5 pt-10">
      <p className="text-[8.5px] uppercase tracking-wider2 text-star/80">
        Last 30 days
      </p>
      <h3 className="mt-2 font-serif text-[19px] leading-tight text-moon">
        Patterns
      </h3>

      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {[
          { k: "Dreams", v: "21" },
          { k: "Reflections", v: "14" },
          { k: "Streak", v: "8d" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-xl border border-line/40 bg-surface/80 px-2 py-1.5"
          >
            <p className="text-[7.5px] uppercase tracking-wider2 text-star/80">
              {s.k}
            </p>
            <p className="mt-0.5 font-serif text-[14px] text-moon">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-line/40 bg-surface/80 p-3">
        <p className="text-[8.5px] uppercase tracking-wider2 text-glow">
          Top symbols
        </p>
        <ul className="mt-2 space-y-1.5">
          {bars.map((b) => (
            <li key={b.label} className="flex items-center gap-2">
              <span className="w-14 text-[9px] text-moondim">{b.label}</span>
              <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-line/40">
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-glow to-accent"
                  style={{ width: `${b.v * 100}%` }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 rounded-xl border border-line/40 bg-surface/80 p-3">
        <p className="text-[8.5px] uppercase tracking-wider2 text-glow">
          Emotional trend
        </p>
        <svg
          viewBox="0 0 100 30"
          className="mt-2 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="trend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B9DC3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B9DC3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M0 ${30 - trend[0] * 28} ${trend
              .map(
                (v, i) =>
                  `L ${(i / (trend.length - 1)) * 100} ${30 - v * 28}`,
              )
              .join(" ")} L 100 30 L 0 30 Z`}
            fill="url(#trend)"
          />
          <path
            d={`M0 ${30 - trend[0] * 28} ${trend
              .map(
                (v, i) =>
                  `L ${(i / (trend.length - 1)) * 100} ${30 - v * 28}`,
              )
              .join(" ")}`}
            fill="none"
            stroke="#9DB4C8"
            strokeWidth="0.6"
          />
        </svg>
        <p className="mt-2 text-[8px] leading-snug text-star/80">
          Patterns describe your entries over time. Not a prediction or proof
          of meaning.
        </p>
      </div>
    </div>
  );
}
