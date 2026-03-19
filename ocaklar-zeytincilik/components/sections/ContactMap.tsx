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

        <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] relative border-4 border-white bg-gray-200">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3032.5516086884643!2d27.7656111!3d40.4566389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b6baaaaa000000%3A0x14b6baaaaa000000!2sOcaklar%2C%20Bal%C4%B1kesir!5e0!3m2!1str!2str!4v1711234567890!5m2!1str!2str"
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
