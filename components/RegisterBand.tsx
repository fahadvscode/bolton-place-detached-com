import Image from "next/image";
import { PATTERNS, REGISTRATION_IMAGE } from "@/lib/content";
import { LeadForm } from "./LeadForm";

export function RegisterBand({
  heading = "Register for Bolton Place detached-home updates",
  intro = "Leave your details with the Registration Team. There is no phone number or email inbox on this site — this form is the only contact channel, including for privacy requests.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section
      className="relative section-space overflow-hidden bg-surface-alt"
      aria-labelledby="register-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 opacity-40 md:w-40"
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
          <h2 id="register-heading" className="mt-3 text-3xl md:text-4xl">
            {heading}
          </h2>
          <p className="prose-measure mt-4 text-text-muted">{intro}</p>
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
  );
}
