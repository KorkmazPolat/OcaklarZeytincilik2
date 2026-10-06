import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/catalog";
import { products } from "@/data/products";
import ProductVisual from "@/components/ui/ProductVisual";
export default function CategorySection() {
  return <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="categories-title">
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-zeytun)]">Her güne bir lezzet</p><h2 id="categories-title" className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold">Ne keşfetmek istersiniz?</h2></div>
      <Link href="/urunler" className="flex items-center gap-2 text-sm font-bold">Tüm ürünler <ArrowUpRight size={18} /></Link>
    </div>
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{categories.filter((c) => c.id !== "all").map((cat) => {
      const category = cat.id as Exclude<typeof cat.id, "all">;
      return <Link key={cat.id} href={`/urunler?kategori=${cat.id}`} className="group overflow-hidden rounded-2xl border border-[var(--color-saman)] bg-white transition-shadow hover:shadow-lg">
        <ProductVisual category={category} name={cat.label} />
        <div className="flex items-center justify-between gap-2 p-4"><div><h3 className="font-bold">{cat.label}</h3><p className="mt-1 text-xs opacity-60">{products.filter((p) => p.category === cat.id).length} çeşit</p></div><ArrowUpRight size={18} /></div>
      </Link>;
    })}</div>
  </section>;
}
