import { pageMetadata } from "@/lib/metadata";
import { whatsappLink } from "@/lib/whatsapp";
import ContactComposer from "@/components/sections/ContactComposer";
import ContactMap from "@/components/sections/ContactMap";
import { SITE_CONFIG } from "@/lib/constants";
import { MessageCircle, MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata("İletişim ve konum", "Ocaklar Zeytincilik ile iletişime geçin. Ürün, stok ve teslimat sorularınızı WhatsApp üzerinden bize iletin.", "/iletisim");

export default function IletisimPage() {
  return (
    <div className="bg-[var(--color-krem)] min-h-screen pb-12">
      {/* Hero Banner */}
      <div className="bg-[var(--color-saman)] relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl md:text-5xl font-bold text-[var(--color-kahve)] mb-4">
            İletişim & Konum
          </h1>
          <nav className="flex items-center justify-center gap-2 text-[var(--color-kahve)]/70 text-sm font-medium">
            <Link href="/" className="hover:text-[var(--color-zeytun)] transition-colors">
              Ana Sayfa
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-[var(--color-kahve)] opacity-90">İletişim</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div className="flex flex-col justify-center">
            <span className="font-[family-name:var(--font-dancing-script)] text-[var(--color-zeytun)] text-2xl mb-4 block">
              Bize Ulaşın
            </span>
            <h2 className="font-[family-name:var(--font-playfair-display)] text-3xl md:text-4xl font-bold text-[var(--color-kahve)] mb-8">
              Sorularınız ve Siparişleriniz İçin Buradayız
            </h2>

            <ul className="flex flex-col gap-6 mb-12">
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[var(--color-zeytun)] border border-[var(--color-saman)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-kahve)] mb-1">Adres</h3>
                  <p className="text-[var(--color-kahve)]/80">{SITE_CONFIG.address}</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[var(--color-zeytun)] border border-[var(--color-saman)]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-kahve)] mb-1">Telefon</h3>
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`} className="text-[var(--color-kahve)]/80 hover:text-[var(--color-zeytun)] transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[var(--color-zeytun)] border border-[var(--color-saman)]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-kahve)] mb-1">Çalışma Saatleri</h3>
                  <p className="text-[var(--color-kahve)]/80">{SITE_CONFIG.workingHours}</p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink("Merhaba, bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#187744] hover:bg-[#145e36] text-white py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 font-bold text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp&apos;tan Yazın
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <ContactComposer />
          </div>

        </div>
      </div>

      <ContactMap />
    </div>
  );
}
