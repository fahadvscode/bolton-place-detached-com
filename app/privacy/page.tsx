import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_META.privacy);

export default function PrivacyPage() {
  return (
    <article className="section-space bg-surface">
      <div className="mx-auto max-w-[720px] px-5">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl md:text-5xl">{PAGE_META.privacy.h1}</h1>
        <p className="mt-4 text-sm text-text-muted">Current as of {LAST_UPDATED}</p>
        <div className="mt-8 space-y-5 text-text-muted">
          <p>
            This independent information website collects personal information only through the VIP
            registration form. There is no phone number or email address published on the site. This
            policy explains what is collected, why, where it is stored, and how to ask for deletion.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">What is collected and why</h2>
          <p>
            The form collects first name, last name, email, phone, and whether you are a licensed
            real estate agent. Hidden technical fields may also capture UTM parameters (utm_source,
            utm_medium, utm_campaign, utm_term, utm_content) from the address bar, the page path
            where you submitted, a consent timestamp, and a CASL consent flag. That information is
            used to respond to the registration request and to send project updates about Bolton
            Place and similar pre-construction opportunities, consistent with the consent language
            on the form.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">Where data is stored</h2>
          <p>
            Lead records are stored with a third-party processor, Supabase, in a dedicated leads
            table. The processor is used to hold the registration record and to support sending
            project updates. Access is limited to operating the registration list. This site does
            not sell registration lists.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">How to request deletion</h2>
          <p>
            To request access, correction, or deletion of a registration record, submit the same{" "}
            <Link href="/register" className="underline underline-offset-2 hover:text-brand-accent">
              VIP registration form
            </Link>{" "}
            and state the privacy or deletion request in place of a normal inquiry — for example in
            the name fields together with a clear note of the request, using the email address
            originally registered. That form is the sole contact mechanism on this site, including
            for privacy requests, because no phone number or email address is published.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">Cookies and analytics</h2>
          <p>
            This site may load Google Analytics 4, Google Tag Manager, and the Meta (Facebook) Pixel
            when those measurement IDs are configured. Those tools set cookies or similar identifiers
            to measure visits, registration starts, and completed registrations. They are not
            required to read the public pages. Browser controls can block analytics cookies; doing
            so does not remove a lead already stored after a form submission.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">PIPEDA</h2>
          <p>
            Personal information is handled in a manner intended to comply with Canada&apos;s
            Personal Information Protection and Electronic Documents Act (PIPEDA): collection is
            limited to what the form needs, used for the stated registration purpose, stored with a
            processor under that purpose, and available for deletion through the process above.
            Electronic marketing messages are sent only with the CASL consent collected on the form,
            which is unchecked by default.
          </p>
          <h2 className="pt-2 text-3xl text-brand-primary">Accessibility</h2>
          <p>
            Pages are built to meet WCAG 2.1 Level AA as a practical standard consistent with
            Ontario&apos;s Accessibility for Ontarians with Disabilities Act (AODA) expectations for
            public-facing websites. If a page is difficult to use, send that note through the
            registration form so it can be reviewed.
          </p>
        </div>
      </div>
    </article>
  );
}
