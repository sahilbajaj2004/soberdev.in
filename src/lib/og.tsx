import { ImageResponse } from "next/og";
import { NAP, SITE_NAME } from "@/lib/site";

/**
 * Shared Open Graph card renderer.
 *
 * The previous setup pointed og:image and twitter:image at /soberdev.jpg, which
 * did not exist, so every social share and every crawler preview resolved to a
 * 404. Generating the card at build time removes the possibility of a missing
 * binary asset and gives each route its own contextual preview.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function renderOgImage({
  title,
  eyebrow,
  footer = `${NAP.locality}, ${NAP.countryName}`,
}: {
  title: string;
  eyebrow: string;
  footer?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* indigo aurora, mirroring the site's hero treatment */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -80,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(99,102,241,0.42) 0%, rgba(0,0,0,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -120,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(129,140,248,0.28) 0%, rgba(0,0,0,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              backgroundColor: "#6366f1",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.62)",
              display: "flex",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: title.length > 42 ? 82 : 104,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -3,
            color: "#ffffff",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#ffffff" }}>
            Sober<span style={{ color: "#6366f1" }}>Dev</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {footer}
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

export const OG_ALT = (title: string) => `${title} | ${SITE_NAME}`;
