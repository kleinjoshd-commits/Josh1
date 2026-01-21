import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Resources | Modern PayEngine",
  description:
    "Operator notes on payment control planes: lifecycle governance, execution abstraction, FX decisioning, settlement models, and resilience.",
};

export default function ResourcesPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HEADER */}
          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 0.85fr)",
              alignItems: "start",
            }}
          >
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
                governed — lifecycle control, approvals, FX decisioning,
                execution abstraction, settlement models, and resilience.
                Written for finance, payroll, and payments teams who need
                predictability across markets without re-platforming their stack.
              </p>

              {/* POPULAR STARTING POINTS */}
              <div className="panel" style={{ marginTop: 16 }}>
                <h3 style={{ marginTop: 0 }}>Good places to start</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Begin with lifecycle governance, then explore execution
                  abstraction, FX governance, and settlement models.
                </p>

                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    className="btnSecondary"
                    href="/resources/payment-lifecycle"
                  >
                    Payment lifecycle
                  </Link>
                  <Link
                    className="btnSecondary"
                    href="/resources/execution-routing"
                  >
                    Execution abstraction
                  </Link>
                  <Link className="btnSecondary" href="/resources/fx-governed">
                    FX governance
                  </Link>
                  <Link
                    className="btnSecondary"
                    href="/resources/settlement-models"
                  >
                    Settlement models
                  </Link>
                  <Link className="btnSecondary" href="/trust-controls">
                    Trust & Controls
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What these resources cover</h3>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Control planes:</strong> authority, lifecycle state, and
                release governance
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Execution abstraction:</strong> routing across banks and
                licensed partners
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>FX governance:</strong> decision timing, approvals, and
                predictability
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Settlement models:</strong> domestic vs cross-border
                under one governed layer
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Resilience:</strong> continuity when network assumptions
                break
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
                Prefer a walkthrough? We’ll tailor these concepts to your payout
                corridors, approval model, and partners.
              </p>

              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/#kyc">
                  Request a walkthrough
                </Link>
              </div>
            </div>
          </div>

          {/* PRIMARY RESOURCE */}
          <div style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>
                Understanding the enterprise payment lifecycle
              </h3>

              <p className="p" style={{ marginTop: 10, maxWidth: "none" }}>
                <strong>
                  Most payment failures are not caused by rails or banks — they
                  are caused by unclear authority and implicit state.
                </strong>{" "}
                This resource explains how explicit, enforceable lifecycle
                states enable predictable, auditable global payouts — even as
                execution routes vary by market and provider.
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
                  Read the full resource
                </Link>
                <Link className="btnSecondary" href="/trust-controls">
                  Trust & Controls
                </Link>
              </div>
            </div>
          </div>

          {/* TOPIC GRID */}
          <div
            className="kycGrid"
            style={{ marginTop: 24, alignItems: "stretch" }}
          >
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Execution abstraction & routing</h3>
              <p className="p" style={{ marginTop: 10 }}>
                How separating decision authority from execution mechanics
                enables partner-level routing — reducing friction, cost, and
                latency while maintaining a single governed operating layer.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link
                  className="btnSecondary"
                  href="/resources/execution-routing"
                >
                  Read the resource
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>FX as a governed decision point</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Why FX timing matters more than “best rate,” and how locking and
                approval checkpoints improve predictability for payroll and
                vendor runs.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/resources/fx-governed">
                  Read the resource
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Local & global settlement models</h3>
              <p className="p" style={{ marginTop: 10 }}>
                A control-plane view of domestic vs cross-border settlement —
                routing through trusted local banks and licensed partners while
                keeping lifecycle controls consistent. Includes a WPS-aware view
                for Gulf payroll environments.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link
                  className="btnSecondary"
                  href="/resources/settlement-models"
                >
                  Read the resource
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>
                Resilience & trust (satellite-informed)
              </h3>
              <p className="p" style={{ marginTop: 10 }}>
                How resilience applies to payment control systems, and when
                satellite-informed assurance strengthens critical control events
                — without changing rails or workflows.
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
                How governed payout experiences extend to workers — faster
                access to earnings and remittance options — while employers
                retain oversight and compliance controls.
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
