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
                Payments infrastructure beyond terrestrial assumptions
              </div>

              <h1 className="h1">
                Payments infrastructure
                <br />
                beyond terrestrial
                <br />
                assumptions
              </h1>

              <p className="p">
                A network-agnostic payments control plane built for hybrid,
                intermittent, and satellite-enabled connectivity — ensuring
                money moves when traditional systems fail.
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Govern funding, FX decision points, approvals, and payout release
                across markets — while execution runs through trusted local
                banks and licensed partners — without replacing your existing
                payroll, HR, or finance systems.
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Satellite-informed security, resilience, and accessibility
                strengthen critical control moments when infrastructure is
                degraded — without changing how money moves on familiar rails.
              </p>

              <div className="btnRow">
                <a className="btnPrimary" href="/#kyc">
                  Explore hybrid-network pilots
                </a>
                <a className="btnSecondary" href="/resources">
                  Download overview
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

          {/* THE PROBLEM — STATEMENT ONLY */}
          <div data-animate style={{ marginTop: 30 }}>
            <div
              className="panel"
              style={{
                maxWidth: 1040,
                margin: "0 auto",
                padding: "26px 32px",
              }}
            >
              <p
                className="p"
                style={{
                  margin: 0,
                  lineHeight: 1.65,
                  maxWidth: "none",
                  width: "100%",
                }}
              >
                <strong>
                  Most payment stacks assume always-on terrestrial connectivity.
                </strong>{" "}
                When networks degrade or disappear, payroll stalls, vendor
                payouts fail, approvals lose authority, and audit trails
                fragment. Payments are too critical to fail because a network
                did.
              </p>
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
                  Control plane
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Define policy, permissions, approvals, FX decision points, and
                  payment lifecycle states — with audit trails built for
                  regulated, mission-critical operations.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Execute via partners
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Route settlement through trusted local banks for domestic flows
                  and licensed partners for cross-border payouts — all under one
                  governed operating layer.
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
                  for predictable release and settlement even when execution is
                  delayed.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  FX & Treasury Controls
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Treat FX as a governed decision point: lock ahead of execution,
                  manage exposure, and improve predictability for payroll and
                  vendor runs across markets.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Approvals & Governance
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Policy-driven approvals, controlled release, and audit-grade
                  integrity guarantees — designed to remain authoritative under
                  degraded or constrained network conditions.
                </p>
              </div>
            </div>
          </div>

          {/* WHERE WE START */}
          <div data-animate style={{ marginTop: 18 }}>
            <div className="panel">
              <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                Designed for environments where failure isn’t acceptable
              </h3>
              <p className="p" style={{ margin: 0 }}>
                We’re starting where network assumptions already break — and the
                cost of failure is real.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  alignItems: "stretch",
                  marginTop: 14,
                }}
              >
                <div className="panel" style={{ margin: 0 }}>
                  <h3 className="balanceH3" style={{ marginBottom: 8 }}>
                    Maritime & Offshore Operations
                  </h3>
                  <p className="p" style={{ margin: 0 }}>
                    Payroll and vendor payments in environments with intermittent
                    connectivity by design.
                  </p>
                </div>

                <div className="panel" style={{ margin: 0 }}>
                  <h3 className="balanceH3" style={{ marginBottom: 8 }}>
                    Remote & Industrial Infrastructure
                  </h3>
                  <p className="p" style={{ margin: 0 }}>
                    Payments for energy, logistics, and remote worksites operating
                    beyond reliable terrestrial networks.
                  </p>
                </div>

                <div className="panel" style={{ margin: 0 }}>
                  <h3 className="balanceH3" style={{ marginBottom: 8 }}>
                    Disaster Recovery & Emergency Operations
                  </h3>
                  <p className="p" style={{ margin: 0 }}>
                    Critical disbursements when infrastructure is compromised or
                    unavailable.
                  </p>
                </div>

                <div className="panel" style={{ margin: 0 }}>
                  <h3 className="balanceH3" style={{ marginBottom: 8 }}>
                    Sensitive & Restricted Environments
                  </h3>
                  <p className="p" style={{ margin: 0 }}>
                    Operations that require continuity, auditability, and strict
                    controls under constrained or non-public network conditions.
                  </p>
                </div>
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
                maxWidth: 820,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p className="quoteText" style={{ marginBottom: 22 }}>
                “Modern PayEngine helped us govern payment release across
                markets, forecast FX exposure with confidence, and consolidate
                execution into a single operating layer.”
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
                  support — delivered with employer-grade controls, auditability,
                  and corridor-by-corridor rollout through Modern PayEngine.
                </p>

                <div className="balanceCtas">
                  <a className="btnSecondary" href="/balance">
                    Explore Balance
                  </a>
                  <a className="btnPrimary" href="/#kyc">
                    Join the pilot
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
