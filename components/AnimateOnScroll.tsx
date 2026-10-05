"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimateOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          el.classList.remove("is-pending");
          revealObserver.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 12% 0px" }
    );

    // Content stays visible unless this script marks it pending. Anything
    // already on screen is shown immediately so a missed observer cannot blank it.
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight * 0.92;
      if (inView) {
        el.classList.add("is-visible");
        return;
      }
      el.classList.add("is-pending");
      revealObserver.observe(el);
    });

    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) el.classList.add("is-visible");
          else el.classList.remove("is-visible");
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
      animateObserver.observe(el);
    });

    const revealAll = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible");
        el.classList.remove("is-pending");
      });
    };
    const fallback = window.setTimeout(revealAll, 1000);

    return () => {
      window.clearTimeout(fallback);
      revealObserver.disconnect();
      animateObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
