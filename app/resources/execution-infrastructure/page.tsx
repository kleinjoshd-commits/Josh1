import Nav from "../../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Execution Infrastructure | MPE",
  description:
    "How MPE works with partner-connected execution infrastructure while keeping orchestration and control in one operating layer.",
};

export default function ExecutionInfrastructurePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                Resources <span className="dot" />
                Execution infrastructure
              </div>

              <h1 className="h1" style={{ marginBottom: 12 }}>
                How MPE works with
                <br />
                execution infrastructure
              </h1>

              <p className="p" style={{ maxWidth: 960 }}>
                MPE is the operating layer above execution. It governs
                approvals, funding logic, FX checkpoints, routing decisions,
                release authority, AI-informed routing guidance, and
                payment-state visibility while licensed partners handle
                regulated money movement.
              </p>

              <p className="p" style={{ marginTop: 12, maxWidth: 960 }}>
                That separation lets finance teams keep one control model even
                when execution spans local rails, cross-border partners,
                banking networks, workforce infrastructure, and future network
                constructs.
              </p>

              <div className="btnRow" style={{ marginTop: 18 }}>
                <Link className="btnSecondary" href="/resources">
                  Back to Resources
                </Link>
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>At a glance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>MPE:</strong> orchestration, control, visibility, and
                governed release
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Execution partners:</strong> licensed payment delivery
                and regulatory coverage
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Outcome:</strong> one operating model across a more
                complex payment environment
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What MPE controls</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Policy, approvals, release timing, funding readiness, FX
                decision points, routing logic, exception handling, and the
                operating record for every payment workflow.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What execution partners do</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Licensed partners provide the regulated execution layer:
                delivery into rails, jurisdictional coverage, local payment
                mechanics, and compliance obligations tied to execution.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why the separation matters</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Finance teams keep one system for authority and visibility
                rather than rebuilding workflows every time execution
                requirements vary by corridor, entity, or partner.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Primary execution foundation</h3>
              <p className="p" style={{ marginTop: 10 }}>
                In workforce and network contexts, Papaya Global provides the
                primary execution foundation behind MPE&apos;s operating layer,
                extending access to licensed global payment infrastructure.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Operational model</h3>
              <div className="kycGrid" style={{ marginTop: 16 }}>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    Finance defines what can happen: policy, approvals, funding,
                    FX, and release conditions.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    MPE decides how execution should be governed across rails,
                    partners, entities, and payment states, including
                    AI-informed routing guidance within policy boundaries.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    Licensed infrastructure delivers execution while MPE
                    preserves the operating record, visibility, and control
                    model above it.
                  </p>
                </div>
              </div>
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
            <Link className="btnSecondary" href="/resources/execution-routing">
              Execution routing
            </Link>
            <Link className="btnSecondary" href="/unified-approach">
              Unified architecture
            </Link>
            <Link className="btnPrimary" href="/#kyc">
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
