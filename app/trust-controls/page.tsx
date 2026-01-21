import Nav from "../../components/Nav";
import Link from "next/link";

export default function TrustControlsPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HEADER — TWO COLUMN */}
          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 0.85fr)",
              alignItems: "start",
            }}
          >
            {/* LEFT: NARRATIVE */}
            <div>
              <div className="eyebrow">
                Platform foundation <span className="dot" />
                Trust & controls
              </div>

              <h1 className="h1">
                Authority that persists
                <br />
                under real-world conditions
              </h1>

              <p className="p">
                Modern PayEngine is designed around a simple principle:
                <strong> execution moves money, but controls preserve authority.</strong>
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Trust & Controls define how funding, FX decisions, approvals, and
                payout release are governed — ensuring decision integrity,
                auditability, and accountability across global operations, even
                when networks degrade or execution is delayed.
              </p>

              <div className="btnRow" style={{ marginTop: 18 }}>
                <Link className="btnPrimary" href="/#kyc">
                  Explore a governed pilot
                </Link>
                <Link className="btnSecondary" href="/modern-payengine">
                  Platform overview
                </Link>
              </div>
            </div>

            {/* RIGHT: AT-A-GLANCE TRUST MODEL */}
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Trust model at a glance</h3>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Authority:</strong> policy-driven, role-based, auditable
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Approvals:</strong> maker-checker, multi-entity, multi-currency
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Release:</strong> controlled, conditional, time-aware
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Auditability:</strong> deterministic, end-to-end
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Resilience:</strong> authoritative under degraded conditions
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
                Designed for regulated, mission-critical, and sensitive operating
                environments where continuity of authority matters.
              </p>
            </div>
          </div>

          {/* CORE PRINCIPLES */}
          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Policy before execution</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Every payment begins as a governed intent. Policies define who
                can initiate, approve, modify, or release funds — before any
                execution rail is engaged.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Approvals with authority</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Maker-checker workflows, role-based permissions, and controlled
                release ensure approvals remain authoritative — not advisory —
                across regions, entities, and currencies.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Deterministic auditability</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Every decision, state change, and authorization is recorded with
                clear lineage. Audit trails remain intact even when execution is
                delayed or distributed across providers.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Separation of control and execution</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Modern PayEngine governs authority. Banks and partners execute
                payments. This separation preserves clarity, accountability,
                and operational resilience.
              </p>
            </div>
          </div>

          {/* WHY THIS MATTERS — THESIS BLOCK */}
          <div data-animate style={{ marginTop: 28 }}>
            <div
              className="panel"
              style={{
                maxWidth: 1040,
                margin: "0 auto",
                padding: "26px 32px",
              }}
            >
              <p
                className="p"
                style={{
                  margin: 0,
                  lineHeight: 1.65,
                  maxWidth: "none",
                }}
              >
                <strong>
                  Most payment failures are not execution failures — they are
                  control failures.
                </strong>{" "}
                When systems fragment, networks degrade, or providers change,
                decision authority erodes. Modern PayEngine is built to preserve
                that authority under stress.
              </p>
            </div>
          </div>

          {/* CONTROL LAYERS */}
          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Funding controls</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Govern how and when capital is staged, allocated, and released
                across entities and regions — improving predictability and
                reducing operational risk.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>FX decision governance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Treat FX as a controlled decision point. Lock rates ahead of
                execution, manage exposure, and align treasury intent with
                payout reality.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Release & authorization</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Separate approval from release. Enforce timing, conditions, and
                policy before value moves — even when execution occurs later.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Integrity under constraint</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Designed for environments where immediacy and visibility cannot
                be assumed — ensuring control states remain authoritative under
                constrained or non-public conditions.
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link className="btnSecondary" href="/unified-approach">
              Unified architecture
            </Link>
            <Link className="btnSecondary" href="/satellite">
              Satellite resilience
            </Link>
            <Link className="btnSecondary" href="/modern-payengine">
              Platform overview
            </Link>
          </div>

          <div style={{ height: 40 }} />
        </div>
      </section>
    </main>
  );
}
