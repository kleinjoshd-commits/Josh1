import Nav from "../../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "The Enterprise Payment Lifecycle | Modern PayEngine",
  description:
    "Why explicit, enforceable payment states reduce delays, exceptions, and reconciliation work across global payouts.",
};

export default function PaymentLifecycleResource() {
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
                Payment lifecycle
              </div>

              <h1 className="h1" style={{ marginBottom: 12 }}>
                The enterprise payment lifecycle
              </h1>

              <p className="p" style={{ maxWidth: 980 }}>
                Enterprise payments don’t break because money can’t move. They
                break because <strong>authority is fragmented</strong>, timing is
                unclear, and state lives across payroll systems, ERPs, bank
                portals, FX providers, and local rails. When lifecycle state is
                implicit, organizations manage payouts through exceptions,
                escalations, and manual reconciliation.
              </p>

              <p className="p" style={{ maxWidth: 980, marginTop: 12 }}>
                Modern PayEngine is built on a simple principle: payments should
                move through{" "}
                <strong>explicit, enforceable lifecycle states</strong>, governed
                independently of how or where execution occurs. This is what
                makes predictability possible at scale.
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
                <strong>Problem:</strong> fragmented authority + implicit state
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Solution:</strong> explicit, enforceable lifecycle states
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Outcome:</strong> predictable release + deterministic audit
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
                Lifecycle governance is the foundation that enables provider
                routing, FX decisioning, and resilience without breaking controls.
              </p>

              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/trust-controls">
                  Trust & Controls
                </Link>
              </div>
            </div>
          </div>

          {/* ARTICLE */}
          <div style={{ marginTop: 28, maxWidth: 980 }}>
            <h2 className="h2" style={{ marginBottom: 10 }}>
              Why lifecycle state is the real bottleneck
            </h2>
            <p className="p">
              Many teams treat “pay someone” as a single action. In reality, a
              payout is a sequence of decisions: what is being paid, who
              approved it, whether funds are available, when the instruction is
              released, and whether settlement has actually occurred. When those
              decisions are spread across systems, the organization loses a
              single source of truth.
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              The result is familiar: approvals happen before funding is clear,
              FX conversion occurs late, cutoff windows are missed, and the only
              way to answer “where is this payment?” is by chasing providers.
            </p>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              The enterprise payment lifecycle (enforced)
            </h2>
            <p className="p">
              Below is a simplified lifecycle used to illustrate how authority is
              enforced before execution occurs. An enterprise payment lifecycle
              is the authoritative sequence of{" "}
              <strong>enforceable states</strong> a payment must pass through
              before the organization considers it complete. These are not UI
              labels. Each state carries policy, audit, and release consequences.
            </p>

            <div className="panel" style={{ marginTop: 14 }}>
              <h3 style={{ marginTop: 0 }}>Canonical lifecycle (illustrative)</h3>
              <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                <strong>Created</strong> → <strong>Approved</strong> →{" "}
                <strong>Funded</strong> → <strong>Released</strong> →{" "}
                <strong>Settled</strong>
              </p>
            </div>

            <p className="p" style={{ marginTop: 14 }}>
              The key is not the names — it’s that transitions are explicit,
              observable, and attributable. That’s what makes auditability and
              predictable execution possible across markets.
            </p>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              What each state protects
            </h2>
            <p className="p">You can think of the lifecycle as a set of guardrails:</p>

            <div
              className="kycGrid"
              style={{ marginTop: 14, alignItems: "stretch" }}
            >
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Created</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Captures intent — amount, currency, counterparty, purpose, and
                  timing — before anything is released.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Approved</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Ensures policy is satisfied: who authorized the payout, under
                  what thresholds, with separation of duties where required.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Funded</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Confirms funds availability and reservation before release —
                  reducing failures caused by late funding and cutoff windows.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Released</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Authorizes dispatch of the execution instruction through the
                  chosen bank or licensed partner, with full traceability.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Settled</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Confirms completion from the executing institution and anchors
                  reconciliation and reporting.
                </p>
              </div>
            </div>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Separating control from execution
            </h2>
            <p className="p">
              Modern PayEngine enforces lifecycle governance independent of the
              execution provider. The control layer defines states, enforces
              approvals, governs FX decisions, and authorizes release. Execution
              is performed by trusted local banks and licensed partners who move
              funds and return settlement confirmation.
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              This separation enables routing optimization and provider
              flexibility without breaking controls or retraining teams.
            </p>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Funding and FX as control checkpoints
            </h2>
            <p className="p">Two transitions deserve special attention at scale:</p>
            <p className="p" style={{ marginTop: 10 }}>
              <strong>Funding</strong> is not an assumption — it’s a state
              transition. Funds should be confirmed before release, and wallet
              pools can be used to reserve liquidity across entities and
              currencies when prefunding is operationally required.
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              <strong>FX</strong> should be treated as a governed decision point.
              When FX is locked prior to release, delivered amounts are known
              ahead of execution — reducing volatility exposure, exceptions, and
              post-settlement disputes. Predictability matters more than
              theoretical “best rates.”
            </p>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Auditability is a byproduct of explicit state
            </h2>
            <p className="p">
              When state transitions are explicit, audit trails emerge naturally —
              who approved what, when funds were confirmed, when release occurred,
              and when settlement was verified. This supports internal controls,
              external audits, and consistent reporting across markets.
            </p>

            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Closing
            </h2>
            <p className="p">
              Modern PayEngine is not a processor. It is the system that decides{" "}
              <strong>how payments are allowed to happen</strong>. By enforcing
              explicit lifecycle states and separating authority from execution,
              organizations gain predictability, accountability, flexibility, and
              resilience as they scale globally.
            </p>

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
              <Link className="btnSecondary" href="/modern-payengine">
                Modern PayEngine
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

