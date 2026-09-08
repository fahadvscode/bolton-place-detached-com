import { z } from "zod";

const namePattern = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'-]{0,59}$/;

export const leadFormSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, "Enter a first name")
    .max(60, "First name must be 60 characters or fewer")
    .regex(namePattern, "Use letters, spaces, hyphens or apostrophes only"),
  last_name: z
    .string()
    .trim()
    .min(1, "Enter a last name")
    .max(60, "Last name must be 60 characters or fewer")
    .regex(namePattern, "Use letters, spaces, hyphens or apostrophes only"),
  email: z
    .email("Enter a valid email address")
    .trim()
    .max(254)
    .transform((value) => value.toLowerCase()),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a phone number")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length === 10 || digits.length === 11;
    }, "Enter a 10- or 11-digit North American phone number"),
  is_broker: z.enum(["yes", "no"], {
    error: "Select yes or no",
  }),
  casl_consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required to register",
  }),
  website: z.string().optional().default(""),
  ts: z.string().min(1),
  page_path: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
});

export type LeadFormValues = z.input<typeof leadFormSchema>;
export type LeadFormParsed = z.output<typeof leadFormSchema>;

export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits;
}

export const MIN_SUBMIT_MS = 2000;
