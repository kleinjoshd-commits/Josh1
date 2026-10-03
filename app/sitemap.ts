import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const PATHS = [
  "",
  "/platform",
  "/machines",
  "/solutions",
  "/solutions/platforms",
  "/solutions/fintechs",
  "/solutions/distributors",
  "/developers",
  "/company",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `https://${siteConfig.domain}${path}`,
    lastModified: new Date(),
  }));
}
