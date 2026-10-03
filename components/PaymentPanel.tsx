"use client";

import { useEffect, useState } from "react";

/**
 * One payment stays fully visible. Steps fill, Delivered holds, then the
 * next payment slides in. Reduced motion, and screenshot captures, stay
 * on a settled Delivered payment.
 */

const STEPS = ["Authorize", "Route", "Sign", "Delivered"] as const;

const PAYMENTS = [
  { amount: "$2,480.00", place: "Bank deposit", country: "United States", icon: "bank" },
  { amount: "€860.00", place: "Debit card push", country: "Germany", icon: "card" },
  { amount: "£420.00", place: "Wallet payout", country: "United Kingdom", icon: "wallet" },
  { amount: "MXN 12,400", place: "Cross-border", country: "Mexico", icon: "bank" },
  { amount: "$12.40", place: "Machine payment", country: "Singapore", icon: "machine" },
] as const;

const STEP_MS = 700;
const SETTLED_MS = 1500;

function Mark({ name }: { name: (typeof PAYMENTS)[number]["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "bank") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10 12 5l8 5" {...common} />
        <path d="M6 10.5V17M12 10.5V17M18 10.5V17M4 17.5h16" {...common} />
      </svg>
    );
  }
  if (name === "card") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" {...common} />
        <path d="M3 10h18" {...common} />
      </svg>
    );
  }
  if (name === "wallet") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 9.2h14.2A1.8 1.8 0 0 1 20 11v6.2a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 17.2V9.2z" {...common} />
        <path d="M4 9.2 6.4 6h9.4L18.2 9.2" {...common} />
        <circle cx="16.1" cy="13.4" r="1.15" {...common} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="8" width="8" height="8" rx="1.4" {...common} />
      <path d="M12 4.5V8M12 16v3.5M4.5 12H8M16 12h3.5" {...common} />
    </svg>
  );
}

export default function PaymentPanel() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(STEPS.length - 1);
  const [live, setLive] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const payment = PAYMENTS[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shot = document.documentElement.hasAttribute("data-shot");
    const apply = () => setLive(!media.matches && !shot);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!live) return;
    const wait = step === STEPS.length - 1 ? SETTLED_MS : STEP_MS;
    const id = window.setTimeout(() => {
      if (step < STEPS.length - 1) {
        setStep((n) => n + 1);
        return;
      }
      setLeaving(true);
      window.setTimeout(() => {
        setIndex((n) => (n + 1) % PAYMENTS.length);
        setStep(0);
        setLeaving(false);
      }, 340);
    }, wait);
    return () => window.clearTimeout(id);
  }, [live, step, index]);

  const settled = step === STEPS.length - 1 && !leaving;

  return (
    <aside
      className="payPanel"
      data-settled={settled ? "true" : "false"}
      aria-label={`${payment.place} to ${payment.country}, ${STEPS[step]}`}
    >
      <div className={leaving ? "payBody isLeaving" : "payBody"}>
        <p className="payAmount">{payment.amount}</p>
        <div className="payDest">
          <span className="payMark">
            <Mark name={payment.icon} />
          </span>
          <span className="payMeta">
            <b>{payment.place}</b>
            <small>{payment.country}</small>
          </span>
        </div>
        <ol className="paySteps">
          {STEPS.map((name, i) => (
            <li key={name} className={i <= step ? "isOn" : undefined} aria-current={i === step ? "step" : undefined}>
              <i />
              <span>{name}</span>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
