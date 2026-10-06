"use client";
import Link from "next/link";
export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <html lang="tr"><body style={{ margin: 0, background: "#f5f0e8", color: "#3d2b1f", fontFamily: "system-ui, sans-serif" }}>
    <main style={{ maxWidth: 560, margin: "100px auto", padding: 24, textAlign: "center" }}>
      <h1>Şu anda bir sorun yaşıyoruz</h1><p>Sayfayı yeniden yüklemeyi deneyin.</p>
      <button onClick={retry} style={{ border: 0, borderRadius: 12, padding: "14px 24px", background: "#4a5c3a", color: "white", fontSize: 16, cursor: "pointer" }}>Tekrar dene</button>
      <p><Link href="/" style={{ color: "inherit" }}>Ana sayfaya dön</Link></p>
    </main>
  </body></html>;
}
