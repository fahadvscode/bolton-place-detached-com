"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { CASL_CONSENT } from "@/lib/content";
import { leadFormSchema, type LeadFormValues } from "@/lib/validation";
import { captureFirstTouch, readFirstTouch } from "@/lib/utm";
import { PENDING_CONVERSION_KEY, trackEvent } from "@/lib/analytics";

const inputClass =
  "mt-1.5 w-full min-h-[44px] rounded-sm border border-border bg-surface-card px-3 py-2.5 text-[16px] text-text-primary md:text-[17px]";
const labelClass = "block text-[15px] font-semibold text-brand-primary";

export function LeadForm({
  id = "register",
  compact = false,
  embedded = false,
}: {
  id?: string;
  compact?: boolean;
  embedded?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const started = useRef(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [ts] = useState(() => String(Date.now()));

  useEffect(() => {
    captureFirstTouch();
  }, []);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      website: "",
      ts,
      page_path: pathname,
      casl_consent: false,
    },
  });

  const onFocusCapture = () => {
    if (started.current) return;
    started.current = true;
    try {
      if (!sessionStorage.getItem("bpd_form_start")) {
        sessionStorage.setItem("bpd_form_start", "1");
        trackEvent("form_start");
      }
    } catch {
      trackEvent("form_start");
    }
  };

  const onSubmit = form.handleSubmit(async (values) => {
    setServerError(null);
    const utm = readFirstTouch();
    const payload = {
      ...values,
      ts,
      page_path: pathname,
      ...utm,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        redirect?: string;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!res.ok || !data.ok) {
        if (data.fieldErrors) {
          Object.entries(data.fieldErrors).forEach(([key, message]) => {
            form.setError(key as keyof LeadFormValues, { message });
          });
        }
        setServerError(data.error ?? "Registration could not be completed. Please try again.");
        return;
      }

      try {
        sessionStorage.setItem(PENDING_CONVERSION_KEY, "1");
      } catch {
        /* conversion still fires on thank-you if storage is blocked */
      }
      router.push(data.redirect ?? "/thank-you");
    } catch {
      setServerError("A network error occurred. Please try again.");
    }
  });

  const errors = form.formState.errors;

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      onFocusCapture={onFocusCapture}
      className={`${
        embedded
          ? "scroll-mt-28 p-0"
          : compact
            ? "card scroll-mt-28 p-4 sm:p-5 md:p-6"
            : "card scroll-mt-28 p-5 sm:p-6 md:p-8"
      } text-text-primary`}
      noValidate
    >
      {embedded ? null : compact ? (
        <p className="mb-3 font-display text-lg font-semibold text-brand-primary">Register</p>
      ) : (
        <p className="mb-3 font-display text-xl font-semibold text-brand-primary sm:text-2xl">
          Register for updates
        </p>
      )}
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={`${id}-first_name`} className={labelClass}>
            First name
          </label>
          <input
            id={`${id}-first_name`}
            autoComplete="given-name"
            className={inputClass}
            {...form.register("first_name")}
          />
          {errors.first_name ? (
            <p className="mt-1 text-sm text-error">{errors.first_name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor={`${id}-last_name`} className={labelClass}>
            Last name
          </label>
          <input
            id={`${id}-last_name`}
            autoComplete="family-name"
            className={inputClass}
            {...form.register("last_name")}
          />
          {errors.last_name ? (
            <p className="mt-1 text-sm text-error">{errors.last_name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            type="email"
            inputMode="email"
            autoComplete="email"
            className={inputClass}
            {...form.register("email")}
          />
          {errors.email ? <p className="mt-1 text-sm text-error">{errors.email.message}</p> : null}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelClass}>
            Phone
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={inputClass}
            {...form.register("phone")}
          />
          {errors.phone ? <p className="mt-1 text-sm text-error">{errors.phone.message}</p> : null}
        </div>
      </div>

      <fieldset className="mt-3">
        <legend className={labelClass}>Licensed agent?</legend>
        <div className="mt-2 flex gap-6">
          <label className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-text-primary">
            <input type="radio" value="yes" className="h-4 w-4 accent-brand-accent" {...form.register("is_broker")} />
            Yes
          </label>
          <label className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-text-primary">
            <input type="radio" value="no" className="h-4 w-4 accent-brand-accent" {...form.register("is_broker")} />
            No
          </label>
        </div>
        {errors.is_broker ? (
          <p className="mt-1 text-sm text-error">{errors.is_broker.message}</p>
        ) : null}
      </fieldset>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          tabIndex={-1}
          autoComplete="off"
          {...form.register("website")}
        />
      </div>
      <input type="hidden" {...form.register("ts")} />

      <div className="mt-3">
        <label className="flex min-h-[44px] items-start gap-3 text-[13px] leading-snug text-text-primary sm:text-[14px]">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 min-h-[20px] min-w-[20px] shrink-0 accent-brand-accent"
            {...form.register("casl_consent")}
          />
          <span>{CASL_CONSENT}</span>
        </label>
        {errors.casl_consent ? (
          <p className="mt-1 text-sm text-error">{errors.casl_consent.message}</p>
        ) : null}
      </div>

      <div aria-live="polite" className="mt-2 min-h-5 text-sm text-error">
        {serverError}
      </div>

      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="btn-primary mt-2 w-full"
      >
        {form.formState.isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ui/loading.gif" alt="" width={20} height={20} />
            Submitting…
          </span>
        ) : (
          "Register"
        )}
      </button>
      {embedded ? null : (
        <p className="mt-2 text-[12px] text-text-muted">
          Free. No obligation.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-brand-accent">
            Privacy
          </a>
        </p>
      )}
    </form>
  );
}
