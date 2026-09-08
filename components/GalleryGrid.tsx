"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { SiteImage } from "@/lib/content";

export function GalleryGrid({ items }: { items: SiteImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (event.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-deep/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button
            type="button"
            className="absolute right-3 top-3 inline-flex min-h-[44px] min-w-[44px] items-center justify-center"
            onClick={() => setOpen(null)}
            aria-label="Close image"
          >
            <Image src="/images/ui/close.png" alt="" width={27} height={27} />
          </button>
          <button
            type="button"
            className="absolute left-2 inline-flex min-h-[44px] min-w-[44px] items-center justify-center md:left-6"
            onClick={() => setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length))}
            aria-label="Previous image"
          >
            <Image src="/images/ui/prev.png" alt="" width={50} height={45} />
          </button>
          <figure className="max-h-[90vh] max-w-[min(960px,100%)] overflow-auto">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="h-auto max-h-[70vh] w-full object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-surface">{current.caption}</figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-2 inline-flex min-h-[44px] min-w-[44px] items-center justify-center md:right-6"
            onClick={() => setOpen((i) => (i === null ? i : (i + 1) % items.length))}
            aria-label="Next image"
          >
            <Image src="/images/ui/next.png" alt="" width={50} height={45} />
          </button>
        </div>
      ) : null}
    </>
  );
}
