import type { MetadataRoute } from "next";
import { LAST_UPDATED_ISO, SITEMAP_PATHS, SITE_URL } from "@/lib/content";

/**
 * GSC-readable sitemap via Next metadata route (app/sitemap.ts).
 * Do not add public/sitemap.xml — Google's RSC: 1 request would then 404 as XML.
 * Submit this exact URL in Search Console (apex property):
 * https://boltonplacedetached.com/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${LAST_UPDATED_ISO}T00:00:00.000Z`);

  return SITEMAP_PATHS.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
