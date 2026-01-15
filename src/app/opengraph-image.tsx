import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Easy Split - Free Image Splitter for TikTok & Instagram";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading (optional, using system fonts fallback for speed/simplicity initially)
  // You can load custom fonts here using fetch()

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FACC15", // Brand Yellow
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFDF5", // Off-white
            padding: "40px 80px",
            border: "8px solid black",
            boxShadow: "15px 15px 0px black",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "black",
              marginBottom: 20,
              textTransform: "uppercase",
              letterSpacing: "-2px",
            }}
          >
            Easy Split
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#333",
              textAlign: "center",
            }}
          >
            Split Photos for TikTok & Instagram grids
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 24,
              fontWeight: 500,
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Free • No Watermark • Client-side
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
