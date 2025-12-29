import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Satellite Infrastructure | Modern PayEngine",
  description:
    "Global payments infrastructure—strengthened by satellite-informed security, resiliency, accessibility, and integrity.",
};

export default function SatellitePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="eyebrow">
            Global payments infrastructure <span className="dot" />
            Strengthened by satellite-informed resilience
          </div>

          <h1 className="h1" style={{ marginBottom: 12 }}>
            Global payments,
            <br />
            built to outlast networks
          </h1>

          <p className="p" style={{ maxWidth: 900 }}>
            Modern PayEngine’s core strength is global payment orchestration—moving
            money reliably across borders, currencies, and complex operating
            environments. Satellite-informed capabilities add an optional trust
            and continuity layer that strengthens reliability and security without
            changing customer workflows or payment rails.
          </p>

          {/* CUSTOMER EXPERIENCE & CREDIBILITY */}
          <div className="kycGrid" style={{ marginTop: 26 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Customer experience</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Global payments work exactly as expected—standard integrations,
                standard compliance, and familiar workflows. Satellite-informed
                infrastructure operates quietly in the background to improve
                reliability without adding complexity.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Infrastructure credibility</h3>
              <p className="p" style={{ marginTop: 10 }}>
                In 2017 and 2019, our founding team operated cryptographic
                transaction nodes in orbital environments, including aboard the
                International Space Station. That experience informs how we design
                for resilience, independent validation, and network-agnostic trust
                today.
              </p>
            </div>
          </div>

          {/* FOUR PILLARS */}
          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Security</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-informed cryptographic validation strengthens trust by
                adding a physically separated security layer outside purely
                terrestrial infrastructure—reducing exposure to localized attack
                surfaces.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Resiliency</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Independent validation and connectivity paths help maintain
                continuity when ground networks are degraded, congested, or
                unavailable—supporting dependable confirmation of critical
                payment events.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Accessibility</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Extends reliable payment operations to regions and environments
                where traditional connectivity is inconsistent—supporting remote
                workforces and distributed operations.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Integrity</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Adds stronger auditability and assurance that payment instructions
                have not been altered—supporting verifiable proofs and clearer
                integrity guarantees for high-value or regulated flows.
              </p>
            </div>
          </div>

          {/* PRODUCT APPLICATION */}
          <div className="kycGrid" style={{ marginTop: 26 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Modern PayEngine</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Global payments are the product. Satellite-informed validation and
                resilience strengthen key moments in the flow—funding, FX
                execution, approvals, and payout authorization—by adding
                independent trust layers where reliability matters most.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/modern-payengine">
                  Explore Modern PayEngine
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Balance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Strengthens wallet availability and transaction assurance in
                distributed or higher-risk environments—without altering the user
                experience. The experience stays simple; the infrastructure
                becomes harder to break.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/balance">
                  Explore Balance
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link className="btnPrimary" href="/#kyc">
              Request a walkthrough
            </Link>
            <Link className="btnSecondary" href="/modern-payengine">
              Platform overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

