import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Placeholder Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zeytun)] to-[var(--color-kahve)]">
        {/* Placeholder for actual image:
        <Image src="/images/hero-bg.jpg" fill alt="Zeytinlik" className="object-cover" />
        */}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-[family-name:var(--font-dancing-script)] text-[var(--color-saman)] text-2xl md:text-3xl mb-4 opacity-90 block">
          Balıkesir, Ocaklar
        </span>
        <h1 className="font-[family-name:var(--font-playfair-display)] text-5xl md:text-7xl font-bold text-[var(--color-krem)] mb-6 drop-shadow-lg leading-tight">
          Doğanın En Saf <br className="hidden md:block" /> Lezzetleri
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-krem)]/90 mb-10 max-w-2xl font-light">
          Ocaklar&apos;dan sofralarınıza, el emeği ve doğallıkla hazırlanan zeytin ve zeytinyağı ürünleri.
        </p>

        <Link
          href="/urunler"
          className="group flex items-center gap-2 bg-[var(--color-toprak)] hover:bg-[var(--color-zeytun)] text-[var(--color-krem)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          Ürünleri Keşfet
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
