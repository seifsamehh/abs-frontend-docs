import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ABS Frontend Documentation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(234, 131, 3, 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(234, 131, 3, 0.1) 0%, transparent 70%)",
          }}
        />

        {/* Top bar accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #EA8303, #fbbf24, #EA8303)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #EA8303, #fbbf24)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 800,
                color: "white",
              }}
            >
              A
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.05em",
              }}
            >
              ABS COURIER
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #EA8303, #fbbf24)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Frontend Guide
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.6)",
              margin: 0,
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.5,
            }}
          >
            React &middot; Next.js &middot; TypeScript &middot; Best Practices
          </p>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            abs-frontend-docs.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
