"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LeadForm } from "./LeadForm";

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
      <div className="relative z-10 flex max-h-[min(88dvh,100%)] w-full max-w-[420px] flex-col overflow-hidden rounded-t-2xl bg-surface shadow-lg sm:rounded-lg">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2">
          <h2 id={titleId} className="font-display text-lg font-semibold text-brand-primary">
            Register for updates
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm"
            onClick={dismiss}
            aria-label="Close"
          >
            <Image src="/images/ui/close.png" alt="" width={27} height={27} />
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain px-4 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <p className="mb-3 text-sm text-text-muted">Get pricing when it is released.</p>
          <LeadForm id="popup-register" compact embedded />
        </div>
      </div>
    </div>
  );
}
