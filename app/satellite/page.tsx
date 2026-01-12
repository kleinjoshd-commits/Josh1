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
            value reliably across borders, currencies, and complex operating
            environments. Satellite-informed infrastructure strengthens the
            control layer behind those flows—supporting continuity, independent
            validation, and out-of-band assurance—without changing customer
            workflows or payment rails.
          </p>

          {/* TOP GRID (2 PANELS) */}
          <div className="kycGrid" style={{ marginTop: 26 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What stays the same</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Payments work exactly as expected—standard integrations, standard
                compliance, familiar workflows. Satellite-informed capabilities
                operate quietly in the background to strengthen reliability and
                trust without adding operational complexity.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why we’re credible in space</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Members of our founding team have launched and operated
                cryptographic transaction nodes in orbital environments,
                including aboard the International Space Station. That experience
                informs how we design for resilience, independent validation, and
                network-agnostic trust today—while keeping execution on familiar
                rails.
              </p>
            </div>
          </div>

          {/* CORE BENEFITS (2 PANELS INSTEAD OF 4) */}
          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Security + Integrity</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-informed cryptographic controls add a physically
                separated trust layer outside purely terrestrial infrastructure—
                reducing exposure to localized attack surfaces and supporting
                clearer assurance that critical payment instructions, approvals,
                and releases have not been altered.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Resilience + Accessibility</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Alternative validation and connectivity paths support continuity
                when ground networks are degraded, congested, or unavailable—
                extending reliable operations to remote, maritime, and
                infrastructure-challenged environments without changing the user
                experience.
              </p>
            </div>
          </div>

          {/* APPLICATION (2 PANELS TOTAL) */}
          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How it applies</h3>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Modern PayEngine:</strong> strengthens key moments in the
                lifecycle—funding, FX, approvals, and payout authorization—by
                adding independent assurance where reliability matters most.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Balance:</strong> improves wallet availability and
                transaction assurance in distributed or higher-risk environments
                while keeping the experience simple.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Launching this year:</strong> through a partner deployment,
                Modern PayEngine will have access to satellite-based private key
                generation in space to further strengthen independence for
                critical control events—without changing custody models or how
                money moves.
              </p>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link className="btnSecondary" href="/modern-payengine">
                  Explore Modern PayEngine
                </Link>
                <Link className="btnSecondary" href="/balance">
                  Explore Balance
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Control plane, not the rail</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite doesn’t replace banks, payment rails, or execution
                providers. It strengthens the authorization and validation layer
                above them—so decision authority persists even when
                infrastructure is degraded.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                Execution remains handled by trusted local banks for domestic
                settlement and licensed partners for cross-border payments.
              </p>
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
