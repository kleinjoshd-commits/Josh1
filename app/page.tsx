import Image from "next/image";
import Nav from "../components/Nav";
import KycForm from "../components/KycForm";

export default function Home() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="grid">
            <div>
              <div className="eyebrow">
                Modern PayEngine + Balance <span className="dot" />
                Payments control + resilience layer
              </div>

              <h1 className="h1">
                Enterprise payments
                <br />
                control & resilience
                <br />
                across global markets
              </h1>

              <p className="p">
                Govern funding, FX decisions, approvals, and payout release across
                markets — while execution runs through trusted local banks and
                licensed partners — without replacing your existing payroll, HR,
                or finance systems.
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Satellite-informed security, resilience, and accessibility
                strengthen critical control moments when infrastructure is
                degraded — without changing how money moves on familiar rails.
              </p>

              <div className="btnRow">
                <a className="btnPrimary" href="/#kyc">
                  Request a walkthrough
                </a>
                <a className="btnSecondary" href="/modern-payengine">
                  Explore the platform
                </a>
              </div>
            </div>

            {/* HOME UI (DESKTOP ONLY) */}
            <div className="card hideOnMobile">
              <div className="cardInner">
                <Image
                  src="/mpe-ui.png"
                  alt="Modern PayEngine platform interface"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* HOW IT WORKS: CONTROL → EXECUTE → OUTLAST */}
          <div data-animate style={{ marginTop: 22 }}>
            <div
              style={{
                display: "grid",
                gap: 14,
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                alignItems: "stretch",
              }}
            >
              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Control layer
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Define policy, permissions, approvals, FX decision points, and
                  payment lifecycle states — with audit trails built for regulated
                  operations.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Execute via partners
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Route execution through trusted local banks for domestic
                  settlement and licensed partners for cross-border payouts — all
                  under one governed operating layer.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Outlast networks
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Satellite-informed resilience supports continuity and
                  out-of-band assurance when connectivity is unreliable — helping
                  critical control events remain authoritative under stress.
                </p>
              </div>
            </div>
          </div>

          {/* PLATFORM PILLARS */}
          <div data-animate style={{ marginTop: 18 }}>
            <div
              style={{
                display: "grid",
                gap: 14,
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                alignItems: "stretch",
              }}
            >
              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Funding & Wallets
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Centralized multi-currency wallet pools with real-time
                  visibility and control across entities and regions — designed
                  for predictable release and settlement.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  FX & Treasury Controls
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Treat FX as a governed decision point: lock ahead of execution,
                  manage exposure, and improve predictability for payroll and
                  vendor runs.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Approvals & Governance
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Policy-driven approvals, audit trails, controlled release, and
                  stronger integrity guarantees — with satellite-informed options
                  for high-value or degraded environments.
                </p>
              </div>
            </div>
          </div>

          {/* CFO QUOTE */}
          <div
            className="quoteWrap"
            data-animate
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            <div
              className="panel quotePanel"
              style={{
                padding: "16px 26px 22px",
                maxWidth: 800,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p className="quoteText" style={{ marginBottom: 22 }}>
                “Modern PayEngine helped us compress receivables and payables,
                forecast FX exposure with confidence, and consolidate payments
                into a single, more efficient operating layer.”
              </p>

              <div className="quoteAuthor">
                — Chief Financial Officer, Global Travel Agency
              </div>
            </div>
          </div>

          {/* BALANCE — HOME FEATURE */}
          <div style={{ marginTop: 34 }}>
            <div className="panel balancePanel">
              <div className="balanceText">
                <h3 className="balanceH3">
                  Employee pay & remittance — governed through Modern PayEngine
                </h3>

                <p className="p" style={{ marginTop: 12 }}>
                  Faster access to earnings, international remittance, and family
                  support — with employer-grade controls, auditability, and
                  corridor-by-corridor rollout through Modern PayEngine.
                </p>

                <div className="balanceCtas">
                  <a className="btnSecondary" href="/balance">
                    Explore Balance
                  </a>
                  <a className="btnPrimary" href="/#kyc">
                    Learn more
                  </a>
                </div>
              </div>

              {/* MOCKUP (DESKTOP ONLY) */}
              <div className="balanceMock hideOnMobile">
                <Image
                  src="/balance-ui.png"
                  alt="Balance employee pay interface"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARN MORE */}
      <KycForm />
    </main>
  );
}
