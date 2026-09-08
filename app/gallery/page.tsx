import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { GALLERY_ITEMS, LAST_UPDATED, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, gallerySchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.gallery);

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.gallery.path,
          name: PAGE_META.gallery.title,
          description: PAGE_META.gallery.description,
        })}
      />
      <JsonLd data={gallerySchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Imagery</p>
          <h1 className="mt-3 max-w-[20ch] text-4xl md:text-5xl">{PAGE_META.gallery.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Official architectural renderings of Bolton Place detached homes have not been
              released as of {LAST_UPDATED}. Exterior elevations, interior finishes, and a detailed
              site plan showing individual lots are to be added when Opus Homes publishes them. This
              page will not substitute a townhome rendering or a photograph from another community
              as if it were a Bolton Place single.
            </p>
            <p>
              The files below are the named marketing set for this site: the Bolton key map, Caledon
              Station lifestyle photography, VIP registration imagery, and Bolton area context for
              parks, transit, schools, and shopping. Captions describe what each file actually
              shows. None of these photographs should be read as a guaranteed amenity inside the
              unreleased site plan, and none of them is an architectural rendering of a detached
              house. Tap any image to open it full-screen.
            </p>
            <p>
              When official detached elevations are released, they will be labelled as such and
              placed above this area photography. Until then, the honest gallery state is mixed:
              a key map and neighbourhood context that exist, and house renderings that do not.
            </p>
            <div className="card p-5">
              <p className="eyebrow">Architectural renderings</p>
              <p className="mt-2 font-display text-2xl text-brand-primary">To be added</p>
              <p className="mt-2 text-sm text-text-muted">
                Detached-home elevations, interior views, and a lotting site plan have not been
                published. Register to be notified when official renderings are released.
              </p>
            </div>
          </div>
          <GalleryGrid items={GALLERY_ITEMS} />
        </div>
      </article>
      <RegisterBand heading="Get notified when official detached renderings are released" />
    </>
  );
}
