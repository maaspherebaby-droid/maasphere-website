import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage:
            "linear-gradient(135deg, #1B1815 0%, #272220 55%, #B8933F 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 6,
              backgroundColor: "#D4AF37",
            }}
          />
          <span style={{ fontSize: 32, color: "#F3E5AB", fontWeight: 600 }}>
            {siteConfig.name}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFBF7",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "#F3E5AB",
            maxWidth: 780,
          }}
        >
          Pregnancy timeline, 3D baby viewer, kick counter, and Dhruv AI — one calm, trusted companion.
        </div>
      </div>
    ),
    { ...size }
  );
}
