import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { PAGE_META, PATTERNS, REGISTRATION_IMAGE } from "@/lib/content";
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
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">VIP Registration</p>
            <h1 className="mt-3 max-w-[16ch] text-4xl md:text-5xl">{PAGE_META.register.h1}</h1>
            <div className="prose-measure mt-6 space-y-5 text-text-muted">
              <p>
                Register with first name, last name, email, and phone to be added to the Bolton
                Place update list, with this site tracking the detached-home collection in
                particular. The Registration Team uses this form only — there is no phone number or
                email address published on this site.
              </p>
              <p>
                Registration is free and creates no obligation to purchase. Licensed real estate
                agents should mark the agent field so the list can be kept accurate.
              </p>
              <p>
                Privacy or data-deletion requests also go through this form. Note the request in
                place of a typical registration interest so it can be routed correctly.
              </p>
            </div>
            <figure className="card mt-8 overflow-hidden">
              <Image
                src={REGISTRATION_IMAGE.src}
                alt={REGISTRATION_IMAGE.alt}
                width={REGISTRATION_IMAGE.width}
                height={REGISTRATION_IMAGE.height}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="aspect-square h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-text-muted">
                {REGISTRATION_IMAGE.caption}
              </figcaption>
            </figure>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
