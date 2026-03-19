export type Category = "zeytin" | "zeytinyagi" | "sabun" | "peynir" | "diger";

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  featured: boolean;
  whatsappMsg: string;
}

export const products: Product[] = [
  {
    id: "sele-zeytin",
    name: "Sele Zeytin",
    category: "zeytin",
    description: "Kuru salamura, geleneksel sele zeytin. Sofralarınızın vazgeçilmezi siyah zeytin.",
    image: "/images/products/sele-zeytin.jpg",
    featured: true,
    whatsappMsg: "Merhaba, Sele Zeytin hakkında bilgi almak ve sipariş vermek istiyorum.",
  },
  {
    id: "yesil-kirma",
    name: "Yeşil Kırma Zeytin",
    category: "zeytin",
    description: "Yeni mahsul, taptaze yeşil kırma zeytin.",
    image: "/images/products/yesil-kirma.jpg",
    featured: true,
    whatsappMsg: "Merhaba, Yeşil Kırma Zeytin hakkında bilgi almak istiyorum.",
  },
  {
    id: "siyah-zeytin",
    name: "Siyah Zeytin (Sofralık)",
    category: "zeytin",
    description: "Doğal fermente sofralık siyah zeytin. %100 doğal.",
    image: "/images/products/siyah-zeytin.jpg",
    featured: false,
    whatsappMsg: "Merhaba, Siyah Zeytin (Sofralık) hakkında bilgi almak istiyorum.",
  },
  {
    id: "soguk-sikim-5l",
    name: "Sızma Zeytinyağı 5L",
    category: "zeytinyagi",
    description: "Erken hasat, soğuk sıkım sızma zeytinyağı (5 litre).",
    image: "/images/products/zeytinyagi.jpg",
    featured: true,
    whatsappMsg: "Merhaba, Sızma Zeytinyağı 5L siparişi vermek istiyorum.",
  },
  {
    id: "naturel-sizma",
    name: "Naturel Sızma Zeytinyağı 1L",
    category: "zeytinyagi",
    description: "Naturel sızma zeytinyağı, yemeklerinizde harika lezzet.",
    image: "/images/products/sizma.jpg",
    featured: true,
    whatsappMsg: "Merhaba, Naturel Sızma Zeytinyağı 1L hakkında bilgi almak istiyorum.",
  },
  {
    id: "zeytinyagli-sabun",
    name: "Zeytinyağlı Doğal Sabun",
    category: "sabun",
    description: "Saf zeytinyağından el yapımı doğal sabun. Cildi besler ve nemlendirir.",
    image: "/images/products/sabun.jpg",
    featured: true,
    whatsappMsg: "Merhaba, Zeytinyağlı Doğal Sabun hakkında bilgi almak istiyorum.",
  },
  {
    id: "lavanta-sabun",
    name: "Zeytinyağlı Sabun (Lavanta Özlü)",
    category: "sabun",
    description: "Lavantanın rahatlatıcı etkisiyle zeytinyağlı sabun.",
    image: "/images/products/lavanta-sabun.jpg",
    featured: false,
    whatsappMsg: "Merhaba, Zeytinyağlı Sabun (Lavanta Özlü) hakkında bilgi almak istiyorum.",
  },
  {
    id: "beyaz-peynir",
    name: "Beyaz Peynir (Köy Usulü)",
    category: "peynir",
    description: "Köy sütünden, katkısız geleneksel beyaz peynir.",
    image: "/images/products/beyaz-peynir.jpg",
    featured: true,
    whatsappMsg: "Merhaba, Beyaz Peynir siparişi vermek istiyorum.",
  },
  {
    id: "dogal-bal",
    name: "Doğal Bal",
    category: "diger",
    description: "Bölgenin zengin florasından elde edilen katkısız doğal bal.",
    image: "/images/products/bal.jpg",
    featured: false,
    whatsappMsg: "Merhaba, Doğal Bal hakkında bilgi almak istiyorum.",
  }
];
