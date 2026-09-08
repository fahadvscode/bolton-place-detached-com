import Image from "next/image";
import Link from "next/link";
import { AREA_AMENITIES } from "@/lib/content";

export function AmenityGrid() {
  return (
    <section className="section-space bg-surface" aria-labelledby="area-heading">
      <div className="mx-auto max-w-[1200px] px-5">
        <p className="eyebrow">Around Gore &amp; King</p>
        <h2 id="area-heading" className="mt-3 max-w-[22ch] text-3xl md:text-4xl">
          Bolton area context for a detached-home purchase
        </h2>
        <p className="prose-measure mt-4 text-text-muted">
          These photographs are named to the nearby amenities buyers usually ask about when they
          are choosing a detached lot. They show existing Bolton / Caledon context, not a published
          Bolton Place site plan.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREA_AMENITIES.map((item) => (
            <li key={item.id} className="card overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-2xl text-brand-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.caption}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/location" className="btn-primary">
            See the Bolton key map
          </Link>
        </p>
      </div>
    </section>
  );
}
