import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import ts from "typescript";
import vm from "node:vm";
const require = createRequire(import.meta.url);
const compiled = { exports: {} };
vm.runInThisContext("(function(module,exports){" + ts.transpileModule(readFileSync("data/products.ts", "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText + "})")(compiled, compiled.exports);
const { products } = compiled.exports;
const port = Number(process.env.SMOKE_PORT ?? 3099);
const origin = "http://127.0.0.1:" + port;
const server = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port)], { env: { ...process.env, NODE_ENV: "production" }, stdio: ["ignore", "pipe", "pipe"] });
let logs = "";
server.stdout.on("data", chunk => logs += chunk);
server.stderr.on("data", chunk => logs += chunk);
const escapeHtml = value => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");
const request = (path) => fetch(origin + path, { signal: AbortSignal.timeout(15000) });
let checks = 0;
let homeHtml = "";
try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw Error("Sunucu başlatılamadı: " + logs);
    try { await request("/"); ready = true; break; } catch { await new Promise(resolve => setTimeout(resolve, 200)); }
  }
  assert.ok(ready, logs);
  for (const route of ["/", "/urunler", "/iletisim", "/siparis", "/gizlilik", "/siparis-ve-teslimat"]) {
    const response = await request(route);
    assert.equal(response.status, 200, route);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(response.headers.get("x-powered-by"), null);
    assert.ok(response.headers.get("content-security-policy")?.includes("object-src 'none'"));
    const html = await response.text();
    if (route === "/") homeHtml = html;
    assert.ok(html.includes('lang="tr"'), route);
    assert.ok(html.includes("<h1"), route);
    if (route === "/urunler") { assert.ok(!html.includes('hidden id="S:'), "Katalog JavaScript olmadan görünür HTML olarak dönmeli"); assert.ok(html.includes(products[0].name)); assert.ok(html.includes("Sipariş listeme ekle")); }
    if (route === "/iletisim") assert.ok(!/<iframe[^>]+maps\.google/.test(html), "Harita izin verilmeden yüklenmemeli");
    checks++;
  }
  const filtered = await (await request("/urunler?kategori=sabun&q=lavanta")).text();
  assert.ok(filtered.includes("Lavanta"));
  assert.ok(filtered.includes("1 ürün gösteriliyor") || /1<!-- --> ürün gösteriliyor/.test(filtered));
  checks++;
  for (const product of products) {
    const response = await request("/urunler/" + encodeURIComponent(product.id));
    assert.equal(response.status, 200, product.id);
    const html = await response.text();
    assert.ok(html.includes(escapeHtml(product.name)), product.id);
    assert.ok(!html.includes('name="robots" content="noindex"'), product.id);
    checks++;
  }
  assert.equal((await request("/urunler/olmayan-urun")).status, 404);
  assert.equal((await request("/olmayan-sayfa")).status, 404);
  checks += 2;
  for (const path of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest", "/icon.svg"]) assert.equal((await request(path)).status, 200, path);
  const robots = await (await request("/robots.txt")).text();
  const sitemap = await (await request("/sitemap.xml")).text();
  const canonical = homeHtml.match(/<link rel="canonical" href="([^"]+)"/);
  const indexable = !/<meta name="robots" content="[^"]*noindex/.test(homeHtml);
  if (indexable && canonical) {
    const siteOrigin = new URL(canonical[1]).origin;
    assert.ok(robots.includes("Allow: /"));
    assert.equal((sitemap.match(/<loc>/g) ?? []).length, products.length + 5);
    for (const product of products) assert.ok(sitemap.includes(siteOrigin + "/urunler/" + encodeURIComponent(product.id)));
    const detail = await (await request("/urunler/" + encodeURIComponent(products[0].id))).text();
    assert.ok(detail.includes('type="application/ld+json"'));
    assert.ok(detail.includes("BreadcrumbList"));
    assert.ok(detail.includes(siteOrigin + "/urunler/" + encodeURIComponent(products[0].id)));
  } else {
    assert.ok(robots.includes("Disallow: /"));
    assert.equal((sitemap.match(/<loc>/g) ?? []).length, 0);
  }
  checks += 3;
  const image = await request("/opengraph-image");
  assert.equal(image.status, 200);
  assert.ok(image.headers.get("content-type")?.startsWith("image/"));
  checks += 5;
  console.log(checks + " üretim kontrolü başarılı. Tüm " + products.length + " ürün sayfası açılıyor.");
} catch (error) {
  console.error(error);
  console.error(logs.slice(-4000));
  process.exitCode = 1;
} finally {
  server.kill("SIGTERM");
}
