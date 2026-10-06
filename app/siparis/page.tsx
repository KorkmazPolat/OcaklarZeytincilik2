import OrderList from "@/components/order/OrderList";
export const metadata = { title: "Sipariş Listem | Ocaklar Zeytincilik", robots: { index: false, follow: true } };
export default function OrderPage() {
  return <div className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6">
    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-zeytun)]">Sofranız için seçtikleriniz</p>
    <h1 className="mb-4 font-[family-name:var(--font-playfair-display)] text-4xl font-bold">Sipariş listem</h1>
    <p className="mb-10 max-w-2xl leading-relaxed">Ürünlerinizi bir araya getirin. Güncel fiyatları ve teslimat seçeneklerini birlikte soralım.</p>
    <OrderList />
  </div>;
}
