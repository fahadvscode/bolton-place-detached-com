import { LeadForm } from "./LeadForm";

export function RegisterBand({
  heading = "Register for updates",
  intro = "Leave your details. This form is the only contact channel on this site.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section
      className="relative section-space overflow-hidden bg-surface-alt"
      aria-labelledby="register-heading"
    >
      <div className="relative mx-auto grid max-w-[1200px] gap-6 px-4 sm:px-5 lg:grid-cols-2 lg:items-start lg:gap-10">
        <div>
          <p className="eyebrow">VIP Registration</p>
          <h2 id="register-heading" className="mt-3 text-2xl sm:text-3xl md:text-4xl">
            {heading}
          </h2>
          <p className="prose-measure mt-3 text-text-muted">{intro}</p>
        </div>
        <LeadForm compact />
      </div>
    </section>
  );
}
