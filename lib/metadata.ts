import type { Metadata } from "next";
import { getSiteUrl } from "./site-url";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const site = getSiteUrl();
  return {
    title: `${title} | Ocaklar Zeytincilik`,
    description,
    ...(site ? { alternates: { canonical: site + path } } : {}),
    openGraph: {
      title,
      description,
      locale: "tr_TR",
      type: "website",
      siteName: "Ocaklar Zeytincilik",
      ...(site ? { url: site + path, images: [{ url: site + "/opengraph-image", width: 1200, height: 630, alt: "Ocaklar Zeytincilik" }] } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
