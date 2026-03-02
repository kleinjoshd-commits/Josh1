import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "About | MPE",
  description:
    "Why MPE exists and the viewpoint behind its payment orchestration infrastructure.",
};

export default function AboutPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                About <span className="dot" />
                Company and viewpoint
              </div>

              <h1 className="h1">Why MPE exists</h1>

              <p className="p" style={{ maxWidth: 880 }}>
                Global payments are becoming more distributed, multi-network,
                and operationally complex. Finance teams increasingly need one
                system for control, visibility, FX governance, and release
                authority across the payment environment.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 880 }}>
                MPE exists to provide that system: an operating layer for
                orchestration and control above banks, payment providers,
                licensed partners, and future execution infrastructure.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
                <Link className="btnSecondary" href="/future-commerce">
                  Future of Commerce
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What we believe</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Payments are moving toward a multi-provider, multi-network
                operating model.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                Control should sit above execution, not inside fragmented
                workflows.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                Resilience, auditability, and governed execution will matter
                more as finance expands into distributed and constrained
                environments.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What MPE is building</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE is building the operating system for a new era of global
                payments: orchestration, approvals, routing, funding logic, FX
                checkpoints, visibility, and release control in one platform.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Where it fits</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE can be embedded where enterprises need more control, or
                deployed as a unified operating stack across workforce
                payments, vendor flows, partner-connected execution, and
                future network models.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why now</h3>
              <p className="p" style={{ marginTop: 10 }}>
                The old model assumed fewer providers, simpler rails, and more
                bounded operating environments. The next one requires software
                that can coordinate across entities, currencies, networks, and
                resilience requirements.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How we think about execution</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE is not the executing bank or licensed payment institution.
                It is the orchestration and control layer that sits above
                execution infrastructure and makes it governable at enterprise
                scale.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why this company is positioned for it</h3>
              <div className="networkOutcomeGrid">
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    MPE is being built from the view that payment control,
                    execution infrastructure, and resilience are converging into
                    one operating problem.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    The company&apos;s long-term view on continuity and
                    resilience is informed by deep experience in satellite and
                    space infrastructure.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    Its commercial approach is grounded in market development,
                    strategic partnerships, and bringing infrastructure products
                    into real operating environments.
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
