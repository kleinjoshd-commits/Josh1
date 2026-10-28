import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SiteFooter from "../components/SiteFooter";
import { organizationGraph } from "@/content/schema";
import { CANONICAL_ORIGIN } from "@/content/seo";
import { serializeJsonLd } from "@/lib/jsonLd";
import { pageMeta } from "@/lib/pageMeta";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  adjustFontFallback: true,
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  ...pageMeta("/"),
  metadataBase: new URL(CANONICAL_ORIGIN),
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Script id="mpe-js" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationGraph) }}
        />
        {children}
        <SiteFooter />
        <AnimateOnScroll />
      </body>
    </html>
  );
}
