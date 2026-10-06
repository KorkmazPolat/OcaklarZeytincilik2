import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ocaklar Zeytincilik",
    short_name: "Ocaklar",
    description: "Zeytin, zeytinyağı ve doğal ürünler kataloğu",
    lang: "tr",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#f5f0e8",
    theme_color: "#4a5c3a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
