import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import vm from "node:vm";
import assert from "node:assert/strict";
import { test } from "node:test";
import ts from "typescript";
// Compile pure TypeScript utilities in memory; no generated files or extra test dependency.
function load(relativePath, dependencies = {}) {
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, "..", relativePath), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const mod = { exports: {} };
  const run = vm.runInThisContext("(function(require,module,exports){" + code + "\n})", { filename: relativePath });
  run((name) => { if (name in dependencies) return dependencies[name]; throw new Error("Unexpected import: " + name); }, mod, mod.exports);
  return mod.exports;
}
const { products } = load("data/products.ts");
const { normalizeSearch, filterProducts, findProduct } = load("lib/catalog.ts");
const { readOrder, addOrderItem, orderMessage } = load("lib/order.ts");
const { SITE_CONFIG } = load("lib/constants.ts");
const { whatsappLink, productMessage } = load("lib/whatsapp.ts", { "./constants": { SITE_CONFIG } });
test("Turkish and ASCII searches match the same olive", () => {
  assert.equal(normalizeSearch("YEŞİL ÇİZİK"), "yesil cizik");
  assert.deepEqual(filterProducts(products, "all", "yesil cizik", "featured").map((p) => p.id), ["yesil-cizik"]);
  assert.deepEqual(filterProducts(products, "all", "ZEYTINYAGI", "featured").map((p) => p.id), filterProducts(products, "all", "zeytinyağı", "featured").map((p) => p.id));
});
test("Category, multiword search and empty results combine", () => {
  assert.equal(filterProducts(products, "sabun", "lavanta", "featured").length, 1);
  assert.equal(filterProducts(products, "peynir", "lavanta", "featured").length, 0);
  assert.equal(filterProducts(products, "all", "   ", "featured").length, products.length);
});
test("Sorting is Turkish-aware and does not mutate product data", () => {
  const ids = products.map((p) => p.id);
  const ascending = filterProducts(products, "all", "", "az");
  const descending = filterProducts(products, "all", "", "za");
  assert.deepEqual(ascending.map((p) => p.id), descending.map((p) => p.id).reverse());
  assert.deepEqual(products.map((p) => p.id), ids);
});
test("Malformed storage and removed products cannot break the order", () => {
  assert.deepEqual(readOrder("{", products), []);
  assert.deepEqual(readOrder("null", products), []);
  assert.deepEqual(readOrder(JSON.stringify([{ productId: "missing", option: "", quantity: 1 }, { productId: "yesil-cizik", option: "50 KG", quantity: 1 }, { productId: "yesil-cizik", option: "1 KG", quantity: -1 }, { productId: "yesil-cizik", option: "1 KG", quantity: 1.5 }]), products), []);
});
test("Repeated selections merge, separate packaging remains separate and quantity caps at 99", () => {
  const original = [{ productId: "yesil-cizik", option: "1 KG", quantity: 98 }];
  const merged = addOrderItem(original, "yesil-cizik", "1 KG", 5);
  assert.equal(merged[0].quantity, 99);
  assert.equal(original[0].quantity, 98);
  assert.equal(addOrderItem(merged, "yesil-cizik", "2 KG", 2).length, 2);
  assert.deepEqual(readOrder(JSON.stringify([...original, ...original]), products), [{ productId: "yesil-cizik", option: "1 KG", quantity: 99 }]);
});
test("WhatsApp preserves accents, packaging, quantity and multiline notes", () => {
  const message = productMessage("Yeşil Çizik Zeytin", "2 KG", 2);
  assert.equal(new URL(whatsappLink(message)).searchParams.get("text"), message);
  assert.ok(message.includes("Ambalaj: 2 KG\nAdet: 2"));
  const batch = orderMessage([{ productId: "yesil-cizik", option: "2 KG", quantity: 2 }], products, " Kargo fiyatı? ");
  assert.ok(batch.includes("Yeşil Çizik Zeytin — 2 KG × 2 adet"));
  assert.ok(batch.endsWith("Not: Kargo fiyatı?"));
});
test("Catalogue identifiers are unique and all variants are supported", () => {
  assert.equal(new Set(products.map((p) => p.id)).size, products.length);
  for (const p of products) assert.equal(readOrder(JSON.stringify([{ productId: p.id, option: p.options?.[0] ?? "", quantity: 1 }]), products).length, 1);
});

test("Site URL ignores invalid protocols and normalizes the origin", () => {
  const original = process.env.NEXT_PUBLIC_SITE_URL;
  const { getSiteUrl } = load("lib/site-url.ts");
  try {
    delete process.env.NEXT_PUBLIC_SITE_URL; assert.equal(getSiteUrl(), undefined);
    process.env.NEXT_PUBLIC_SITE_URL = "javascript:alert(1)"; assert.equal(getSiteUrl(), undefined);
    process.env.NEXT_PUBLIC_SITE_URL = "not a url"; assert.equal(getSiteUrl(), undefined);
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com/path?q=1"; assert.equal(getSiteUrl(), "https://example.com");
  } finally { if (original === undefined) delete process.env.NEXT_PUBLIC_SITE_URL; else process.env.NEXT_PUBLIC_SITE_URL = original; }
});

test("Product lookup accepts encoded Turkish route parameters and rejects malformed encoding", () => {
  const id = "cam-sise-trüf-aromali";
  assert.equal(findProduct(products, id)?.id, id);
  assert.equal(findProduct(products, encodeURIComponent(id))?.id, id);
  assert.equal(findProduct(products, "%ZZ"), undefined);
  assert.equal(findProduct(products, "missing-product"), undefined);
});

const { serializeStructuredData } = load("lib/structured-data.ts");
test("Structured data cannot close the script element", () => {
  const text = serializeStructuredData({ name: "</script><script>alert(1)</script>" });
  assert.ok(!text.includes("<"));
  assert.equal(JSON.parse(text).name, "</script><script>alert(1)</script>");
});

const { createOrderStorage, ORDER_STORAGE_KEY } = load("lib/order-storage.ts");
test("Storage failure keeps the active order available and notifies subscribers", () => {
  const storage = createOrderStorage(() => { throw Error("blocked"); });
  let notifications = 0;
  const unsubscribe = storage.subscribe(() => notifications++);
  assert.equal(storage.snapshot(), "[]");
  storage.write('[{"quantity":2}]');
  assert.equal(storage.snapshot(), '[{"quantity":2}]');
  assert.equal(notifications, 1);
  unsubscribe();
  storage.write("[]");
  assert.equal(notifications, 1);
});
test("Cross-tab changes refresh only the order storage", () => {
  let raw = "[]";
  const storage = createOrderStorage(() => ({ getItem: () => raw, setItem: (_key, value) => { raw = value; } }));
  let notifications = 0;
  storage.subscribe(() => notifications++);
  storage.write("[1]");
  assert.equal(storage.snapshot(), "[1]");
  raw = "[2]";
  storage.storageChanged("unrelated");
  assert.equal(notifications, 1);
  storage.storageChanged(ORDER_STORAGE_KEY);
  assert.equal(notifications, 2);
  assert.equal(storage.snapshot(), "[2]");
  storage.storageChanged(null);
  assert.equal(notifications, 3);
});

test("Preview environments cannot be indexed", () => {
  const keys = ["NEXT_PUBLIC_SITE_URL", "SITE_PREVIEW", "VERCEL_ENV"];
  const saved = keys.map(key => process.env[key]);
  const { isIndexable } = load("lib/site-url.ts");
  try {
    process.env.NEXT_PUBLIC_SITE_URL = "https://magaza.test";
    process.env.SITE_PREVIEW = "false"; delete process.env.VERCEL_ENV;
    assert.equal(isIndexable(), true);
    process.env.SITE_PREVIEW = "true"; assert.equal(isIndexable(), false);
    process.env.SITE_PREVIEW = "false"; process.env.VERCEL_ENV = "preview"; assert.equal(isIndexable(), false);
    delete process.env.VERCEL_ENV; delete process.env.NEXT_PUBLIC_SITE_URL; assert.equal(isIndexable(), false);
  } finally { keys.forEach((key, index) => { if (saved[index] === undefined) delete process.env[key]; else process.env[key] = saved[index]; }); }
});
