import Nav from "../../components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Satellite Infrastructure | MPE",
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
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                Payments infrastructure <span className="dot" />
                Satellite resilience
              </div>

              <h1 className="h1" style={{ marginBottom: 12 }}>
                Satellite is part of the resilience layer
              </h1>

              <p className="p" style={{ maxWidth: 920 }}>
                This page is about operating continuity, not brand theater.
                Satellite-informed infrastructure acts as a resilience layer
                behind critical control events when terrestrial assumptions
                break down.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 920 }}>
                That matters in remote, disrupted, and connectivity-constrained
                environments where decision authority, validation, and audit
                continuity still need to hold.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What satellite does here</h3>
              <p className="p" style={{ marginTop: 10 }}>
                It does not replace banks, rails, or execution partners. It
                strengthens the trust, validation, and continuity layer around
                the payment workflow when reliability matters most.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 26 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What stays the same</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Execution remains on familiar rails: standard integrations,
                standard compliance, trusted local banks for domestic settlement,
                and licensed partners for cross-border payouts. The satellite
                layer operates quietly in the background to strengthen
                reliability and assurance without changing customer workflows.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Where it matters most</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Most payment stacks assume always-on terrestrial connectivity.
                In remote, maritime, infrastructure-challenged, or disrupted
                environments, that assumption breaks. MPE is designed so
                decision authority and auditability can persist under degraded
                conditions.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Independent assurance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite-informed cryptographic controls can add a physically
                separated trust layer outside purely terrestrial infrastructure,
                supporting higher assurance that critical instructions,
                approvals, and releases have not been altered under adverse
                conditions.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Continuity under degraded networks</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Alternative validation and connectivity paths support continuity
                when ground networks are congested, degraded, or unavailable,
                extending governed operations to remote and distributed
                environments without changing the user experience.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 22 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Where we apply it</h3>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>MPE:</strong> strengthens key control moments
                in the lifecycle—funding, FX, approvals, and payout authorization—by
                adding independent assurance where reliability matters most.
              </p>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>MPE Balance:</strong> improves wallet availability and
                transaction assurance in distributed or higher-risk environments
                while keeping the experience simple.
              </p>

              <p className="p" style={{ marginTop: 10 }}>
                <strong>Roadmap:</strong> through partner deployments, MPE
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
                <Link className="btnSecondary" href="/solutions/os">
                  Explore MPE OS
                </Link>
                <Link className="btnSecondary" href="/solutions/balance">
                  Explore MPE Balance
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Control plane, not the rail</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Satellite does not replace banks, payment rails, or execution
                providers. It strengthens the authorization and validation layer
                above them so decision authority can persist even when
                infrastructure is degraded.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                Execution remains handled by trusted local banks for domestic
                settlement and licensed partners for cross-border payments.
              </p>

              <p className="p" style={{ marginTop: 10 }}>
                This approach keeps MPE provider-agnostic, compliant, and
                deployable as a layered control platform or as a central
                operating stack across payment workflows.
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
            <Link className="btnSecondary" href="/solutions/os">
              MPE OS overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
