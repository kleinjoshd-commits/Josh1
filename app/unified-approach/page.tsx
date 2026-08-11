import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Platform Architecture | MPE",
  description:
    "One control plane for payments end to end: funding, FX, approvals and release governed centrally, with execution through licensed partners.",
};

export default function UnifiedApproachPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">PLATFORM ARCHITECTURE</div>
          <h1>One control plane. Payments end to end.</h1>
          <p className="ebSub">MPE governs the decisions that matter: funding, FX decision points, approvals, and payout authorization. Execution routes through trusted local banks and licensed partners. Embed MPE where it adds the most control, or run it as the central operating layer across the stack.</p>
        </div>
      </section>

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HEADER, RESPONSIVE GRID */}
          <div className="pageHeaderGrid">
            {/* LEFT: NARRATIVE */}
            <div>



              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                This is a layered architecture: a single governed operating
                layer above execution, with worker-experience and resilience
                capabilities available wherever the operating environment
                demands stronger continuity and assurance.
              </p>

              <div className="btnRow" style={{ marginTop: 18 }}>
                <Link className="btnPrimary" href="#kyc">
                  Talk to us
                </Link>
                <Link className="btnSecondary" href="/solutions/os">
                  Explore MPE OS
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
                <strong>Worker layer:</strong> the MPE app and assisted
                enrollment, the owned relationship
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Resilience layer:</strong> assurance for degraded and
                constrained environments
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
                Designed for regulated, mission-critical operations, including
                environments where connectivity is intermittent,
                constrained, or degraded.
              </p>
            </div>
          </div>

          {/* LAYERED ARCHITECTURE GRID */}
          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>1) Deploy where it adds the most value</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE can be layered into the workflows, providers, and rails
                where you need more control and visibility.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                Or use MPE as a unified operating stack for orchestration,
                governance, and execution oversight across the full payment
                environment.
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
                Extend the programme to the workforce itself: corridor-by-corridor
                rollout with employer-grade controls, with money transfer and
                payment services provided by licensed partner institutions,
                without changing the enterprise operating model.
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
                Resilience engineering strengthens critical control moments
                (approvals, authorization, and release) so decision authority can persist
                when infrastructure is degraded, congested, or unavailable.
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
            <Link className="btnPrimary" href="#kyc">
              Talk to us
            </Link>
            <Link className="btnSecondary" href="/trust-controls">
              Trust & controls
            </Link>
          </div>

          <div style={{ height: 40 }} />
        </div>
      </section>
    </main>
  );
}
