# Yayına hazırlık durumu

Kontrol tarihi: 6 Ekim 2026. Site yerel üretim önizlemesinde çalışıyor: http://127.0.0.1:3001. Canlıya yayın yapılmadı.

## Tamamlanan kontroller

- Next.js 16.3.8 ve React 19.3.0 güncellemesi.
- ESLint ve TypeScript üretim derlemesi başarılı.
- 15 birim testi başarılı: Türkçe arama, filtre/sıralama, bozuk depolama, adet sınırı, WhatsApp kodlaması, Türkçe ürün adresleri, güvenli JSON-LD ve yayın/önizleme ayarları.
- 50 HTTP üretim kontrolü başarılı. 33 ürün, 6 ana sayfa, filtrelenmiş katalog, gerçek 404, güvenlik başlıkları, sitemap/robots ve paylaşım görseli doğrulandı.
- Yerel test alan adıyla indekslenebilir yayın davranışı; varsayılan ortamda indekslemeye kapalı önizleme davranışı doğrulandı.
- Katalog JavaScript gerektiren gizli streaming parçalarına bağımlı olmadan görünür HTML döndürüyor. Arama GET formu ve kategori bağlantılarıyla çalışıyor.
- Tarayıcıda mobil menü/Escape, arama, ambalaj/adet, liste kalıcılığı, geri alma, mesaj önizleme/kopyalama ve isteğe bağlı harita yüklemesi doğrulandı.
- Ana görsel 2.584.541 bayttan 141.324 bayta düşürüldü; marka favicon ve telefon simgesi eklendi.
- Üretim bağımlılık taramasında 0 açık.

## Yayın için eksik işletme bilgileri

Telefon ve mevcut genel adres kullanıcının isteğiyle korunmuştur. Gerçek alan adı, WhatsApp/telefon, açık adres, çalışma saatleri ve harita koordinatları ortam değişkenlerine girilmemiştir. Bu bilgiler uydurulmamıştır.

`npm run release:check` eksik ayarları listeler. `.env.example` gerekli değişkenleri gösterir. Gerçek ayarlar tamamlandıktan sonra `npm run release` bütün kontrolleri yeniden çalıştırır. Ortam değişiklikleri yeniden derleme gerektirir.

Ürünler temsili kategori illüstrasyonlarıyla gösteriliyor; gerçek ürün fotoğrafları sağlanmamıştır. Fiyat/stok ve teslimat bilgileri işletmeyle teyit edilir. Sitede ödeme ve sunucuda kesinleşmiş sipariş kaydı yoktur.

## Bağımlılık bakımı

Tam npm taramasında geliştirme araçlarına ait 5 yüksek seviye bulgu kalmıştır: braces → micromatch → fast-glob → Next ESLint eklentisi zinciri. Kullanılabilir uyumlu düzeltme taramada sunulmamıştır; önerilen zorla eski ESLint/Next yapılandırmasına geçiş uygulanmamıştır. Üretim taraması temizdir. Dependabot ve GitHub kalite iş akışı eklenmiştir; GitHub üzerinde ilk çalışmaları henüz gözlemlenmemiştir.

## Komutlar

```sh
npm ci
npm run check
npm run build
npm run smoke
npm audit --omit=dev
npm run release:check
```

Hosting Node.js 24 ve Next.js sunucu çalıştırmasını desteklemelidir. Yalnızca statik dosya hostingi bu katalog araması için yeterli değildir.
