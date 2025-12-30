import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Trust & Controls | Modern PayEngine",
  description:
    "Trust, governance, and operational controls embedded across the global payment lifecycle.",
};

const panelTight = {
  padding: "18px 18px",
  height: "auto" as const,
  minHeight: "unset" as const,
  alignSelf: "flex-start" as const,
};

export default function TrustControlsPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="eyebrow">
            Platform foundations <span className="dot" />
            Trust and governance
          </div>

          <h1 className="h1" style={{ marginBottom: 12 }}>
            Trust & controls
            <br />
            built into the lifecycle
          </h1>

          <p className="p" style={{ maxWidth: 900 }}>
            Modern PayEngine is designed for payment environments where control,
            predictability, and accountability matter. Trust and controls are
            embedded across the lifecycle—so teams can govern authorization, FX
            decisions, and transaction release across markets without changing how
            they operate.
          </p>

          {/* CORE CONTROLS (Satellite-style boxes) */}
          <div className="kycGrid" style={{ marginTop: 28, alignItems: "start" }}>
            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Governed lifecycle</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Payments move through defined states—so intent, timing, and release
                are clear and reviewable at each stage.
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Explicit transaction states</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Created · FX locked · Pending approval · Scheduled · Released ·
                Settled · Reconciled
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Roles & approvals</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Role-based controls support review and approval workflows aligned
                to internal policies and operational requirements.
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>FX decision governance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                FX is treated as a deliberate decision point—governed, recorded,
                and aligned to treasury intent before execution.
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Auditability</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Lifecycle events and approvals are observable to support reporting,
                reconciliation, and internal review across markets.
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Exceptions without losing control</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Adjustments and exceptions can be handled while maintaining
                governance—so teams can respond to real-world conditions.
              </p>
            </div>
          </div>

          {/* EXECUTION + RESILIENCE (2-up like Satellite product application) */}
          <div className="kycGrid" style={{ marginTop: 18, alignItems: "start" }}>
            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Execution abstraction</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Payment execution and wallet services are delivered through
                integrated, regulated partner platforms. Modern PayEngine governs
                authorization, decision points, and lifecycle management
                independently of the underlying execution provider.
              </p>
            </div>

            <div className="panel" style={panelTight}>
              <h3 style={{ marginTop: 0 }}>Optional resilience layers</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-enabled infrastructure can be introduced as an optional
                trust and continuity layer—supporting availability and integrity in
                distributed or degraded environments without altering core workflows.
              </p>
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
