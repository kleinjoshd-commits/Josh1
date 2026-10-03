"use client";

export default function WatchFilm({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="btnSecondary"
      onClick={() => window.dispatchEvent(new Event("mpe-open-film"))}
    >
      {label}
    </button>
  );
}
