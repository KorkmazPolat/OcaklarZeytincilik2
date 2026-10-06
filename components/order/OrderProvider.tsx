"use client";
import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { products } from "@/data/products";
import { readOrder, addOrderItem, type OrderItem } from "@/lib/order";
import { createOrderStorage } from "@/lib/order-storage";
const storage = createOrderStorage(() => localStorage);
function subscribe(callback: () => void) {
  const unsubscribe = storage.subscribe(callback);
  function changed(event: StorageEvent) { storage.storageChanged(event.key); }
  window.addEventListener("storage", changed);
  return () => { unsubscribe(); window.removeEventListener("storage", changed); };
}
const snapshot = () => storage.snapshot();
function write(items: OrderItem[]) { storage.write(JSON.stringify(items)); }

type OrderContextValue = {
  items: OrderItem[];
  addItem: (productId: string, option: string, quantity: number) => number;
  setQuantity: (productId: string, option: string, quantity: number) => void;
  removeItem: (productId: string, option: string) => void;
  clear: () => void;
  restoreItems: (items: OrderItem[]) => void;
};
const OrderContext = createContext<OrderContextValue | null>(null);
export default function OrderProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "[]");
  const items = useMemo(() => readOrder(raw, products), [raw]);
  const value: OrderContextValue = {
    items,
    addItem(productId, option, quantity) {
      const before = readOrder(snapshot(), products);
      const after = readOrder(JSON.stringify(addOrderItem(before, productId, option, quantity)), products);
      write(after);
      return after.reduce((sum, item) => sum + item.quantity, 0) - before.reduce((sum, item) => sum + item.quantity, 0);
    },
    setQuantity(productId, option, quantity) {
      if (!Number.isInteger(quantity)) return;
      write(readOrder(snapshot(), products).map((item) => item.productId === productId && item.option === option ? { ...item, quantity: Math.max(1, Math.min(99, quantity)) } : item));
    },
    removeItem(productId, option) {
      write(readOrder(snapshot(), products).filter((item) => !(item.productId === productId && item.option === option)));
    },
    clear() { write([]); },
    restoreItems(saved) { write(readOrder(JSON.stringify([...readOrder(snapshot(), products), ...saved]), products)); },
  };
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}
export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("OrderProvider is required");
  return context;
}
