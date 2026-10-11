import { ImageResponse } from "next/og";

export const alt = "Avia Code — Software that fits your workflow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", background: "#071a2b", color: "#f4f8f8", padding: "72px", fontFamily: "sans-serif", position: "relative", overflow: "hidden" }}><div style={{ position: "absolute", width: 520, height: 520, right: -80, top: -100, borderRadius: 999, background: "linear-gradient(135deg,#13b9ad,#1e63ff)", opacity: .3 }} /><div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}><div style={{ fontSize: 34, display: "flex", gap: 12, alignItems: "center" }}><b style={{ color: "#2fd5c7" }}>▲</b><b>Avia Code</b></div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.08, maxWidth: 900 }}>Software that fits your workflow.</div><div style={{ display: "flex", fontSize: 25, color: "#a9bac5", marginTop: 28 }}>Custom software · Websites · AI automation · Authorized security</div></div><div style={{ display: "flex", fontSize: 22, color: "#70e5da" }}>aviacode.site</div></div></div>, size);
}
