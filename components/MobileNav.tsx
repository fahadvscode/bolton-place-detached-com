"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-border bg-surface-card px-3 text-sm font-semibold text-brand-primary"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full z-50 max-h-[min(80dvh,calc(100dvh-4rem))] overflow-y-auto border-b border-border bg-surface px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-sm"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-[44px] items-center text-[16px] font-medium text-text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/register"
                  className="btn-primary mt-2 w-full"
                  onClick={() => setOpen(false)}
                >
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
