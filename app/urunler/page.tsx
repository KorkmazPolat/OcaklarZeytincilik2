import { connection } from "next/server";
import Link from "next/link";
import ProductCatalog from "@/components/catalog/ProductCatalog";
export default async function ProductsPage() {
  await connection();
  return <div className="min-h-screen pb-20">
    <header className="bg-[var(--color-saman)] px-4 pb-16 pt-36 text-center">
      <nav aria-label="İçerik yolu" className="mb-5 text-sm"><Link href="/" className="underline">Ana sayfa</Link><span aria-hidden="true"> / </span><span aria-current="page">Ürünler</span></nav>
      <h1 className="mb-5 font-[family-name:var(--font-playfair-display)] text-4xl font-bold md:text-5xl">Sofranıza bir parça Ocaklar</h1>
      <p className="mx-auto max-w-xl leading-relaxed">Zeytinden zeytinyağına, günlük sofraların küçük mutluluklarını keşfedin. Güncel fiyat ve stok bilgisi için bize yazın.</p>
    </header>
    <div className="relative mx-auto -mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <ProductCatalog />
    </div>
  </div>;
}
