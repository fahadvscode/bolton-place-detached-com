import type { Metadata } from "next";
import { LAST_UPDATED_ISO, SITE_NAME, SITE_URL, type PageMeta } from "./content";

export function canonical(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function buildMetadata(page: PageMeta): Metadata {
  const url = canonical(page.path);
  const image = `${SITE_URL}/images/og.jpg`;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: page.title,
      description: page.description,
      siteName: SITE_NAME,
      locale: "en_CA",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Bolton Place detached homes in Bolton, Caledon",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
    other: {
      "article:modified_time": LAST_UPDATED_ISO,
    },
  };
}
