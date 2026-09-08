import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Analytics, GtmNoscript } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { LeadPopup } from "@/components/LeadPopup";
import { siteOrganizationSchema, websiteSchema } from "@/lib/schema";
import { PAGE_META, SITE_NAME, SITE_URL } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3D5A42",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata(PAGE_META.home),
  title: {
    default: PAGE_META.home.title,
    template: "%s",
  },
  applicationName: SITE_NAME,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  // replace with real verification token before launch
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "PLACEHOLDER_GSC_TOKEN",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "PLACEHOLDER_BING_TOKEN",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "PLACEHOLDER_GSC_TOKEN";
  const bing = process.env.NEXT_PUBLIC_BING_VERIFICATION || "PLACEHOLDER_BING_TOKEN";

  return (
    <html lang="en-CA" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* replace with real verification token before launch */}
        <meta name="google-site-verification" content={gsc} />
        <meta name="msvalidate.01" content={bing} />
        <meta name="theme-color" content="#3D5A42" />
        <link rel="icon" href="/icon-48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <GtmNoscript />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={websiteSchema()} />
        <JsonLd data={siteOrganizationSchema()} />
        <Nav />
        <main id="main" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
        <LeadPopup />
        <Analytics />
      </body>
    </html>
  );
}
