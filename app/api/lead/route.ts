import { NextResponse } from "next/server";
import { getSupabaseAnon } from "@/lib/supabase";
import { SITE_SOURCE } from "@/lib/content";
import { leadFormSchema, MIN_SUBMIT_MS, normalizePhone } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadFormSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true, redirect: "/thank-you" });
  }

  const started = Number(data.ts);
  if (!Number.isFinite(started) || Date.now() - started < MIN_SUBMIT_MS) {
    return NextResponse.json(
      { ok: false, error: "Please wait a moment and submit again." },
      { status: 400 },
    );
  }

  const consentAt = new Date().toISOString();
  const pagePath = data.page_path || "/register";

  try {
    const supabase = getSupabaseAnon();
    const { error } = await supabase.from("bolton_place_leads").insert({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: normalizePhone(data.phone),
      is_broker: data.is_broker === "yes",
      site_source: SITE_SOURCE,
      consent: true,
      consent_timestamp: consentAt,
      page_path: pagePath,
      utm_source: data.utm_source || null,
      utm_medium: data.utm_medium || null,
      utm_campaign: data.utm_campaign || null,
      utm_term: data.utm_term || null,
      utm_content: data.utm_content || null,
    });

    if (error) {
      console.error("Lead insert failed", error.message);
      return NextResponse.json(
        { ok: false, error: "Registration could not be stored. Please try again." },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Lead handler error", error);
    return NextResponse.json(
      { ok: false, error: "Registration is temporarily unavailable. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, redirect: "/thank-you" });
}
