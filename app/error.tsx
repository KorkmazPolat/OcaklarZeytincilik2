"use client";
import Link from "next/link";
export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <section className="mx-auto max-w-xl px-6 pb-24 pt-36 text-center">
    <p className="mb-3 text-sm font-bold text-[var(--color-zeytun)]">Bir aksilik oldu</p>
    <h1 className="mb-5 font-[family-name:var(--font-playfair-display)] text-3xl font-bold">Sayfa şu anda yüklenemedi</h1>
    <p className="mb-8 leading-relaxed">Tekrar deneyebilir veya bizimle iletişime geçebilirsiniz.</p>
    <div className="flex flex-wrap justify-center gap-3"><button onClick={retry} className="rounded-xl bg-[var(--color-zeytun)] px-6 py-3 font-bold text-white">Tekrar dene</button><Link href="/iletisim" className="rounded-xl border border-[var(--color-saman)] px-6 py-3 font-bold">Bize ulaşın</Link></div>
  </section>;
}
