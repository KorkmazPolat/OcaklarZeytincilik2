import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pb-16 bg-[var(--color-krem)]">
      
      {/* Background shape for decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[var(--color-saman)] rounded-bl-[150px] opacity-40 z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-16 md:mt-12">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left pt-12 md:pt-0">
            <span className="font-[family-name:var(--font-dancing-script)] text-[var(--color-zeytun)] text-3xl md:text-4xl mb-4 opacity-100 block font-bold">
              Balıkesir, Ocaklar
            </span>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-5xl md:text-7xl font-bold text-[var(--color-kahve)] mb-6 drop-shadow-sm leading-tight">
              Doğanın En Saf <br className="hidden lg:block" /> Lezzetleri
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-kahve)]/80 mb-10 max-w-lg font-medium leading-relaxed">
              Ocaklar&apos;dan sofralarınıza, el emeği ve doğallıkla hazırlanan zeytin ve zeytinyağı ürünleri.
            </p>

            <Link
              href="/urunler"
              className="group flex items-center gap-2 bg-[var(--color-toprak)] hover:bg-[var(--color-zeytun)] text-[var(--color-krem)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-fit"
            >
              Ürünleri Keşfet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 w-full flex items-center justify-center order-first md:order-last">
            <div className="relative w-full max-w-[400px] aspect-[4/5] md:max-w-[500px]">
              <Image 
                src="/images/hero-bg.png" 
                fill 
                alt="Zeytin Ustasından Doğal Ürünler" 
                className="object-contain mix-blend-multiply scale-100 hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce text-[var(--color-kahve)]/50">
        <span className="text-sm font-bold tracking-widest uppercase mb-2">Aşağı Kaydır</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
