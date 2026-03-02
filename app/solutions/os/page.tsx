import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "MPE OS | MPE",
  description: "Orchestration and control for global payment operations.",
};

export default function MpeOsPage() {
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
                Orchestration and control
              </div>

              <h1 className="h1">MPE OS</h1>

              <p className="p">
                Orchestration and control for global payment operations.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                MPE OS is the operating system for payment governance. It
                centralizes approvals, funding decisions, FX control, release
                timing, partner routing, and auditability across the payment
                environment.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                As payment execution becomes more distributed, MPE OS becomes
                the layer that keeps policy, release logic, and operational
                control unified across providers, rails, and entities.
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

            <div className="card" style={{ maxWidth: 560, marginLeft: "auto" }}>
              <div className="cardInner" style={{ maxHeight: "none" }}>
                <Image
                  src="/mpe-ui-2.png"
                  alt="MPE OS orchestration interface"
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
              <h3 style={{ marginTop: 0 }}>Approval workflows</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Enforce maker-checker workflows and separation of duties across
                payment operations without losing speed or visibility.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Lifecycle control</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Manage payments through explicit states from create to approve,
                release, and settle, with governance attached to every stage.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Routing abstraction</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Coordinate partner and rail selection without redesigning the
                workflows that govern the payment lifecycle.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>FX control</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Treat FX and funding as governed control points instead of late
                execution events that erode predictability.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Audit & reporting</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Maintain a single operating record across approvals, release
                states, partner routing, and settlement outcomes.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Mass payout workflows</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Support vendor, subcontractor, and high-volume disbursement
                workflows in one governed operating layer built for scale.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why this layer matters</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Global payments are moving toward a multi-network execution
                model. MPE OS is the layer that keeps policy, approvals,
                funding logic, and release authority coherent as that
                complexity grows.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>System of control</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE OS gives finance teams one place to govern who can approve,
                when funds can be released, how routes are selected, and what
                must be recorded across the payment lifecycle.
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
