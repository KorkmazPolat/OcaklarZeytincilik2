import type { Product } from "@/data/products";
export type OrderItem = { productId: string; option: string; quantity: number };
export function readOrder(raw: string, products: Product[]): OrderItem[] {
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return [];
    const result: OrderItem[] = [];
    for (const candidate of value.slice(0, 100)) {
      if (!candidate || typeof candidate !== "object") continue;
      const p = products.find((product) => product.id === candidate.productId);
      if (!p || typeof candidate.option !== "string" ||
        !(p.options?.includes(candidate.option) ?? candidate.option === "") ||
        !Number.isInteger(candidate.quantity) || candidate.quantity < 1 || candidate.quantity > 99) continue;
      const existing = result.find((item) => item.productId === candidate.productId && item.option === candidate.option);
      if (existing) existing.quantity = Math.min(99, existing.quantity + candidate.quantity);
      else result.push({ productId: candidate.productId, option: candidate.option, quantity: candidate.quantity });
    }
    return result;
  } catch { return []; }
}
export function addOrderItem(items: OrderItem[], productId: string, option: string, quantity: number): OrderItem[] {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) return items;
  const existing = items.find((item) => item.productId === productId && item.option === option);
  return existing
    ? items.map((item) => item === existing ? { ...item, quantity: Math.min(99, item.quantity + quantity) } : item)
    : [...items, { productId, option, quantity }];
}
export function orderMessage(items: OrderItem[], products: Product[], note: string) {
  return "Merhaba, aşağıdaki ürünler için güncel fiyat, stok ve teslimat bilgisi alabilir miyim?\n\n" +
    items.map((item, index) => `${index + 1}. ${products.find((p) => p.id === item.productId)!.name}${item.option ? ` — ${item.option}` : ""} × ${item.quantity} adet`).join("\n") +
    (note.trim() ? "\n\nNot: " + note.trim().slice(0, 500) : "");
}
