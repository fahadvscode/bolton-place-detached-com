import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LocationMap } from "@/components/LocationMap";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { KEY_MAP, LAST_UPDATED, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.location);

export default function LocationPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.location.path,
          name: PAGE_META.location.title,
          description: PAGE_META.location.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Location", path: "/location" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Bolton, Caledon</p>
          <h1 className="mt-3 max-w-[20ch] text-4xl md:text-5xl">{PAGE_META.location.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Bolton Place detached homes are planned near The Gore Road and King Street in Bolton,
              a community within the Town of Caledon, Ontario. That intersection is the one
              geographic fact that listing sources, the builder&apos;s community roster, and
              municipal road names all agree on. Exact block faces, access roads, and detached lot
              lines have not been published by Opus Homes as of {LAST_UPDATED}.
            </p>
            <p>
              Bolton is the urban centre of Caledon, sitting in the Region of Peel north of Brampton
              and west of Vaughan. King Street through Bolton is also Highway 9, a regional
              east-west route. The Gore Road is a north-south arterial that connects south toward
              Brampton and the 407 corridor. For households that already commute along that grid,
              the location is familiar even while the community itself is still a coming-soon
              listing.
            </p>
            <p>
              Nearby daily amenities are those of existing Bolton — grocery-anchored plazas along
              Queen Street / Highway 50, downtown Bolton shops, and recreation facilities already
              operating in town — not amenities that exist only on a future site plan. Drive-time
              claims on aggregator pages (Maple GO, Vaughan Mills, Cortellucci Vaughan Hospital) are
              traffic-dependent and are not treated here as project specifications. Highway 50
              through Bolton and the 427 / 407 network to the south are the practical commute spine
              for many households already living in this part of Caledon; they are existing roads,
              not amenities Opus Homes has promised inside a Bolton Place detached lot.
            </p>
          </div>
          <figure className="card mt-10 overflow-hidden">
            <Image
              src={KEY_MAP.src}
              alt={KEY_MAP.alt}
              width={KEY_MAP.width}
              height={KEY_MAP.height}
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="h-auto w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-text-muted">{KEY_MAP.caption}</figcaption>
          </figure>
          <div className="mt-10">
            <LocationMap />
          </div>
          <div className="prose-measure mt-12 space-y-5 text-text-muted">
            <h2 className="text-3xl text-brand-primary">Why location matters more for a detached lot</h2>
            <p>
              A townhome purchase can be evaluated mostly on interior plan and monthly carrying
              cost. A detached purchase in Bolton is also a land decision. Frontage, orientation,
              and how the lot sits relative to The Gore Road, King Street, and any future internal
              streets will drive premium — and those items are unreleased. Until a site plan exists,
              &quot;near Gore and King&quot; is the location brief, not a lot brief.
            </p>
            <p>
              Caledon is a large municipality that mixes agricultural land, hamlets, and a small
              number of urban settlement areas. Bolton is the largest of those urban areas. New
              ground-oriented housing in Bolton is therefore happening against a backdrop of
              Greenbelt-constrained land supply across the rest of the town. That constraint is a
              planning fact, not a promise that any one detached home will appreciate.
            </p>
            <p>
              School listings that name Humberview Secondary School, Robert F. Hall Catholic
              Secondary School, or St. Nicholas Elementary School describe existing institutions in
              the wider Bolton / Caledon catchment, not confirmed Bolton Place designations.
              Families buying a detached home for school reasons should verify boundaries with the
              relevant boards when a site plan exists.
            </p>
            <h2 className="text-3xl text-brand-primary">The Caledon Station naming question</h2>
            <p>
              Bolton Place is sometimes marketed as &quot;Bolton Place at Caledon Station.&quot;
              Caledon Station, in Town of Caledon planning materials, is a secondary-plan area
              generally bound by The Gore Road to the west, King Street to the south, and the Humber
              Station Road / rail corridor to the east. A separate, much larger master-planned
              community associated with Argo Development Corp and several other builders is also
              marketed at The Gore Road and King Street under the Caledon Station Homes name, with a
              published planned yield on the order of four thousand homes.
            </p>
            <p>
              Whether Bolton Place is a parcel inside that Argo-led master plan, a neighbouring Opus
              Homes community that shares the secondary-plan geography, or a similarly named project
              has not been independently confirmed. This site will not state that Opus Homes is
              delivering the 4,042-unit Caledon Station master plan, and it will not copy
              parkland-acreage or GO-station claims from that master plan onto a Bolton Place
              detached lot unless Opus Homes publishes them for this community.
            </p>
            <p>
              Buyers who need that relationship settled before they register should treat it as an
              open question for Opus Homes, not as a solved fact on a listing page. For the
              product-type decision that does not depend on the master-plan question, see the{" "}
              <Link
                href="/blog/detached-vs-townhome-precon-bolton"
                className="underline underline-offset-2 hover:text-brand-accent"
              >
                detached vs. townhome briefing
              </Link>
              .
            </p>
            <h2 className="text-3xl text-brand-primary">Daily life around Gore and King</h2>
            <p>
              Existing Bolton already supplies grocery-anchored plazas, a walkable downtown along
              Queen Street / Highway 50, and recreation facilities that do not depend on an
              unreleased Bolton Place amenity list. A detached household that wants those things
              this year can use them now; they are town amenities, not project promises. What this
              site will not do is copy parkland acreage, a GO-station claim, or a school name from
              the larger Caledon Station master-plan marketing onto a Bolton Place detached lot.
            </p>
            <p>
              Commute reality for many Bolton households still runs south on The Gore Road toward
              the 407, or east-west on Highway 9. Those routes are busy at peak hours. Drive-time
              ranges to Maple GO, Vaughan Mills, or Cortellucci Vaughan Hospital that appear on
              aggregator pages are traffic-dependent and are not treated here as specifications.
              Buyers who need rail access should confirm, independently, whether any GO facility
              associated with the Caledon Station name is actually committed — and whether it has
              anything to do with this Opus Homes community.
            </p>
          </div>
        </div>
      </article>
      <RegisterBand heading="Register for location and site-plan updates" />
    </>
  );
}
