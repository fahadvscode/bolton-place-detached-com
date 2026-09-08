/**
 * JSON-LD builders. All blocks read from lib/content.ts.
 *
 * NO Offer/AggregateOffer until Opus Homes publishes official pricing.
 * NO RealEstateAgent, operator Person, or brokerage Organization.
 */

import {
  BUILDER,
  FAQS,
  GALLERY_ITEMS,
  GEO,
  HOME_ANSWER,
  HOME_TYPES,
  LAST_UPDATED_ISO,
  PAGE_META,
  PROJECT_NAME,
  SITE_ORG_NAME,
  SITE_URL,
  STATUS,
} from "./content";
import { canonical } from "./seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: PROJECT_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-CA",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function siteOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_ORG_NAME,
    url: `${SITE_URL}/`,
    description:
      "An independent information and registration resource for Bolton Place detached homes. Not affiliated with or endorsed by Opus Homes.",
  };
}

export function residenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "Bolton Place",
    description:
      "Bolton Place is a pre-construction community by Opus Homes in Bolton, Caledon, Ontario, offering townhomes and detached homes.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Caledon",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    url: `${SITE_URL}/`,
    image: [
      `${SITE_URL}/images/og.jpg`,
      `${SITE_URL}/images/bolton-place-hero.jpg`,
      `${SITE_URL}/images/bolton-key-map.jpg`,
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Builder", value: BUILDER },
      { "@type": "PropertyValue", name: "Status", value: STATUS },
      { "@type": "PropertyValue", name: "Home types", value: HOME_TYPES },
      {
        "@type": "PropertyValue",
        name: "Pricing status",
        value: `Not released as of ${LAST_UPDATED_ISO}`,
      },
    ],
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function articleSchema() {
  const meta = PAGE_META.blog;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical(meta.path)}#article`,
    headline: meta.h1,
    description: meta.description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    inLanguage: "en-CA",
    mainEntityOfPage: canonical(meta.path),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical(opts.path)}#webpage`,
    url: canonical(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-CA",
    dateModified: LAST_UPDATED_ISO,
  };
}

export function gallerySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Bolton Place Detached Homes imagery",
    url: canonical("/gallery"),
    image: GALLERY_ITEMS.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${item.fallbackSrc}`,
      url: `${SITE_URL}${item.src}`,
      name: item.title,
      caption: item.caption,
      description: item.alt,
      width: item.width,
      height: item.height,
    })),
  };
}

export { HOME_ANSWER };
