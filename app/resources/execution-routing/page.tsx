import Nav from "../../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Execution Abstraction & Routing | Modern PayEngine",
  description:
    "How separating decision authority from execution enables partner-level routing without breaking governance, auditability, or control.",
};

export default function ExecutionAbstractionResource() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HEADER — RESPONSIVE GRID */}
          <div className="pageHeaderGrid">
            {/* LEFT */}
            <div>
              <div className="eyebrow">
                Resources <span className="dot" />
                Execution abstraction
              </div>

              <h1 className="h1" style={{ marginBottom: 12 }}>
                Execution abstraction
                <br />
                & routing
              </h1>

              <p className="p" style={{ maxWidth: 980 }}>
                Most enterprise payment stacks tightly couple{" "}
                <strong>decision authority</strong> with{" "}
                <strong>execution mechanics</strong>. As a result, changing
                banks, adding corridors, or introducing new payout partners
                often requires reworking approvals, controls, and operating
                workflows.
              </p>

              <p className="p" style={{ maxWidth: 980, marginTop: 12 }}>
                Modern PayEngine separates these concerns. Decision authority
                lives in a governed control plane. Execution is routed
                dynamically across trusted banks and licensed partners — without
                breaking policy, auditability, or lifecycle state.
              </p>

              <div className="btnRow" style={{ marginTop: 18 }}>
                <Link className="btnSecondary" href="/resources">
                  Back to Resources
                </Link>
                <Link className="btnPrimary" href="/#kyc">
                  Request a walkthrough
                </Link>
              </div>
            </div>

            {/* RIGHT: AT-A-GLANCE */}
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>At a glance</h3>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Problem:</strong> controls tied to specific providers
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Approach:</strong> abstract execution behind a control
                plane
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Outcome:</strong> flexible routing without governance
                drift
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
                Execution abstraction enables partner diversity, corridor
                optimization, and resilience — without retraining teams or
                weakening controls.
              </p>
            </div>
          </div>

          {/* ARTICLE */}
          <div style={{ marginTop: 28, maxWidth: 980 }}>
            <h2 className="h2" style={{ marginBottom: 10 }}>
              Why tightly coupled execution breaks at scale
            </h2>
            <p className="p">
              In many payment systems, approvals, funding, FX, and release logic
              are embedded directly into bank portals, processor workflows, or
              provider-specific APIs. This creates hidden dependencies between
              decision authority and execution mechanics.
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              When a provider changes, a corridor underperforms, or a new local
              bank is required, teams are forced to rewire approvals, controls,
              and reconciliation logic — increasing risk and operational drag.
            </p>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Separating authority from execution
            </h2>
            <p className="p">
              Execution abstraction means that the organization decides{" "}
              <strong>what is allowed to happen</strong> before deciding{" "}
              <strong>how it happens</strong>.
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              Modern PayEngine governs lifecycle state, approvals, funding, FX
              decision points, and release conditions in a centralized control
              plane. Execution instructions are then dispatched to the most
              appropriate bank or licensed partner based on policy, geography,
              currency, and availability.
            </p>

            <div className="panel" style={{ marginTop: 14 }}>
              <h3 style={{ marginTop: 0 }}>Conceptual model</h3>
              <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                <strong>Control plane:</strong> authority, policy, lifecycle,
                audit
                <br />
                <strong>Execution layer:</strong> banks, PSPs, local clearing,
                partners
              </p>
            </div>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              What execution abstraction enables
            </h2>

            <div
              className="kycGrid"
              style={{ marginTop: 14, alignItems: "stretch" }}
            >
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Partner-level routing</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Route payouts by corridor, currency, entity, or risk profile
                  without changing approval flows or user workflows.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Operational resilience</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Shift execution when providers degrade or fail — while
                  preserving lifecycle state and authority.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Cost & latency optimization</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Select execution paths based on settlement speed, cost, or
                  cutoff windows without fragmenting controls.
                </p>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 28 }}>
              <h3 style={{ marginTop: 0 }}>Detailed implementation notes</h3>
              <p className="p" style={{ marginTop: 10 }}>
                A deeper technical breakdown of execution abstraction — including
                routing logic, fallback strategies, provider interoperability,
                and audit implications — is currently in development.
              </p>

              <div style={{ marginTop: 14 }}>
                <span
                  className="btnSecondary"
                  style={{ opacity: 0.7, cursor: "default" }}
                >
                  Coming soon
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: 26,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Link className="btnSecondary" href="/trust-controls">
                Trust & Controls
              </Link>
              <Link className="btnSecondary" href="/unified-approach">
                Unified architecture
              </Link>
              <Link className="btnPrimary" href="/#kyc">
                Request a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
