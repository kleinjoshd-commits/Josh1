import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Resources | Modern PayEngine",
  description:
    "Infrastructure notes on payment control, execution abstraction, FX governance, settlement models, and resilience.",
};

export default function ResourcesPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HEADER — RESPONSIVE (prevents left-gap weirdness on mobile) */}
          <div className="pageHeaderGrid">
            {/* LEFT */}
            <div>
              <div className="eyebrow">
                Resources <span className="dot" />
                Reference notes for finance & operations
              </div>

              <h1 className="h1" style={{ marginBottom: 12 }}>
                How modern payment control
                <br />
                actually works
              </h1>

              <p className="p" style={{ maxWidth: 900 }}>
                Operator-focused explanations of how enterprise payments are
                governed—lifecycle control, approvals, FX decisioning, execution
                abstraction, and resilience. Written for finance, payroll, and
                payments teams who need predictability across markets without
                re-platforming their stack.
              </p>

              <div className="btnRow" style={{ marginTop: 18 }}>
                <Link className="btnPrimary" href="/#kyc">
                  Request a walkthrough
                </Link>
                <Link className="btnSecondary" href="/modern-payengine">
                  Explore Modern PayEngine
                </Link>
              </div>
            </div>

            {/* RIGHT: AT-A-GLANCE */}
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How to use these</h3>

              <p className="p" style={{ marginTop: 10 }}>
                Short, operator-grade references you can share internally:
                governance, routing, FX timing, and settlement—written from a
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
                Each resource maps to a Modern PayEngine control capability and
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
                Most payment failures are not caused by rails or banks — they are
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
              href="/resources/execution-routing"
              style={{ textDecoration: "none", display: "block" }}
            >
              <h3 style={{ marginTop: 0 }}>Execution abstraction & routing</h3>
              <p className="p" style={{ marginTop: 10 }}>
                How separating decision authority from execution mechanics enables
                partner-level routing — reducing friction, cost, and latency
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
                A control-layer view of domestic vs cross-border settlement — routing
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
              <h3 style={{ marginTop: 0 }}>
                Resilience & trust (satellite-informed)
              </h3>
              <p className="p" style={{ marginTop: 10 }}>
                How resilience applies to payment control systems, and when
                satellite-informed capabilities strengthen critical control
                events—without changing rails or workflows.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/satellite">
                  Satellite infrastructure
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Worker experience (Balance)</h3>
              <p className="p" style={{ marginTop: 10 }}>
                How governed payout experiences extend to workers—faster access
                to earnings and remittance options—while employers retain
                oversight and compliance controls.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/balance">
                  Explore Balance
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
            <Link className="btnPrimary" href="/#kyc">
              Request a walkthrough
            </Link>
            <Link className="btnSecondary" href="/modern-payengine">
              Explore Modern PayEngine
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
