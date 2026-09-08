import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space bg-surface">
      <div className="mx-auto max-w-[720px] px-5">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-3 text-4xl md:text-5xl">That page is not on this site</h1>
        <p className="prose-measure mt-6 text-text-muted">
          The address may have changed, or it may never have existed. Use the navigation or
          register for Bolton Place detached-home updates from the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to overview
          </Link>
          <Link href="/register" className="btn-primary">
            VIP Registration
          </Link>
        </div>
      </div>
    </section>
  );
}
