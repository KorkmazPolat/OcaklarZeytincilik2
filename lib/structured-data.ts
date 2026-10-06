import type { Product } from "@/data/products";
export function serializeStructuredData(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
export function productStructuredData(product: Product, origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.id,
    url: origin + "/urunler/" + encodeURIComponent(product.id),
    brand: { "@type": "Brand", name: "Ocaklar Zeytincilik" },
  };
}
export function breadcrumbStructuredData(items: { name: string; url: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: item.url })) };
}
