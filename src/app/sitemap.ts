import type { MetadataRoute } from "next";
import { ROUTES, abs } from "@/lib/site";

/**
 * Sitemap derived from the shared route table, so a new page cannot ship without
 * appearing here. The previous version duplicated the route list by hand, which
 * meant it would silently go stale.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return ROUTES.map((route) => ({
    url: abs(route.path),
    lastModified: route.lastModified ? new Date(route.lastModified) : buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
