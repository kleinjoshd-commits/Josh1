"use client";

import { Fragment, useEffect, useState } from "react";

const TABS = [
  { id: "payouts", label: "Payouts", dest: "Bank" },
  { id: "wallets", label: "Wallets", dest: "Wallet" },
  { id: "cards", label: "Cards", dest: "Card" },
  { id: "identity", label: "Identity", dest: "" },
  { id: "machines", label: "Machines", dest: "Machine" },
] as const;

const FACTORS = ["Success", "Speed", "Cost"] as const;
const DESTS = ["Bank", "Card", "Wallet", "Cross-border", "Machine"] as const;

const ROWS = [
  { name: "Bank deposit", amount: "$2,480.00" },
  { name: "Debit card push", amount: "€860.00" },
  { name: "Wallet payout", amount: "£420.00" },
  { name: "Cross-border", amount: "MXN 12,400" },
  { name: "Machine payment", amount: "$12.40" },
] as const;

const STATES = ["Initiated", "Routed", "Signed", "Delivered"] as const;

type Box = { x: number; y: number; w: number; h: number };

const platform: Box = { x: 8, y: 138, w: 132, h: 56 };
const verify: Box = { x: 164, y: 24, w: 128, h: 48 };
const mpe: Box = { x: 324, y: 126, w: 128, h: 80 };
const routeBoxes: Box[] = [
  { x: 516, y: 20, w: 158, h: 48 },
  { x: 516, y: 142, w: 158, h: 48 },
  { x: 516, y: 264, w: 158, h: 48 },
];
const destBoxes: Box[] = DESTS.map((_, index) => ({
  x: 832,
  y: 8 + index * 64,
  w: 172,
  h: 44,
}));

const right = (b: Box) => b.x + b.w;
const midY = (b: Box) => b.y + b.h / 2;
const midX = (b: Box) => b.x + b.w / 2;

function link(x1: number, y1: number, x2: number, y2: number) {
  const bend = (x2 - x1) / 2;
  return `M${x1} ${y1} C${x1 + bend} ${y1} ${x2 - bend} ${y2} ${x2} ${y2}`;
}

function drop(x1: number, y1: number, x2: number, y2: number) {
  const bend = (y2 - y1) / 2;
  return `M${x1} ${y1} C${x1} ${y1 + bend} ${x2} ${y2 - bend} ${x2} ${y2}`;
}

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
  const identity = active.id === "identity";
  const destIndex = DESTS.indexOf(active.dest as (typeof DESTS)[number]);
  const mobileSteps = identity
    ? ["Platform", "Verify", "MPE"]
    : ["Platform", "MPE", "Scores every route", active.dest];

  const platformToMpe = link(right(platform), midY(platform), mpe.x, midY(mpe));
  const platformToVerify = drop(midX(platform), platform.y, midX(verify), verify.y + verify.h);
  const verifyToMpe = drop(midX(verify), verify.y + verify.h, midX(mpe), mpe.y);

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

      <svg
        className="routeDesktop"
        viewBox="0 0 1012 328"
        role="img"
        aria-label={
          identity
            ? "Identity: platform to verify, then MPE."
            : `${active.label}: platform to MPE, scores every route, then ${active.dest}.`
        }
      >
        <title>
          {identity ? "Identity. Verify. MPE." : `${active.label}. Scores every route. ${active.dest}.`}
        </title>
        <Connector d={platformToMpe} on={!identity} />
        <Connector d={platformToVerify} on={identity} />
        <Connector d={verifyToMpe} on={identity} />
        {routeBoxes.map((box, index) => (
          <Connector
            key={FACTORS[index]}
            d={link(right(mpe), midY(mpe), box.x, midY(box))}
            on={!identity}
          />
        ))}
        {!identity
          ? destBoxes.map((box, index) => (
              <Connector
                key={DESTS[index]}
                d={link(right(routeBoxes[1]), midY(routeBoxes[1]), box.x, midY(box))}
                on={index === destIndex}
              />
            ))
          : null}
        <Node box={platform} label="Platform" on />
        <Node box={verify} label="Verify" on={identity} />
        <Node box={mpe} label="MPE" on hub />
        {FACTORS.map((factor, index) => (
          <Node key={factor} box={routeBoxes[index]} label={factor} on={!identity} />
        ))}
        {DESTS.map((dest, index) => (
          <Node key={dest} box={destBoxes[index]} label={dest} on={!identity && dest === active.dest} />
        ))}
      </svg>

      <ol className="routeMobile" aria-label={identity ? "Identity path" : `${active.label} path`}>
        {mobileSteps.map((label, index) => (
          <Fragment key={label}>
            {index > 0 ? <li className="routeJoin" aria-hidden="true" /> : null}
            <li className="routeStop isOn">{label}</li>
          </Fragment>
        ))}
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

function Connector({ d, on }: { d: string; on: boolean }) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={on ? "#7DFFC3" : "rgba(125,255,195,0.2)"}
        strokeWidth={on ? 2.4 : 1.4}
        strokeLinecap="round"
      />
      {on ? (
        <path
          d={d}
          fill="none"
          stroke="#ffffff"
          strokeWidth={2.6}
          strokeLinecap="round"
          className="routeFlow"
          pathLength={100}
        />
      ) : null}
    </g>
  );
}

function Node({ box, label, on, hub }: { box: Box; label: string; on: boolean; hub?: boolean }) {
  return (
    <g opacity={on ? 1 : 0.38}>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={14}
        fill={hub ? "rgba(14,124,80,0.95)" : "rgba(255,255,255,0.06)"}
        stroke={on ? "rgba(125,255,195,0.75)" : "rgba(255,255,255,0.14)"}
      />
      <text
        x={box.x + box.w / 2}
        y={box.y + box.h / 2 + 5}
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
