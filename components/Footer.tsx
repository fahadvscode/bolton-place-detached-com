import Link from "next/link";
import { INDEPENDENCE_DISCLAIMER, LAST_UPDATED, NAV } from "@/lib/content";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-brand-deep pb-24 text-surface md:pb-0">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark inverted />
            <p className="mt-5 max-w-[36ch] text-sm text-surface/75">
              Independent information and VIP registration for Bolton Place detached homes, a
              pre-construction collection by Opus Homes in Bolton, Caledon.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-surface/90 hover:text-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/register"
                  className="inline-flex min-h-[44px] items-center text-surface/90 hover:text-surface"
                >
                  VIP Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/detached-vs-townhome-precon-bolton"
                  className="inline-flex min-h-[44px] items-center text-surface/90 hover:text-surface"
                >
                  Detached vs. townhome
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Registration Team</p>
            <p className="mt-4 text-sm text-surface/80">
              Registration is the only contact channel on this site. Use the VIP registration form
              for project updates and for privacy or data-deletion requests.
            </p>
            <p className="mt-6">
              <Link href="/register" className="btn-primary btn-compact">
                Register for updates
              </Link>
            </p>
            <p className="mt-8 text-xs text-surface/60">
              Opus Homes is the named builder of Bolton Place. This website is not the official
              Opus Homes site.
            </p>
            <p className="mt-6 text-sm text-surface/70">Last updated {LAST_UPDATED}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="max-w-[78ch] text-sm text-surface/80">{INDEPENDENCE_DISCLAIMER}</p>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link
              href="/privacy"
              className="inline-flex min-h-[44px] items-center text-surface/80 hover:text-surface hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="inline-flex min-h-[44px] items-center text-surface/80 hover:text-surface hover:underline"
            >
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
