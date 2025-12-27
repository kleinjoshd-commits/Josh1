import "./globals.css";

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

        {/* Scroll animation observer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", () => {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                      } else {
                        entry.target.classList.remove("is-visible");
                      }
                    });
                  },
                  { threshold: 0.25 }
                );

                document
                  .querySelectorAll("[data-animate]")
                  .forEach((el) => observer.observe(el));
              });
            `,
          }}
        />
      </body>
    </html>
  );
}

