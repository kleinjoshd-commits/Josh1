"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Built-for still. The card's dark ground shows until the file has decoded,
 * then the photo fades in. Eager so a full-page capture is not a blank card.
 */
export default function BuiltPhoto({
  src,
  avif,
  className,
  width,
  height,
}: {
  src: string;
  avif?: string;
  className?: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (!img || !img.complete || img.naturalWidth === 0) return;
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt=""
      width={width}
      height={height}
      className={className ? `${className}${ready ? " isIn" : ""}` : ready ? "isIn" : undefined}
      loading="eager"
      fetchPriority="low"
      decoding="async"
      onLoad={() => setReady(true)}
    />
  );

  if (!avif) return img;
  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      {img}
    </picture>
  );
}
