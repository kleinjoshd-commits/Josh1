import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "MPE Workforce | MPE",
  description: "Global workforce execution — fully controlled through MPE.",
};

export default function MpeWorkforcePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                Solutions <span className="dot" />
                Workforce execution
              </div>

              <h1 className="h1">MPE Workforce</h1>

              <p className="p">
                Global workforce execution — fully controlled through MPE.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                MPE Workforce gives finance and operations teams one governed
                layer for payroll execution, EOR, contractor payments,
                statutory obligations, and cross-border workforce funding.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                MPE centralizes visibility, approvals, release timing, worker
                funding logic, and execution oversight across workforce payment
                operations that span multiple countries, worker types, and
                regulatory requirements.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
                <Link className="btnSecondary" href="/solutions/balance">
                  Explore MPE Balance
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Core scope</h3>
              <ul
                style={{
                  margin: "18px 0 0",
                  paddingLeft: 22,
                  display: "grid",
                  gap: 12,
                }}
              >
                <li>Global payroll execution</li>
                <li>Employer of Record (EOR)</li>
                <li>Contractor payments</li>
                <li>Benefits and statutory payments</li>
                <li>Compliance and tax handling</li>
                <li>Centralized visibility across entities and regions</li>
              </ul>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How control is applied</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE governs approvals, funding readiness, release timing,
                worker-group policy, and payment-state visibility before and
                after execution occurs through licensed workforce
                infrastructure.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Worker-type governance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Payroll, contractor, EOR, and statutory workflows can follow
                different approval, funding, and release rules while remaining
                inside one operating model.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Funding and release discipline</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Workforce execution becomes more reliable when funding
                readiness, cutoff discipline, and release controls are managed
                upstream instead of reconciled after the fact.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Operational visibility</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Track what is approved, funded, released, and settled across
                entities, worker groups, and countries without stitching
                together multiple execution views.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why workforce payments break first</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Workforce execution is where operational complexity shows up
                first: local compliance rules, multiple worker types, statutory
                deadlines, and inconsistent funding paths create risk quickly.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How MPE Workforce helps</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE brings workforce execution into the same operational layer
                as approvals, funding decisions, payout visibility, and audit
                records, while licensed partners handle the underlying payment
                execution.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Execution foundation</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Papaya Global supports the primary execution and compliance
                foundation behind MPE Workforce, while MPE remains the control
                layer for workflow, visibility, funding governance, and release
                orchestration.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Control at scale</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Apply funding governance, release discipline, and auditability
                consistently across payroll, contractor, EOR, and statutory
                workflows as workforce operations expand.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What finance teams get</h3>
              <div className="networkOutcomeGrid">
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    One operating view across payroll, contractor, EOR, and
                    statutory workforce payments.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    Better control over approvals, funding timing, release
                    discipline, and payment-state visibility across regions.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    A stronger workforce execution model without losing
                    enterprise governance as operations expand.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
