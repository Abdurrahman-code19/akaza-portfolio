import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "AKAZA — Abdurrahman Oriolowo, Frontend Developer & Product Builder";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#030508",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(48,130,197,0.45), rgba(3,5,8,0) 65%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #3082C5, #4AA3FF)",
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div
            style={{
              color: "#E2E8F0",
              fontSize: 24,
              letterSpacing: "0.32em",
              fontWeight: 600,
            }}
          >
            AKAZA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#4AA3FF",
              fontSize: 22,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Frontend Developer / Product Builder
          </div>
          <div
            style={{
              color: "#E2E8F0",
              fontSize: 84,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Building digital experiences with purpose.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(226,232,240,0.12)",
            paddingTop: 28,
            color: "#94A3B8",
            fontSize: 22,
          }}
        >
          <div>Abdurrahman Oriolowo</div>
          <div style={{ color: "#D6B77A" }}>Code with purpose. Build with impact.</div>
        </div>
      </div>
    ),
    size
  );
}
