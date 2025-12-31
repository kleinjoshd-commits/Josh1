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
                Enterprise payments infrastructure
              </div>

              <h1 className="h1">
                Enterprise-grade
                <br />
                global payments
                <br />
                governed end-to-end
              </h1>

              <p className="p">
                Control funding, FX, approvals, and payout execution across
                markets — without replacing your existing payroll, HR, or
                finance systems.
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Built for finance, payroll, and SAP-led organizations operating
                across regulated markets.
              </p>

              <div className="btnRow">
                <a className="btnPrimary" href="/#kyc">
                  Request a walkthrough
                </a>
                <a className="btnSecondary" href="/modern-payengine">
                  Explore the platform
                </a>
              </div>
            </div>

            {/* HOME UI (DESKTOP ONLY) */}
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

          {/* PLATFORM PILLARS */}
          <div data-animate style={{ marginTop: 22 }}>
            <div
              style={{
                display: "grid",
                gap: 14,
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                alignItems: "stretch",
              }}
            >
              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Funding & Wallets
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Centralized multi-currency wallet pools with real-time
                  visibility and control across entities and regions.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  FX & Treasury Controls
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Lock FX ahead of execution, manage exposure, and improve
                  predictability for payroll and vendor runs.
                </p>
              </div>

              <div className="panel">
                <h3 className="balanceH3" style={{ marginBottom: 10 }}>
                  Approvals & Governance
                </h3>
                <p className="p" style={{ margin: 0 }}>
                  Policy-driven approvals, audit trails, and controlled release
                  — built for regulated operations.
                </p>
              </div>
            </div>
          </div>

          {/* CFO QUOTE */}
          <div
            className="quoteWrap"
            data-animate
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            <div
              className="panel quotePanel"
              style={{
                padding: "16px 26px 22px",
                maxWidth: 800,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p className="quoteText" style={{ marginBottom: 22 }}>
                “Modern PayEngine helped us compress receivables and payables,
                forecast FX exposure with confidence, and consolidate payments
                into a single, more efficient operating layer.”
              </p>

              <div className="quoteAuthor">
                — Chief Financial Officer, Global Employer
              </div>
            </div>
          </div>

          {/* BALANCE — HOME FEATURE */}
          <div style={{ marginTop: 34 }}>
            <div className="panel balancePanel">
              <div className="balanceText">
                <h3 className="balanceH3">
                  An employee pay & remittance rail
                </h3>

                <p className="p" style={{ marginTop: 12 }}>
                  Faster access to earnings, international remittance, and
                  family support — governed through Modern PayEngine.
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

              {/* MOCKUP (DESKTOP ONLY) */}
              <div className="balanceMock hideOnMobile">
                <Image
                  src="/balance-ui.png"
                  alt="Balance employee pay interface"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
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
