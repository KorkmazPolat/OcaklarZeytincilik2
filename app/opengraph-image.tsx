import { ImageResponse } from "next/og";
export const alt = "Ocaklar Zeytincilik — Balıkesir'den sofranıza";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", padding: 72, background: "#f5f0e8", color: "#3d2b1f", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <svg width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#4a5c3a"/><path d="M17 48C20 34 33 23 47 15M24 37C13 34 15 19 28 20C31 28 29 33 24 37ZM32 29C33 17 43 12 50 15C49 26 42 32 32 29ZM28 37C36 32 47 35 47 43C39 48 31 45 28 37Z" fill="#e8dcc8" stroke="#e8dcc8" strokeWidth="2"/></svg>
        <div style={{ fontSize: 36 }}>Ocaklar Zeytincilik</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>Sofranıza bir parça Ocaklar.</div>
        <div style={{ fontSize: 28, color: "#4a5c3a" }}>Zeytin · Zeytinyağı · Peynir · Doğal sabun</div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #e8dcc8", paddingTop: 22, fontSize: 24, color: "#8b6914" }}>Balıkesir’den sofranıza</div>
    </div>, size
  );
}
