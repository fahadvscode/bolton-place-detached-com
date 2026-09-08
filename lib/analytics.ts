export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  w.gtag?.("event", name, params);
  w.dataLayer?.push({ event: name, ...params });
}

export function trackMetaLead() {
  if (typeof window === "undefined") return;
  const w = window as Window & { fbq?: (...args: unknown[]) => void };
  w.fbq?.("track", "Lead");
}

export function isPlaceholderId(value: string | undefined, needle: string) {
  if (!value) return true;
  return value.includes(needle) || value.includes("XXXX") || value.includes("[");
}

export const PENDING_CONVERSION_KEY = "bpd_pending_conversion";
