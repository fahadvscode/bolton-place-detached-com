/**
 * Single source of truth for every project fact used in pages, metadata, and JSON-LD.
 * Last updated: 2026-09-06
 *
 * UNVERIFIED — confirm whether Bolton Place is part of the Argo Development Corp
 * Caledon Station master plan or a separate, similarly-named project by Opus Homes
 * before publishing any claim that ties the two together as the same community.
 */

export const SITE_URL = "https://boltonplacedetached.com";
export const SITE_HOST = "boltonplacedetached.com";
export const SITE_SOURCE = "boltonplacedetached.com";

export const LAST_UPDATED = "September 6, 2026";
export const LAST_UPDATED_ISO = "2026-09-06";

export const PROJECT_NAME = "Bolton Place";
export const PROJECT_NAME_LONG = "Bolton Place Detached Homes";
export const BUILDER = "Opus Homes";
export const CITY = "Bolton";
export const MUNICIPALITY = "Town of Caledon";
export const PROVINCE = "Ontario";
export const COUNTRY = "Canada";
export const INTERSECTION = "The Gore Road & King Street";
export const ADDRESS_LOCALITY = "Caledon";
export const ADDRESS_REGION = "ON";
export const ADDRESS_COUNTRY = "CA";

export const GEO = {
  latitude: 43.8745,
  longitude: -79.728,
} as const;

export const MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${GEO.latitude},${GEO.longitude}&z=14&output=embed`;

export const HOME_TYPES = "Townhomes and detached homes";
export const STATUS = "Coming Soon / Registration";
export const STATUS_SHORT = "Coming Soon";
export const TBA = "To be announced";

export const SITE_NAME = "Bolton Place Detached Homes";
export const SITE_ORG_NAME = "Bolton Place Detached Homes Independent Information";

export const HERO_IMAGE = {
  src: "/images/bolton-place-hero.webp",
  fallbackSrc: "/images/bolton-place-hero.jpg",
  alt: "Lifestyle photograph used in Bolton Place marketing — a family walking at golden hour near Bolton, Caledon. Not an architectural rendering of a detached home.",
  width: 1920,
  height: 1080,
  caption:
    "Marketing lifestyle photography for Bolton Place. This is not a streetscape or architectural rendering of the detached collection.",
} as const;

export const OG_IMAGE = {
  src: "/images/og.jpg",
  width: 1200,
  height: 630,
  alt: "Bolton Place detached homes in Bolton, Caledon — lifestyle photograph from the project marketing set.",
} as const;

export const PATTERNS = {
  banner: "/images/banner-pattern.png",
  registration: "/images/registration-pattern.png",
} as const;

export const KEY_MAP = {
  src: "/images/bolton-key-map.webp",
  fallbackSrc: "/images/bolton-key-map.jpg",
  width: 1600,
  height: 1400,
  alt: "Bolton Place key map showing the community near The Gore Road and King Street in Bolton, Caledon, Ontario, west of Humber Station Road.",
  caption:
    "Key map for Bolton Place near The Gore Road and King Street in Bolton, Caledon. Exact lot lines and detached lot widths remain unreleased.",
} as const;

export const REGISTRATION_IMAGE = {
  src: "/images/registration-image.webp",
  fallbackSrc: "/images/registration-image.jpg",
  width: 1392,
  height: 1300,
  alt: "Lifestyle photograph used beside Bolton Place detached-home VIP registration — a couple outdoors in the GTA. Not a rendering of a specific house.",
  caption: "VIP registration lifestyle photograph from the Bolton Place marketing set.",
} as const;

export type SiteImage = {
  id: string;
  src: string;
  fallbackSrc: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  title: string;
};

export const AREA_AMENITIES: SiteImage[] = [
  {
    id: "trails-parks",
    src: "/images/trails-parks.webp",
    fallbackSrc: "/images/trails-parks.jpg",
    width: 1112,
    height: 1039,
    title: "Trails and parks",
    alt: "Wooded trail near Bolton, Caledon — parks and trail context for buyers considering a detached home at Bolton Place.",
    caption:
      "Trails and parks around Bolton, Caledon. Marketing photography; not a confirmed amenity inside the Bolton Place site plan.",
  },
  {
    id: "recreation-wellness",
    src: "/images/recreation-wellness.webp",
    fallbackSrc: "/images/recreation-wellness.jpg",
    width: 1112,
    height: 1038,
    title: "Recreation and wellness",
    alt: "Recreation and wellness setting in the Bolton, Caledon area near Bolton Place detached homes.",
    caption:
      "Recreation and wellness in the wider Bolton / Caledon area. Confirm facilities independently; this is not a project specification.",
  },
  {
    id: "school-library",
    src: "/images/school-library.webp",
    fallbackSrc: "/images/school-library.jpg",
    width: 1112,
    height: 1038,
    title: "Schools and library",
    alt: "School and library context in Bolton, Caledon for buyers researching Bolton Place detached homes.",
    caption:
      "Schools and library context in Bolton, Caledon. Catchment designations for Bolton Place have not been published.",
  },
  {
    id: "shopping-dining",
    src: "/images/shopping-dining.webp",
    fallbackSrc: "/images/shopping-dining.jpg",
    width: 1112,
    height: 1039,
    title: "Shopping and dining",
    alt: "Shopping and dining streetscape in the Bolton, Caledon area near The Gore Road and King Street.",
    caption:
      "Shopping and dining in existing Bolton. These businesses are not inside an unreleased Bolton Place site plan.",
  },
  {
    id: "shops-restaurants",
    src: "/images/shops-restaurants.webp",
    fallbackSrc: "/images/shops-restaurants.jpg",
    width: 1111,
    height: 1039,
    title: "Shops and restaurants",
    alt: "Shops and restaurants in Bolton, a community in the Town of Caledon, Ontario.",
    caption: "Existing Bolton shops and restaurants — area context for Bolton Place detached homes.",
  },
  {
    id: "transit",
    src: "/images/transit.webp",
    fallbackSrc: "/images/transit.jpg",
    width: 1112,
    height: 1038,
    title: "Transit connections",
    alt: "Transit context for Bolton Place detached homes near The Gore Road and King Street in Bolton, Caledon.",
    caption:
      "Regional transit context for Bolton. A GO station on this site has not been independently confirmed for Bolton Place.",
  },
];

export const GALLERY_ITEMS: SiteImage[] = [
  {
    id: "caledon-station",
    src: "/images/caledon-station.webp",
    fallbackSrc: "/images/caledon-station.jpg",
    width: 1920,
    height: 1070,
    title: "Caledon Station area lifestyle",
    alt: "Lifestyle photograph labelled Caledon Station in the Bolton Place marketing set — a family walking outdoors near Bolton, Caledon. Not a rendering of a detached house.",
    caption:
      "File name: caledon-station. Lifestyle photography tied to the Caledon Station naming used on some Bolton Place listings. The master-plan relationship remains unconfirmed.",
  },
  {
    id: "small-town",
    src: "/images/small-town.webp",
    fallbackSrc: "/images/small-town.jpg",
    width: 1111,
    height: 1039,
    title: "Small-town Bolton",
    alt: "Small-town street character in Bolton, Caledon, Ontario — area context for Bolton Place detached homes.",
    caption: "Small-town Bolton character. Area photography, not a Bolton Place streetscape.",
  },
  {
    id: "registration-image",
    src: REGISTRATION_IMAGE.src,
    fallbackSrc: REGISTRATION_IMAGE.fallbackSrc,
    width: REGISTRATION_IMAGE.width,
    height: REGISTRATION_IMAGE.height,
    title: "VIP registration",
    alt: REGISTRATION_IMAGE.alt,
    caption: REGISTRATION_IMAGE.caption,
  },
  {
    id: "bolton-key-map",
    src: KEY_MAP.src,
    fallbackSrc: KEY_MAP.fallbackSrc,
    width: KEY_MAP.width,
    height: KEY_MAP.height,
    title: "Bolton key map",
    alt: KEY_MAP.alt,
    caption: KEY_MAP.caption,
  },
  ...AREA_AMENITIES,
];

export const NAV = [
  { href: "/", label: "Overview" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
] as const;

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "What home types are available at Bolton Place?",
    a: "Bolton Place is planned to include townhomes and single-family detached homes, per public listing sources. Specific floor plans and sizes have not been released.",
  },
  {
    q: "What is Bolton Place?",
    a: "Bolton Place is a pre-construction community by Opus Homes near The Gore Road and King Street in Bolton, part of the Town of Caledon, Ontario, planned to offer townhomes and detached homes.",
  },
  {
    q: "How much do homes cost at Bolton Place?",
    a: "Opus Homes has not released pricing for Bolton Place. Register for updates to be notified first when pricing is released.",
  },
  {
    q: "Where is Bolton Place located?",
    a: "Bolton Place is located near The Gore Road and King Street in Bolton, a community within the Town of Caledon, Ontario.",
  },
  {
    q: "Who is building Bolton Place?",
    a: "Bolton Place is built by Opus Homes, a GTA-area homebuilder also behind Founders Walk and a joint partner on the separate SouthCal Homes community elsewhere in Caledon.",
  },
  {
    q: "Is Bolton Place part of Caledon Station?",
    a: "Bolton Place is sometimes referenced as 'Bolton Place at Caledon Station,' suggesting a connection to the wider Caledon Station master-planned area, but this has not been independently confirmed — confirm directly with Opus Homes.",
  },
  {
    q: "When will Bolton Place launch?",
    a: "Opus Homes has not announced a firm public launch date for Bolton Place. The project is currently in a registration-only, Coming Soon stage.",
  },
  {
    q: "Is Bolton Place a good investment?",
    a: "With pricing not yet released, a specific investment case can't be made with real numbers yet. Bolton's location within Caledon, where Greenbelt legislation limits future developable land, is generally cited as a favourable long-term dynamic.",
  },
  {
    q: "What is the deposit structure for Bolton Place?",
    a: "A deposit structure for Bolton Place has not been announced. Register for updates to receive this information when it is released.",
  },
  {
    q: "How do I register for updates on Bolton Place?",
    a: "Register directly on this site with your first name, last name, email, and phone number to be added to the Bolton Place update list.",
  },
  {
    q: "Who is Opus Homes?",
    a: "Opus Homes is a GTA-area homebuilder active on multiple pre-construction communities, including Bolton Place and Founders Walk, and a joint builder alongside Arista Homes and Deco Homes on the SouthCal Homes community elsewhere in Caledon.",
  },
  {
    q: "What detached home options will Bolton Place offer?",
    a: "Bolton Place is planned to include single-family detached homes alongside its townhome collection, per public listing sources. Specific lot widths, sizes, and plan names have not been released.",
  },
];

export const HOME_ANSWER =
  "Bolton Place is a pre-construction community by Opus Homes near The Gore Road and King Street in Bolton, part of the Town of Caledon, Ontario, planned to offer townhomes and detached homes. Pricing has not been released as of September 6, 2026; registered buyers typically get first access when details are announced.";

export const QUICK_FACTS = [
  { label: "Builder", value: "Opus Homes" },
  { label: "Type", value: "Townhomes & Detached Homes" },
  { label: "Location", value: "The Gore Rd & King St, Bolton, Caledon, ON" },
  {
    label: "Possible master plan link",
    value: "Caledon Station (naming suggests a connection — unconfirmed)",
  },
  { label: "Starting Price", value: TBA },
  { label: "Status", value: STATUS },
] as const;

export const COLLECTIONS = [
  {
    id: "detached",
    name: "Detached Homes",
    status: "Collection tier announced — plan names, lot widths, and sizes not released",
    summary:
      "Bolton Place's single-family detached collection, per public listing sources. Specific lot widths, interior sizes, garage layouts, and plan names have not been released. This briefing exists for buyers who already prefer a detached lot over a townhome and want to be on the list when those details are published.",
  },
  {
    id: "townhomes",
    name: "Townhomes (also planned)",
    status: "Separate collection at the same community — not the focus of this site",
    summary:
      "Public listings also describe a townhome collection at Bolton Place. This site does not substitute townhome plans for detached ones. Buyers comparing attached product can still register here; collection sheets, when released, typically cover both tiers.",
  },
] as const;

export const PRICING_ROWS = [
  { label: "Starting price — detached homes", value: TBA },
  { label: "Starting price — townhomes", value: TBA },
  { label: "Detached lot premiums", value: TBA },
  { label: "Deposit structure", value: TBA },
  { label: "Occupancy / closing timeline", value: TBA },
  { label: "Incentives and promotions", value: TBA },
  { label: "Development levies", value: TBA },
  { label: "Garage / parking pricing", value: TBA },
  { label: "Assignment policy", value: TBA },
] as const;

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Bolton Place. It is not the official website of Opus Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about Bolton Place and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export const PRICING_DISCLAIMER = `Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of ${LAST_UPDATED}.`;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
};

export const PAGE_META = {
  home: {
    path: "/",
    title: "Bolton Place Detached Homes | Opus Homes Bolton",
    description:
      "New homes by Opus Homes near The Gore Rd & King St, Bolton, Caledon. Register for updates.",
    h1: "Bolton Place Detached Homes — Bolton, Caledon",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Bolton Place Detached Homes Floor Plans",
    description: "Explore planned collection tiers at Bolton Place Detached Homes.",
    h1: "Bolton Place Detached Homes Floor Plans — Detached Homes",
  },
  pricing: {
    path: "/pricing",
    title: "Bolton Place Detached Homes Prices",
    description: "Pricing status, tracked and updated as Opus Homes releases details.",
    h1: "Bolton Place Detached Homes Prices & Deposit Structure",
  },
  location: {
    path: "/location",
    title: "Bolton Place Detached Homes Location",
    description: "Located near The Gore Rd & King St in Bolton, Caledon.",
    h1: "Bolton Place Detached Homes Location — Bolton, Caledon",
  },
  gallery: {
    path: "/gallery",
    title: "Bolton Place Detached Homes Renderings & Site Plan",
    description:
      "Bolton Place key map, Caledon lifestyle photography, parks, transit, and shopping context near The Gore Rd and King St. Official architectural renderings of detached homes remain unreleased.",
    h1: "Bolton Place Detached Homes Renderings & Site Plan",
  },
  faq: {
    path: "/faq",
    title: "Bolton Place Detached Homes FAQ",
    description: "Answers to the most common questions about this project.",
    h1: "Bolton Place Detached Homes FAQ",
  },
  register: {
    path: "/register",
    title: "Register — Bolton Place Detached Homes Updates",
    description: "Register for community updates.",
    h1: "Register for Bolton Place Detached Homes Updates",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration received — Bolton Place Detached Homes",
    description: "Your Bolton Place detached-home registration has been received.",
    h1: "You are on the Bolton Place update list",
  },
  blog: {
    path: "/blog/detached-vs-townhome-precon-bolton",
    title: "Detached vs. Townhome Pre-Construction: What Bolton Buyers Should Weigh",
    description: "Detached vs. Townhome Pre-Construction: What Bolton Buyers Should Weigh",
    h1: "Detached vs. Townhome Pre-Construction: What Bolton Buyers Should Weigh",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | boltonplacedetached.com",
    description: "How this independent information site collects and protects your data.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | boltonplacedetached.com",
    description: "Terms of use for this independent information website.",
    h1: "Terms of Use",
  },
} as const satisfies Record<string, PageMeta>;

export const SITEMAP_PATHS = [
  "/",
  "/floor-plans",
  "/pricing",
  "/location",
  "/gallery",
  "/faq",
  "/register",
  "/thank-you",
  "/blog/detached-vs-townhome-precon-bolton",
  "/privacy",
  "/terms",
] as const;
