import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "MPE Balance | MPE",
  description:
    "Worker wallets for zero-fee remittances, USD-held balances, and stronger access for families across borders.",
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
                Worker wallets built to help more of each paycheck reach home.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                MPE Balance gives workers a better place to receive, hold, and
                move value after payroll. It is built for zero-fee remittances,
                USD-held balances, and family support across borders.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                It also supports broader employee payment use cases, including
                employer-directed disbursements and international travel spend,
                while keeping the experience and governance inside one MPE
                system.
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
                  Worker wallet experience built around send-home use cases
                </li>
                <li style={{ margin: 0 }}>
                  USD-held balances and payout visibility
                </li>
                <li style={{ margin: 0 }}>
                  Zero-fee remittance and family support flows
                </li>
                <li style={{ margin: 0 }}>
                  Access for rural and underbanked recipients in supported regions
                </li>
                <li style={{ margin: 0 }}>
                  Satellite-accessible card and paycard-style access where available
                </li>
              </ul>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why it matters</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Balance is where the mission becomes tangible. A few percentage
                points saved on every transfer means more of each paycheck makes
                it to the people it was earned for.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                It also gives workers a way to hold value in USD when local
                currency conditions are unstable and access banking-like utility
                without relying on a traditional bank account.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                For employers, that turns a painful post-payday problem into a
                real retention and attraction benefit.
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
                MPE Balance gives workers access to funds through a clear wallet
                experience while MPE keeps release decisions, approval logic,
                and auditability in the operating layer.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Remittance and family support</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Workers can send money home for free in supported corridors, and
                families can access funds in ways that do not depend on a full
                traditional banking relationship.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Value protection and reach</h3>
              <p className="p" style={{ marginTop: 10 }}>
                USD-held balances help protect value against devaluation, and
                satellite-accessible delivery expands reach into harder
                environments where terrestrial systems are less dependable.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Employer-grade governance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Funding controls, policy enforcement, payout visibility, and
                reporting remain centralized in MPE, so the worker experience
                improves without sacrificing finance control.
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
