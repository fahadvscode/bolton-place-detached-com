"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
          className="absolute left-0 right-0 top-full border-b border-border bg-surface px-5 py-4 shadow-sm"
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
