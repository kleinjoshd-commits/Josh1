"use client";

import { useEffect, useId, useState, type ReactElement } from "react";

const PILL_LABEL: Record<string, string> = {
  route: "Smart Routing",
  payout: "Payouts",
  wallet: "Wallets",
  card: "Cards",
  identity: "Identity",
  machine: "Machine Payments",
};

type Item = {
  icon: string;
  title: string;
  body: string;
};

function RoutingStage() {
  const routes = [
    { name: "Route 1", picked: true, cost: "isFull", speed: "isMid", success: "isHigh" },
    { name: "Route 2", picked: false, cost: "isLow", speed: "isFull", success: "isMid" },
    { name: "Route 3", picked: false, cost: "isMid", speed: "isLow", success: "isFull" },
  ];
  return (
    <div className="capRoutes">
      {routes.map((route) => (
        <div key={route.name} className={route.picked ? "capRoute isPicked" : "capRoute"}>
          <div className="capRouteTop">
            <b>{route.name}</b>
            {route.picked ? <em className="capPick">Picked</em> : null}
          </div>
          <div className="capMeters">
            <span className={`capMeter ${route.picked ? "isLead" : ""} ${route.cost}`}>
              <i />
              Cost
            </span>
            <span className={`capMeter ${route.speed}`}>
              <i />
              Speed
            </span>
            <span className={`capMeter ${route.success}`}>
              <i />
              Success
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PayoutStage() {
  return (
    <div className="capPayout">
      <span className="capKicker">Payout</span>
      <div className="capDests">
        <b>Bank</b>
        <b>Debit card</b>
        <b>Wallet</b>
      </div>
      <em className="capDelivered">Delivered</em>
    </div>
  );
}

function MetalCard() {
  const raw = useId();
  const id = `chip${raw.replace(/:/g, "")}`;
  return (
    <div className="capPlastic">
      <span className="capSheen" aria-hidden="true" />
      <span className="capBrand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mpe-logo.png" alt="" width={1035} height={238} />
      </span>
      <svg className="capWave" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9 12.5c2.2 2 2.2 5 0 7" />
        <path d="M14 8.5c4.2 3.6 4.2 11.4 0 15" />
        <path d="M19 5c6 5.2 6 16.8 0 22" />
      </svg>
      <svg className="capEmv" viewBox="0 0 46 34" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3e2b0" />
            <stop offset="0.45" stopColor="#c9a15a" />
            <stop offset="1" stopColor="#8c6a32" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="44" height="32" rx="5" fill={`url(#${id})`} />
        <path d="M1 12h44M1 22h44M16 1v32M31 1v32" />
      </svg>
      <b className="capPan">•••• 4821</b>
    </div>
  );
}

function WalletStage() {
  return (
    <div className="capWallet">
      <div className="capDevice">
        <div className="capDeviceTop">Wallet</div>
        <div className="capDeviceBody">
          <strong>$2,480.00</strong>
          <span className="capHeld">Held at the issuing bank</span>
          <div className="capPassStack" aria-hidden="true">
            <div className="capPass capPassFar">
              <span>Pass</span>
            </div>
            <div className="capPass capPassNear">
              <span>Pass</span>
            </div>
            <div className="capPassFront">
              <MetalCard />
            </div>
          </div>
          <div className="capTap">
            <span className="capPulse" aria-hidden="true">
              <i />
              <i />
              <svg viewBox="0 0 32 32">
                <path d="M9 12.5c2.2 2 2.2 5 0 7" />
                <path d="M14 8.5c4.2 3.6 4.2 11.4 0 15" />
                <path d="M19 5c6 5.2 6 16.8 0 22" />
              </svg>
            </span>
            <b>Hold near reader</b>
          </div>
          <ul>
            <li>
              <span>Paid</span>
              <em>$40.00</em>
            </li>
            <li>
              <span>Paid</span>
              <em>$18.00</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CardStage() {
  return (
    <div className="capCardScene">
      <div className="capHandset" aria-hidden="true">
        <div className="capHandsetTop">Card</div>
        <div className="capHandsetScreen">
          <strong>$2,480.00</strong>
          <span className="capHeld">Held at the issuing bank</span>
          <div className="capControls">
            <span>Freeze</span>
            <span>Limits</span>
          </div>
        </div>
      </div>
      <div className="capCardFloat">
        <i className="capCardGlow" aria-hidden="true" />
        <MetalCard />
      </div>
    </div>
  );
}

function IdentityStage() {
  return (
    <div className="capId">
      <div className="capIdSteps">
        <span>Document</span>
        <span>Selfie</span>
      </div>
      <div className="capVerified">
        <svg className="capCheck" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="26" />
          <path d="M20 33.5 28 41.5 45 23" />
        </svg>
        <b>Verified</b>
      </div>
    </div>
  );
}

function MachineStage() {
  return (
    <div className="capMachine">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/built-machines-card.webp" alt="" width={1400} height={784} />
      <div className="capMachineChip">
        <span className="hpChip">MFAM</span>
        <b>$12.40</b>
        <em>Signed</em>
      </div>
    </div>
  );
}

const STAGES: Record<string, () => ReactElement> = {
  route: RoutingStage,
  payout: PayoutStage,
  wallet: WalletStage,
  card: CardStage,
  identity: IdentityStage,
  machine: MachineStage,
};

export default function CapabilitySwitch({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState(0);
  const [fine, setFine] = useState(false);
  const base = useId();
  const current = items[active] ?? items[0];
  const Stage = STAGES[current.icon] ?? RoutingStage;

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setFine(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <div className="capSwitch">
      <div className="capPills" role="tablist" aria-label="What MPE does">
        {items.map((item, index) => {
          const name = PILL_LABEL[item.icon] ?? item.title;
          const on = index === active;
          return (
            <button
              key={item.icon}
              type="button"
              role="tab"
              id={`${base}-tab-${index}`}
              aria-selected={on}
              aria-controls={`${base}-panel`}
              className={on ? "isOn" : undefined}
              onMouseEnter={() => {
                if (fine) setActive(index);
              }}
              onFocus={() => {
                if (fine) setActive(index);
              }}
              onClick={() => setActive(index)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div
        className="capStage"
        role="tabpanel"
        id={`${base}-panel`}
        aria-labelledby={`${base}-tab-${active}`}
        data-cap={current.icon}
      >
        <div className="capStageIn" key={current.icon}>
          <Stage />
        </div>
      </div>
    </div>
  );
}
