import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Industries | MPE",
  description:
    "Financial infrastructure for distributed and mission-critical operations.",
};

export default function IndustriesPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                Industries <span className="dot" />
                Distributed financial operations
              </div>

              <h1 className="h1">Built for Distributed, Global Operations</h1>

              <p className="p" style={{ maxWidth: 900 }}>
                Organizations operating across regions, contractors, assets,
                and partners require financial control that matches the
                complexity of their operations. MPE provides a single
                operational layer for managing payments across distributed and
                mission-critical environments.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Common challenge</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Whether supporting maritime fleets, logistics networks, defense
                operations, infrastructure projects, construction teams, or
                seasonal agriculture workforces, these organizations share the
                same operational reality: distributed teams, multiple
                currencies/providers, limited visibility, and high operational
                risk.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 24 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Maritime</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Support global crews, port operations, and cross-border vendor
                payments for fleets operating worldwide.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Logistics &amp; Supply Chain</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Manage payments across carriers, contractors, warehouses, and
                partners spanning multiple regions.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Defense &amp; Government Support</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Enable controlled, auditable payments for distributed personnel,
                vendors, and operational partners.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Construction &amp; Field Services</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Control payments for distributed crews, subcontractors, and
                project-based operations.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Energy &amp; Infrastructure</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Coordinate financial operations across remote sites,
                contractors, and multi-entity project structures.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Agriculture &amp; Seasonal Operations</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Manage payments for seasonal, mobile, and international labor
                forces.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Built for Continuous Operations</h3>
              <p className="p" style={{ marginTop: 10, maxWidth: "none" }}>
                MPE is designed for organizations that cannot afford fragmented
                financial control across distributed teams, providers, and
                operating environments.
              </p>
              <p className="p" style={{ marginTop: 10, maxWidth: "none" }}>
                It supports resilient financial operations with governed
                approvals, visibility across execution partners, and workflows
                that remain usable in complex and constrained environments.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Link className="btnPrimary" href="/#kyc">
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
