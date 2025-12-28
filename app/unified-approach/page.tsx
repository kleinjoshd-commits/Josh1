import Nav from "../../components/Nav";
import Link from "next/link";

export default function UnifiedApproachPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow">
              Platform architecture <span className="dot" />
              Unified approach
            </div>

            <h1 className="h1">
              One payments architecture,
              <br />
              end to end
            </h1>

            <p className="p">
              Modern PayEngine connects employer payroll payments, foreign
              exchange (FX) control, and payout execution with modern worker
              wallets — without replacing your existing systems.
            </p>

            <p className="p" style={{ marginTop: 14 }}>
              Start with a governed payments layer. Extend into worker access,
              remittance, or satellite resilience only where it adds value.
            </p>

            <div className="btnRow" style={{ marginTop: 18 }}>
              <Link className="btnPrimary" href="/#kyc">
                Request an overview
              </Link>
              <Link className="btnSecondary" href="/modern-payengine">
                Explore Modern PayEngine
              </Link>
              <Link className="btnSecondary" href="/balance">
                Explore Balance
              </Link>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>Enterprise systems</h3>
              <p>
                Keep SAP / HRIS / payroll inputs in place. Modern PayEngine adds
                the payments layer alongside your current stack.
              </p>
            </div>

            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>Modern PayEngine layer</h3>
              <p>
                Funding, predictable foreign exchange rates (FX), and global
                payout execution with governance and visibility.
              </p>
            </div>

            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>Balance layer</h3>
              <p>
                Worker wallets for faster access to earnings, remittance, and
                family support—deployed by corridor, region, or worker type.
              </p>
            </div>

            <div className="panel" style={{ textDecoration: "none" }}>
              <h3 style={{ marginTop: 0 }}>Optional trust layers</h3>
              <p>
                Satellite security/resilience and Web3 rails can be applied only
                where needed based on risk and geography.
              </p>
            </div>
          </div>

          <div style={{ height: 40 }} />
        </div>
      </section>
    </main>
  );
}
