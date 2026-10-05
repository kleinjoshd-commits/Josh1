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

function WalletStage() {
  return (
    <div className="capWallet">
      <div className="capDevice">
        <div className="capDeviceTop">Wallet</div>
        <div className="capDeviceBody">
          <strong>$2,480.00</strong>
          <span className="capHeld">Held at the issuing bank</span>
          <ul>
            <li>
              <span>Paid</span>
              <em>$40.00</em>
            </li>
            <li>
              <span>Paid</span>
              <em>$18.00</em>
            </li>
            <li>
              <span>Paid</span>
              <em>$6.00</em>
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
        <i />
        <b />
      </div>
      <div className="capPlastic">
        <span>MPE</span>
        <b>Spend controls</b>
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
