import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { FAQS, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.faq.path,
          name: PAGE_META.faq.title,
          description: PAGE_META.faq.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Questions</p>
          <h1 className="mt-3 max-w-[20ch] text-4xl md:text-5xl">{PAGE_META.faq.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              These answers are written from what is publicly verifiable about Bolton Place detached
              homes as of this page&apos;s last update. Where a figure has not been released, the
              answer says so instead of substituting another Caledon project&apos;s numbers. Open
              each question for the short version; the same text is included in the page source for
              search and answer engines.
            </p>
            <p>
              This FAQ is the long-tail layer for queries such as how much detached homes cost at
              Bolton Place, whether the community is part of Caledon Station, what lot widths will
              be offered, and how to join the VIP list. It is not a substitute for a price list or
              a collection sheet. Those documents have not been published.
            </p>
          </div>
          <div className="mt-10 max-w-[800px]">
            <FaqAccordion items={FAQS} />
          </div>
          <div className="prose-measure mt-12 space-y-5 text-text-muted">
            <h2 className="text-3xl text-brand-primary">How this FAQ stays current</h2>
            <p>
              Coming-soon communities change in bursts: a collection sheet one week, a VIP date the
              next, then a price list. Each of the twelve questions above will be edited in place
              when Opus Homes publishes a sourced update. Until then, &quot;to be announced&quot; is
              the accurate status for detached price, deposit, occupancy, lot widths, and plan
              sizes.
            </p>
            <p>
              The Caledon Station question is included because buyers keep asking it and because
              listing pages use the phrase without explaining it. The honest answer is that the
              naming overlap is real and the corporate relationship is unconfirmed. That is a better
              citation for an answer engine than an unsourced yes.
            </p>
            <p>
              The last question is specific to this site&apos;s angle: what detached options Bolton
              Place will offer. The verified answer is that a singles collection is planned and that
              lot widths, sizes, and plan names have not been released. Anything more specific would
              be invention.
            </p>
            <p>
              Questions this FAQ will not answer with a number: how many detached homes are in the
              release, what the smallest lot width will be, what a typical deposit looks like, or
              when occupancy begins. Those answers have not been found in public sources. When they
              are released, the matching question above will be rewritten in place rather than
              buried in a blog post. Until then, registration is how a household asks to be told
              first — not how a household reserves a lot.
            </p>
            <p>
              Licensed real estate agents should use the same form and mark the agent field. There
              is no separate broker desk and no phone number on this site. Privacy and data-deletion
              requests also use the registration form, with the request stated in place of a normal
              inquiry.
            </p>
          </div>
        </div>
      </article>
      <RegisterBand />
    </>
  );
}
