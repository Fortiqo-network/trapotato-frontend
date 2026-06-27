import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Trapotato — invisible AI copilot for meetings & interviews";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0C0F",
          position: "relative",
        }}
      >
        {/* gold glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            width: 820,
            height: 820,
            borderRadius: "50%",
            background: "radial-gradient(closest-side, rgba(231,160,60,0.40), rgba(231,160,60,0) 70%)",
            display: "flex",
          }}
        />
        {/* hairline frame */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            borderRadius: 28,
            border: "1px solid rgba(236,234,227,0.10)",
            display: "flex",
          }}
        />

        {/* brand mark — app-icon tile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 152,
            height: 152,
            borderRadius: 40,
            marginBottom: 36,
            background: "linear-gradient(150deg, #FBBF24 0%, #E7A03C 55%, #B97718 100%)",
            boxShadow: "0 24px 70px rgba(231,160,60,0.45)",
          }}
        >
          <div style={{ display: "flex", fontSize: 96, fontWeight: 900, color: "#1A1205" }}>T</div>
        </div>

        <div style={{ display: "flex", fontSize: 104, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em" }}>
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#9aa3af",
            marginTop: 16,
            maxWidth: 880,
            textAlign: "center",
          }}
        >
          {site.tagline}
        </div>

        <div style={{ position: "absolute", bottom: 54, display: "flex", fontSize: 26, color: "#E7A03C", letterSpacing: "0.02em" }}>
          {site.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
