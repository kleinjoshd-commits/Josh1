import type { Metadata } from "next";

/** Per-page title, description, canonical and social tags. */
export function pageMeta(title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: "./" },
    openGraph: {
      title,
      description,
      url: "./",
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
