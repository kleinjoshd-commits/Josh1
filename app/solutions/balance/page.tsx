import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "MPE Balance | MPE",
  description:
    "Worker financial accounts designed for globally distributed teams.",
};

export default function MpeBalancePage() {
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
                Worker financial accounts
              </div>

              <h1 className="h1">MPE Balance</h1>

              <p className="p">
                Worker financial accounts designed for globally distributed
                teams.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                MPE Balance extends the MPE operating model to the worker
                experience: faster access, multi-currency balances, remittance
                support, and controlled disbursement experiences under one
                governed platform.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                Use MPE Balance where worker access and payout experience matter
                most, or make it part of a broader MPE operating stack across
                workforce payments, funding, and execution oversight.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
                <Link className="btnSecondary" href="/solutions/workforce">
                  Explore MPE Workforce
                </Link>
              </div>
            </div>

            <div className="card" style={{ maxWidth: 560, marginLeft: "auto" }}>
              <div className="cardInner" style={{ maxHeight: "none" }}>
                <Image
                  src="/new%20balance.png"
                  alt="MPE Balance worker wallet interface"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What MPE Balance enables</h3>
              <ul
                style={{
                  margin: "20px 0 0",
                  paddingLeft: 22,
                  display: "grid",
                  gap: 12,
                }}
              >
                <li style={{ margin: 0 }}>
                  Worker wallet experience with enterprise controls
                </li>
                <li style={{ margin: 0 }}>
                  Multi-currency balances and payout visibility
                </li>
                <li style={{ margin: 0 }}>
                  Cross-border remittance and family support flows
                </li>
                <li style={{ margin: 0 }}>
                  Faster access to wages where available
                </li>
                <li style={{ margin: 0 }}>
                  Card and paycard-style access where available
                </li>
              </ul>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why it matters</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Balance is where infrastructure becomes tangible for the worker.
                Instead of treating payout as the end of the workflow, MPE
                extends control, visibility, and experience all the way to the
                last mile.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                That makes it possible to improve access and usability without
                giving up governance, reporting, or corridor-by-corridor rollout
                discipline.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                It also gives employers a stronger retention and talent lever:
                a better payout experience for globally distributed teams.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="panel">
              <div style={{ overflow: "hidden", borderRadius: 16 }}>
                <Image
                  src="/Balance-flow.png"
                  alt="MPE Balance flow"
                  width={1800}
                  height={900}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: 16,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Worker access without losing control</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE Balance gives workers faster, clearer access to funds while
                keeping release decisions, approval logic, and auditability in
                the MPE operating layer.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Remittance and family support</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Support remittance-oriented flows and family use cases through a
                more modern account experience, without fragmenting oversight or
                introducing a separate operating model.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Employer-grade governance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Funding controls, policy enforcement, payout visibility, and
                reporting remain centralized in MPE, so Balance enhances worker
                experience without weakening finance control.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Layered or unified deployment</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Deploy MPE Balance as a layered capability where worker
                experience is the missing piece, or run it as part of a broader
                unified MPE stack spanning workforce payments and operational
                control.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Execution &amp; Compliance</h3>
              <p className="p" style={{ marginTop: 10, maxWidth: "none" }}>
                Global payment execution and regulatory coverage are provided
                through licensed infrastructure partners, including Papaya
                Global.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
