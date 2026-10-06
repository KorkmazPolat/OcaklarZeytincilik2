import Link from "next/link";
import { Search, ListPlus, MessageCircle, ArrowUpRight } from "lucide-react";
const steps = [
  { icon: Search, title: "Lezzetinizi seçin", description: "Zeytin, zeytinyağı, peynir ve sabun çeşitlerini inceleyin." },
  { icon: ListPlus, title: "Listenizi hazırlayın", description: "Ambalaj ve adet seçin; beğendiklerinizi aynı listede toplayın." },
  { icon: MessageCircle, title: "Bizimle konuşun", description: "Fiyat, stok ve teslimatı WhatsApp üzerinden birlikte netleştirelim." },
];
export default function ShoppingGuide() {
  return <section className="bg-[var(--color-zeytun)] py-16 text-[var(--color-krem)]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div><p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-75">Dükkân kadar yakın</p><h2 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold md:text-4xl">Sofranıza giden yol</h2></div>
        <Link href="/urunler" className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold">Ürünleri keşfet <ArrowUpRight size={18} /></Link>
      </div>
      <div className="grid gap-8 md:grid-cols-3">{steps.map(({ icon: Icon, title, description }, i) => <div key={title} className="border-t border-white/25 pt-6">
        <div className="mb-5 flex items-center justify-between"><Icon size={28} strokeWidth={1.5} /><span className="font-[family-name:var(--font-playfair-display)] text-3xl opacity-50">0{i + 1}</span></div>
        <h3 className="mb-3 text-xl font-bold">{title}</h3><p className="max-w-sm text-sm leading-relaxed opacity-85">{description}</p>
      </div>)}</div>
    </div>
  </section>;
}
