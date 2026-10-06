import Link from "next/link";
import { Leaf } from "lucide-react";
export default function NotFound() {
  return <div className="mx-auto max-w-xl px-6 pb-24 pt-40 text-center">
    <Leaf className="mx-auto mb-6 h-14 w-14 text-[var(--color-zeytun)]" /><p className="mb-3 text-sm tracking-widest">404</p>
    <h1 className="mb-5 font-[family-name:var(--font-playfair-display)] text-4xl font-bold">Bu sayfa bulunamadı</h1>
    <p className="mb-8">Bağlantı değişmiş olabilir. Ürünlerimizi keşfetmeye devam edebilirsiniz.</p>
    <Link href="/urunler" className="inline-block rounded-xl bg-[var(--color-zeytun)] px-6 py-3 text-white">Ürünlere dön</Link>
  </div>;
}
