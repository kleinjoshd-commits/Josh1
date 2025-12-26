import Image from "next/image";
import Nav from "../../components/Nav";

export default function ModernPayEnginePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HERO */}
          <div className="grid">
            <div>
              <div className="eyebrow">
                Employer payments infrastructure <span className="dot" />
                Modern PayEngine
              </div>

              <h1 className="h1">
                Wallet-based funding
                <br />
                for global payouts
              </h1>

              <p className="p">
                Modern PayEngine is the funding and execution layer behind global
                payroll, contractor payouts, and vendor payments. It centralizes
                how funds are held, converted, and released — giving finance
                teams more predictability across borders.
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Instead of relying on multiple banks, variable foreign exchange
                (FX) timing, and opaque settlement flows, Modern PayEngine
                introduces a governed, wallet-based model designed for enterprise
                operations.
              </p>

              <div className="btnRow">
                <a className="btnPrimary" href="/#kyc">
                  Learn more
                </a>
                <a className="btnSecondary" href="/balance">
                  Explore Balance
                </a>
              </div>
            </div>

            {/* UI-2 ONLY */}
            <div className="card">
              <div className="cardInner">
                <Image
                  src="/mpe-ui-2.png"
                  alt="Modern PayEngine wallets and funding"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* FX + WALLETS (no redundancy) */}
          <div style={{ marginTop: 40, display: "grid", gap: 14 }}>
            <div className="kycGrid" style={{ marginTop: 0 }}>
              <div className="panel">
                <h3>FX lock (defined)</h3>
                <p>
                  FX lock means the conversion rate is set before payout release
                  — so the delivered amount in the target currency is known
                  ahead of execution.
                </p>
              </div>

              <div className="panel">
                <h3>Why timing matters</h3>
                <p>
                  In many workflows, FX conversion happens late (after approvals
                  or funding), which increases exposure to rate movement and
                  settlement variability.
                </p>
              </div>

              <div className="panel">
                <h3>Wallet-based holding</h3>
                <p>
                  Converted funds can be held in multi-currency wallets, reducing
                  dependency on bank windows and improving treasury control.
                </p>
              </div>

              <div className="panel">
                <h3>Operational clarity</h3>
                <p>
                  Clear conversion timing and wallet balances reduce exceptions,
                  escalations, and manual reconciliation work.
                </p>
              </div>
            </div>

            <div className="kycGrid" style={{ marginTop: 0 }}>
              <div className="panel">
                <h3>Cost efficiency</h3>
                <p>
                  Controlling FX timing and reducing unnecessary intermediaries
                  can lower frictional costs and reduce working-capital buffers.
                </p>
              </div>

              <div className="panel">
                <h3>Governance over promises</h3>
                <p>
                  Modern PayEngine does not promise a single “best rate.” It
                  provides transparency, control, and auditability across FX and
                  payout flows.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 28, paddingTop: 6 }}>
              <a className="btnPrimary" href="/balance">
                See how workers experience payouts
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
