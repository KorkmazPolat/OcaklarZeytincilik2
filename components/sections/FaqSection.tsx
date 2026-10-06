const questions = [
  { q: "Nasıl sipariş verebilirim?", a: "Ürün kartından ambalaj ve adet seçip WhatsApp üzerinden fiyat sorabilirsiniz. Birden fazla ürün için sipariş listenizi hazırlayıp tek mesajla bize ulaşabilirsiniz." },
  { q: "Ürün fiyatlarını nasıl öğrenebilirim?", a: "Güncel fiyat ve stok bilgisini WhatsApp üzerinden paylaşıyoruz. Listede seçtiğiniz ürünler mesajınıza otomatik eklenir; satın alma öncesinde koşulları birlikte teyit ederiz." },
  { q: "Teslimat ve ödeme seçenekleri nelerdir?", a: "Teslimat bölgesi, kargo ücreti, süre ve ödeme seçenekleri için bize yazın. Siparişinizi netleştirirken bu bilgileri birlikte görüşelim." },
  { q: "Zeytin ve zeytinyağını nasıl saklamalıyım?", a: "Ürün ambalajındaki saklama talimatlarını takip edin. Zeytinyağını ışık ve ısıdan uzakta, kapağı kapalı şekilde saklayın. Açılmış zeytinler için ürünün etiketindeki koşulları esas alın." },
];
export default function FaqSection() {
  return <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6" aria-labelledby="faq-title">
    <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[var(--color-zeytun)]">Aklınızdakiler</p>
    <h2 id="faq-title" className="mb-10 text-center font-[family-name:var(--font-playfair-display)] text-3xl font-bold md:text-4xl">Sık sorulan sorular</h2>
    <div className="space-y-3">{questions.map(({ q, a }) => <details key={q} className="rounded-2xl border border-[var(--color-saman)] bg-white px-5 py-4">
      <summary className="cursor-pointer py-2 font-semibold">{q}</summary><p className="pb-2 pt-3 text-sm leading-relaxed opacity-80">{a}</p>
    </details>)}</div>
  </section>;
}
