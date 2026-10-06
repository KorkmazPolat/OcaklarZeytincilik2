export const ORDER_STORAGE_KEY = "ocaklar-order-v1";
type StorageAccess = Pick<Storage, "getItem" | "setItem">;
export function createOrderStorage(getStorage: () => StorageAccess) {
  let fallback = "[]";
  let memoryOnly = false;
  const listeners = new Set<() => void>();
  return {
    snapshot() {
      if (memoryOnly) return fallback;
      try { return getStorage().getItem(ORDER_STORAGE_KEY) ?? "[]"; } catch { return fallback; }
    },
    write(raw: string) {
      fallback = raw;
      try { getStorage().setItem(ORDER_STORAGE_KEY, raw); memoryOnly = false; } catch { memoryOnly = true; }
      listeners.forEach(listener => listener());
    },
    subscribe(listener: () => void) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    storageChanged(key: string | null) {
      if (key !== null && key !== ORDER_STORAGE_KEY) return;
      if (!memoryOnly) listeners.forEach(listener => listener());
    },
  };
}
