import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { SITE_CONFIG } from "@/lib/constants";
import CategoryBadge from "./CategoryBadge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `${SITE_CONFIG.whatsappBase}${encodeURIComponent(product.whatsappMsg)}`;

  return (
    <div className="bg-[var(--color-krem)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-[var(--color-saman)]/50">
      {/* Image Container with pseudo-texture */}
      <div className="relative aspect-square w-full bg-[#E8DCC8] overflow-hidden">
        {/* Placeholder gradient for missing images */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zeytun)]/20 to-[var(--color-toprak)]/20 mix-blend-overlay"></div>
        {/*
          When real images are available:
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        */}
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-kahve)]/20 font-bold text-4xl transform -rotate-12 pointer-events-none">
          Ocaklar
        </div>
        <div className="absolute top-4 left-4 z-10">
          <CategoryBadge category={product.category} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-[family-name:var(--font-playfair-display)] text-xl font-bold text-[var(--color-kahve)] mb-2">
          {product.name}
        </h3>
        <p className="text-[var(--color-kahve)]/80 text-sm mb-6 flex-grow line-clamp-2">
          {product.description}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[var(--color-toprak)] hover:bg-[var(--color-zeytun)] text-[var(--color-krem)] py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5" />
          Sipariş Ver
        </a>
      </div>
    </div>
  );
}
