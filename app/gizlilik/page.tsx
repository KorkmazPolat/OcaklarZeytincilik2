import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
export const metadata = pageMetadata("Site kullanımı ve gizlilik", "Sipariş listesi, iletişim mesajları ve harita kullanımında verilerin nasıl işlendiğini öğrenin.", "/gizlilik");
export default function PrivacyPage() {
  return <article className="mx-auto max-w-3xl px-4 pb-20 pt-36 sm:px-6">
    <p className="mb-3 text-sm font-bold text-[var(--color-zeytun)]">Şeffaf bir ziyaret</p>
    <h1 className="mb-8 font-[family-name:var(--font-playfair-display)] text-4xl font-bold">Site kullanımı ve gizlilik</h1>
    <div className="space-y-8 leading-relaxed">
      <section><h2 className="mb-3 text-xl font-bold">Sipariş listeniz</h2><p>Seçtiğiniz ürün, ambalaj ve adet bilgileri bu tarayıcının yerel depolamasında tutulur. Listeyi temizleyene veya tarayıcı verilerini silene kadar aynı tarayıcıda kullanılabilir. Bu liste site sunucusuna gönderilmez.</p></section>
      <section><h2 className="mb-3 text-xl font-bold">İletişim ve WhatsApp</h2><p>Mesaj alanına yazdıklarınız bir iletişim formu üzerinden sunucumuza gönderilmez. WhatsApp bağlantısını açtığınızda mesaj metni WhatsApp’a aktarılır; gönderme işlemini siz tamamlarsınız. Gönderdiğiniz mesajlar WhatsApp’ın kendi hizmet koşullarına tabidir.</p><p className="mt-3">Sipariş notu ve iletişim mesajını sayfa yenilemeleri arasında saklamıyoruz. Mesajlarda ödeme kartı bilgisi gibi hassas bilgileri paylaşmayın.</p></section>
      <section><h2 className="mb-3 text-xl font-bold">Google Haritalar</h2><p>Gömülü harita, “Haritayı yükle” düğmesine bastığınızda Google’dan yüklenir. Bu sırada Google, bağlantınızın IP adresi ve tarayıcı bilgileri gibi teknik bilgileri alabilir. Haritayı açmadan da adresimizi görebilirsiniz.</p></section>
      <section><h2 className="mb-3 text-xl font-bold">Teknik kayıtlar</h2><p>Siteye reklam veya ziyaretçi analiz araçları eklenmemiştir. Barındırma sağlayıcısı, hizmetin çalışması ve güvenliği için istek zamanı, IP adresi ve hata kayıtları gibi teknik kayıtlar tutabilir.</p></section>
      <section><h2 className="mb-3 text-xl font-bold">Sorularınız için</h2><p>{SITE_CONFIG.shopName} ile <Link href="/iletisim" className="font-semibold underline">iletişim sayfasından</Link> görüşebilirsiniz. Telefon: <a href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`} className="underline">{SITE_CONFIG.phone}</a>.</p></section>
    </div>
  </article>;
}
