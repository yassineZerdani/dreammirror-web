"use client";

import { Section } from "@/components/section";
import { homeFaqItems } from "@/content/home-faq";

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Honest answers to the common questions."
      description="If something’s missing here, write to us — we’d rather answer once, plainly, than market around it."
      align="center"
      size="narrow"
    >
      <ul className="divide-y divide-line/40 rounded-2xl border border-line/50 bg-surface/40 backdrop-blur">
        {homeFaqItems.map((item, idx) => (
          <li key={idx}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 focus-ring sm:items-center sm:gap-6 sm:px-7 sm:py-6">
                <span className="font-serif text-base leading-snug text-moon sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/60 bg-deep/70 text-glow transition-transform duration-300 group-open:rotate-45 sm:mt-0"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-[14.5px] leading-relaxed text-moondim sm:px-7 sm:pb-7 sm:text-[15px]">
                {item.answer}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
