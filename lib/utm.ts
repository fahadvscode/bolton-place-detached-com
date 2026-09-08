export const UTM_STORAGE_KEY = "bpd_first_touch";

export type UtmPayload = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function fromSearch(search: string): UtmPayload {
  const params = new URLSearchParams(search);
  const payload: UtmPayload = {};
  for (const key of PARAMS) {
    const value = params.get(key);
    if (value) payload[key] = value;
  }
  return payload;
}

export function captureFirstTouch(): UtmPayload {
  if (typeof window === "undefined") return {};

  try {
    const existing = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (existing) return JSON.parse(existing) as UtmPayload;

    const fromUrl = fromSearch(window.location.search);
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
    return fromUrl;
  } catch {
    return fromSearch(window.location.search);
  }
}

export function readFirstTouch(): UtmPayload {
  if (typeof window === "undefined") return {};
  try {
    const existing = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (existing) return JSON.parse(existing) as UtmPayload;
  } catch {
    return {};
  }
  return captureFirstTouch();
}
