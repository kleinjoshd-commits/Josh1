const LABEL =
  "A payment moves from a platform, through MPE, to licensed partners, then on to a bank, card, wallet, or machine.";

function Pulse({ path, begin }: { path: string; begin: string }) {
  return (
    <circle className="routePulse" r="3.5" fill="#16A86C">
      <animateMotion dur="5.2s" begin={begin} repeatCount="indefinite" path={path} />
    </circle>
  );
}

export default function RoutingDiagram() {
  return (
    <div className="routeDiagram">
      <svg className="routeDesktop" viewBox="0 0 840 280" role="img" aria-label={LABEL}>
        <title>{LABEL}</title>
        <DesktopLines />
        <Node x={8} y={108} w={132} h={64} label="Platform" />
        <Node x={196} y={108} w={116} h={64} label="MPE" hub />
        <Node x={392} y={16} w={176} h={52} label="Licensed partner" />
        <Node x={392} y={114} w={176} h={52} label="Licensed partner" />
        <Node x={392} y={212} w={176} h={52} label="Licensed partner" />
        <Node x={688} y={8} w={140} h={44} label="Bank" />
        <Node x={688} y={78} w={140} h={44} label="Card" />
        <Node x={688} y={156} w={140} h={44} label="Wallet" />
        <Node x={688} y={226} w={140} h={44} label="Machine" />
        <Pulse begin="0s" path="M140,140 H312 C352,140 364,42 392,42 H568 C640,42 650,30 688,30" />
        <Pulse begin="1.3s" path="M140,140 H312 H392 H568 C640,140 650,100 688,100" />
        <Pulse begin="2.6s" path="M140,140 H312 C352,140 364,238 392,238 H568 C630,238 650,178 688,178" />
        <Pulse begin="3.9s" path="M140,140 H312 C352,140 364,238 392,238 H568 C640,248 656,248 688,248" />
      </svg>

      <svg className="routeMobile" viewBox="0 0 360 520" role="img" aria-label={LABEL}>
        <title>{LABEL}</title>
        <MobileLines />
        <Node x={104} y={8} w={152} h={48} label="Platform" />
        <Node x={116} y={88} w={128} h={48} label="MPE" hub />
        <Node x={8} y={188} w={108} h={44} label="Partner" sub="Licensed" />
        <Node x={126} y={188} w={108} h={44} label="Partner" sub="Licensed" />
        <Node x={244} y={188} w={108} h={44} label="Partner" sub="Licensed" />
        <Node x={16} y={320} w={150} h={44} label="Bank" />
        <Node x={194} y={320} w={150} h={44} label="Card" />
        <Node x={16} y={400} w={150} h={44} label="Wallet" />
        <Node x={194} y={400} w={150} h={44} label="Machine" />
        <Pulse begin="0s" path="M180,56 V136 H62 V232 C62,280 91,300 91,320" />
        <Pulse begin="1.3s" path="M180,56 V232 C180,280 269,300 269,320" />
        <Pulse begin="2.6s" path="M180,56 V136 H298 V232 C298,310 91,360 91,400" />
        <Pulse begin="3.9s" path="M180,56 V136 H298 V232 C298,340 269,370 269,400" />
      </svg>
    </div>
  );
}

function DesktopLines() {
  const d = [
    "M140 140 H196",
    "M312 140 C352 140 364 42 392 42",
    "M312 140 H392",
    "M312 140 C352 140 364 238 392 238",
    "M568 42 C640 42 650 30 688 30",
    "M568 140 C640 140 650 100 688 100",
    "M568 238 C630 238 650 178 688 178",
    "M568 238 C640 248 656 248 688 248",
  ];
  return (
    <g fill="none" stroke="#16A86C" strokeWidth="1.25" opacity="0.55">
      {d.map((path) => (
        <path key={path} d={path} />
      ))}
    </g>
  );
}

function MobileLines() {
  const d = [
    "M180 56 V88",
    "M180 136 H62 V188",
    "M180 136 V188",
    "M180 136 H298 V188",
    "M62 232 C62 280 91 300 91 320",
    "M180 232 C180 280 269 300 269 320",
    "M298 232 C298 310 91 360 91 400",
    "M298 232 C298 340 269 370 269 400",
  ];
  return (
    <g fill="none" stroke="#16A86C" strokeWidth="1.25" opacity="0.55">
      {d.map((path) => (
        <path key={path} d={path} />
      ))}
    </g>
  );
}

function Node({
  x,
  y,
  w,
  h,
  label,
  sub,
  hub = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  hub?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        fill={hub ? "#10241C" : "#fff"}
        stroke={hub ? "#10241C" : "rgba(17,24,39,0.12)"}
      />
      {sub ? (
        <text
          x={x + w / 2}
          y={y + 17}
          textAnchor="middle"
          fill="#5E7568"
          fontSize="10"
          fontFamily="inherit"
        >
          {sub}
        </text>
      ) : null}
      <text
        x={x + w / 2}
        y={y + (sub ? 32 : h / 2 + 4)}
        textAnchor="middle"
        fill={hub ? "#F4F7F5" : "#14221C"}
        fontSize="13"
        fontWeight="600"
        fontFamily="inherit"
        letterSpacing="-0.01em"
      >
        {label}
      </text>
    </g>
  );
}
