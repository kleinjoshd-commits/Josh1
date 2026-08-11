import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Resources | MPE",
  description:
    "Infrastructure notes on payment control, provider-independent routing, FX governance, settlement models, and resilience.",
};

export default function ResourcesPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">RESOURCES</div>
          <h1>How modern payment control actually works</h1>
          <p className="ebSub">Operator-focused explanations of how enterprise payments are governed: lifecycle control, approvals, FX decisioning, provider-independent routing, and resilience. Written for finance, payroll, and payments teams who need predictability across markets without re-platforming their stack.</p>
        </div>
      </section>

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HEADER — RESPONSIVE (prevents left-gap weirdness on mobile) */}
          <div className="pageHeaderGrid">
            {/* LEFT */}
            <div>



              <div className="btnRow" style={{ marginTop: 18 }}>
                <Link className="btnPrimary" href="#kyc">
                  Request a walkthrough
                </Link>
                <Link className="btnSecondary" href="/solutions/os">
                  Explore MPE OS
                </Link>
              </div>
            </div>

            {/* RIGHT: AT-A-GLANCE */}
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How to use these</h3>

              <p className="p" style={{ marginTop: 10 }}>
                Short, operator-grade references you can share internally:
                governance, routing, FX timing, and settlement, written from a
                control-plane perspective.
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
                Each resource maps to an MPE control capability and
                includes practical implications for finance and operations.
              </p>
            </div>
          </div>

          {/* PRIMARY RESOURCE — FULL WIDTH */}
          <div style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>
                Understanding the enterprise payment lifecycle
              </h3>

              <p className="p" style={{ marginTop: 10, maxWidth: "none" }}>
                Most payment failures are not caused by rails or banks. They are
                caused by unclear authority, implicit state, and fragmented
                decision-making across systems. This resource explains how
                explicit, enforceable lifecycle states enable predictable,
                auditable global payouts, even as execution routes vary by market
                and provider.
              </p>

              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <Link className="btnPrimary" href="/resources/payment-lifecycle">
                  Read the resource
                </Link>
                <Link className="btnSecondary" href="/resources/execution-infrastructure">
                  Execution infrastructure
                </Link>
                <Link className="btnSecondary" href="/trust-controls">
                  Trust & Controls
                </Link>
              </div>
            </div>
          </div>

          {/* TOPICS */}
          <div className="kycGrid" style={{ marginTop: 24, alignItems: "stretch" }}>
            <Link
              className="panel"
              href="/resources/execution-infrastructure"
              style={{ textDecoration: "none", display: "block" }}
            >
              <h3 style={{ marginTop: 0 }}>Execution infrastructure</h3>
              <p className="p" style={{ marginTop: 10 }}>
                How MPE works with partner-connected execution infrastructure
                while keeping approvals, routing, FX, release authority, and
                visibility in one operating layer.
              </p>
              <div style={{ marginTop: 14 }}>
                <span className="btnSecondary" style={{ opacity: 0.95 }}>
                  Read
                </span>
              </div>
            </Link>

            <Link
              className="panel"
              href="/resources/execution-routing"
              style={{ textDecoration: "none", display: "block" }}
            >
              <h3 style={{ marginTop: 0 }}>Payment routing & provider independence</h3>
              <p className="p" style={{ marginTop: 10 }}>
                How separating decision authority from execution mechanics enables
                partner-level routing, reducing friction, cost, and latency
                while maintaining a single governed operating layer.
              </p>
              <div style={{ marginTop: 14 }}>
                <span className="btnSecondary" style={{ opacity: 0.95 }}>
                  Read
                </span>
              </div>
            </Link>

            <Link
              className="panel"
              href="/resources/fx-governed"
              style={{ textDecoration: "none", display: "block" }}
            >
              <h3 style={{ marginTop: 0 }}>FX as a governed decision point</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Why FX timing matters more than “best rate,” and how locking and
                approval checkpoints improve predictability for payroll and vendor
                runs.
              </p>
              <div style={{ marginTop: 14 }}>
                <span className="btnSecondary" style={{ opacity: 0.95 }}>
                  Read
                </span>
              </div>
            </Link>

            <Link
              className="panel"
              href="/resources/settlement-models"
              style={{ textDecoration: "none", display: "block" }}
            >
              <h3 style={{ marginTop: 0 }}>Local & global settlement models</h3>
              <p className="p" style={{ marginTop: 10 }}>
                A control-layer view of domestic vs cross-border settlement: routing
                through compliant local banks (including WPS contexts) and licensed
                partners while keeping governance consistent.
              </p>
              <div style={{ marginTop: 14 }}>
                <span className="btnSecondary" style={{ opacity: 0.95 }}>
                  Read
                </span>
              </div>
            </Link>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Resilience &amp; trust</h3>
              <p className="p" style={{ marginTop: 10 }}>
                How resilience applies to payment control systems, and how
                critical control events stay strong without changing rails or
                workflows.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/trust-controls">
                  Trust &amp; controls
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Worker experience</h3>
              <p className="p" style={{ marginTop: 10 }}>
                How governed payout experiences extend to workers, while
                employers retain oversight and licensed partner institutions
                provide the regulated services.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/solutions/workforce">
                  Explore MPE Workforce
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link className="btnPrimary" href="#kyc">
              Request a walkthrough
            </Link>
            <Link className="btnSecondary" href="/solutions/os">
              Explore MPE OS
            </Link>
            <Link className="btnSecondary" href="/unified-approach">
              Platform architecture
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
