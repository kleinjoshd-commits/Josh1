/**
 * Illustrative payment on the film. One step is visible at a time.
 * Reduced motion shows a settled payment and does not animate.
 */

const STEPS = ["Authorize", "Route", "Sign", "Delivered"] as const;

const PAYMENTS = [
  { amount: "$2,480.00", place: "Bank deposit", code: "US", icon: "bank" },
  { amount: "€860.00", place: "Debit card push", code: "DE", icon: "card" },
  { amount: "£420.00", place: "Wallet payout", code: "GB", icon: "wallet" },
  { amount: "MXN 12,400", place: "Local account", code: "MX", icon: "account" },
  { amount: "$12.40", place: "Machine payment", code: "SG", icon: "machine" },
] as const;

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
  if (name === "account") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" {...common} />
        <path d="M8 9h8M8 13h5" {...common} />
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

function Face({
  step,
  amount,
  place,
  code,
  icon,
  index,
}: {
  step: string;
  amount: string;
  place: string;
  code: string;
  icon: (typeof PAYMENTS)[number]["icon"];
  index: number;
}) {
  const stepIndex = STEPS.indexOf(step as (typeof STEPS)[number]);
  return (
    <div className="payFace" style={{ animationDelay: `${index * 1.15}s` }}>
      <div className="payStep">
        <span>{step}</span>
        <i aria-hidden="true">
          {STEPS.map((name, i) => (
            <b key={name} className={i <= stepIndex ? "isOn" : undefined} />
          ))}
        </i>
      </div>
      <p className="payAmount">{amount}</p>
      <div className="payDest">
        <span className="payMark">
          <Mark name={icon} />
        </span>
        <span>{place}</span>
        <span className="payCode">{code}</span>
      </div>
    </div>
  );
}

export default function PaymentPanel() {
  const faces = PAYMENTS.flatMap((payment) => STEPS.map((step) => ({ ...payment, step })));

  return (
    <aside className="payPanel" aria-label="Example payment moving through MPE">
      <div className="payStill" aria-hidden="true">
        <Face step="Delivered" {...PAYMENTS[0]} index={0} />
      </div>
      <div className="payStage">
        {faces.map((face, index) => (
          <Face key={`${face.place}-${face.step}`} {...face} index={index} />
        ))}
      </div>
    </aside>
  );
}
