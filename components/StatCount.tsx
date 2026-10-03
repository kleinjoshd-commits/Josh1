"use client";

import { useEffect, useRef, useState } from "react";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { n: 0, suffix: value };
  return { n: Number(match[1]), suffix: match[2] };
}

/**
 * The markup is the finished figure. The count runs only after the strip
 * has been off-screen and then scrolls into view, and it finishes within 1.2s.
 */
export default function StatCount({ value }: { value: string }) {
  const { n, suffix } = parseStat(value);
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(n);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    let offscreen = false;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          offscreen = true;
          return;
        }
        observer.disconnect();
        if (!offscreen) return;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1100);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(n * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setShown(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [n]);

  return (
    <b ref={ref}>
      {shown}
      {suffix}
    </b>
  );
}
