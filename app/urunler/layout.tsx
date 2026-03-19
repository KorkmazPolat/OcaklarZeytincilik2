import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünlerimiz | Ocaklar Zeytincilik",
  description: "Zeytin, zeytinyağı, zeytinyağlı sabun, peynir ve daha fazlası.",
};

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
