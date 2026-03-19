"use client";

import { useState } from "react";
import { products, Category } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "zeytin", label: "Zeytin" },
  { id: "zeytinyagi", label: "Zeytinyağı" },
  { id: "sabun", label: "Sabun" },
  { id: "peynir", label: "Peynir & Süt Ürünleri" },
  { id: "diger", label: "Diğer" },
];

export default function UrunlerPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[var(--color-krem)] min-h-screen pb-20">
      {/* Hero Banner */}
      <div className="bg-[var(--color-zeytun)] relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl md:text-5xl font-bold text-[var(--color-krem)] mb-4">
            Ürünlerimiz
          </h1>
          <nav className="flex items-center justify-center gap-2 text-[var(--color-saman)] text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-white opacity-90">Ürünler</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Filter Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-saman)] p-2 mb-12 flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar">
          <div className="flex gap-2 p-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeCategory === cat.id
                    ? "bg-[var(--color-zeytun)] text-[var(--color-krem)] shadow-md"
                    : "text-[var(--color-kahve)]/70 hover:bg-[var(--color-saman)] hover:text-[var(--color-kahve)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-20 text-[var(--color-kahve)]/50 font-medium">
              Bu kategoride ürün bulunamadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
