import { MetadataRoute } from "next";
import { CANONICAL_ORIGIN } from "@/content/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CANONICAL_ORIGIN}/sitemap.xml`,
  };
}
