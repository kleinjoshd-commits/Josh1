import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://modernpayengine.com",
      lastModified: new Date(),
    },
    {
      url: "https://modernpayengine.com/modern-payengine",
      lastModified: new Date(),
    },
    {
      url: "https://modernpayengine.com/balance",
      lastModified: new Date(),
    },
  ];
}
