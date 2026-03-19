# Ocaklar Zeytincilik — Website Proje Planı

## Proje Genel Bakış

| Özellik | Detay |
|---|---|
| Proje Adı | Ocaklar Zeytincilik Website |
| Teknoloji | Next.js 14 (App Router) + Tailwind CSS |
| Dil | Türkçe |
| Tip | Vitrin + WhatsApp/Telefon sipariş butonu |
| Konum | Ocaklar, Balıkesir |

---

## Tasarım Sistemi

### Estetik Yön
**Doğal & Organik** — Zeytinlikleri, toprağı ve el emeğini çağrıştıran sıcak, otantik bir his. Sanki bir aile işletmesinin yıllarca süregelen geleneklerini yansıtıyor.

### Renk Paleti
```
--color-zeytun:     #4A5C3A   /* koyu zeytin yeşili — ana renk */
--color-toprak:     #8B6914   /* toprak sarısı / altın — vurgu */
--color-krem:       #F5F0E8   /* krem / kağıt beyazı — arka plan */
--color-kahve:      #3D2B1F   /* koyu kahve — metin */
--color-saman:      #E8DCC8   /* açık saman — ikincil arka plan */
--color-zeytin-ac:  #7A8C5E   /* açık zeytin — hover, border */
```

### Tipografi
```
Başlık fontu:  "Playfair Display" (serif) — zarif, geleneksel
Gövde fontu:   "Lato" veya "Source Sans 3" — okunabilir, sade
Aksent fontu:  "Dancing Script" (el yazısı) — logo altı tagline, özel vurgular
```

### Genel UI Kuralları
- Köşeler hafif yuvarlak (border-radius: 4–8px), organik his
- Butonlar toprak sarısı (#8B6914), hover'da zeytin yeşiline kayar
- Kartlarda çok hafif kağıt doku (noise texture veya subtle grain)
- WhatsApp butonu sayfanın sağ alt köşesinde sabit (floating)
- İkonlar: Lucide React veya özel SVG (minimalist çizgi stil)
- Fotoğraflar: `next/image` ile optimize, aspect-ratio sabit, object-cover

---

## Dosya & Klasör Yapısı

```
ocaklar-zeytincilik/
├── app/
│   ├── layout.tsx          # Root layout (font, meta, Navbar, Footer)
│   ├── page.tsx            # Ana Sayfa
│   ├── urunler/
│   │   └── page.tsx        # Ürünler Kataloğu
│   ├── iletisim/
│   │   └── page.tsx        # İletişim & Konum
│   └── globals.css         # CSS değişkenleri, reset
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CategoryBadge.tsx
│   │   └── WhatsAppFloat.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── FeaturedProducts.tsx
│       ├── AboutSnippet.tsx
│       └── ContactMap.tsx
├── data/
│   └── products.ts         # Ürün verisi (statik JSON/TS)
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       ├── logo.svg
│       └── products/       # placeholder görseller
├── lib/
│   └── constants.ts        # WhatsApp no, telefon, adres
└── next.config.js
```

---

## Sayfalar & İçerik

### 1. Ana Sayfa (`/`)

#### 1.1 Navbar
- Sol: Logo (SVG) + "OCAKLAR ZEYTİNCİLİK" yazısı
- Sağ: Navigasyon linkleri → Ana Sayfa | Ürünler | İletişim
- Mobilde hamburger menü
- Sticky, scroll'da hafif blur + arka plan opaklık artar

#### 1.2 Hero Section
- Tam ekran arka plan: zeytinlik fotoğrafı (placeholder: yeşil gradient)
- Üstüne koyu overlay (%40)
- Büyük başlık: **"Doğanın En Saf Lezzetleri"**
- Alt başlık: *"Ocaklar'dan sofralarınıza, el emeği ürünler"*
- CTA buton: **"Ürünleri Keşfet"** → `/urunler` sayfasına yönlendir
- Küçük aksent metin: "Balıkesir, Ocaklar"

#### 1.3 Öne Çıkan Ürünler
- Başlık: "Seçme Ürünlerimiz"
- `products.ts` dosyasından `featured: true` olan max 6 ürün
- 3'lü grid (mobilde 1'li)
- Her kart: görsel, ürün adı, kategori badge, kısa açıklama, "Sipariş Ver" butonu
- "Tüm Ürünleri Gör" → `/urunler`

#### 1.4 Hakkımızda Snippet
- 2 kolonlu layout: sol metin, sağ görsel
- Kısa tanıtım paragrafı (2–3 cümle)
- Küçük istatistikler: örn. "25+ Yıllık Deneyim", "100% Doğal", "Balıkesir'den"

#### 1.5 Footer
- Logo + kısa slogan
- Hızlı linkler
- İletişim bilgileri (adres, tel, WhatsApp)
- Telif hakkı

---

### 2. Ürünler Kataloğu (`/urunler`)

#### 2.1 Sayfa Başlığı
- Hero banner (küçük, 200px yükseklik)
- Başlık: "Ürünlerimiz"
- Breadcrumb: Ana Sayfa > Ürünler

#### 2.2 Kategori Filtresi
- Yatay scroll'lu kategori tab'ları:
  - Tümü | Zeytin | Zeytinyağı | Sabun | Peynir & Süt Ürünleri | Diğer
- Aktif tab zeytin yeşili arka planla vurgulanır
- Filtre client-side (useState ile), sayfa yenilemeden çalışır

#### 2.3 Ürün Grid
- 3 kolonlu grid (tablet: 2'li, mobil: 1'li)
- Her `ProductCard`:
  - Ürün görseli (placeholder: kategori renginde gradient + ürün ikonu)
  - Kategori badge (renkli)
  - Ürün adı (Playfair Display)
  - Kısa açıklama (2 satır, ellipsis)
  - WhatsApp sipariş butonu: tıklayınca pre-filled mesajla WhatsApp açılır
    - Mesaj örneği: `"Merhaba, [Ürün Adı] hakkında bilgi almak istiyorum."`

---

### 3. İletişim & Konum (`/iletisim`)

#### 3.1 İletişim Bilgileri
- Adres: Ocaklar, Balıkesir
- Telefon: [Doldurulacak]
- WhatsApp: [Doldurulacak]
- Çalışma Saatleri: [Doldurulacak]

#### 3.2 Google Maps Embed
- `<iframe>` ile Google Maps embed (Ocaklar, Balıkesir)
- Tam genişlik, 400px yükseklik
- Haritanın altında "Yol Tarifi Al" butonu (Google Maps linki)

#### 3.3 WhatsApp Yönlendirme
- Büyük CTA kartı: "Sipariş vermek veya bilgi almak için WhatsApp'tan yazın"
- Yeşil WhatsApp butonu

---

## Ürün Veri Yapısı (`data/products.ts`)

```typescript
export interface Product {
  id: string;
  name: string;           // "Sele Zeytin"
  category: Category;     // "zeytin" | "zeytinyagi" | "sabun" | "peynir" | "diger"
  description: string;    // Kısa açıklama (max 100 karakter)
  image: string;          // "/images/products/sele-zeytin.jpg"
  featured: boolean;      // Ana sayfada gösterilsin mi?
  whatsappMsg: string;    // Pre-filled WhatsApp mesajı
}

export type Category = "zeytin" | "zeytinyagi" | "sabun" | "peynir" | "diger";
```

### Örnek Ürünler (placeholder)

**Zeytin:**
- Sele Zeytin (kuru salamura, geleneksel)
- Yeşil Kırma Zeytin
- Siyah Zeytin (sofralık)

**Zeytinyağı:**
- Soğuk Sıkım Zeytinyağı (0.5L / 1L / 5L)
- Naturel Sızma Zeytinyağı

**Sabun:**
- Zeytinyağlı Doğal Sabun (sade)
- Zeytinyağlı Sabun (lavanta özlü)

**Peynir & Süt Ürünleri:**
- Beyaz Peynir (köy usulü)
- Çökelek

**Diğer:**
- Doğal Bal
- Taze Bakliyat

---

## Sabit Değerler (`lib/constants.ts`)

```typescript
export const SITE_CONFIG = {
  shopName: "Ocaklar Zeytincilik",
  tagline: "Doğanın En Saf Lezzetleri",
  address: "Ocaklar Köyü, Balıkesir",
  phone: "+90 XXX XXX XX XX",          // doldurulacak
  whatsapp: "+90XXXXXXXXXXX",           // doldurulacak
  whatsappBase: "https://wa.me/90XXXXXXXXXXX?text=",
  googleMapsUrl: "https://maps.google.com/?q=Ocaklar,Balıkesir",
  workingHours: "Hafta içi 08:00–18:00",
};
```

---

## WhatsApp Sipariş Akışı

1. Kullanıcı ürün kartındaki **"Sipariş Ver"** butonuna tıklar
2. Şu URL açılır:
   ```
   https://wa.me/90XXXXXXXXXXX?text=Merhaba%2C%20[Ürün%20Adı]%20hakkında%20bilgi%20almak%20istiyorum.
   ```
3. Kullanıcı WhatsApp'ta mesajı görür ve gönderir
4. Dükkan sahibi yanıt verir

---

## SEO & Meta

Her sayfa için `generateMetadata` ile:

```typescript
// Ana Sayfa
title: "Ocaklar Zeytincilik | Balıkesir'in Doğal Lezzetleri"
description: "Ocaklar, Balıkesir'den sofralarınıza doğal zeytin, zeytinyağı, sabun ve peynir ürünleri."

// Ürünler
title: "Ürünlerimiz | Ocaklar Zeytincilik"
description: "Zeytin, zeytinyağı, zeytinyağlı sabun, peynir ve daha fazlası."

// İletişim
title: "İletişim & Konum | Ocaklar Zeytincilik"
description: "Ocaklar Zeytincilik'e ulaşın. Balıkesir, Ocaklar köyünde bulabilirsiniz."
```

---

## Responsive Breakpoint Stratejisi

| Ekran | Breakpoint | Grid |
|---|---|---|
| Mobil | < 640px | 1 kolon |
| Tablet | 640–1024px | 2 kolon |
| Masaüstü | > 1024px | 3 kolon |

- Navbar: masaüstünde yatay, mobilde hamburger
- Hero metin boyutu: `text-4xl md:text-6xl`
- Floating WhatsApp butonu her zaman görünür

---

## Geliştirme Öncelik Sırası

1. `globals.css` — renk değişkenleri, font import, base reset
2. `lib/constants.ts` — tüm sabit değerler
3. `data/products.ts` — ürün verisi
4. `Navbar.tsx` + `Footer.tsx`
5. `WhatsAppFloat.tsx` — floating buton
6. Ana Sayfa (`page.tsx`) + tüm section bileşenleri
7. Ürünler sayfası + filtre mantığı
8. İletişim sayfası + harita
9. SEO meta etiketleri
10. Responsive test & polish

---

## Notlar & Sonraki Adımlar

- [ ] WhatsApp numarası ve telefon numarası girilecek
- [ ] Gerçek ürün fotoğrafları hazır olduğunda `/public/images/products/` klasörüne eklenecek
- [ ] Google Maps için dükkanın tam konumu pinlenecek
- [ ] Çalışma saatleri netleştirilecek
- [ ] İsteğe bağlı: Instagram feed entegrasyonu (en son gönderiler)
- [ ] İsteğe bağlı: Fiyat listesi eklenmesi
