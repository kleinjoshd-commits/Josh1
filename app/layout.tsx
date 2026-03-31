import "./globals.css";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SiteFooter from "../components/SiteFooter";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: "MPE | Financial Access for Hard Places",
  description:
    "MPE helps workers send more money home through zero-fee remittances, USD-held wallets, and resilient financial access built for hard environments on Earth and beyond.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteFooter />
        <AnimateOnScroll />
      </body>
    </html>
  );
}
