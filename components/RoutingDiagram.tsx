"use client";

import { useEffect, useState } from "react";

const TABS = [
  { id: "payouts", label: "Payouts", route: "Best route", dest: "Bank" },
  { id: "wallets", label: "Wallets", route: "Fastest", dest: "Wallet" },
  { id: "cards", label: "Cards", route: "Lowest cost", dest: "Card" },
  { id: "identity", label: "Identity", route: "Best route", dest: "Identity" },
  { id: "machines", label: "Machines", route: "Fastest", dest: "Machine" },
] as const;

const ROUTES = ["Best route", "Fastest", "Lowest cost"] as const;
const DESTS = ["Bank", "Card", "Wallet", "Identity", "Machine"] as const;

const ROWS = [
  { name: "Bank deposit", amount: "$2,480.00" },
  { name: "Debit card push", amount: "€860.00" },
  { name: "Wallet payout", amount: "£420.00" },
  { name: "Local account", amount: "MXN 12,400" },
  { name: "Machine payment", amount: "$12.40" },
] as const;

const STATES = ["Initiated", "Routed", "Signed", "Delivered"] as const;

export default function RoutingDiagram() {
  const [tab, setTab] = useState(0);
  const [tick, setTick] = useState(0);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!motion) return;
    const id = window.setInterval(() => {
      setTick((n) => n + 1);
      setTab((n) => (n + 1) % TABS.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [motion]);

  const active = TABS[tab];

  return (
    <div className="routeBoard">
      <div className="routeTabs" role="tablist" aria-label="What is moving">
        {TABS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === tab}
            className={index === tab ? "isOn" : undefined}
            onClick={() => setTab(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <svg className="routeDesktop" viewBox="0 0 980 300" role="img" aria-label={`${active.label}: platform to MPE, then ${active.route}, then ${active.dest}.`}>
        <title>{`${active.label}. ${active.route}. ${active.dest}.`}</title>
        <Path d="M150 150 H250" on={true} />
        {ROUTES.map((route, index) => {
          const y = 58 + index * 92;
          const on = route === active.route;
          return <Path key={route} d={`M390 150 C450 150 470 ${y} 520 ${y}`} on={on} />;
        })}
        {DESTS.map((dest, index) => {
          const y = 36 + index * 52;
          const on = dest === active.dest;
          const from = ROUTES.indexOf(active.route as (typeof ROUTES)[number]);
          const routeY = 58 + from * 92;
          return <Path key={dest} d={`M680 ${routeY} C740 ${routeY} 760 ${y + 16} 800 ${y + 16}`} on={on} />;
        })}
        <Node x={16} y={118} w={134} h={64} label="Platform" on />
        <Node x={250} y={114} w={140} h={72} label="MPE" on hub />
        {ROUTES.map((route, index) => (
          <Node key={route} x={520} y={32 + index * 92} w={160} h={52} label={route} on={route === active.route} />
        ))}
        {DESTS.map((dest, index) => (
          <Node key={dest} x={800} y={20 + index * 52} w={164} h={40} label={dest} on={dest === active.dest} />
        ))}
      </svg>

      <ol className="routeMobile" aria-label={`${active.label} path`}>
        <li className="isOn">Platform</li>
        <li className="isOn">MPE</li>
        <li className="isOn">{active.route}</li>
        <li className="isOn">{active.dest}</li>
      </ol>

      <ul className="routeFeed" aria-label="Payments moving">
        {ROWS.map((row, index) => {
          const state = motion ? STATES[(tick + index) % STATES.length] : "Delivered";
          return (
            <li key={row.name}>
              <span className={state === "Delivered" ? "isDone" : undefined}>{state}</span>
              <b>{row.name}</b>
              <em>{row.amount}</em>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Path({ d, on }: { d: string; on: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={on ? "#7DFFC3" : "rgba(125,255,195,0.16)"}
      strokeWidth={on ? 2.2 : 1.2}
      className={on ? "routeFlow" : undefined}
      pathLength={100}
    />
  );
}

function Node({
  x,
  y,
  w,
  h,
  label,
  on,
  hub,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  on: boolean;
  hub?: boolean;
}) {
  return (
    <g opacity={on ? 1 : 0.38}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        fill={hub ? "rgba(14,124,80,0.95)" : "rgba(255,255,255,0.06)"}
        stroke={on ? "rgba(125,255,195,0.7)" : "rgba(255,255,255,0.12)"}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 5}
        textAnchor="middle"
        fill="#f7f8f6"
        fontSize={label.length > 12 ? 13 : 15}
        fontFamily="inherit"
        fontWeight={600}
      >
        {label}
      </text>
    </g>
  );
}
