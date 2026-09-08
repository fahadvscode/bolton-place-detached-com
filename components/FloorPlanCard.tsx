"use client";

import { useEffect, useRef } from "react";
import { COLLECTIONS } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export function FloorPlanCard({
  collection,
}: {
  collection: (typeof COLLECTIONS)[number];
}) {
  const ref = useRef<HTMLElement>(null);
  const sent = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (sent.current) return;
        if (entries.some((entry) => entry.isIntersecting)) {
          sent.current = true;
          trackEvent("floor_plan_view", { collection: collection.id });
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [collection.id]);

  return (
    <article ref={ref} className="card p-6 md:p-8">
      <p className="eyebrow">{collection.status}</p>
      <h2 className="mt-3 text-3xl">{collection.name}</h2>
      <p className="prose-measure mt-4 text-text-muted">{collection.summary}</p>
    </article>
  );
}
