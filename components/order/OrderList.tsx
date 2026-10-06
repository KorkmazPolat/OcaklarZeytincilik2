"use client";
import Link from "next/link";
import { useState } from "react";
import { Trash2, MessageCircle, ShoppingBag, Minus, Plus } from "lucide-react";
import { type OrderItem, orderMessage } from "@/lib/order";
import { products } from "@/data/products";
import { whatsappLink } from "@/lib/whatsapp";
import { useOrder } from "./OrderProvider";
export default function OrderList() {
  const { items, setQuantity, removeItem, clear, restoreItems } = useOrder();
  const [note, setNote] = useState("");
  const [undoItems, setUndoItems] = useState<OrderItem[] | null>(null);
  function undo() { if (undoItems) { restoreItems(undoItems); setUndoItems(null); } }
  const [copyStatus, setCopyStatus] = useState("");
  if (!items.length) return <div className="rounded-3xl border border-[var(--color-saman)] bg-white p-10 text-center">
    <ShoppingBag className="mx-auto mb-4 h-12 w-12 text-[var(--color-zeytun)]" />
    <h2 className="mb-3 text-2xl font-bold">Listeniz henüz boş</h2>
    <p className="mb-6">Beğendiğiniz ürünleri ekleyin, hepsi için tek mesajla bilgi alın.</p>
    {undoItems && <button type="button" onClick={undo} className="mb-5 block mx-auto rounded-xl border border-[var(--color-zeytun)] px-6 py-3 font-bold">Son işlemi geri al</button>}
    <Link className="inline-block rounded-xl bg-[var(--color-zeytun)] px-6 py-3 text-white" href="/urunler">Ürünleri keşfet</Link>
  </div>;
  const message = orderMessage(items, products, note);
  return <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
    <div className="space-y-4">{items.map((item) => {
      const product = products.find((p) => p.id === item.productId)!;
      return <article key={item.productId + item.option} className="rounded-2xl border border-[var(--color-saman)] bg-white p-5">
        <h2 className="text-lg font-bold">{product.name}</h2>
        {item.option && <p className="mt-1 text-sm opacity-70">{item.option}</p>}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button aria-label={`${product.name} adet azalt`} disabled={item.quantity === 1} onClick={() => { setUndoItems(null); setQuantity(item.productId, item.option, item.quantity - 1); }} className="rounded-lg border p-3 disabled:opacity-30"><Minus size={16} /></button>
            <span>{item.quantity} adet</span>
            <button aria-label={`${product.name} adet artır`} disabled={item.quantity === 99} onClick={() => { setUndoItems(null); setQuantity(item.productId, item.option, item.quantity + 1); }} className="rounded-lg border p-3 disabled:opacity-30"><Plus size={16} /></button>
          </div>
          <button aria-label={`${product.name} listeden çıkar`} onClick={() => { setUndoItems([{ ...item }]); removeItem(item.productId, item.option); }} className="flex items-center gap-2 rounded-lg p-3 text-sm text-red-800 hover:bg-red-50"><Trash2 size={16} /> Çıkar</button>
        </div>
      </article>;
    })}
      {undoItems && <button type="button" onClick={undo} className="rounded-lg px-4 py-3 text-sm font-bold underline">Son işlemi geri al</button>}
      <button onClick={() => { setUndoItems(items.map(value => ({ ...value }))); clear(); }} className="rounded-lg px-4 py-3 text-sm underline">Listeyi temizle</button>
    </div>
    <aside className="h-fit rounded-3xl bg-[var(--color-saman)] p-6 lg:sticky lg:top-28">
      <h2 className="mb-3 font-[family-name:var(--font-playfair-display)] text-2xl font-bold">Bir mesajla bilgi alın</h2>
      <p className="mb-5 text-sm leading-relaxed">{items.length} ürün seçimi · {items.reduce((sum, item) => sum + item.quantity, 0)} adet. Fiyat ve teslimat koşulları WhatsApp üzerinden teyit edilir.</p>
      <label htmlFor="order-note" className="mb-2 block text-sm font-bold">Sipariş notunuz (isteğe bağlı)</label>
      <textarea id="order-note" maxLength={500} value={note} onChange={(e) => { setNote(e.target.value); setCopyStatus(""); }} rows={4} placeholder="Teslimat veya ürünlerle ilgili sorularınız…" className="mb-5 w-full resize-y rounded-xl border border-white bg-white p-3" />
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[var(--color-zeytun)] px-5 py-4 font-bold text-white"><MessageCircle size={20} /> Listeyi WhatsApp’ta aç</a>
      <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(message); setCopyStatus("Mesaj kopyalandı."); } catch { setCopyStatus("Otomatik kopyalama kullanılamıyor. Aşağıdaki mesajı seçip kopyalayabilirsiniz."); } }} className="mt-3 w-full rounded-xl border border-[var(--color-zeytun)] px-5 py-3 text-sm font-bold">Mesajı kopyala</button>
      <p role="status" className="mt-2 text-sm">{copyStatus}</p>
      <details className="mt-4 text-sm"><summary className="cursor-pointer font-bold">Hazırlanan mesajı gör</summary><textarea aria-label="Hazırlanan WhatsApp mesajı" readOnly value={message} rows={8} className="mt-3 w-full rounded-xl bg-white p-3 leading-relaxed" /></details>
      <p className="mt-4 text-xs leading-relaxed opacity-75">Mesajı WhatsApp’ta kendiniz gönderirsiniz. Bu liste ödeme veya kesinleşmiş sipariş oluşturmaz.</p>
      <Link href="/urunler" className="mt-5 block text-center text-sm font-bold underline">Alışverişe devam et</Link>
    </aside>
  </div>;
}
