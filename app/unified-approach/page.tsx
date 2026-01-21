import Nav from "../../components/Nav";
import Link from "next/link";

export default function UnifiedApproachPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HEADER — RESPONSIVE GRID */}
          <div className="pageHeaderGrid">
            {/* LEFT: NARRATIVE */}
            <div>
              <div className="eyebrow">
                Platform architecture <span className="dot" />
                Unified control plane
              </div>

              <h1 className="h1" style={{ marginBottom: 12 }}>
                One control plane.
                <br />
                Payments end to end.
              </h1>

              <p className="p" style={{ maxWidth: 860 }}>
                Modern PayEngine governs the decisions that matter — funding, FX
                decision points, approvals, and payout authorization — while
                execution routes through trusted local banks and licensed
                partners. You keep your ERP, HRIS, and payroll inputs exactly as
                they are.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                This is a layered architecture: a single governed operating
                layer above execution, with wallet and resilience capabilities
                available wherever the operating environment demands stronger
                continuity and assurance.
              </p>

              <div className="btnRow" style={{ marginTop: 18 }}>
                <Link className="btnPrimary" href="/#kyc">
                  Explore hybrid-network pilots
                </Link>
                <Link className="btnSecondary" href="/modern-payengine">
                  Explore Modern PayEngine
                </Link>
                <Link className="btnSecondary" href="/balance">
                  Explore Balance
                </Link>
              </div>
            </div>

            {/* RIGHT: AT-A-GLANCE PANEL */}
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Architecture at a glance</h3>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Inputs:</strong> ERP / HRIS / Payroll
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Control plane:</strong> funding + FX + approvals + release
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Execution:</strong> local banks + licensed partners
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Wallet layer:</strong> Balance (worker access + remittance)
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Resilience layer:</strong> satellite-informed assurance
              </p>

              <div
                style={{
                  height: 1,
                  opacity: 0.12,
                  margin: "14px 0",
                  background: "currentColor",
                }}
              />

              <p className="p" style={{ margin: 0 }}>
                Designed for regulated, mission-critical operations — including
                environments where terrestrial connectivity is intermittent,
                constrained, or degraded.
              </p>
            </div>
          </div>

          {/* LAYERED ARCHITECTURE GRID */}
          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>1) Keep enterprise systems in place</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Maintain existing ERP, HRIS, and payroll workflows. Modern PayEngine
                integrates alongside your stack to add governance and control over
                payment execution — without forcing a rip-and-replace.
              </p>
            </div>

            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>2) Govern payment decisions centrally</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Define policy and permissions, maker-checker approvals, FX decision
                points, lifecycle states, and controlled release. Maintain audit-grade
                visibility across regions, entities, and payout corridors.
              </p>
            </div>

            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>3) Route execution through the right rail</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Settle through trusted local banks for domestic flows and licensed
                partners for cross-border payouts. Stay provider-agnostic while
                operating through a single governed layer.
              </p>
            </div>

            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>4) Extend to workers when it drives outcomes</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Add Balance for worker access and remittance: faster access to earnings,
                corridor-by-corridor rollout, and employer-grade controls — without
                changing the enterprise operating model.
              </p>
            </div>

            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>
                5) Strengthen integrity where assurance matters
              </h3>
              <p className="p" style={{ marginTop: 10 }}>
                Apply additional trust controls for higher-risk flows: stronger integrity
                guarantees, clearer authorization, and tighter auditability for sensitive
                operating environments.
              </p>
            </div>

            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>6) Outlast networks without changing rails</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-informed resilience strengthens critical control moments —
                approvals, authorization, and release — so decision authority can persist
                when terrestrial infrastructure is degraded, congested, or unavailable.
              </p>
            </div>
          </div>

          {/* CTA FOOTER */}
          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link className="btnPrimary" href="/#kyc">
              Explore hybrid-network pilots
            </Link>
            <Link className="btnSecondary" href="/trust-controls">
              Trust & controls
            </Link>
            <Link className="btnSecondary" href="/satellite">
              Satellite resilience
            </Link>
          </div>

          <div style={{ height: 40 }} />
        </div>
      </section>
    </main>
  );
}
