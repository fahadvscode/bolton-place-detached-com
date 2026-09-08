import type { Metadata } from "next";
import Link from "next/link";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { LAST_UPDATED, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.blog);

export default function DetachedVsTownhomePage() {
  return (
    <>
      <JsonLd data={articleSchema()} />
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.blog.path,
          name: PAGE_META.blog.title,
          description: PAGE_META.blog.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Detached vs. townhome", path: PAGE_META.blog.path },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[760px] px-5">
          <p className="eyebrow">Product comparison</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{PAGE_META.blog.h1}</h1>
          <p className="mt-4 text-sm text-text-muted">Updated {LAST_UPDATED}</p>

          <div className="mt-8 space-y-5 text-text-muted">
            <p>
              Bolton Place, a coming-soon community by Opus Homes near The Gore Road and King Street
              in Bolton, is planned to include both townhomes and single-family detached homes. For
              a buyer who has already decided against a townhome, that sentence is the starting
              point, not the end of the analysis. The two products share an intersection and a
              builder. They do not share the same capital outlay, the same lot risk, or the same
              resale set.
            </p>
            <p>
              This article is written for Bolton and Caledon buyers who are weighing a
              pre-construction detached purchase against an attached freehold at the same community
              — or against skipping Bolton Place entirely if the detached package never matches what
              they need. It is not an Opus Homes brochure. It does not invent lot widths, prices, or
              occupancy dates. Those figures have not been released as of {LAST_UPDATED}.
            </p>

            <h2 className="pt-4 text-3xl text-brand-primary">What is actually verified</h2>
            <p>
              Public listing sources describe Bolton Place as a community of townhomes and detached
              homes. Opus Homes is the named builder. The location is near The Gore Road and King
              Street in Bolton, Town of Caledon. Sales status is coming soon / registration. Plan
              names, interior sizes, lot frontages, garage counts, deposits, and closing timelines
              have not been published.
            </p>
            <p>
              That is a thin fact set, and it is still enough to structure a decision. A townhome
              buyer is usually optimizing monthly carrying cost, a simpler exterior, and a smaller
              land component. A detached buyer is usually optimizing privacy, a four-sided house,
              and a resale comparable set that includes existing Bolton singles. Mixing those two
              briefs into one &quot;new homes in Bolton&quot; paragraph is how aggregator pages
              stay short and how buyers get a product they did not intend to buy.
            </p>
            <p>
              This site exists so the detached brief is written first. Townhomes are acknowledged
              because they are part of the planned mix. They are not treated as a substitute for a
              missing singles sheet.
            </p>

            <h2 className="pt-4 text-3xl text-brand-primary">Land, lot width, and why TBA still matters</h2>
            <p>
              In GTA freehold launches, lot width is the number that does the most work. A
              30-foot-class single, a 36-foot-class single, and a 40-foot-class single are different
              houses even when the marketing photographs look similar: garage layout, side-yard
              setbacks, and lot premium all move with frontage. Bolton Place has not published
              those widths. Until it does, a detached registration is a request to see the table,
              not an agreement that any particular frontage will be offered.
            </p>
            <p>
              Townhome product typically compresses that land question into a row width and a
              shared-wall condition. That can be the right purchase. It is a different purchase.
              Buyers who need a private rear yard, a wider driveway, or a house that does not share
              a party wall should not treat a townhome collection sheet — if and when one appears —
              as a consolation prize for a missing detached sheet.
            </p>
            <p>
              Lot premiums are the second land issue. Corner lots, wider lots, and walkouts, if they
              exist at Bolton Place, usually sit above the advertised &quot;from&quot; price. On a
              Gore and King site those premiums can be material. They are unreleased. This article
              will not guess them from SouthCal, from Founders Walk, or from Bolton resale.
            </p>

            <h2 className="pt-4 text-3xl text-brand-primary">Carrying cost is not the same decision</h2>
            <p>
              Even without a price list, the shape of the two purchases is familiar to anyone who
              has bought freehold pre-construction in the GTA. Detached prices sit above townhome
              prices in the same community more often than not. Deposits, even at a similar
              percentage, are larger in dollars. Property tax, once assessed, tracks the higher
              value. Maintenance is the buyer&apos;s, not a condo corporation&apos;s — Bolton Place
              is described as townhomes and singles, not as condominium apartments — but a detached
              exterior still costs more to keep than a townhome exterior.
            </p>
            <p>
              None of that is a recommendation to buy or not to buy. It is the reason a household
              that has already ruled out a townhome should register against the detached collection
              specifically, and should walk away if the eventual singles sheet is too small, too
              expensive, or too late. Registration on this site does not lock a lot. It is how a
              household sees the package when it exists.
            </p>
            <p>
              Assignment rights, development levies, and occupancy timing are unreleased for both
              product types. Those items can change the investment math more than a modest
              difference in interior square footage. Until Opus Homes publishes them, any yield
              calculation is fiction. Caledon&apos;s Greenbelt-constrained land supply is a planning
              backdrop, not a return forecast, and it applies to the town as a whole rather than to
              one unreleased detached plan.
            </p>

            <h2 className="pt-4 text-3xl text-brand-primary">Resale sets in Bolton are not interchangeable</h2>
            <p>
              End-users who later sell a Bolton Place townhome will compete with other attached
              freeholds in Bolton and in the wider Caledon settlement areas. End-users who later
              sell a Bolton Place detached home will compete with existing singles in Bolton —
              streets that already have established lot sizes, school catchments, and a longer
              sales history. Those two resale sets do not move in lockstep. A year that is kind to
              towns is not automatically kind to singles, and the reverse is also true.
            </p>
            <p>
              That is why this briefing refuses to collapse the community into one average price
              when prices appear. A &quot;from&quot; townhome number is not a detached number. A
              detached &quot;from&quot; number is not a typical lot after premiums. Buyers who need
              the detached resale set should wait for the detached sheet rather than stretching a
              townhome purchase into a singles substitute.
            </p>
            <p>
              School catchments, trail access, and commute time along Highway 9 / The Gore Road are
              shared neighbourhood facts. They are not product specifications. A detached lot that
              backs onto a busy arterial is a different house from a detached lot on an internal
              street, and neither condition has been published. The{" "}
              <Link href="/location" className="underline underline-offset-2 hover:text-brand-accent">
                location page
              </Link>{" "}
              covers the intersection without inventing a lotting plan.
            </p>

            <h2 className="pt-4 text-3xl text-brand-primary">The Caledon Station naming does not pick a product</h2>
            <p>
              Some listings refer to Bolton Place at Caledon Station. The naming overlap with a
              larger master-planned area associated with Argo Development Corp is real; the legal
              relationship is unconfirmed. That question matters for amenity claims — parkland, a
              proposed GO station, future schools — that sometimes get copied onto Bolton Place as
              if they were Opus Homes specifications.
            </p>
            <p>
              It does not, on its own, tell a buyer whether to take a townhome or a detached home.
              Master-plan adjacency, if it is later confirmed, would be a neighbourhood input. The
              product decision still turns on lot width, price, deposit, and occupancy — all of
              which remain to be announced. Treating an unconfirmed master-plan link as a reason to
              buy either product is the same error as treating it as a reason to buy neither.
            </p>

            <h2 className="pt-4 text-3xl text-brand-primary">How to use this site without over-committing</h2>
            <p>
              If the household wants a detached house in Bolton and is willing to wait for Opus
              Homes to publish the singles collection, register on this site with first name, last
              name, email, and phone. Mark the licensed-agent field accurately. Consent is required
              and is unchecked by default. There is no phone number and no email address on the
              site; the form is the only contact channel, including for later deletion requests.
            </p>
            <p>
              If the household is still choosing between towns and singles, read the{" "}
              <Link href="/floor-plans" className="underline underline-offset-2 hover:text-brand-accent">
                collection-tier page
              </Link>{" "}
              and the{" "}
              <Link href="/pricing" className="underline underline-offset-2 hover:text-brand-accent">
                price tracker
              </Link>
              , then register once. When a brochure exists, the useful question is whether the
              detached plans match the reason the household ruled out a townhome in the first place.
              If they do not, the correct next step is not to stretch a townhome into a singles
              substitute. It is to stay off the purchase.
            </p>
            <p>
              This article will be updated in place when lot widths, plan names, or a detached
              starting price are released with a public source. Until then, the comparison is
              structural rather than numeric — and that is still more useful than a guessed square
              footage copied from another Opus Homes community.
            </p>
            <h2 className="pt-4 text-3xl text-brand-primary">A practical checklist before launch</h2>
            <p>
              Before a VIP weekend, a detached-focused household can usefully decide four things
              that do not require a brochure. First, whether a shared wall is acceptable at all —
              if it is not, a townhome at Bolton Place is not a fallback. Second, whether the
              household can wait through an unknown occupancy, because that date is unreleased.
              Third, whether the commute on The Gore Road and Highway 9 is already acceptable, because
              the location is the one fact that will not change when the collection sheet arrives.
              Fourth, whether the household is prepared to walk away if the eventual lot widths are
              narrower than the reason they wanted a detached house.
            </p>
            <p>
              Those four decisions are more useful than comparing an invented 2,200-square-foot
              single against an invented 1,600-square-foot town. When Opus Homes publishes real
              plans, the same four questions still apply; they simply gain numbers. Until then,
              registration on this independent site is the mechanism for receiving those numbers.
              It is not an allocation, not a reservation, and not a statement that Bolton Place
              detached homes are a good investment in the abstract.
            </p>
          </div>
        </div>
      </article>
      <RegisterBand heading="Register for detached-home updates" />
    </>
  );
}
