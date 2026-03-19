import { CheckCircle2 } from "lucide-react";

export default function AboutSnippet() {
  const stats = [
    "25+ Yıllık Deneyim",
    "%100 Doğal Üretim",
    "Balıkesir Ocaklar'dan",
  ];

  return (
    <section className="py-20 bg-[var(--color-saman)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <span className="font-[family-name:var(--font-dancing-script)] text-[var(--color-zeytun)] text-xl font-medium block mb-3">
              Hikayemiz
            </span>
            <h2 className="font-[family-name:var(--font-playfair-display)] text-4xl md:text-5xl font-bold text-[var(--color-kahve)] mb-6">
              Gelenekten Geleceğe,<br />
              <span className="text-[var(--color-toprak)]">Toprağın Bereketi</span>
            </h2>
            <p className="text-[var(--color-kahve)]/80 text-lg leading-relaxed mb-8">
              Ocaklar'ın bereketli topraklarında yıllardır süregelen zeytin yetiştiriciliği geleneğini ilk günkü heyecanımızla devam ettiriyoruz. Amacımız, en kaliteli ve doğal ürünleri sofranıza getirerek sağlığınıza değer katmak. Her bir zeytin tanesinde büyük bir emek ve sevgi saklı.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {stats.map((stat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="bg-[var(--color-krem)] rounded-full p-1 text-[var(--color-zeytun)]">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <span className="font-semibold text-[var(--color-kahve)]">{stat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image/Visual Content */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 border-4 border-[var(--color-krem)] m-4 rounded-xl z-20 pointer-events-none"></div>
              {/* Fallback pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-zeytun)] to-[var(--color-toprak)]"></div>
              <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay">
                <span className="font-[family-name:var(--font-dancing-script)] text-white text-6xl opacity-20 -rotate-12">Ocaklar</span>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-[var(--color-toprak)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
