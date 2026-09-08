import type { NextConfig } from "next";

const sitemapHeaders = [
  { key: "Content-Type", value: "application/xml; charset=utf-8" },
  { key: "Content-Disposition", value: "inline" },
  { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
];

const robotsHeaders = [
  { key: "Content-Type", value: "text/plain; charset=utf-8" },
  { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/sitemap.xml", headers: sitemapHeaders },
      { source: "/sitemap.xml.rsc", headers: sitemapHeaders },
      { source: "/robots.txt", headers: robotsHeaders },
      { source: "/robots.txt.rsc", headers: robotsHeaders },
    ];
  },
};

export default nextConfig;
