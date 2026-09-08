"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { SiteImage } from "@/lib/content";

export function GalleryGrid({ items }: { items: SiteImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (event.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, items.length]);

  const current = open !== null ? items[open] : null;

  return (
    <>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              className="card block w-full overflow-hidden text-left"
              onClick={() => setOpen(index)}
              aria-label={`Open ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <span className="block p-4">
                <span className="font-display text-xl text-brand-primary">{item.title}</span>
                <span className="mt-1 block text-sm text-text-muted">{item.caption}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-brand-deep/95 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:items-center sm:justify-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div className="flex items-center justify-between gap-3 sm:absolute sm:right-3 sm:top-3 sm:z-10">
            <p className="truncate font-display text-lg text-surface sm:hidden">{current.title}</p>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm bg-brand-deep/60"
              onClick={() => setOpen(null)}
              aria-label="Close image"
            >
              <Image src="/images/ui/close.png" alt="" width={27} height={27} />
            </button>
          </div>
          <figure className="mt-3 flex min-h-0 flex-1 flex-col overflow-auto sm:mt-0 sm:max-h-[90vh] sm:max-w-[min(960px,100%)]">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="mx-auto h-auto max-h-[58dvh] w-full object-contain sm:max-h-[70vh]"
            />
            <figcaption className="mt-3 text-center text-sm text-surface">{current.caption}</figcaption>
          </figure>
          <div className="mt-3 flex items-center justify-between gap-3 sm:contents">
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] flex-1 items-center justify-center rounded-sm border border-white/25 bg-brand-deep/70 text-sm font-semibold text-surface sm:absolute sm:left-2 sm:flex-none sm:border-0 sm:bg-transparent md:left-6"
              onClick={() => setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length))}
              aria-label="Previous image"
            >
              <Image src="/images/ui/prev.png" alt="" width={36} height={32} className="sm:h-[45px] sm:w-[50px]" />
            </button>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] flex-1 items-center justify-center rounded-sm border border-white/25 bg-brand-deep/70 text-sm font-semibold text-surface sm:absolute sm:right-2 sm:flex-none sm:border-0 sm:bg-transparent md:right-6"
              onClick={() => setOpen((i) => (i === null ? i : (i + 1) % items.length))}
              aria-label="Next image"
            >
              <Image src="/images/ui/next.png" alt="" width={36} height={32} className="sm:h-[45px] sm:w-[50px]" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
