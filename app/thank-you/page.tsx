import type { Metadata } from "next";
import Link from "next/link";
import { ThankYouTracker } from "@/components/ThankYouTracker";
import { JsonLd } from "@/components/JsonLd";
import { PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.thankYou);

export default function ThankYouPage() {
  return (
    <>
      <ThankYouTracker />
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.thankYou.path,
          name: PAGE_META.thankYou.title,
          description: PAGE_META.thankYou.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Thank you", path: "/thank-you" },
        ])}
      />
      <section className="section-space bg-surface">
        <div className="mx-auto max-w-[720px] px-5">
          <p className="eyebrow">Registration received</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{PAGE_META.thankYou.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              The Registration Team has your details for Bolton Place detached homes by Opus Homes.
              When pricing, floor plans, lot widths, or a launch date are released, updates can be
              sent to the contact information you provided.
            </p>
            <p>
              Registration does not reserve a home and does not create a purchase agreement. You can
              withdraw consent using the unsubscribe link in any message you receive.
            </p>
          </div>
          <p className="mt-8">
            <Link href="/" className="btn-primary">
              Return to the overview
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
