"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Check, Plus, Minus } from "lucide-react";
import type { Product } from "@/data/products";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import { useOrder } from "@/components/order/OrderProvider";
import ProductVisual from "./ProductVisual";
import CategoryBadge from "./CategoryBadge";
export default function ProductCard({ product, controlsOnly = false, headingLevel = 3 }: { product: Product; controlsOnly?: boolean; headingLevel?: 2 | 3 }) {
  const [option, setOption] = useState(product.options?.[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [feedback, setFeedback] = useState("");
  const { addItem } = useOrder();
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return <article className="product-card group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-saman)] bg-white">
    {!controlsOnly && <div className="relative"><ProductVisual category={product.category} name={product.name} /><div className="absolute left-4 top-4"><CategoryBadge category={product.category} /></div></div>}
    <div className="flex grow flex-col p-5 sm:p-6">
      {!controlsOnly && <Heading className="mb-3 font-[family-name:var(--font-playfair-display)] text-xl font-bold"><Link href={`/urunler/${encodeURIComponent(product.id)}`} className="hover:text-[var(--color-zeytun)]">{product.name}</Link></Heading>}
      {!controlsOnly && <p className="mb-5 grow text-sm leading-relaxed text-[var(--color-kahve)]/80">{product.description}</p>}
      {product.options?.length ? <fieldset className="mb-4">
        <legend className="mb-2 text-xs font-semibold">Ambalaj seçimi</legend>
        <div className="flex flex-wrap gap-2">{product.options.map((value) => <button key={value} type="button" aria-pressed={option === value}
          onClick={() => { setOption(value); setAdded(false); setFeedback(""); }}
          className={`rounded-lg border px-3 py-2 text-xs font-bold transition-colors ${option === value ? "border-[var(--color-zeytun)] bg-[var(--color-zeytun)] text-white" : "border-[var(--color-saman)] hover:bg-[var(--color-krem)]"}`}>{value}</button>)}</div>
      </fieldset> : null}
      <div className="mb-4 flex items-center justify-between"><span className="text-sm font-semibold">Adet</span>
        <div className="flex items-center rounded-lg border border-[var(--color-saman)]">
          <button type="button" disabled={quantity === 1} aria-label={`${product.name} adet azalt`} onClick={() => {setQuantity(quantity - 1);setAdded(false); setFeedback("");}} className="p-3 disabled:opacity-30"><Minus size={16} /></button>
          <output className="min-w-8 text-center text-sm" aria-label="Seçilen adet">{quantity}</output>
          <button type="button" disabled={quantity === 99} aria-label={`${product.name} adet artır`} onClick={() => {setQuantity(quantity + 1);setAdded(false); setFeedback("");}} className="p-3 disabled:opacity-30"><Plus size={16} /></button>
        </div>
      </div>
      <a href={whatsappLink(productMessage(product.name, option, quantity))} target="_blank" rel="noopener noreferrer" aria-label={`${product.name} için WhatsApp'tan fiyat sor`}
        className="flex items-center justify-center gap-2 rounded-xl bg-[var(--color-zeytun)] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--color-kahve)]"><ShoppingBag size={18} /> WhatsApp’tan fiyat sor</a>
      <button type="button" onClick={() => { const count = addItem(product.id, option, quantity); setAdded(count > 0); setFeedback(count === quantity ? quantity + " adet listeye eklendi." : count > 0 ? count + " adet eklendi. Bu ambalaj için en fazla 99 adet seçebilirsiniz." : "Bu ambalaj için 99 adet sınırına ulaştınız."); }} className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-[var(--color-saman)] px-4 py-3 text-sm font-semibold hover:bg-[var(--color-krem)]">
        {added ? <Check size={16} /> : <Plus size={16} />} {added ? "Listeye eklendi · tekrar ekle" : "Sipariş listeme ekle"}
      </button><p role="status" className="mt-2 min-h-5 text-center text-xs text-[var(--color-zeytun)]">{feedback}</p>
    </div>
  </article>;
}
