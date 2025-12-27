import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Resources | Modern PayEngine",
  description:
    "Practical infrastructure guidance on FX predictability, payout execution, worker wallets, and satellite-enabled payment security.",
};

export default function ResourcesPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="eyebrow">
            Resources <span className="dot" />
            Infrastructure notes & practical guidance
          </div>

          <h1 className="h1" style={{ marginBottom: 12 }}>
            How modern payment infrastructure
            <br />
            actually works
          </h1>

          <p className="p" style={{ maxWidth: 860 }}>
            Clear, operator-focused explanations of the systems behind global
            payouts. Written for finance, payroll, and payments teams who need
            predictability, governance, and speed across regions—without
            re-platforming their entire stack.
          </p>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>FX Predictability & Pricing</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Foreign exchange volatility impacts more than payroll—it affects
                margins, pricing models, and forecasting accuracy. Modern
                infrastructure enables governed FX conversion and locking so
                organizations can forecast payroll costs and price services
                consistently across regions.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Payout Execution: Fees & Timing</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Cross-border payouts vary widely by corridor, rail, and method.
                Understanding fee structures, settlement timing, and failure
                modes is critical to maintaining transparency and operational
                control at scale.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Worker Wallets & Remittance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                A modern worker wallet supports faster access to earnings,
                international remittance, and family support—while preserving
                employer governance and compliance across jurisdictions.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Satellite Security & Resilience</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-enabled infrastructure introduces an independent trust
                and connectivity layer for payments. Space-based private key
                generation and validation strengthen security, resiliency, and
                accessibility in distributed or high-risk environments.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/satellite">
                  View Satellite infrastructure
                </Link>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btnPrimary" href="/#kyc">
              Request a walkthrough
            </Link>
            <Link className="btnSecondary" href="/modern-payengine">
              Explore Modern PayEngine
            </Link>
            <Link className="btnSecondary" href="/balance">
              Explore Balance
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

