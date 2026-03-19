import Link from "next/link";
import { Leaf, MapPin, Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-kahve)] text-[var(--color-krem)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
            <Leaf className="w-8 h-8 text-[var(--color-toprak)]" />
              <span className="font-[family-name:var(--font-playfair-display)] font-bold text-2xl text-[var(--color-krem)]">
                {SITE_CONFIG.shopName}
              </span>
            </Link>
            <p className="font-[family-name:var(--font-dancing-script)] text-xl text-[var(--color-saman)] mb-4">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-[var(--color-saman)] opacity-80 max-w-xs">
              Ocaklar&apos;dan sofralarınıza, doğanın bize sunduğu en değerli miras olan zeytin ve zeytinyağını ilk günkü saflığıyla ulaştırıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-[family-name:var(--font-playfair-display)] text-[var(--color-toprak)] font-semibold text-lg mb-6">Hızlı Bağlantılar</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-[var(--color-krem)] hover:text-[var(--color-toprak)] transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/urunler" className="text-[var(--color-krem)] hover:text-[var(--color-toprak)] transition-colors">Ürünlerimiz</Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-[var(--color-krem)] hover:text-[var(--color-toprak)] transition-colors">İletişim & Konum</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="font-[family-name:var(--font-playfair-display)] text-[var(--color-toprak)] font-semibold text-lg mb-6">İletişim</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-zeytun)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-krem)]">{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-zeytun)] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`} className="text-[var(--color-krem)] hover:text-[var(--color-toprak)] transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href={SITE_CONFIG.whatsappBase + "Merhaba,%20sitenizden%20ulaşıyorum."} target="_blank" rel="noopener noreferrer" className="text-[var(--color-krem)] hover:text-[var(--color-toprak)] transition-colors">
                  WhatsApp Hattı
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-krem)]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-saman)] opacity-70 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.shopName}. Tüm hakları saklıdır.
          </p>
          <div className="text-[var(--color-saman)] opacity-70 text-sm">
            {SITE_CONFIG.workingHours}
          </div>
        </div>
      </div>
    </footer>
  );
}
