import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#a5b4fc",
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: -1,
          borderRadius: 6,
          border: "1.5px solid #6366f1",
        }}
      >
        WI
      </div>
    ),
    {
      ...size,
    }
  );
}
