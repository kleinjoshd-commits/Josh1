import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SiteFooter from "../components/SiteFooter";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  adjustFontFallback: true,
  variable: "--font-inter",
  preload: true,
});

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

const description =
  "One API for payouts, branded wallets and cards, identity and machine payments. Platforms that pay people can earn a share of card spend. No new licenses needed. MPE never holds funds.";

export const metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: "MPE | Financial infrastructure for a borderless economy",
  description,
  alternates: { canonical: "./" },
  openGraph: {
    title: "MPE | Financial infrastructure for a borderless economy",
    description,
    url: "./",
    siteName: "MPE",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "One integration for every way money moves." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MPE | Financial infrastructure for a borderless economy",
    description,
    images: ["/og.png"],
  },
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
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body>
        <Script id="mpe-js" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.companyName,
              url: `https://${siteConfig.domain}`,
              logo: `https://${siteConfig.domain}/mpe-logo.png`,
              description,
            }),
          }}
        />
        {children}
        <SiteFooter />
        <AnimateOnScroll />
      </body>
    </html>
  );
}
