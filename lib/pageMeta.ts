import type { Metadata } from "next";
import { CANONICAL_ORIGIN, pageSeo, type SeoPath } from "@/content/seo";

/** Per-page title, description, canonical and social tags. */
export function pageMeta(path: SeoPath): Metadata {
  const { title, description } = pageSeo[path];
  const url = path === "/" ? CANONICAL_ORIGIN : `${CANONICAL_ORIGIN}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "MPE",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "One integration for every way money moves.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
