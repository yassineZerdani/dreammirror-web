import { Button } from "@/components/button";
import { Container } from "@/components/container";
import {
  AndroidIcon,
  AppleIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { apkConfig, siteConfig } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-gradient-to-br from-deep/90 via-mist/70 to-deep/90 p-7 moon-ring sm:rounded-3xl sm:p-10 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/3 h-48 w-48 rounded-full bg-accent/10 blur-2xl sm:h-64 sm:w-64 sm:blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-rose/10 blur-2xl sm:h-64 sm:w-64 sm:blur-3xl"
          />

          <div className="relative max-w-2xl">
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-glow" />
              Ready when you are
            </span>
            <h2 className="mt-5 font-serif text-[1.75rem] leading-tight text-moon sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
              Tonight’s dream is worth keeping.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-moondim sm:mt-5 sm:text-base md:text-lg">
              Install DreamMirror and it will be waiting in the morning —
              quiet, private, and ready to listen.
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
              <span className="text-xs text-star/80">
                v{apkConfig.version} · {apkConfig.minPlatform}
              </span>
            </div>
            <p className="mt-3 text-xs text-star/80 sm:mt-4">
              <a
                href="/download#ios-install"
                className="inline-flex items-center gap-1.5 rounded-md hover:text-moon focus-ring underline-offset-4 hover:underline"
              >
                <AppleIcon width={13} height={13} />
                {siteConfig.platforms.ios.available
                  ? "Or sideload on iOS"
                  : "iOS — coming later"}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
