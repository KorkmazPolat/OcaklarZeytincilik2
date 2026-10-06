import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexable } from "@/lib/site-url";
export default function robots(): MetadataRoute.Robots {
  const origin = getSiteUrl();
  const indexable = isIndexable();
  return {
    rules: indexable ? { userAgent: "*", allow: "/", disallow: "/siparis" } : { userAgent: "*", disallow: "/" },
    ...(origin && indexable ? { sitemap: origin + "/sitemap.xml" } : {}),
  };
}
