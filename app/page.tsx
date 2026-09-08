import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { QuickFacts } from "@/components/QuickFacts";
import { AmenityGrid } from "@/components/AmenityGrid";
import { RegisterBand } from "@/components/RegisterBand";
import { FadeIn } from "@/components/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { LAST_UPDATED, PAGE_META, PRICING_DISCLAIMER } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, residenceSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={residenceSchema()} />
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: PAGE_META.home.title,
          description: PAGE_META.home.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }])}
      />
      <Hero />
      <QuickFacts />

      <section className="section-space bg-surface" aria-labelledby="overview-heading">
        <FadeIn className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Detached homes spotlight</p>
          <h2 id="overview-heading" className="mt-3 max-w-[22ch] text-3xl md:text-4xl">
            A coming-soon singles collection in Bolton, written for buyers who have already
            ruled out a townhome
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Bolton Place is a pre-construction community by Opus Homes, positioned near The Gore
              Road and King Street in Bolton, a community within the Town of Caledon, Ontario. The
              project&apos;s naming — &quot;Bolton Place at Caledon Station&quot; in some listings —
              suggests a possible connection to the wider Caledon Station master-planned area,
              though this relationship has not been independently confirmed and should be verified
              directly with Opus Homes rather than assumed.
            </p>
            <p>
              This site is a product-focused briefing dedicated entirely to Bolton Place&apos;s
              single-family detached home collection. It is written for households that have already
              decided against a townhome: buyers who want a private lot, four-sided exterior, and
              the resale language of a detached house in Bolton, not an attached freehold. Townhomes
              are planned at the same community; they are not the subject of this page.
            </p>
            <p>
              <strong className="font-semibold text-text-primary">Detached Homes</strong> — Bolton
              Place&apos;s single-family detached collection, per public listing sources. Specific
              lot widths, sizes, and plan names have not been released. Until a collection sheet
              exists, the honest description stops at that sentence. Inventing a 36-foot frontage or
              a model name would make the page look finished and make it wrong.
            </p>
            <p>
              Opus Homes is also behind other GTA-area pre-construction communities, including
              Founders Walk, and is a joint builder alongside Arista Homes and Deco Homes on the
              separate SouthCal Homes community elsewhere in Caledon. As of {LAST_UPDATED}, Opus
              Homes has not publicly released pricing, floor plans, or a launch date for Bolton
              Place. This site tracks what is publicly verifiable and gives interested buyers a
              straightforward way to register for updates.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="section-space bg-surface-alt" aria-labelledby="why-detached-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Why this briefing exists</p>
          <h2 id="why-detached-heading" className="mt-3 text-3xl md:text-4xl">
            Detached first, without borrowing a townhome brochure
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Most coming-soon pages for Bolton Place treat towns and singles as one undifferentiated
              product mix. That is accurate as a community description and unhelpful as a buying
              brief. A detached purchase in Caledon is a different capital decision: larger deposit
              typically, lot-premium exposure, and a resale set that competes with existing Bolton
              singles rather than with stacked towns. This site keeps that distinction in the
              foreground.
            </p>
            <p>
              What a detached buyer should expect to see, when Opus Homes publishes a package, is
              usually a lot-width table, garage configuration, and a small set of plan names. None of
              those items are public as of {LAST_UPDATED}. The{" "}
              <Link href="/floor-plans" className="underline underline-offset-2 hover:text-brand-accent">
                floor plans page
              </Link>{" "}
              therefore tracks the detached collection as a tier, not as a catalogue of invented
              models. A longer comparison of detached versus townhome mechanics in Bolton
              pre-construction lives in the{" "}
              <Link
                href="/blog/detached-vs-townhome-precon-bolton"
                className="underline underline-offset-2 hover:text-brand-accent"
              >
                detached vs. townhome briefing
              </Link>
              .
            </p>
            <p>
              Registering here does not lock a lot. It puts a household on an update list so that
              when lot widths and a detached price sheet exist, those details can be forwarded
              without a phone call. There is no phone number and no email address published on this
              site. The registration form is the only contact channel.
            </p>
          </div>
          <p className="mt-6">
            <Link href="/floor-plans" className="btn-primary">
              See the detached collection tier
            </Link>
          </p>
        </div>
      </section>

      <section className="section-space bg-surface" aria-labelledby="caledon-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Caledon Station naming</p>
          <h2 id="caledon-heading" className="mt-3 max-w-[24ch] text-3xl md:text-4xl">
            Why some listings say &quot;at Caledon Station&quot;
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Several aggregator pages refer to the project as Bolton Place at Caledon Station.
              Caledon Station, as used in municipal planning documents, is a large secondary-plan
              area generally bound by The Gore Road, King Street, and Humber Station Road — the same
              broader geography associated with a multi-builder, thousands-of-homes master plan led
              by Argo Development Corp.
            </p>
            <p>
              The overlap in naming is real. The legal relationship is not confirmed here. Bolton
              Place could sit inside that master plan, beside it, or simply share a marketing phrase.
              Some third-party write-ups also recycle Caledon Station amenity language — parkland
              acreage, a proposed GO station, future schools — as if those items were Opus Homes
              specifications for a Bolton Place detached lot. Those claims have not been independently
              verified for this community and are not repeated as fact on this site.
            </p>
            <p>
              Buyers who need a private lot next to a future park or a GO walk-up should treat those
              as open questions for Opus Homes, not as included features of the detached collection.
              The{" "}
              <Link href="/location" className="underline underline-offset-2 hover:text-brand-accent">
                location page
              </Link>{" "}
              walks through the Gore Road and King Street context without collapsing two projects
              into one.
            </p>
          </div>
          <figure className="card mt-10 max-w-[720px] overflow-hidden">
            <Image
              src="/images/caledon-station.webp"
              alt="Lifestyle photograph labelled caledon-station in the Bolton Place marketing set — a family walking outdoors near Bolton, Caledon. Not a rendering of a detached house or a GO station."
              width={1920}
              height={1070}
              sizes="(max-width: 720px) 100vw, 720px"
              className="h-auto w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-text-muted">
              File name: caledon-station. Lifestyle photography used with the Caledon Station
              naming. It is not a photograph of a transit station and does not prove Bolton Place is
              inside the Argo-led master plan.
            </figcaption>
          </figure>
        </div>
      </section>

      <AmenityGrid />

      <section className="section-space bg-surface-alt" aria-labelledby="builder-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Opus Homes</p>
          <h2 id="builder-heading" className="mt-3 text-3xl md:text-4xl">
            Who is delivering the detached collection
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Opus Homes is a GTA-area homebuilder with communities that, on its own site, span
              Brampton, Pickering, Richmond Hill, Unionville, Vaughan, Mississauga, Stouffville, and
              Caledon. Bolton Place is listed there as a coming-soon Caledon community of townhomes
              and detached residences. Founders Walk in Stouffville is similarly listed as coming
              soon, also with freehold towns and singles — useful as evidence that Bolton Place is
              not a one-off listing, not as a proxy for Bolton Place detached pricing.
            </p>
            <p>
              In Caledon specifically, Opus Homes also appears as a joint builder on SouthCal Homes,
              a separate community at Hurontario Street and Highway 410, alongside Arista Homes and
              Deco Homes. SouthCal is not Bolton Place. A SouthCal singles sheet is not a Bolton
              Place floor plan. This briefing will not paste those documents in to look complete.
            </p>
            <p>
              Builder identification belongs in this section as text. This site does not use an Opus
              Homes logo as its identity and does not speak in the builder&apos;s first person.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-surface" aria-labelledby="status-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Sales status</p>
          <h2 id="status-heading" className="mt-3 text-3xl md:text-4xl">
            Coming soon, with detached pricing still unreleased
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              As of {LAST_UPDATED}, Bolton Place remains in a registration-only stage. Independent
              listing pages describe the community as coming soon and invite buyers to &quot;be the
              first to book,&quot; without attaching a public price list, deposit schedule, occupancy
              year, or lot-width table. That vacuum is the actual state of the market, not a gap
              this site fills with estimates from other Caledon singles.
            </p>
            <p>
              Registering here does not reserve a lot, guarantee an allocation, or create a purchase
              agreement. It adds a household to an update list so that when Opus Homes publishes
              detached numbers, those details can be forwarded. For current figures — all of them
              still &quot;to be announced&quot; — see the{" "}
              <Link href="/pricing" className="underline underline-offset-2 hover:text-brand-accent">
                pricing tracker
              </Link>
              .
            </p>
            <p className="text-sm">{PRICING_DISCLAIMER}</p>
          </div>
        </div>
      </section>

      <RegisterBand heading="Register for detached-home updates" />
    </>
  );
}
