import { Category } from "@/data/products";

const CATEGORY_LABELS: Record<Category, string> = {
  zeytin: "Zeytin",
  zeytinyagi: "Zeytinyağı",
  sabun: "Sabun",
  peynir: "Peynir & Süt Ürünleri",
  diger: "Diğer",
};

const CATEGORY_COLORS: Record<Category, string> = {
  zeytin: "bg-[var(--color-zeytun)] text-[var(--color-krem)]",
  zeytinyagi: "bg-[var(--color-toprak)] text-[var(--color-krem)]",
  sabun: "bg-[var(--color-saman)] text-[var(--color-kahve)]",
  peynir: "bg-white text-[var(--color-kahve)] border border-[var(--color-saman)]",
  diger: "bg-[var(--color-kahve)] text-[var(--color-krem)]",
};

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export default function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${CATEGORY_COLORS[category]} ${className}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
