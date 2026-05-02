import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          color: "#E8E6E3",
          fontFamily: "serif",
          backgroundColor: "#0B0D12",
          backgroundImage:
            "radial-gradient(900px 600px at 12% -10%, rgba(139,157,195,0.18), transparent 60%), radial-gradient(700px 500px at 110% 10%, rgba(196,164,168,0.10), transparent 65%), linear-gradient(180deg, #0d1018 0%, #0a0c12 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#9DB4C8",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#9DB4C8",
            }}
          />
          DreamMirror
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 60,
            fontSize: 96,
            lineHeight: 1.05,
            maxWidth: 980,
            color: "#E8E6E3",
          }}
        >
          Catch your dreams before they fade.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 32,
            lineHeight: 1.3,
            color: "#B8B4AE",
            fontFamily: "sans-serif",
            maxWidth: 900,
          }}
        >
          A calm, private dream journal with gentle AI reflections — for
          Android.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9DB4C8",
            fontSize: 22,
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            Download for Android
          </div>
          <div>{new URL(siteConfig.url).hostname}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
