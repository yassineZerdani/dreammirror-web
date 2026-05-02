import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { footerLinks, siteConfig, supportConfig } from "@/lib/site";

type FooterColumnProps = {
  title: string;
  links: ReadonlyArray<{ readonly href: string; readonly label: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="lg:col-span-2">
      <h3 className="font-sans text-xs uppercase tracking-wider2 text-glow">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-moondim transition-colors hover:text-moon"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-line/40 bg-void/40 sm:mt-24">
      <Container className="py-12 sm:py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="relative h-9 w-9">
                <Image
                  src="/brand/mark.svg"
                  alt=""
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </span>
              <span className="font-serif text-lg text-moon">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-moondim">
              {siteConfig.tagline} A calm, private space to keep what your
              nights bring you.
            </p>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-star/80 sm:mt-6">
              Reflections in DreamMirror are reflective insights — not medical
              advice, diagnoses, or predictions.
            </p>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Features" links={footerLinks.features} />
          <FooterColumn title="Journal" links={footerLinks.journal} />

          <div className="sm:col-span-2 lg:col-span-12">
            <div className="hairline" />
          </div>

          <div className="sm:col-span-2 lg:col-span-12 lg:flex lg:items-end lg:gap-12">
            <div className="lg:flex-1">
              <h3 className="font-sans text-xs uppercase tracking-wider2 text-glow">
                Trust
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-moondim transition-colors hover:text-moon"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${supportConfig.email}`}
                    className="break-all text-sm text-moondim transition-colors hover:text-moon"
                  >
                    {supportConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 hairline sm:mt-14" />

        <div className="mt-7 flex flex-col gap-3 text-xs text-star/70 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legal.company}. All rights reserved.
          </p>
          <p>
            Built with care for people who want to remember their dreams.
          </p>
        </div>
      </Container>
    </footer>
  );
}
