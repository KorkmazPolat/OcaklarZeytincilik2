import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden pb-16 bg-[var(--color-krem)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          fill 
          alt="Zeytincilik" 
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Subtle overlay to ensure text readability if needed, mostly transparent */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center mt-12">
        <span className="font-[family-name:var(--font-dancing-script)] text-[var(--color-zeytun)] text-3xl md:text-4xl mb-4 opacity-90 block font-bold">
          Balıkesir, Ocaklar
        </span>
        <h1 className="font-[family-name:var(--font-playfair-display)] text-5xl md:text-7xl font-bold text-[var(--color-kahve)] mb-6 drop-shadow-sm leading-tight">
          Doğanın En Saf <br className="hidden md:block" /> Lezzetleri
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-kahve)]/90 mb-10 max-w-2xl font-medium">
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

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce text-[var(--color-krem)]/70">
        <span className="text-sm font-medium tracking-widest uppercase mb-2">Aşağı Kaydır</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
