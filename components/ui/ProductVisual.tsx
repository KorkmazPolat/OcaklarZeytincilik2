import { Leaf, Droplets, Flower2, Milk, Package } from "lucide-react";
import type { Category } from "@/data/products";
const visuals = {
  zeytin: { icon: Leaf, color: "#4a5c3a", background: "#e7eadc", label: "ZEYTİN" },
  zeytinyagi: { icon: Droplets, color: "#8b6914", background: "#f3e8c7", label: "ZEYTİNYAĞI" },
  sabun: { icon: Flower2, color: "#806d86", background: "#ede5ed", label: "DOĞAL SABUN" },
  peynir: { icon: Milk, color: "#9a7945", background: "#f1eadd", label: "PEYNİR" },
  diger: { icon: Package, color: "#70543c", background: "#eee1d4", label: "DOĞAL ÜRÜNLER" },
};
export default function ProductVisual({ category, name }: { category: Category; name: string }) {
  const { icon: Icon, color, background, label } = visuals[category];
  return <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden" style={{ background }} aria-label={`${name} kategori illüstrasyonu`} role="img">
    <div className="absolute h-56 w-56 rounded-full border border-white/60" />
    <div className="absolute h-44 w-44 rounded-full bg-white/35" />
    <div className="relative flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-105" style={{ color }}>
      <Icon className="h-20 w-20" strokeWidth={1} aria-hidden="true" /><span className="text-[10px] font-bold tracking-[0.3em]">{label}</span>
    </div><span className="absolute bottom-3 right-4 text-[10px] tracking-wide opacity-60">Temsili görsel</span>
  </div>;
}
