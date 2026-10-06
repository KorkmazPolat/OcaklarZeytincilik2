import type { Category, Product } from "@/data/products";
export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Tüm ürünler" }, { id: "zeytin", label: "Zeytin" },
  { id: "zeytinyagi", label: "Zeytinyağı" }, { id: "sabun", label: "Doğal sabun" },
  { id: "peynir", label: "Peynir" },
];
export function normalizeSearch(value: string) {
  return value.toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i").trim();
}
export function filterProducts(items: Product[], category: string, query: string, sort: string) {
  const terms = normalizeSearch(query).split(/\s+/).filter(Boolean);
  const result = items.filter((p) => (category === "all" || p.category === category) &&
    terms.every((term) => normalizeSearch(p.name + " " + p.description).includes(term)));
  if (sort === "az" || sort === "za") result.sort((a, b) => a.name.localeCompare(b.name, "tr") * (sort === "za" ? -1 : 1));
  if (sort === "featured") result.sort((a, b) => Number(b.featured) - Number(a.featured));
  return result;
}

export function findProduct(items: Product[], routeId: string): Product | undefined {
  const direct = items.find((p) => p.id === routeId);
  if (direct) return direct;
  try { return items.find((p) => p.id === decodeURIComponent(routeId)); } catch { return undefined; }
}
