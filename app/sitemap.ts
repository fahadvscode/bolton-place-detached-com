import type { MetadataRoute } from "next";
import { LAST_UPDATED_ISO, SITEMAP_PATHS, SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: LAST_UPDATED_ISO,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
