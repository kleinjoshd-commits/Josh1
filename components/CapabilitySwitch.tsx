"use client";

import { useId, useState } from "react";
import LineIcon from "./LineIcon";

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

export default function CapabilitySwitch({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState(0);
  const base = useId();
  const current = items[active] ?? items[0];
  const label = PILL_LABEL[current.icon] ?? current.title;

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
              tabIndex={on ? 0 : -1}
              className={on ? "isOn" : undefined}
              onClick={() => setActive(index)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div
        className="capPanel"
        role="tabpanel"
        id={`${base}-panel`}
        aria-labelledby={`${base}-tab-${active}`}
      >
        <LineIcon name={current.icon} />
        <div>
          <strong>
            {label}
            {current.icon === "machine" ? <span className="hpChip">MFAM</span> : null}
          </strong>
          <p>{current.body}</p>
        </div>
      </div>
    </div>
  );
}
