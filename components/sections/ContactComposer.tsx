"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
export default function ContactComposer() {
  const [message, setMessage] = useState("");
  const text = message.trim() || "Merhaba, Ocaklar Zeytincilik sitenizden ulaşıyorum. Ürünleriniz hakkında bilgi alabilir miyim?";
  return <section className="rounded-3xl border border-[var(--color-saman)] bg-white p-6 shadow-sm sm:p-8" aria-labelledby="contact-message-title">
    <MessageCircle className="mb-5 h-10 w-10 text-[var(--color-zeytun)]" strokeWidth={1.5} />
    <h2 id="contact-message-title" className="mb-3 font-[family-name:var(--font-playfair-display)] text-2xl font-bold">Bir merhaba ile başlayalım</h2>
    <p className="mb-6 text-sm leading-relaxed opacity-80">Ürün seçimi, ambalaj veya teslimat hakkında sorunuzu yazın; WhatsApp’ta konuşalım.</p>
    <label htmlFor="contact-message" className="mb-2 block text-sm font-bold">Mesajınız</label>
    <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={5} placeholder="Merhaba, zeytin çeşitleriniz hakkında bilgi almak istiyorum…" className="w-full resize-y rounded-xl border border-[var(--color-saman)] bg-[var(--color-krem)] p-4 text-sm leading-relaxed" />
    <p className="mb-5 mt-2 text-right text-xs opacity-60">{message.length}/1000</p>
    <a href={whatsappLink(text)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[var(--color-zeytun)] px-5 py-4 font-bold text-white hover:bg-[var(--color-kahve)]"><MessageCircle size={20} /> Mesajı WhatsApp’ta aç</a>
    <p className="mt-4 text-xs leading-relaxed opacity-70">Mesajınızı WhatsApp’ta kontrol edip kendiniz gönderirsiniz.</p>
  </section>;
}
