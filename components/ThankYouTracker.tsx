"use client";

import { useEffect } from "react";
import { PENDING_CONVERSION_KEY, trackEvent, trackMetaLead } from "@/lib/analytics";

export function ThankYouTracker() {
  useEffect(() => {
    try {
      const pending = sessionStorage.getItem(PENDING_CONVERSION_KEY);
      if (pending !== "1") return;
      sessionStorage.removeItem(PENDING_CONVERSION_KEY);
    } catch {
      return;
    }
    trackEvent("form_submit");
    trackMetaLead();
  }, []);

  return null;
}
