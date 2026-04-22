import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${siteConfig.domain}`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/balance`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/solutions/os`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/solutions/workforce`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/solutions/balance`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/solutions/network`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/industries`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/use-cases`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/about`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/future-commerce`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/press`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/resources/execution-infrastructure`,
      lastModified: new Date(),
    },
  ];
}
