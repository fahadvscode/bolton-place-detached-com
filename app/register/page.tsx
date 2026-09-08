import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { PAGE_META, PATTERNS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.register);

export default function RegisterPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.register.path,
          name: PAGE_META.register.title,
          description: PAGE_META.register.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Register", path: "/register" },
        ])}
      />
      <section className="relative section-space overflow-hidden bg-surface">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 opacity-30 md:w-28"
          style={{
            backgroundImage: `url(${PATTERNS.registration})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[560px] px-4 sm:px-5">
          <p className="eyebrow">VIP Registration</p>
          <h1 className="mt-3 max-w-[16ch] text-3xl sm:text-4xl md:text-5xl">{PAGE_META.register.h1}</h1>
          <p className="prose-measure mt-4 text-text-muted">
            First name, last name, email, and phone. Free, no obligation. Privacy requests also use
            this form.
          </p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
