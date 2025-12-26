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
                Balance is the worker wallet experience that gives individuals
                faster access to earnings — with the ability to spend, remit,
                and support family members with a modern, transparent flow.
              </p>

              <p className="darkP" style={{ marginTop: 12 }}>
                Employers maintain governance through Modern PayEngine, while
                workers benefit from speed, visibility, and control.
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

          {/* FLOW IMAGE ONLY */}
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
              <h3>Faster access to earnings</h3>
              <p>
                Reduce waiting time between payroll approval and worker access,
                with a modern wallet experience.
              </p>
            </div>

            <div className="panel">
              <h3>Remit money home</h3>
              <p>
                Send money to family quickly and predictably, with a clear
                experience end-to-end.
              </p>
            </div>

            <div className="panel">
              <h3>Family wallets</h3>
              <p>
                Create wallets for family members so support reaches them
                directly, without unnecessary intermediaries.
              </p>
            </div>

            <div className="panel">
              <h3>Employer-grade governance</h3>
              <p>
                Balance is powered by Modern PayEngine, keeping compliance,
                reporting, and oversight with the employer.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 32 }}>
            <a className="btnSecondary" href="/modern-payengine">
              Learn how Modern PayEngine powers Balance
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}




