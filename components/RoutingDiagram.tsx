const LABEL =
  "A payment moves from a platform, through MPE, to licensed partners, then on to a bank, card, wallet, or machine.";

type Line = { d: string; delay: string };

const DESKTOP_LINES: Line[] = [
  { d: "M156 152 H228", delay: "0s" },
  { d: "M356 144 C408 144 424 56 460 56", delay: "0.35s" },
  { d: "M356 148 H460", delay: "0.7s" },
  { d: "M356 144 C408 144 424 248 460 248", delay: "1.05s" },
  { d: "M580 56 C650 56 690 42 760 42", delay: "0.5s" },
  { d: "M580 152 C650 152 690 118 760 118", delay: "0.85s" },
  { d: "M580 248 C640 248 700 194 760 194", delay: "1.2s" },
  { d: "M580 248 C660 260 700 270 760 270", delay: "1.55s" },
];

const MOBILE_LINES: Line[] = [
  { d: "M170 68 V100", delay: "0s" },
  { d: "M170 184 V206", delay: "0.4s" },
  { d: "M170 232 V240", delay: "0.7s" },
  { d: "M58 304 C90 330 140 336 170 340", delay: "0.9s" },
  { d: "M282 304 C250 330 200 336 170 340", delay: "1.05s" },
  { d: "M170 304 V360", delay: "1.2s" },
  { d: "M170 416 V432", delay: "1.45s" },
  { d: "M170 488 V504", delay: "1.7s" },
  { d: "M170 560 V576", delay: "1.95s" },
];

export default function RoutingDiagram() {
  return (
    <div className="routeDiagram">
      <svg className="routeDesktop" viewBox="0 0 960 320" role="img" aria-label={LABEL}>
        <title>{LABEL}</title>
        <Defs id="desk" />
        <Wires lines={DESKTOP_LINES} grad="desk" />
        <Glass x={16} y={118} w={140} h={68} label="Platform" />
        <Glass x={228} y={108} w={128} h={72} label="MPE" hub filterId="desk-hub" />
        <text x={292} y={204} textAnchor="middle" fill="rgba(232,240,236,0.8)" fontSize="12" fontFamily="inherit">
          AI-powered routing
        </text>
        <Glass x={460} y={28} w={120} h={56} label="A" shield />
        <Glass x={460} y={124} w={120} h={56} label="B" shield />
        <Glass x={460} y={220} w={120} h={56} label="C" shield />
        <text x={520} y={304} textAnchor="middle" fill="rgba(232,240,236,0.8)" fontSize="12" fontFamily="inherit">
          Licensed partners
        </text>
        <Glass x={760} y={16} w={184} h={52} label="Bank" icon="bank" />
        <Glass x={760} y={92} w={184} h={52} label="Card" icon="card" />
        <Glass x={760} y={168} w={184} h={52} label="Wallet" icon="wallet" />
        <Glass x={760} y={244} w={184} h={52} label="Machine" icon="machine" />
      </svg>

      <svg className="routeMobile" viewBox="0 0 340 660" role="img" aria-label={LABEL}>
        <title>{LABEL}</title>
        <Defs id="mob" />
        <Wires lines={MOBILE_LINES} grad="mob" />
        <Glass x={70} y={12} w={200} h={56} label="Platform" />
        <Glass x={70} y={100} w={200} h={84} label="MPE" hub sub="AI-powered routing" filterId="mob-hub" />
        <text x={170} y={224} textAnchor="middle" fill="rgba(232,240,236,0.8)" fontSize="13" fontFamily="inherit">
          Licensed partners
        </text>
        <Glass x={8} y={240} w={100} h={64} label="A" shield />
        <Glass x={120} y={240} w={100} h={64} label="B" shield />
        <Glass x={232} y={240} w={100} h={64} label="C" shield />
        <Glass x={40} y={360} w={260} h={56} label="Bank" icon="bank" />
        <Glass x={40} y={432} w={260} h={56} label="Card" icon="card" />
        <Glass x={40} y={504} w={260} h={56} label="Wallet" icon="wallet" />
        <Glass x={40} y={576} w={260} h={56} label="Machine" icon="machine" />
      </svg>
    </div>
  );
}

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#0E7C50" />
        <stop offset="0.45" stopColor="#7DFFC3" />
        <stop offset="1" stopColor="#17C97F" />
      </linearGradient>
      <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="2.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id={`${id}-hub`} x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#17C97F" floodOpacity="0.85" />
      </filter>
    </defs>
  );
}

function Wires({ lines, grad }: { lines: Line[]; grad: string }) {
  return (
    <g fill="none" strokeLinecap="round">
      {lines.map((line) => (
        <path key={line.d} d={line.d} pathLength={100} stroke="rgba(125,255,195,0.28)" strokeWidth="1.4" />
      ))}
      {lines.map((line) => (
        <path
          key={`${line.d}-flow`}
          className="routeFlow"
          d={line.d}
          pathLength={100}
          stroke={`url(#${grad}-grad)`}
          strokeWidth="2.4"
          filter={`url(#${grad}-glow)`}
          style={{ animationDelay: line.delay }}
        />
      ))}
    </g>
  );
}

function Glass({
  x,
  y,
  w,
  h,
  label,
  hub = false,
  shield = false,
  icon,
  sub,
  filterId,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  hub?: boolean;
  shield?: boolean;
  icon?: "bank" | "card" | "wallet" | "machine";
  sub?: string;
  filterId?: string;
}) {
  const cx = x + w / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        fill={hub ? "#17C97F" : "rgba(255,255,255,0.06)"}
        stroke={hub ? "#B8FFD9" : "rgba(255,255,255,0.28)"}
        strokeWidth={hub ? 1.4 : 1}
        filter={filterId ? `url(#${filterId})` : undefined}
      />
      <rect
        x={x + 1}
        y={y + 1}
        width={w - 2}
        height={Math.max(10, h * 0.42)}
        rx="13"
        fill={hub ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.05)"}
      />
      {shield ? <Shield x={cx - (label ? 16 : 8)} y={y + h / 2 - 8} light /> : null}
      {icon ? <DestIcon name={icon} x={x + 16} y={y + h / 2 - 9} /> : null}
      <text
        x={shield ? cx + 8 : icon ? x + 42 : cx}
        y={sub ? y + h / 2 - 2 : y + h / 2 + 5}
        textAnchor={shield || icon ? "start" : "middle"}
        fill={hub ? "#042016" : "#F4F7F5"}
        fontSize={hub ? 16 : 14}
        fontWeight="600"
        fontFamily="inherit"
      >
        {label}
      </text>
      {sub ? (
        <text
          x={cx}
          y={y + h / 2 + 16}
          textAnchor="middle"
          fill="#042016"
          fontSize="11"
          fontFamily="inherit"
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Shield({ x, y, light }: { x: number; y: number; light?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="none" stroke={light ? "#7DFFC3" : "#042016"} strokeWidth="1.4">
      <path d="M8 1.2 14.2 3.8v4.4c0 3.1-2.3 5.3-6.2 6.5-3.9-1.2-6.2-3.4-6.2-6.5V3.8L8 1.2z" />
    </g>
  );
}

function DestIcon({ name, x, y }: { name: "bank" | "card" | "wallet" | "machine"; x: number; y: number }) {
  const common = {
    fill: "none",
    stroke: "#7DFFC3",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <g transform={`translate(${x} ${y})`}>
      {name === "bank" ? (
        <>
          <path d="M2 7 9 3l7 4" {...common} />
          <path d="M3.5 7.5V14M9 7.5V14M14.5 7.5V14M2 14.5h14" {...common} />
        </>
      ) : null}
      {name === "card" ? (
        <>
          <rect x="1.5" y="4" width="15" height="10" rx="1.6" {...common} />
          <path d="M1.5 7.5h15" {...common} />
        </>
      ) : null}
      {name === "wallet" ? (
        <>
          <rect x="1.5" y="4" width="15" height="11" rx="1.6" {...common} />
          <path d="M1.5 8h15" {...common} />
        </>
      ) : null}
      {name === "machine" ? (
        <>
          <rect x="5" y="5" width="8" height="8" rx="1.2" {...common} />
          <path d="M9 1.5V5M9 13v3.5M1.5 9H5M13 9h3.5" {...common} />
        </>
      ) : null}
    </g>
  );
}
