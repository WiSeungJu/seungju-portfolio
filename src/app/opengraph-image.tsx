import { ImageResponse } from "next/og";

export const alt = "Seungju Wi — Problem Solver (PM)";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#111111",
        }}
      >
        <div
          style={{
            display: "flex",
            borderTop: "6px solid #111111",
            paddingTop: 28,
            fontSize: 28,
            color: "#6b6b6b",
          }}
        >
          Problem Solver (PM)
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: -4 }}>
            Seungju Wi
          </div>
          <div style={{ fontSize: 30, color: "#6b6b6b", marginTop: 12 }}>
            portfolio.gourmevel.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
