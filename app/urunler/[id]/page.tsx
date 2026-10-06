import { getSiteUrl } from "@/lib/site-url";
import { pageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/seo/StructuredData";
import { productStructuredData, breadcrumbStructuredData } from "@/lib/structured-data";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { categories, findProduct } from "@/lib/catalog";
import ProductCard from "@/components/ui/ProductCard";
import ProductVisual from "@/components/ui/ProductVisual";
import CategoryBadge from "@/components/ui/CategoryBadge";
export const dynamicParams = false;
export function generateStaticParams() { return products.map((p) => ({ id: p.id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = findProduct(products, id);
  if (!p) return { title: "Ürün bulunamadı" };
  return pageMetadata(p.name, p.description, "/urunler/" + encodeURIComponent(p.id));
}
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = findProduct(products, id);
  if (!product) notFound();
  const origin = getSiteUrl();
  const category = categories.find((c) => c.id === product.category)!;
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  return <div className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
    {origin && <StructuredData data={[productStructuredData(product, origin), breadcrumbStructuredData([{ name: "Ana sayfa", url: origin }, { name: "Ürünler", url: origin + "/urunler" }, { name: product.name, url: origin + "/urunler/" + encodeURIComponent(product.id) }])]} />}
    <nav aria-label="İçerik yolu" className="mb-8 flex flex-wrap gap-2 text-sm">
      <Link href="/" className="underline">Ana sayfa</Link><span aria-hidden="true">/</span>
      <Link href={`/urunler?kategori=${product.category}`} className="underline">{category.label}</Link><span aria-hidden="true">/</span>
      <span aria-current="page">{product.name}</span>
    </nav>
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
      <div className="overflow-hidden rounded-3xl"><ProductVisual category={product.category} name={product.name} /></div>
      <div>
        <CategoryBadge category={product.category} />
        <h1 className="mb-5 mt-5 font-[family-name:var(--font-playfair-display)] text-3xl font-bold leading-tight md:text-4xl">{product.name}</h1>
        <p className="mb-6 leading-relaxed opacity-80">{product.description}</p>
        <ProductCard product={product} controlsOnly />
        <p className="mt-5 text-sm leading-relaxed opacity-70">Güncel stok, fiyat, içerik ve teslimat koşullarını sipariş öncesinde bize sorabilirsiniz.</p>
      </div>
    </div>
    {related.length > 0 && <section className="mt-20" aria-labelledby="related-title">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4"><h2 id="related-title" className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold">Bunları da keşfedin</h2><Link href={`/urunler?kategori=${product.category}`} className="text-sm font-bold underline">Tüm {category.label.toLocaleLowerCase("tr-TR")} ürünleri</Link></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>}
  </div>;
}
