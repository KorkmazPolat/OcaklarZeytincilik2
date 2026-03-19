import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pb-16 bg-[var(--color-krem)]">
      
      {/* Background shape for decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[var(--color-saman)] opacity-30 z-0 hidden lg:block" />

      {/* Absolutely positioned image on the right */}
      <div className="absolute right-0 bottom-[4rem] w-full md:w-1/2 h-[70vh] md:h-[85vh] z-10 pointer-events-none opacity-40 md:opacity-100 flex items-end justify-end md:justify-center">
        {/* We use contrast and brightness alongside mix-blend-multiply to bleach the off-white background of the image to pure white, making it 100% transparent when multiplied! */}
        <div className="relative w-full h-full max-w-[600px] xl:max-w-[700px]">
          <Image 
            src="/images/hero-bg.png" 
            fill 
            alt="Zeytin Ustasından Doğal Ürünler" 
            className="object-contain object-bottom mix-blend-multiply filter contrast-125 brightness-[1.03]"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-start mt-16 md:mt-12">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left pt-12 md:pt-0 max-w-xl">
            <span className="font-[family-name:var(--font-dancing-script)] text-[var(--color-zeytun)] text-3xl md:text-4xl mb-4 opacity-100 block font-bold">
              Balıkesir, Ocaklar
            </span>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-5xl md:text-7xl lg:text-[5rem] font-bold text-[var(--color-kahve)] mb-6 drop-shadow-sm leading-tight">
              Doğanın En Saf <br className="hidden lg:block" /> Lezzetleri
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-kahve)]/80 mb-10 max-w-lg font-medium leading-relaxed bg-white/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl">
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

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-bounce text-[var(--color-kahve)]/50">
        <span className="text-sm font-bold tracking-widest uppercase mb-2">Aşağı Kaydır</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
