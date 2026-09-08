import type { Metadata } from "next";
import Link from "next/link";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { COLLECTIONS, LAST_UPDATED, PAGE_META, PRICING_DISCLAIMER } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.floorPlans);

export default function FloorPlansPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.floorPlans.path,
          name: PAGE_META.floorPlans.title,
          description: PAGE_META.floorPlans.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Floor Plans", path: "/floor-plans" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Detached collection</p>
          <h1 className="mt-3 max-w-[20ch] text-4xl md:text-5xl">{PAGE_META.floorPlans.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Bolton Place&apos;s single-family detached collection is the subject of this page.
              Public listing sources confirm that Opus Homes plans detached homes at the community
              near The Gore Road and King Street in Bolton. That is the verified product fact.
              Everything underneath it — plan names, interior square footage, lot frontages, garage
              counts, walkout conditions, and elevation styles — has not been released as of{" "}
              {LAST_UPDATED}.
            </p>
            <p>
              This briefing therefore stops at collection tiers. Inventing model names such as
              &quot;the Maple 36&quot; or quoting square footage from a different Opus Homes
              community would make the page look complete and make it wrong. Buyers comparing
              Bolton Place detached homes to other Caledon singles should treat any third-party
              floor-plate graphic without an Opus Homes source as unverified.
            </p>
            <p>
              A townhome collection is also planned at Bolton Place. It is noted below so the
              product mix is not hidden, then left behind. This site is written for buyers who have
              already decided against a townhome and want the detached package when it exists. A
              longer product-type comparison is in the{" "}
              <Link
                href="/blog/detached-vs-townhome-precon-bolton"
                className="underline underline-offset-2 hover:text-brand-accent"
              >
                detached vs. townhome article
              </Link>
              .
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {COLLECTIONS.map((collection) => (
              <FloorPlanCard key={collection.id} collection={collection} />
            ))}
          </div>
          <div className="prose-measure mt-12 space-y-5 text-text-muted">
            <h2 className="text-3xl text-brand-primary">What a detached package usually contains</h2>
            <p>
              In a typical GTA freehold launch, a builder publishes a site plan, a lot-width table
              for singles, and a set of floor-plan PDFs before a full price list. Sometimes the
              order is reversed. For Bolton Place, none of those documents are in public
              circulation. When they appear, this page will name the detached plans as Opus Homes
              names them — not as an aggregator labels them.
            </p>
            <p>
              Lot width is the first number most detached buyers ask for, because it drives garage
              layout, side-yard setbacks, and lot premium. It has not been published. Interior size
              is the second. It has not been published. Occupancy timing is the third. It has not
              been published. Until those three exist, a comparison against existing Bolton resale
              singles is a neighbourhood comparison, not a model comparison.
            </p>
            <p>
              Until then, the practical step is registration. Floor-plan packages are rarely emailed
              to the open internet on day one; they go to the list the builder, or an independent
              registration desk, already has. Registering here does not lock a lot. It is how a
              household gets on that list without a phone call.
            </p>
            <p>
              If a sales centre later distinguishes &quot;towns&quot; and &quot;singles&quot; with
              separate release dates, that split will be noted here. No such split has been
              announced. A Founders Walk brochure, a SouthCal collection sheet, or a Pickering town
              plan is not a Bolton Place detached floor plan. This page will not paste those
              documents in to look finished.
            </p>
            <h2 className="text-3xl text-brand-primary">What this page will not invent</h2>
            <p>
              Detached buyers in Bolton usually ask for four numbers first: lot width, interior
              square footage, garage count, and a starting price. None of those four are public for
              Bolton Place. A fifth question — walkout versus standard rear grade — also waits on a
              site plan. This briefing will not fill those blanks with ranges copied from other
              Caledon singles, because those ranges would be presented as if they belonged to Opus
              Homes and they would not.
            </p>
            <p>
              Elevation packages, brick-and-stone combinations, and optional finished basements are
              similarly unreleased. Marketing lifestyle photographs on this site are not elevations.
              The key map shows an approximate location near The Gore Road and King Street; it does
              not show individual detached lots. When a real collection sheet arrives, this page
              will list the detached plans by the names Opus Homes uses, with lot widths beside
              them if those widths are published.
            </p>
            <p>
              Until that sheet exists, treat any third-party graphic that claims a Bolton Place
              detached floor plate as unverified. Registering here is the way to receive the
              official package through the Registration Team, not a promise that a particular
              frontage will still be available on launch weekend.
            </p>
            <p className="text-sm">{PRICING_DISCLAIMER}</p>
          </div>
        </div>
      </article>
      <RegisterBand heading="Get floor-plan updates" />
    </>
  );
}
