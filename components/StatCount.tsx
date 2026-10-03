"use client";

import { useEffect, useRef, useState } from "react";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { n: 0, suffix: value };
  return { n: Number(match[1]), suffix: match[2] };
}

export default function StatCount({ value }: { value: string }) {
  const { n, suffix } = parseStat(value);
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(n);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(n);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [n]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(n * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, n]);

  return (
    <b ref={ref}>
      {shown}
      {suffix}
    </b>
  );
}
