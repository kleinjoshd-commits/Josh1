import "./globals.css";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SiteFooter from "../components/SiteFooter";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: "MPE | Money for the world's newest earners",
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
    <html lang="en">
      <body>
        {children}
        <SiteFooter />
        <AnimateOnScroll />
      </body>
    </html>
  );
}
