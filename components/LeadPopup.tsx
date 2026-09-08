"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LeadForm } from "./LeadForm";
import { REGISTRATION_IMAGE } from "@/lib/content";

const STORAGE_KEY = "bpd_popup_dismissed";
const DELAY_MS = 8000;
const SKIP = new Set(["/thank-you", "/register", "/privacy", "/terms"]);

export function LeadPopup() {
  const pathname = usePathname();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (SKIP.has(pathname)) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* still show once this load */
    }

    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);

    const onExit = (event: MouseEvent) => {
      if (event.relatedTarget) return;
      if (event.clientY > 0) return;
      setOpen(true);
    };
    document.addEventListener("mouseout", onExit);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onExit);
    };
  }, [pathname]);

  function dismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.popup = "open";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      delete document.body.dataset.popup;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (SKIP.has(pathname) || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-brand-deep/70 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close registration popup"
        onClick={dismiss}
      />
      <div className="relative z-10 flex max-h-[min(92dvh,100%)] w-full max-w-[720px] flex-col overflow-hidden rounded-t-2xl bg-surface shadow-lg sm:max-h-[90vh] sm:rounded-lg">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface px-4 py-2 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
          <p className="text-sm font-semibold text-brand-primary sm:sr-only">VIP Registration</p>
          <button
            ref={closeRef}
            type="button"
            className="ml-auto inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm sm:absolute sm:right-2 sm:top-2 sm:bg-surface/90"
            onClick={dismiss}
            aria-label="Close"
          >
            <Image src="/images/ui/close.png" alt="" width={27} height={27} />
          </button>
        </div>
        <div className="grid overflow-y-auto overscroll-contain sm:grid-cols-2">
          <figure className="relative hidden min-h-[220px] sm:block">
            <Image
              src={REGISTRATION_IMAGE.src}
              alt={REGISTRATION_IMAGE.alt}
              width={REGISTRATION_IMAGE.width}
              height={REGISTRATION_IMAGE.height}
              sizes="360px"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="p-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-5">
            <p className="eyebrow hidden sm:block">VIP Registration</p>
            <h2 id={titleId} className="mt-0 text-[1.65rem] leading-tight sm:mt-2 sm:pr-10 sm:text-2xl">
              Get detached-home updates first
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Pricing, lot widths, and floor plans are still to be announced. Register to be notified
              when Opus Homes releases details.
            </p>
            <div className="mt-4">
              <LeadForm id="popup-register" compact embedded />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
