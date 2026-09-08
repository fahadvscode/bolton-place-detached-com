"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <article key={item.q} className="card">
            <h2 className="text-lg md:text-xl">
              <button
                id={buttonId}
                type="button"
                className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-brand-primary"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="text-brand-accent">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? "block" : "hidden"}
            >
              <p className="prose-measure px-5 pb-5 text-text-muted">{item.a}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
