"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimateOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );

    // If no elements, nothing to do
    if (!elements.length) return;

    // Ensure they start hidden until observed (prevents “stuck invisible”)
    elements.forEach((el) => el.classList.remove("is-visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) el.classList.add("is-visible");
          else el.classList.remove("is-visible");
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach((el) => observer.observe(el));

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    reveals.forEach((el) => el.classList.remove("is-visible"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 12% 0px" }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
