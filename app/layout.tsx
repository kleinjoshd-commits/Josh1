import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SiteFooter from "../components/SiteFooter";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: "MPE | Financial infrastructure for a borderless economy",
  description:
    "MPE connects globally mobile earners and their employers to regulated financial infrastructure, and holds the customer relationship at every step. Money transfer and payment services within MPE programmes are provided by licensed partner institutions in each market.",
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
        {children}
        <SiteFooter />
        <AnimateOnScroll />
      </body>
    </html>
  );
}
