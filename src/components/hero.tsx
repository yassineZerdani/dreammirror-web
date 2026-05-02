import Image from "next/image";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { PhoneMockup } from "@/components/phone-mockup";
import {
  AndroidIcon,
  AppleIcon,
  ArrowRightIcon,
  ShieldIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
      <BackgroundDecor />

      <Container className="relative">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-glow animate-shimmer" />
              An AI dream journal — gently designed
            </span>
            <h1 className="mt-5 font-serif text-[2.25rem] leading-[1.06] text-moon sm:mt-6 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Catch your dreams{" "}
              <span className="bg-gradient-to-br from-moon via-moon to-accent bg-clip-text text-transparent">
                before they fade.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-moondim sm:mt-6 sm:text-base md:text-lg">
              {siteConfig.name} is a calm, private journal for the dreams you
              don’t want to lose. Write them down in your own words, then —
              if you want — read a quiet AI reflection that helps you notice
              patterns, not predict your future.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button
                href="/download"
                size="lg"
                leadingIcon={<AndroidIcon width={18} height={18} />}
                trailingIcon={<ArrowRightIcon width={16} height={16} />}
                className="w-full justify-center sm:w-auto"
              >
                Download for Android
              </Button>
              <Button
                href="/privacy"
                variant="secondary"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                View privacy policy
              </Button>
            </div>

            <p className="mt-3 text-xs text-star/80 sm:mt-4">
              <a
                href="/download#ios-install"
                className="inline-flex items-center gap-1.5 rounded-md hover:text-moon focus-ring underline-offset-4 hover:underline"
              >
                <AppleIcon width={13} height={13} />
                {siteConfig.platforms.ios.available
                  ? "iOS install guide"
                  : "iOS — coming later"}
              </a>
            </p>

            <ul className="mt-8 flex flex-col gap-2.5 text-xs text-star/85 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <li className="inline-flex items-center gap-2">
                <ShieldIcon width={14} height={14} className="text-glow" />
                Private by design
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-star/60" />
                No ads. No dream data sold.
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-star/60" />
                Reflections are reflective — not medical or predictive
              </li>
            </ul>
          </div>

          <div className="relative lg:col-span-5 animate-fade-in">
            <div className="relative mx-auto max-w-md">
              <PhoneMockup variant="home" />
              {/* Tiny floating icon over the phone for life — desktop only. */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-6 top-12 hidden lg:block"
              >
                <div className="relative h-12 w-12 animate-float-slow">
                  <Image
                    src="/brand/mark.svg"
                    alt=""
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[90px] sm:-top-40 sm:-left-32 sm:h-[460px] sm:w-[460px] sm:blur-[120px] sm:animate-drift" />
      <div className="absolute top-40 right-[-90px] h-[280px] w-[280px] rounded-full bg-rose/[0.07] blur-[90px] sm:right-[-120px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] sm:animate-drift" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line/60 to-transparent" />
      {/* Faint star field — fewer + simpler on mobile to save paint cost. */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.10]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 28 }).map((_, i) => {
          const x = (i * 37) % 100;
          const y = (i * 53) % 100;
          const r = ((i % 3) + 1) * 0.18;
          return <circle key={i} cx={x} cy={y} r={r} fill="#9DB4C8" />;
        })}
      </svg>
    </div>
  );
}
