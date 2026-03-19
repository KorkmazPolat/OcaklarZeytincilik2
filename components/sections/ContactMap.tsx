import { SITE_CONFIG } from "@/lib/constants";

export default function ContactMap() {
  return (
    <section className="py-20 bg-[var(--color-krem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-[family-name:var(--font-dancing-script)] text-[var(--color-zeytun)] text-xl font-medium block mb-2">
            Ziyaret Edin
          </span>
          <h2 className="font-[family-name:var(--font-playfair-display)] text-4xl font-bold text-[var(--color-kahve)] mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-[var(--color-kahve)]/80 text-lg">
            Sizleri doğalı yerinde görmek ve tatmak için dükkanımıza bekliyoruz.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] relative border-4 border-white bg-[#E8DCC8]">
          <iframe
            title="Ocaklar Zeytincilik Harita"
            src="https://maps.google.com/maps?q=Ocaklar,+Bal%C4%B1kesir&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-kahve)] border border-[var(--color-saman)] hover:border-[var(--color-zeytun)] hover:text-[var(--color-zeytun)] font-semibold py-3 px-8 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            Google Haritalarda Aç
          </a>
        </div>
      </div>
    </section>
  );
}
