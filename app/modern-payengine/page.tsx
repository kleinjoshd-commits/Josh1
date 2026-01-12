import Image from "next/image";
import Nav from "../../components/Nav";

export default function ModernPayEnginePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HERO */}
          <div className="grid">
            <div>
              <div className="eyebrow">
                Employer payments infrastructure <span className="dot" />
                Modern PayEngine
              </div>

              <h1 className="h1">
                Payments control
                <br />
                for global execution
              </h1>

              <p className="p">
                Modern PayEngine is the control layer for enterprise payouts—governing
                funding, FX decisioning, approvals, and release across markets while
                execution runs through trusted local banks and licensed partners.
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Instead of stitching together multiple banks, inconsistent FX timing,
                and opaque settlement flows, Modern PayEngine centralizes decision
                authority and auditability—so finance teams gain predictability across
                borders without replacing payroll, HR, or finance systems.
              </p>

              <div className="btnRow">
                <a className="btnPrimary" href="/#kyc">
                  Learn more
                </a>
                <a className="btnSecondary" href="/trust-controls">
                  Trust & Controls
                </a>
              </div>
            </div>

            {/* UI-2 ONLY */}
            <div className="card">
              <div className="cardInner">
                <Image
                  src="/mpe-ui-2.png"
                  alt="Modern PayEngine control layer"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* CORE PANELS (tight, doctrine-aligned, fewer sections) */}
          <div style={{ marginTop: 40, display: "grid", gap: 14 }}>
            {/* CONTROL + FX + FUNDING */}
            <div className="kycGrid" style={{ marginTop: 0 }}>
              <div className="panel">
                <h3>Execution abstraction</h3>
                <p>
                  Modern PayEngine separates decision authority from execution mechanics.
                  Payments are governed once—then executed through the most appropriate
                  provider based on geography, compliance, availability, and policy.
                </p>
                <p style={{ marginTop: 10 }}>
                  By abstracting execution and integrating multiple partners, Modern
                  PayEngine reduces friction, cost, and latency across global payment
                  flows—without compromising control.
                </p>
              </div>

              <div className="panel">
                <h3>FX as a governed decision point</h3>
                <p>
                  FX is treated as a control checkpoint—not a background calculation.
                  Rates can be locked ahead of release so delivered amounts are known
                  before execution, improving predictability and reducing timing risk.
                </p>
              </div>

              <div className="panel">
                <h3>Funding & wallet pools</h3>
                <p>
                  Multi-currency wallet pools support prefunding and controlled release
                  across entities and corridors—improving treasury visibility while
                  keeping execution on familiar rails.
                </p>
              </div>

              <div className="panel">
                <h3>Explicit payment states</h3>
                <p>
                  Payments move through enforceable lifecycle states (Created → Approved →
                  Funded → Released → Settled), with audit trails and clear accountability
                  at every step.
                </p>
              </div>
            </div>

            {/* LOCAL + GLOBAL + RESILIENCE */}
            <div className="kycGrid" style={{ marginTop: 0 }}>
              <div className="panel">
                <h3>Local and global coverage</h3>
                <p>
                  For domestic settlement, Modern PayEngine can route through local
                  regulated banks. For cross-border payouts, it routes through licensed
                  execution partners—while keeping controls, approvals, and reporting
                  consistent across markets.
                </p>
              </div>

              <div className="panel">
                <h3>Resilience without workflow change</h3>
                <p>
                  Satellite-informed resilience can be selectively applied to critical
                  control events—supporting continuity and integrity when infrastructure
                  is degraded—without altering core workflows or payment rails.
                </p>
                <p style={{ marginTop: 10 }}>
                  <a className="btnSecondary" href="/satellite">
                    Satellite infrastructure
                  </a>
                </p>
              </div>
            </div>

            <div style={{ marginTop: 28, paddingTop: 6, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btnPrimary" href="/#kyc">
                Request a walkthrough
              </a>
              <a className="btnSecondary" href="/balance">
                See how workers experience payouts
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
