import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getSiteUrl, isIndexable } from "@/lib/site-url";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  if (!origin || !isIndexable()) return [];
  return [
    ...["", "/urunler", "/iletisim", "/siparis-ve-teslimat", "/gizlilik"].map((path) => ({ url: origin + path })),
    ...products.map((p) => ({ url: origin + "/urunler/" + encodeURIComponent(p.id) })),
  ];
}
