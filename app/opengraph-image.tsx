import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = "Mutaz Alqaimary — Front-End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const githubDisplay = profile.github.replace(/^https?:\/\//, "");

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#f4f7fb",
          fontFamily: "sans-serif",
          backgroundColor: "#080b12",
          backgroundImage:
            "radial-gradient(circle at 18% 16%, rgba(60,236,218,0.20), transparent 52%), radial-gradient(circle at 88% 20%, rgba(244,114,182,0.14), transparent 48%)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              height: "60px",
              width: "60px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              backgroundColor: "rgba(60,236,218,0.14)",
              border: "1px solid rgba(60,236,218,0.35)",
              color: "#3cecda",
              fontSize: "30px"
            }}
          >
            {"</>"}
          </div>
          <div style={{ fontSize: "24px", letterSpacing: "0.32em", color: "#9fb0c3" }}>PORTFOLIO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "34px", color: "#3cecda", marginBottom: "14px" }}>{profile.role}</div>
          <div style={{ fontSize: "112px", letterSpacing: "-0.03em", lineHeight: 1.02 }}>{profile.name}</div>
          <div style={{ fontSize: "32px", color: "#9fb0c3", marginTop: "30px" }}>
            React · Next.js · TypeScript · Accessible, performant UI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "26px",
            color: "#9fb0c3"
          }}
        >
          <span>{githubDisplay}</span>
          <span style={{ color: "#3cecda" }}>Available for work</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
