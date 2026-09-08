import { INTERSECTION, MAPS_EMBED_SRC, PROJECT_NAME } from "@/lib/content";

export function LocationMap() {
  return (
    <figure className="card overflow-hidden">
      <iframe
        title={`${PROJECT_NAME} location near ${INTERSECTION}`}
        src={MAPS_EMBED_SRC}
        className="aspect-[4/3] w-full border-0 md:aspect-[16/9]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <figcaption className="px-4 py-3 text-sm text-text-muted">
        Approximate location near {INTERSECTION} in Bolton, Caledon. Exact lot lines and detached
        lot widths have not been published.
      </figcaption>
    </figure>
  );
}
