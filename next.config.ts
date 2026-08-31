import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strip the X-Powered-By fingerprint.
  poweredByHeader: false,
  compress: true,

  images: {
    // Serve modern formats. AVIF is tried first and falls back to WebP, which
    // cuts the transfer size of the screenshot-heavy portfolio grid substantially
    // versus the source PNGs.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async headers() {
    return [
      {
        // Fingerprinted build assets are safe to cache permanently.
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        // llms.txt is plain text and should be cacheable at the edge.
        source: "/llms.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
    ];
  },

  async redirects() {
    return [
      // Consolidate plausible alternate entry points onto the canonical URLs so
      // inbound links and typed URLs do not dead-end on a 404.
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/refunds", destination: "/refund-policy", permanent: true },
    ];
  },
};

export default nextConfig;
