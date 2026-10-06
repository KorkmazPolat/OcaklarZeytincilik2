import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import ShoppingGuide from "@/components/sections/ShoppingGuide";
import FaqSection from "@/components/sections/FaqSection";
export const metadata = pageMetadata("Sipariş ve teslimat", "Ürün listenizi hazırlayın; güncel fiyat, stok ve teslimat koşullarını WhatsApp üzerinden birlikte netleştirelim.", "/siparis-ve-teslimat");
export default function OrderingPage() {
  return <div className="pt-32">
    <header className="mx-auto mb-12 max-w-3xl px-4 text-center">
      <p className="mb-3 text-sm font-bold text-[var(--color-zeytun)]">İlk seçimden sofranıza</p>
      <h1 className="mb-5 font-[family-name:var(--font-playfair-display)] text-4xl font-bold">Sipariş ve teslimat</h1>
      <p className="leading-relaxed">Sitemiz ürünleri inceleyip sipariş talebinizi hazırlamanız için bir vitrindir. Ödeme ve kesin sipariş onayı site üzerinden yapılmaz.</p>
    </header>
    <ShoppingGuide />
    <section className="mx-auto max-w-3xl px-4 pt-16 leading-relaxed">
      <h2 className="mb-4 font-[family-name:var(--font-playfair-display)] text-3xl font-bold">Göndermeden önce netleştirelim</h2>
      <ul className="list-disc space-y-3 pl-5">
        <li>Seçtiğiniz ürünlerin güncel fiyatı ve stok durumu.</li>
        <li>Ambalaj, toplam adet ve ürün içerik bilgileri.</li>
        <li>Adresinize uygun teslimat yöntemi, varsa kargo ücreti ve tahmini süre.</li>
        <li>Ödeme yöntemi ve siparişin teyit edilmesi.</li>
      </ul>
      <p className="mt-6">Bu bilgiler ürün ve teslimat adresine göre görüşülür. Listenizi WhatsApp’ta açmanız tek başına siparişinizi kesinleştirmez.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/urunler" className="rounded-xl bg-[var(--color-zeytun)] px-6 py-3 font-bold text-white">Ürünleri incele</Link><Link href="/iletisim" className="rounded-xl border border-[var(--color-saman)] px-6 py-3 font-bold">Bir soru sor</Link></div>
    </section>
    <FaqSection />
  </div>;
}
