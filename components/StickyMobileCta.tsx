"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyMobileCta() {
  const pathname = usePathname();
  if (pathname === "/thank-you") return null;

  const href = pathname === "/" || pathname === "/register" ? "#register" : "/register";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden [[data-popup=open]_&]:hidden">
      <Link href={href} className="btn-primary w-full">
        Register for updates
      </Link>
    </div>
  );
}
