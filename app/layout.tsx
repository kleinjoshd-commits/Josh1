import "./globals.css";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata = {
  title: "Modern PayEngine | Global Payments Infrastructure",
  description:
    "Modern PayEngine provides global payments infrastructure for employers, including governed payouts, foreign exchange (FX) control, and a modern worker wallet through Balance.",
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
        <AnimateOnScroll />
      </body>
    </html>
  );
}
