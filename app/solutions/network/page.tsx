import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "MPE Network | MPE",
  description:
    "Access to global rails through a growing ecosystem of licensed partners.",
};

export default function MpeNetworkPage() {
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
                Global rails and partner access
              </div>

              <h1 className="h1">MPE Network</h1>

              <p className="p">
                Access to global rails through a growing ecosystem of licensed
                partners.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                MPE Network gives enterprises coordinated access to local rails,
                cross-border execution paths, funding constructs, payment
                tracking, and redundancy across a broader execution ecosystem.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                Papaya Global is MPE Network&apos;s primary execution partner,
                giving customers access to licensed global payment
                infrastructure and partner-connected banking networks,
                including J.P. Morgan and Citi, while MPE keeps
                orchestration, routing logic, visibility, and operational
                control in the customer-facing layer.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
                <Link className="btnSecondary" href="/resources/execution-routing">
                  Explore Routing
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Network capabilities</h3>
              <ul
                style={{
                  margin: "18px 0 0",
                  paddingLeft: 22,
                  display: "grid",
                  gap: 12,
                }}
              >
                <li>Local payout rails and coverage</li>
                <li>FX optimization checkpoints</li>
                <li>Funding accounts and virtual account constructs</li>
                <li>Payment tracking and transparency</li>
                <li>Redundancy and failover posture</li>
              </ul>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How control is applied</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE governs routing policy, funding logic, FX checkpoints,
                payment-state visibility, and exception handling before and
                after execution occurs through partner infrastructure.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Routing decisions</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Teams can govern which partners, rails, and funding paths are
                used by corridor, entity, counterparty type, cost profile, or
                operational priority within a consistent operating model,
                including AI-informed routing decisions inside governed policy.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>FX and funding checkpoints</h3>
              <p className="p" style={{ marginTop: 10 }}>
                FX exposure and funding readiness can be handled as controlled
                checkpoints upstream of release, rather than discovered only at
                the moment of execution.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Exception and fallback posture</h3>
              <p className="p" style={{ marginTop: 10 }}>
                When routes degrade or lose fit, MPE supports a more resilient
                fallback posture across partners and rails while preserving
                workflow, approvals, and reporting continuity.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why it matters</h3>
              <p className="p" style={{ marginTop: 10 }}>
                The payment environment is no longer one provider, one rail, or
                one network. Cost, reliability, settlement speed, currency
                handling, and local coverage now depend on well-governed
                routing and execution flexibility.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How MPE Network helps</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE Network brings partner-connected execution into one
                governed control layer, so teams can manage routing, funding
                patterns, and reporting consistently across the network.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Execution foundation</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Papaya Global is the primary execution partner behind MPE
                Network, extending MPE into a stronger global delivery
                layer that includes banking networks associated with
                institutions such as J.P. Morgan and Citi. MPE remains the
                system of control for workflow, visibility, routing, and
                governance.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Resilience by design</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Redundancy across partners, rails, and networks supports a more
                resilient execution posture when specific routes degrade, become
                more expensive, or lose operational fit.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What finance teams get</h3>
              <div className="networkOutcomeGrid">
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    A single place to manage partner-connected execution
                    without losing control of approvals, reporting, or routing
                    logic.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    Better visibility into payment state, corridor behavior,
                    exceptions, and execution outcomes across a broader network.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    A stronger foundation for global coverage and redundancy
                    without turning the operating model into a fragmented set
                    of disconnected workflows.
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
