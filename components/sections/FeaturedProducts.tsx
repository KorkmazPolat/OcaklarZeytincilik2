import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 bg-[var(--color-krem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-[family-name:var(--font-dancing-script)] text-[var(--color-zeytun)] text-xl font-medium block mb-2">
              Lezzetlerimiz
            </span>
            <h2 className="font-[family-name:var(--font-playfair-display)] text-4xl md:text-5xl font-bold text-[var(--color-kahve)]">
              Seçme Ürünlerimiz
            </h2>
          </div>
          <Link
            href="/urunler"
            className="group flex items-center gap-2 text-[var(--color-zeytun)] font-semibold hover:text-[var(--color-toprak)] transition-colors"
          >
            Tüm Ürünleri Gör
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
