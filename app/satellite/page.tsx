import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Satellite Infrastructure | Modern PayEngine",
  description:
    "Payments infrastructure beyond terrestrial assumptions—strengthened by satellite-informed security, resilience, and independent assurance.",
};

export default function SatellitePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="eyebrow">
            Payments infrastructure <span className="dot" />
            Beyond terrestrial assumptions
          </div>

          <h1 className="h1" style={{ marginBottom: 12 }}>
            Satellite as a resilience layer
            <br />
            for mission-critical payments
          </h1>

          <p className="p" style={{ maxWidth: 920 }}>
            Modern PayEngine is a payments control plane designed to govern
            funding, FX decision points, approvals, and payout authorization
            across global operations. Satellite-informed infrastructure strengthens
            the trust and continuity layer behind those flows—supporting
            independent validation and out-of-band assurance when terrestrial
            networks degrade—without changing customer workflows or payment rails.
          </p>

          {/* TOP GRID (2 PANELS) */}
          <div className="kycGrid" style={{ marginTop: 26 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What stays the same</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Execution remains on familiar rails: standard integrations,
                standard compliance, trusted local banks for domestic settlement,
                and licensed partners for cross-border payouts. The satellite layer
                operates quietly in the background to strengthen reliability and
                assurance without adding operational complexity.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why this matters</h3>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Most payment stacks assume always-on terrestrial connectivity.</strong>{" "}
                In remote, maritime, infrastructure-challenged, or disrupted
                environments, that assumption breaks—creating risk for payroll,
                vendor payouts, and controlled release workflows. Modern PayEngine
                is designed so decision authority and auditability persist under
                degraded conditions.
              </p>
            </div>
          </div>

          {/* CORE BENEFITS (2 PANELS) */}
          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Independent assurance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-informed cryptographic controls can add a physically
                separated trust layer outside purely terrestrial infrastructure—supporting
                higher assurance that critical payment instructions, approvals,
                and releases have not been altered, even under adverse conditions.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Continuity under degraded networks</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Alternative validation and connectivity paths support continuity
                when ground networks are congested, degraded, or unavailable—extending
                governed operations to remote and distributed environments without
                changing the user experience.
              </p>
            </div>
          </div>

          {/* APPLICATION (2 PANELS TOTAL) */}
          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Where we apply it</h3>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Modern PayEngine:</strong> strengthens key control moments
                in the lifecycle—funding, FX, approvals, and payout authorization—by
                adding independent assurance where reliability matters most.
              </p>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Balance:</strong> improves wallet availability and
                transaction assurance in distributed or higher-risk environments
                while keeping the experience simple.
              </p>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Roadmap:</strong> through partner deployments, Modern PayEngine
                will incorporate additional satellite-informed primitives for
                critical control events—designed to strengthen independence without
                changing custody models or how money moves.
              </p>

              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
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
                above them—so decision authority can persist even when
                infrastructure is degraded.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                Execution remains handled by trusted local banks for domestic
                settlement and licensed partners for cross-border payments.
              </p>

              <p className="p" style={{ marginTop: 10 }}>
                This approach keeps Modern PayEngine provider-agnostic, compliant,
                and deployable alongside existing enterprise finance, payroll, and
                payment stacks.
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
              Explore hybrid-network pilots
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
