# Ocaklar Zeytincilik

Türkçe ürün kataloğu; Next.js 16.3.8, React 19.3 ve Node.js 24.

## Çalıştırma

```sh
npm ci
npm run dev
```

Yerel adres: http://localhost:3000. Üretim sunucusu için `npm run build` ve `npm start`. Statik HTML hosting yerine Node.js destekleyen Next.js hosting kullanın; katalog araması sunucuda da çalışır.

## Doğrulama

```sh
npm run check
npm run build
npm run smoke
npm audit --omit=dev
```

`check` kod denetimi ve birim testlerini çalıştırır. `smoke` önceden derlenmiş siteyi geçici 3099 portunda açar; bütün ürünler, ana sayfalar, arama, 404, meta dosyaları ve güvenlik başlıklarını doğrular. Port doluysa `SMOKE_PORT` değişkenini kullanın. GitHub Actions aynı kontrolleri her push ve pull request için çalıştırır.

## Yayın ayarları

`.env.example` dosyasını yerelde `.env.local` olarak kopyalayın veya değişkenleri hosting paneline girin. Gerçek alan adı, WhatsApp/telefon, açık adres, çalışma saatleri ve harita koordinatlarını tamamlayın. Bu değerler herkese açık işletme bilgileridir; hiçbirine gizli anahtar yazmayın.

```sh
npm run release:check
npm run release
```

`release` önce işletme ayarlarını doğrular, sonra kod/test/derleme/üretim kontrollerini çalıştırır. `REQUIRE_PUBLISH_CONFIG=1` veya Vercel üretim ortamı eksik bilgilerle derlemeyi durdurur. Diğer ortamlarda varsayılan bilgilerle yerel önizleme mümkündür.

Mevcut örnek telefon ve adres kullanıcının isteğiyle kodda korunmuştur. Bunlar gerçek yayın bilgisi olarak doğrulanmış değildir. Yayın kontrolü örnek numarayı kabul etmez; müşteri mesajlarının doğru işletmeye ulaşması için hosting değişkenlerini ayarlayın.

`NEXT_PUBLIC_SITE_URL` gerçek HTTPS alan adı olmalıdır. `SITE_PREVIEW=true` veya Vercel önizleme ortamları arama motorlarına kapalıdır. Alan adı yoksa robots indekslemeyi kapatır, sitemap boş döner. Canonical, sosyal paylaşım bağlantıları ve yapılandırılmış ürün verileri gerçek alan adıyla oluşur. Ortam değişikliklerinden sonra yeniden derleyin.

## Katalog ve sipariş akışı

- Ürünler `data/products.ts` içinde; ambalajlar, kategori ve açıklamalar buradan düzenlenir.
- Türkçe veya aksansız arama, kategoriler ve sıralama bağlantıda saklanır. Arama JavaScript olmadan da GET formuyla çalışır.
- 33 ürünün ayrı sayfası vardır; Türkçe karakterli bağlantılar desteklenir.
- Sipariş listesi ambalaj/adet bazında birleşir ve tarayıcıda saklanır. Tarayıcı depolaması kapalıysa açık oturumda çalışmaya devam eder.
- Tek ürün veya toplu liste için WhatsApp mesajı hazırlanır. Kullanıcı mesajı kendisi gönderir; sitede ödeme veya kesinleşmiş sipariş kaydı oluşmaz.
- Fiyat, stok, içerik, teslimat süresi/ücreti ve ödeme yöntemi işletmeyle teyit edilir.
- Sipariş ve teslimat açıklamaları ile veri kullanım sayfası eklenmiştir; Google haritası yalnızca ziyaretçi açtığında yüklenir.
- Ürün görselleri açıkça “Temsili görsel” olarak işaretlenmiş kategori illüstrasyonlarıdır. Gerçek ürün fotoğrafları sağlanmamıştır.

## Bakım

Dependabot bağımlılık güncellemeleri için yapılandırılmıştır. Üretim bağımlılıklarını `npm audit --omit=dev` ile denetleyin. Geliştirme araçlarındaki upstream açıklar için Next.js ile uyumsuz eski ESLint sürümüne zorla geçmeyin.

Güvenlik başlıkları `next.config.ts` içinde tanımlıdır. Yeni harici servis, analiz veya ödeme entegrasyonu eklenirse CSP ve gizlilik içeriğini o entegrasyona göre güncelleyin.
