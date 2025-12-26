import Image from "next/image";
import Nav from "../components/Nav";
import KycForm from "../components/KycForm";

export default function Home() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="grid">
            <div>
              <div className="eyebrow">
                Modern PayEngine + Balance <span className="dot" />
                Global payouts for modern workforces
              </div>

              <h1 className="h1">
                Govern global payouts.
                <br />
                Deliver a modern worker wallet.
              </h1>

              <p className="p">
                Modern PayEngine is the employer payments layer — funding,
                payout execution, and foreign exchange (FX) control. Balance is
                the worker wallet experience for faster access, remittance, and
                family support.
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Works alongside your existing payroll, HR, and finance systems.
              </p>

              <div className="btnRow">
                <a className="btnPrimary" href="/#kyc">
                  Learn more
                </a>
                <a className="btnSecondary" href="/modern-payengine">
                  Explore Modern PayEngine
                </a>
              </div>

              <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>
                No obligation — keep your current systems.
              </div>
            </div>

            {/* HOME UI (HIDE ON MOBILE) */}
            <div className="card hideOnMobile">
              <div className="cardInner">
                <Image
                  src="/mpe-ui.png"
                  alt="Modern PayEngine platform interface"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* BALANCE — ONLY PRODUCT BOX */}
          <div style={{ marginTop: 34 }}>
            <div className="panel balancePanel">
              <div className="balanceText">
                <div className="balanceKicker">Balance</div>

                <h3 className="balanceH3">A modern wallet for workers</h3>

                <p className="p" style={{ marginTop: 10 }}>
                  Balance gives workers faster access to earnings and a clear
                  experience to spend, remit, and support family — while
                  employers retain governance through Modern PayEngine.
                </p>

                <div className="balanceCtas">
                  <a className="btnSecondary" href="/balance">
                    Explore Balance
                  </a>
                  <a className="btnPrimary" href="/#kyc">
                    Learn more
                  </a>
                </div>
              </div>

              {/* BALANCE MOCKUP (HIDE ON MOBILE) */}
              <div className="balanceMock hideOnMobile">
                <Image
                  src="/balance-ui.png"
                  alt="Balance wallet interface"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Optional: a tiny “View screenshots on desktop” hint only on mobile */}
              <div className="showOnMobile" style={{ marginTop: 10, opacity: 0.7, fontSize: 13 }}>
                Screenshots are available on desktop for a larger preview.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARN MORE */}
      <KycForm />
    </main>
  );
}
