import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/site";

/**
 * Web app manifest. The 192/512 icons and theme colour already existed but with
 * no manifest tying them together, so the site was not installable and Android
 * search results had no icon association.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Software Development Studio in Delhi, India`,
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0b0f19",
    orientation: "portrait-primary",
    lang: "en-IN",
    categories: ["business", "developer", "productivity"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
