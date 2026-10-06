import { pageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata("Ürünlerimiz", "Zeytin, zeytinyağı, doğal sabun ve peynir çeşitlerini arayın. Ambalaj ve adet seçerek fiyat bilgisi alın.", "/urunler");

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
