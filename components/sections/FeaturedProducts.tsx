import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="pb-20 bg-[var(--color-krem)] relative z-20">
      {/* Negative margin to overlap the Hero section slightly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        
        {/* White container background to create a card effect over the dark hero */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[var(--color-saman)]/50">
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
      </div>
    </section>
  );
}
