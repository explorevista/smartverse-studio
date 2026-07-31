import { ImageResponse } from "next/og";

export const alt = "SmartVerse Studio digital ecosystem";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

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
          padding: 64,
          background: "linear-gradient(135deg, #050816 0%, #0B1120 50%, #111827 100%)",
          color: "#F8FAFC",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 32, color: "#D4AF37", marginBottom: 16 }}>SmartVerse Studio</div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
          Premium digital ecosystem for AI, publishing, travel, healthcare, and marketplaces.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
