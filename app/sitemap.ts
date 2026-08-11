import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${siteConfig.domain}`,
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
      url: `https://${siteConfig.domain}/about/team`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/resources/execution-infrastructure`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/solutions/send`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/unified-approach`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/trust-controls`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/resources`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/resources/payment-lifecycle`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/resources/execution-routing`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/resources/fx-governed`,
      lastModified: new Date(),
    },
    {
      url: `https://${siteConfig.domain}/resources/settlement-models`,
      lastModified: new Date(),
    },
  ];
}
