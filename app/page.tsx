import { pageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AboutSnippet from "@/components/sections/AboutSnippet";

import CategorySection from "@/components/sections/CategorySection";
import ShoppingGuide from "@/components/sections/ShoppingGuide";
import FaqSection from "@/components/sections/FaqSection";

export const metadata = pageMetadata("Balıkesir’in Lezzetleri", "Ocaklar’dan zeytin, zeytinyağı, peynir ve sabun çeşitlerini keşfedin. Ürün listenizi hazırlayıp WhatsApp üzerinden bilgi alın.", "/");

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <ShoppingGuide />
      <AboutSnippet />
      <FaqSection />
    </div>
  );
}
