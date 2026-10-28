import { MetadataRoute } from "next";
import { CANONICAL_ORIGIN, SITEMAP_PATHS } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: path === "/" ? CANONICAL_ORIGIN : `${CANONICAL_ORIGIN}${path}`,
    lastModified: new Date(),
  }));
}
