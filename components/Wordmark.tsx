import Link from "next/link";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`block leading-none ${inverted ? "text-surface" : "text-brand-primary"}`}>
      <span className="font-display text-xl font-semibold tracking-tight md:text-[1.35rem]">
        Bolton Place
      </span>
      <span className="wordmark-rule" aria-hidden="true" />
    </span>
  );
}

export function WordmarkLink() {
  return (
    <Link href="/" className="inline-flex min-h-[44px] items-center" aria-label="Bolton Place home">
      <Wordmark />
    </Link>
  );
}
