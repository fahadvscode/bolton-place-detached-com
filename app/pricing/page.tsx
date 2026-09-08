import type { Metadata } from "next";
import Link from "next/link";
import { PricingTable } from "@/components/PricingTable";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { LAST_UPDATED, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.pricing);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.pricing.path,
          name: PAGE_META.pricing.title,
          description: PAGE_META.pricing.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Price tracker</p>
          <h1 className="mt-3 max-w-[20ch] text-4xl md:text-5xl">{PAGE_META.pricing.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Pricing has not been released for Bolton Place detached homes. As of {LAST_UPDATED},
              there is no public starting price for the singles collection, no published lot-premium
              schedule, and no deposit structure. This page exists so that &quot;how much are
              detached homes at Bolton Place&quot; has a dated, honest answer instead of a borrowed
              number from another Caledon project.
            </p>
            <p>
              Aggregator listings currently show the same blank fields this table does: price range
              TBA, deposit TBA, occupancy TBA. That agreement across sources is useful. It means the
              vacuum is real, not a page that failed to scrape a brochure. When Opus Homes publishes
              detached figures, they will be added here with a new last-updated date — never as an
              unsourced &quot;estimated from&quot; range.
            </p>
            <p>
              Registered buyers typically see a price list and incentive sheet before the wider
              public does. Registration on this site is how a household asks to be in that first
              wave for the detached collection. It is not a reservation, an approval, or a promise
              that a particular lot will still be available.
            </p>
          </div>
          <div className="mt-12 max-w-[760px]">
            <PricingTable />
          </div>
          <div className="prose-measure mt-12 space-y-5 text-text-muted">
            <h2 className="text-3xl text-brand-primary">How to read a coming-soon detached price</h2>
            <p>
              When a starting price does appear, it will almost certainly be a &quot;from&quot;
              figure tied to a specific plan, elevation, and lot-premium schedule. Lot premiums on a
              Gore Road / King Street site can move a detached home well above the advertised opening
              number. Corner lots, wider frontages, and walkouts — if they exist — are usually the
              items that stretch the spreadsheet. Until that schedule exists, comparing Bolton Place
              detached homes to SouthCal, Humber Station, or Bolton resale singles is a category
              comparison, not a model comparison.
            </p>
            <p>
              Deposit structures in GTA freehold pre-construction often stretch across 12 to 24
              months, sometimes with an extended schedule on launch weekend. Detached deposits are
              frequently larger in dollar terms than townhome deposits even when the percentage
              looks similar, because the purchase price is higher. None of those patterns should be
              treated as Bolton Place&apos;s terms. Assignment rights, levy caps, and
              development-charge handling are likewise unreleased.
            </p>
            <p>
              Investment questions — cash-on-cash yield, assignment profit, end-user appreciation —
              cannot be answered with real numbers while price and occupancy are unknown. Caledon
              Greenbelt constraints are a land-supply backdrop, not a return forecast. This site
              will not describe Bolton Place detached homes as a guaranteed or risk-free purchase.
              For the product-type trade-offs that do not depend on a price list, see{" "}
              <Link
                href="/blog/detached-vs-townhome-precon-bolton"
                className="underline underline-offset-2 hover:text-brand-accent"
              >
                Detached vs. Townhome Pre-Construction
              </Link>
              .
            </p>
            <h2 className="text-3xl text-brand-primary">What this tracker will add first</h2>
            <p>
              When Opus Homes releases a detached starting price, it will occupy the first row of
              the table above, with a new last-updated date. Lot premiums, if published as a
              schedule rather than a single number, will be summarized as a range with a source
              note — not blended into the &quot;from&quot; figure as if every lot sold at the
              opening price. Townhome pricing will be recorded for context only; this page is the
              detached tracker.
            </p>
            <p>
              Occupancy and deposit lines will stay &quot;to be announced&quot; until a dated
              document from the builder, or a registration package forwarded to this list, replaces
              the phrase. This site will not estimate a closing year from Founders Walk, SouthCal,
              or any other Opus Homes community. Those timelines belong to those communities.
            </p>
            <p>
              If incentives appear — design credits, capped levies, or an extended deposit — they
              will be listed as published, with the same E.&amp;O.E. caveat that applies to every
              figure on a coming-soon freehold. They will not be described as guaranteed, exclusive
              to this website, or available on every detached lot.
            </p>
          </div>
        </div>
      </article>
      <RegisterBand heading="Register to be notified when detached pricing is released" />
    </>
  );
}
