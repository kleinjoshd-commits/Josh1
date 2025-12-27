import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Satellite Infrastructure | Modern PayEngine",
  description:
    "Satellite-enabled security, resiliency, accessibility, and integrity for global payment systems, including space-based private key generation and transaction validation.",
};

export default function SatellitePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="eyebrow">
            Satellite-enabled infrastructure <span className="dot" />
            Security, resiliency, and accessibility
          </div>

          <h1 className="h1" style={{ marginBottom: 12 }}>
            A space-based trust layer
            <br />
            for global payments
          </h1>

          <p className="p" style={{ maxWidth: 900 }}>
            Modern PayEngine incorporates satellite-enabled infrastructure as an
            additional trust and continuity layer within global payment
            operations. By introducing space-based cryptographic and connectivity
            components, payment workflows gain stronger security guarantees,
            higher resiliency, broader accessibility, and verifiable integrity.
          </p>

          {/* FOUR PILLARS */}
          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Security</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Cryptographic private keys are generated in space and used for
                transaction validation, creating a physically separated trust
                boundary outside terrestrial infrastructure and reducing
                exposure to localized attack surfaces.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Resiliency</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite connectivity provides an independent operational path
                when terrestrial networks are degraded, congested, or
                unavailable—supporting continuous validation and confirmation
                of payment events.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Accessibility</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-enabled infrastructure extends secure payment access
                to regions and environments where traditional connectivity is
                inconsistent, supporting distributed and remote operations.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Integrity</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Transactions validated using space-based cryptographic signals
                provide verifiable proof, auditability, and assurance that
                payment instructions have not been altered or compromised.
              </p>
            </div>
          </div>

          {/* PRODUCT APPLICATION */}
          <div className="kycGrid" style={{ marginTop: 26 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Modern PayEngine</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-enabled security and validation strengthen employer
                payment infrastructure by adding an external trust layer to
                funding, foreign exchange execution, and payout authorization.
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
                Satellite-enabled access and integrity support worker wallet
                availability and transaction assurance in distributed or
                high-risk environments, without altering the user experience.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link className="btnSecondary" href="/balance">
                  Explore Balance
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
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
