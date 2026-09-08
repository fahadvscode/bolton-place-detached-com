"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/content";
import { WordmarkLink } from "./Wordmark";
import { MobileNav } from "./MobileNav";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-surface/95 backdrop-blur-sm"
          : "border-b border-transparent bg-surface/80"
      }`}
    >
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3">
        <WordmarkLink />
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-text-primary hover:text-brand-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/register" className="btn-primary btn-compact">
            Register
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
