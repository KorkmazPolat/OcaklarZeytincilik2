"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { categories, filterProducts } from "@/lib/catalog";
import ProductCard from "@/components/ui/ProductCard";
export default function ProductCatalog() {
  const params = useSearchParams();
  const pathname = usePathname();
  const category = categories.some((c) => c.id === params.get("kategori")) ? params.get("kategori")! : "all";
  const query = params.get("q") ?? "";
  const sort = ["featured", "az", "za"].includes(params.get("sirala") ?? "") ? params.get("sirala")! : "featured";
  const filtered = filterProducts(products, category, query, sort);
  function update(key: string, value: string) {
    const next = new URLSearchParams(window.location.search);
    if (!value || value === "all" || (key === "sirala" && value === "featured")) next.delete(key);
    else next.set(key, value);
    window.history.replaceState(null, "", pathname + (next.size ? "?" + next.toString() : ""));
  }
  function categoryHref(id: string) {
    const next = new URLSearchParams(params.toString());
    if (id === "all") next.delete("kategori"); else next.set("kategori", id);
    return pathname + (next.size ? "?" + next.toString() : "");
  }
  return <div>
    <div className="mb-8 rounded-2xl border border-[var(--color-saman)] bg-white p-4 shadow-sm sm:p-6">
      <form action="/urunler" method="get" className="mb-5 flex flex-col gap-4 md:flex-row">
        <input type="hidden" name="kategori" value={category} />
        <div className="relative flex-1">
          <label htmlFor="product-search" className="sr-only">Ürün ara</label>
          <Search className="absolute left-4 top-4 h-5 w-5 opacity-50" aria-hidden="true" />
          <input id="product-search" name="q" type="search" maxLength={100} value={query} onChange={(event) => update("q", event.target.value)} placeholder="Zeytin, erken hasat, lavanta…" className="w-full rounded-xl border border-[var(--color-saman)] bg-[var(--color-krem)] py-3.5 pl-12 pr-4" />
        </div>
        <div className="flex items-center gap-3">
          <SlidersHorizontal size={18} aria-hidden="true" />
          <label htmlFor="product-sort" className="sr-only">Ürünleri sırala</label>
          <select id="product-sort" name="sirala" value={sort} onChange={(e) => update("sirala", e.target.value)} className="w-full rounded-xl border border-[var(--color-saman)] bg-white p-3.5 md:w-auto">
            <option value="featured">Öne çıkanlar</option><option value="az">İsim: A–Z</option><option value="za">İsim: Z–A</option>
          </select>
        </div>
        <button type="submit" className="rounded-xl bg-[var(--color-zeytun)] px-5 py-3 text-sm font-bold text-white">Ara</button>
      </form>
      <div className="flex flex-wrap gap-2" aria-label="Ürün kategorileri">{categories.map((cat) => <Link key={cat.id} href={categoryHref(cat.id)} scroll={false} aria-current={category === cat.id ? "page" : undefined}
        className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${category === cat.id ? "bg-[var(--color-zeytun)] text-white" : "bg-[var(--color-krem)] hover:bg-[var(--color-saman)]"}`}>
        {cat.label} <span className="ml-1 opacity-70">{cat.id === "all" ? products.length : products.filter((p) => p.category === cat.id).length}</span>
      </Link>)}</div>
    </div>
    <div className="mb-6 flex items-center justify-between gap-4">
      <p role="status" aria-live="polite" className="text-sm opacity-80">{filtered.length} ürün gösteriliyor{query ? ` · “${query}”` : ""}</p>
      {(query || category !== "all" || sort !== "featured") && <button onClick={() => window.history.replaceState(null, "", pathname)} className="flex shrink-0 items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold"><X size={16} /> Temizle</button>}
    </div>
    {filtered.length ? <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product} headingLevel={2} />)}</div> :
      <div className="rounded-2xl border border-dashed border-[var(--color-saman)] bg-white px-6 py-16 text-center">
        <Search className="mx-auto mb-4 h-10 w-10 opacity-40" /><h2 className="mb-3 text-xl font-bold">Aradığınız ürün bulunamadı</h2>
        <p className="mb-6 text-sm">Farklı bir kelime deneyin veya filtreleri temizleyin.</p>
        <button onClick={() => window.history.replaceState(null, "", pathname)} className="rounded-xl bg-[var(--color-zeytun)] px-6 py-3 font-semibold text-white">Tüm ürünleri göster</button>
      </div>}
  </div>;
}
