type IconName = "route" | "payout" | "wallet" | "card" | "identity" | "machine";

function Glyph({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "route") {
    return (
      <>
        <circle cx="5" cy="12" r="1.6" {...common} />
        <path d="M6.6 12H11" {...common} />
        <path d="M11 12c3.2-4.2 5.2-5.2 8.2-5.2" {...common} />
        <path d="M11 12c3.2 4.2 5.2 5.2 8.2 5.2" {...common} />
        <circle cx="19.4" cy="6.8" r="1.6" {...common} />
        <circle cx="19.4" cy="17.2" r="1.6" {...common} />
      </>
    );
  }
  if (name === "payout") {
    return (
      <>
        <path d="M4 12h11" {...common} />
        <path d="M12 7.5 16.5 12 12 16.5" {...common} />
        <path d="M16 6.5h3.5V17.5H16" {...common} />
      </>
    );
  }
  if (name === "wallet") {
    return (
      <>
        <rect x="3" y="7" width="18" height="12" rx="2" {...common} />
        <path d="M3 11h18" {...common} />
        <path d="M15 14.2h3.2" {...common} />
      </>
    );
  }
  if (name === "card") {
    return (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" {...common} />
        <path d="M3 10h18" {...common} />
        <path d="M7 14.5h4" {...common} />
      </>
    );
  }
  if (name === "identity") {
    return (
      <>
        <circle cx="12" cy="9" r="2.6" {...common} />
        <path d="M6.5 18.2c.9-2.4 2.8-3.6 5.5-3.6s4.6 1.2 5.5 3.6" {...common} />
        <path d="M16.2 8.2 17.4 9.4 19.6 7" {...common} />
      </>
    );
  }
  return (
    <>
      <rect x="8" y="8" width="8" height="8" rx="1.4" {...common} />
      <path d="M12 4.5V8M12 16v3.5M4.5 12H8M16 12h3.5" {...common} />
      <path d="M10.2 12h3.6" {...common} />
    </>
  );
}

export default function LineIcon({ name }: { name: string }) {
  const known: IconName[] = ["route", "payout", "wallet", "card", "identity", "machine"];
  const icon = known.includes(name as IconName) ? (name as IconName) : "route";
  return (
    <svg className="hpIcon" viewBox="0 0 24 24" aria-hidden="true">
      <Glyph name={icon} />
    </svg>
  );
}
