import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Trust & Controls | Modern PayEngine",
  description:
    "Payment authority, governance, and operational controls embedded across the global payment lifecycle.",
};

const panelTight = {
  padding: "18px 18px",
  // Let panels stretch naturally inside grids
  height: "auto" as const,
  minHeight: "unset" as const,
};

const listStyle = {
  marginTop: 12,
  marginBottom: 0,
  paddingLeft: 18,
} as const;

const grid2 = {
  display: "grid",
  gap: 14,
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  alignItems: "stretch",
} as const;

export default function TrustControlsPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="eyebrow">
            Platform foundations <span className="dot" />
            Payment authority, enforced
          </div>

          <h1 className="h1" style={{ marginBottom: 12 }}>
            Trust & controls
            <br />
            built into the lifecycle
          </h1>

          <p className="p" style={{ maxWidth: 900 }}>
            Modern PayEngine is the control layer for enterprise payments. We
            govern how payments are created, approved, funded, released, and
            confirmed—independently of how or where they are executed. This
            separation of decision authority from execution mechanics gives
            finance teams predictability, accountability, and flexibility across
            regulated markets.
          </p>

          {/* CORE DOCTRINE */}
          <div className="kycGrid" style={{ marginTop: 28, alignItems: "stretch" }}>
            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Explicit payment lifecycle</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Every payment moves through defined, enforceable states. These
                states are not UI labels—they are control points with policy,
                audit, and release consequences.
              </p>
              <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                <strong>Typical lifecycle:</strong> Created · Approved · Funded ·
                Released · Settled
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Policy-driven approvals</h3>
              <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                Approvals are governance controls, not permission toggles.
                Policies enforce who can initiate, approve, or release payments;
                thresholds by entity/corridor/counterparty; separation of duties;
                and exception handling—with complete audit trails.
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Execution abstraction</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Modern PayEngine separates decision authority from execution
                mechanics. Payments are governed once—then executed through local
                banks or licensed partners based on geography, compliance,
                availability, and policy.
              </p>
              <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                By abstracting execution and integrating multiple partners,
                Modern PayEngine reduces friction, cost, and latency across
                global payment flows—without compromising control.
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>FX as a governed decision point</h3>
              <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                FX is treated as a control checkpoint—not a background
                calculation. Rates can be locked ahead of execution, approved as
                part of policy, and audited independently of settlement to
                improve predictability and reduce timing risk.
              </p>
            </div>
          </div>

          {/* PRACTICE + RESILIENCE (2-up, fills space cleanly) */}
          <div style={{ marginTop: 18 }}>
            <div style={grid2}>
              <div className="panel" style={panelTight}>
                <h3 style={{ marginTop: 0 }}>What this unlocks in practice</h3>
                <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                  Because execution is abstracted behind a single control layer,
                  Modern PayEngine can optimize routing after approval—without
                  changing controls.
                </p>

                <ul className="p" style={listStyle}>
                  <li>Faster settlement by avoiding unnecessary intermediaries</li>
                  <li>Lower transaction and FX costs through partner-level routing</li>
                  <li>Fewer failed or delayed payments by routing around constraints</li>
                  <li>Add or change execution partners without retraining teams</li>
                </ul>
              </div>

              <div className="panel" style={panelTight}>
                <h3 style={{ marginTop: 0 }}>Resilience by design</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Modern PayEngine is built for change, not dependency. Controls
                  remain stable while execution adapts across providers and
                  conditions. Satellite-informed resilience can be selectively
                  applied to critical control events to support continuity and
                  integrity when infrastructure is degraded—without altering core
                  workflows or payment rails.
                </p>

                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/satellite">
                    Satellite infrastructure
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link className="btnSecondary" href="/unified-approach">
              Platform architecture
            </Link>
            <Link className="btnPrimary" href="/#kyc">
              Request a walkthrough
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
