import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Future of Commerce | MPE",
  description:
    "How space-enabled commerce, tokenized assets, and autonomous operations change financial control.",
};

export default function FutureOfCommercePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div style={{ maxWidth: 820 }}>
            <div>
              <div className="eyebrow">
                Platform vision <span className="dot" />
                Future of commerce
              </div>

              <h1 className="h1">
                The future of commerce needs a new operating system for payments
              </h1>

              <p className="p" style={{ maxWidth: 820 }}>
                Financial infrastructure was built for slower markets, fewer
                execution paths, and tightly bounded operating environments.
                That model breaks down as commerce expands into distributed
                workforces, autonomous systems, tokenized assets, software-defined
                treasury, and more remote operating environments.
              </p>

              <p className="p" style={{ marginTop: 12, maxWidth: 820 }}>
                MPE is being built for that frontier: a programmable control
                layer for payments, funding, FX, release decisions, and
                multi-network execution that can operate across banks, licensed
                partners, local rails, and future space-enabled financial
                infrastructure.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
                <Link className="btnSecondary" href="/satellite">
                  Explore Satellite Resilience
                </Link>
              </div>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 18, gap: 18 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Autonomous operations</h3>
              <p className="p" style={{ marginTop: 10 }}>
                As workflows become more software-directed, financial control
                cannot depend on manual handoffs. Payments need explicit
                policy, release logic, and auditability that software can
                govern at scale.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Space-enabled payments</h3>
              <p className="p" style={{ marginTop: 10 }}>
                As financial infrastructure extends into more remote and
                connectivity-constrained environments, continuity will depend on
                payment systems designed to operate beyond traditional
                terrestrial assumptions.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Tokenized assets and value flows</h3>
              <p className="p" style={{ marginTop: 10 }}>
                As assets, entitlements, and financial rights become more
                programmable, finance teams will need stronger orchestration,
                approval logic, and control across new forms of value movement.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Multi-network execution</h3>
              <p className="p" style={{ marginTop: 10 }}>
                The future operating model is not one rail or one provider. It
                is coordinated execution across banking partners, payment
                networks, local rails, and fallback paths under one system of
                control.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Programmable control</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE turns payments from a collection of disconnected workflows
                into a programmable system for orchestration, visibility, and
                governed control.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Software-defined treasury</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Treasury operations will increasingly require dynamic funding,
                FX management, release timing, and liquidity visibility across
                multiple networks, counterparties, and jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
