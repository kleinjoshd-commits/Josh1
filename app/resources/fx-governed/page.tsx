import Nav from "../../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "FX as a Governed Decision Point | Modern PayEngine",
  description:
    "Why FX timing matters more than best rate, and how locking and approval checkpoints improve predictability for global payroll and vendor payments.",
};

export default function FxGovernedResource() {
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
                FX governance
              </div>

              <h1 className="h1" style={{ marginBottom: 12 }}>
                FX as a governed
                <br />
                decision point
              </h1>

              <p className="p" style={{ maxWidth: 980 }}>
                In many payment stacks, foreign exchange is treated as an
                implementation detail — applied late in the payment flow and
                optimized for headline rate. At scale, this creates volatility,
                exceptions, and reconciliation risk.
              </p>

              <p className="p" style={{ maxWidth: 980, marginTop: 12 }}>
                Modern PayEngine treats FX as a{" "}
                <strong>governed decision point</strong>: explicitly timed,
                approved, and auditable — so delivered amounts are predictable
                before funds are released.
              </p>

              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
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
                <strong>Problem:</strong> FX applied late and implicitly
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Approach:</strong> FX as an explicit, approved state
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Outcome:</strong> predictable payouts and fewer exceptions
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
                Predictability matters more than theoretical best rates for
                payroll, vendor runs, and regulated payouts.
              </p>
            </div>
          </div>

          {/* ARTICLE */}
          <div style={{ marginTop: 28, maxWidth: 980 }}>
            {/* SECTION */}
            <h2 className="h2" style={{ marginBottom: 10 }}>
              Why “best rate” is the wrong optimization
            </h2>
            <p className="p">
              FX is often optimized for spot rate at the moment of execution.
              While this may look efficient on paper, it introduces uncertainty
              into delivered amounts, timing, and reconciliation — especially
              across large payroll and vendor batches.
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              When FX is applied late, teams lose the ability to answer basic
              operational questions in advance: how much will be delivered, in
              which currency, and when exceptions should be escalated.
            </p>

            {/* SECTION */}
            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              Treating FX as a lifecycle checkpoint
            </h2>
            <p className="p">
              In a governed payment lifecycle, FX is not a side effect — it is a
              state transition.
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              Modern PayEngine allows FX decisions to be made, approved, and
              locked before release. This aligns treasury intent with execution
              reality and ensures delivered amounts are known ahead of time.
            </p>

            <div className="panel" style={{ marginTop: 14 }}>
              <h3 style={{ marginTop: 0 }}>Conceptual model</h3>
              <p className="p" style={{ marginTop: 10, marginBottom: 0 }}>
                <strong>Approved</strong> → <strong>FX locked</strong> →{" "}
                <strong>Funded</strong> → <strong>Released</strong>
              </p>
            </div>

            {/* SECTION */}
            <h2 className="h2" style={{ marginTop: 28, marginBottom: 10 }}>
              What FX governance enables
            </h2>

            <div className="kycGrid" style={{ marginTop: 14, alignItems: "stretch" }}>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Predictable payroll runs</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Employees receive expected amounts without last-minute FX
                  variance or post-run adjustments.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Cleaner reconciliation</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Delivered amounts match approved amounts, reducing exceptions
                  and manual investigation.
                </p>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Clear accountability</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  FX decisions are attributable, auditable, and aligned with
                  treasury policy.
                </p>
              </div>
            </div>

            {/* COMING SOON */}
            <div className="panel" style={{ marginTop: 28 }}>
              <h3 style={{ marginTop: 0 }}>Detailed implementation notes</h3>
              <p className="p" style={{ marginTop: 10 }}>
                A deeper breakdown of FX governance — including locking
                strategies, approval flows, exposure management, and corridor-
                specific considerations — is currently in development.
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

            {/* FOOTER CTA */}
            <div
              style={{
                marginTop: 26,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Link className="btnSecondary" href="/resources/execution-routing">
                Execution abstraction
              </Link>
              <Link className="btnSecondary" href="/trust-controls">
                Trust & Controls
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
