"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { siteConfig, navLinks } from "@/lib/site";
import { cn } from "@/lib/cn";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-line/40 bg-night/75 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-ring rounded-lg sm:gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="relative h-8 w-8 sm:h-9 sm:w-9">
            <Image
              src="/brand/mark.svg"
              alt=""
              fill
              priority
              sizes="36px"
              className="object-contain"
            />
          </span>
          <span className="font-serif text-base tracking-wide text-moon sm:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-moondim transition-colors hover:text-moon focus-ring rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" size="md" href="/privacy">
            Privacy
          </Button>
          <Button
            variant="primary"
            size="md"
            href="/download"
            trailingIcon={<ArrowIcon />}
          >
            Download
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line/70 bg-deep/70 text-moon focus-ring"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            aria-hidden
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden border-t border-line/40 bg-night/95 backdrop-blur-xl transition-[max-height] duration-300",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <div className="px-5 py-6 sm:px-8">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-moon hover:bg-deep/80"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 mx-3 h-px bg-line/40" aria-hidden />
            <Link
              href="/privacy"
              className="rounded-lg px-3 py-3 text-base text-moondim hover:bg-deep/80 hover:text-moon"
            >
              Privacy policy
            </Link>
            <Link
              href="/delete-account"
              className="rounded-lg px-3 py-3 text-base text-moondim hover:bg-deep/80 hover:text-moon"
            >
              Delete account
            </Link>
            <Link
              href="/terms"
              className="rounded-lg px-3 py-3 text-base text-moondim hover:bg-deep/80 hover:text-moon"
            >
              Terms
            </Link>
          </nav>
          <div className="mt-6">
            <Button
              variant="primary"
              size="lg"
              href="/download"
              className="w-full justify-center"
              trailingIcon={<ArrowIcon />}
            >
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
