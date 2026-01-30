import Image from "next/image";
import Nav from "../../components/Nav";

export default function BalancePage() {
  return (
    <main>
      <Nav />

      <section className="deckDark">
        <div className="rings" />
        <div className="container darkInner">
          {/* HERO */}
          <div className="grid">
            <div>
              <div className="kicker">Worker wallet</div>

              <div className="balanceTitle">Balance</div>

              <div className="byline">
                powered by{" "}
                <span className="wordmark">
                  Modern PayEngine <span className="sup">MPE</span>
                </span>
              </div>

              <div className="divider" />

              <p className="darkP">
                Balance gives workers faster, clearer access to their pay—with a simple
                way to spend, remit, and support family.
              </p>

              <p className="darkP" style={{ marginTop: 12 }}>
                Employers keep governance, approvals, and compliance in Modern PayEngine.
              </p>

              <div className="btnRow" style={{ marginTop: 22 }}>
                <a className="btnPrimary" href="/#kyc">
                  Learn more
                </a>
                <a className="btnSecondary" href="/modern-payengine">
                  See the infrastructure
                </a>
              </div>
            </div>

            {/* MAIN UI */}
            <div className="darkCard">
              <div className="darkCardInner">
                <Image
                  src="/balance-ui.png"
                  alt="Balance wallet app"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* FLOW IMAGE */}
          <div style={{ marginTop: 40 }}>
            <div className="panel">
              <Image
                src="/Balance-flow.png"
                alt="Balance flow"
                width={1800}
                height={900}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 16,
                  display: "block",
                }}
                priority
              />
            </div>
          </div>

          {/* BENEFITS */}
          <div className="kycGrid" style={{ marginTop: 36 }}>
            <div className="panel">
              <h3>Faster access</h3>
              <p>
                Reduce the gap between payroll approval and worker access with a modern,
                transparent payout flow.
              </p>
            </div>

            <div className="panel">
              <h3>Remit with confidence</h3>
              <p>
                Send money home quickly and predictably, with clear status from start
                to finish.
              </p>
            </div>

            <div className="panel">
              <h3>Family support</h3>
              <p>
                Create wallets for family members so support reaches them directly,
                without unnecessary intermediaries.
              </p>
            </div>

            <div className="panel">
              <h3>Enterprise-grade governance</h3>
              <p>
                Balance runs on Modern PayEngine—so employers retain policy enforcement,
                reporting, and compliance across all payouts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



