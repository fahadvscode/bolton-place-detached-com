import Image from "next/image";
import { HERO_IMAGE, HOME_ANSWER, PAGE_META, PATTERNS, STATUS_SHORT } from "@/lib/content";
import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-deep">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-repeat opacity-25 mix-blend-multiply"
          style={{ backgroundImage: `url(${PATTERNS.banner})`, backgroundSize: "180px auto" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/88 to-brand-deep/50" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-8 px-4 py-12 sm:px-5 sm:py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="eyebrow text-brand-accent">{STATUS_SHORT} · Detached Homes · Bolton, Caledon</p>
          <h1 className="hero-title mt-4 max-w-[18ch] text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-[3.35rem]">
            {PAGE_META.home.h1}
          </h1>
          <p className="hero-lede prose-measure mt-6 text-[17px] md:text-[18px]">{HOME_ANSWER}</p>
        </div>
        <LeadForm compact />
      </div>
    </section>
  );
}
