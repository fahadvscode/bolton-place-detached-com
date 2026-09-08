import type { Metadata } from "next";
import Link from "next/link";
import { INDEPENDENCE_DISCLAIMER, LAST_UPDATED, PAGE_META, PRICING_DISCLAIMER } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_META.terms);

export default function TermsPage() {
  return (
    <article className="section-space bg-surface">
      <div className="mx-auto max-w-[720px] px-5">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl md:text-5xl">{PAGE_META.terms.h1}</h1>
        <p className="mt-4 text-sm text-text-muted">Current as of {LAST_UPDATED}</p>
        <div className="mt-8 space-y-5 text-text-muted">
          <p>
            These terms govern use of this independent information website. By using the site you
            agree to them. If you do not agree, do not submit the registration form.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">Independent resource</h2>
          <p>{INDEPENDENCE_DISCLAIMER}</p>
          <h2 className="pt-2 text-3xl text-brand-primary">No professional advice</h2>
          <p>
            Content is general project information, not legal, tax, mortgage, or investment advice,
            and not an offer to sell a home. Pre-construction purchases involve risk. Confirm every
            figure with Opus Homes and with your own advisors before acting.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">Pricing and specifications</h2>
          <p>{PRICING_DISCLAIMER}</p>
          <h2 className="pt-2 text-3xl text-brand-primary">Registration</h2>
          <p>
            Submitting the form requests to join an update list. It does not reserve a lot, allocate
            a home, or create a contract with Opus Homes or with the operator of this site. You must
            provide accurate contact details and the CASL consent required to receive electronic
            messages.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">Contact</h2>
          <p>
            This site publishes no phone number and no email address. The{" "}
            <Link href="/register" className="underline underline-offset-2 hover:text-brand-accent">
              VIP registration form
            </Link>{" "}
            is the only contact channel, including for questions about these terms.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">Governing law</h2>
          <p>
            These terms are governed by the laws of the Province of Ontario and the federal laws of
            Canada applicable in Ontario.
          </p>
        </div>
      </div>
    </article>
  );
}
