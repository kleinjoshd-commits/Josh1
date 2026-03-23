import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import KycForm from "../components/KycForm";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <section className="homeHero" data-animate>
            <div className="homeHeroFrame">
              <div className="homeHeroCopy">
                <div className="eyebrow">
                  MPE <span className="dot" />
                  Worker wallet + global payments control layer
                </div>

                <h1 className="h1">
                  Help Employees Keep More.
                  <br />
                  Every Payday.
                </h1>

                <p className="p homeHeroLead">
                  MPE helps employers reduce post-payday cost for distributed
                  teams through worker wallets and cross-border payment
                  orchestration after payroll.
                </p>

                <p className="p homeHeroSecondary">
                  Workers often lose value to transfer fees and FX spread after
                  payroll. MPE is built so more of every paycheck reaches the
                  people it is meant for.
                </p>

                <p className="p homeHeroSecondary" style={{ marginTop: 12 }}>
                  Enterprise control stays centralized across partners, rails,
                  and regions while execution is handled through licensed
                  infrastructure.
                </p>

                <div className="btnRow homeHeroActions">
                  <Link className="btnPrimary" href="/#kyc">
                    Request Access
                  </Link>
                  <Link className="btnSecondary" href="/solutions/os">
                    See How MPE Works
                  </Link>
                </div>

                <p className="p homeHeroSecondary" style={{ marginTop: 10, opacity: 0.72 }}>
                  Partner-enabled execution through licensed infrastructure,
                  including Papaya Global.
                </p>
              </div>

              <div className="homeHeroRail" aria-label="Operating priorities">
                <div className="homeHeroRailLabel">What becomes possible</div>
                <div className="homeHeroRailList">
                  {[
                    {
                      title: "Worker outcomes",
                      body: "Lower post-payday friction and improved take-home value in supported cross-border corridors.",
                    },
                    {
                      title: "Employer advantage",
                      body: "A stronger retention and attraction signal for distributed and international teams.",
                    },
                    {
                      title: "Enterprise control",
                      body: "Visibility, approvals, FX oversight, and multi-rail orchestration in one governed layer.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="homeHeroRailItem">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="panel">
              <h2 className="homeSectionTitle">The worker problem is clear</h2>
              <p className="p" style={{ maxWidth: "none", marginTop: 12 }}>
                Every payday, many workers lose <strong>3–10%</strong> to fees
                and FX spread just to send money home. That hurts workers
                directly and leaves employers with a missed opportunity to turn
                workforce financial support into a meaningful retention lever.
              </p>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">
                Why employers deploy MPE
              </h2>
            </div>
            <div className="kycGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Help workers keep more</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Reduce post-payday leakage in supported corridors and
                  structures.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Reduce friction after payroll</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Give teams a cleaner wallet and payout experience after payroll
                  for send-home transfers, employer-directed disbursements, and
                  international travel spend.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Strengthen retention and attraction</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Support workers where it matters most: real take-home
                  outcomes.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Support distributed teams globally</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Consistent financial support across regions, worker types, and
                  payout corridors.
                </p>
              </div>
            </div>
          </section>

          <section className="homeBand homeContextBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">
                How MPE works
              </h2>
              <p className="p homeContextIntro">
                From employer-funded payout workflows to worker outcomes, MPE
                orchestrates the flow while licensed execution partners handle
                regulated money movement where appropriate.
              </p>
            </div>

            <div className="homeTagGrid">
              {[
                "Employer funds payout workflows (from existing payroll systems)",
                "Workers receive into wallet / payout experience for send-home and employee spend use cases",
                "Cross-border send-home flows in supported corridors",
                "MPE orchestrates approvals, routing, FX, release",
              ].map((tag) => (
                <div key={tag} className="homeTag">
                  {tag}
                </div>
              ))}
            </div>

            <div className="homeInfoGrid">
              <div className="panel homeInfoCard">
                <h3>Visibility</h3>
                <p>
                  Clear status across entities, corridors, and payout outcomes.
                </p>
              </div>

              <div className="panel homeInfoCard">
                <h3>Control</h3>
                <p>
                  Governance, approvals, funding logic, and FX oversight in one
                  system of record.
                </p>
              </div>

              <div className="panel homeInfoCard">
                <h3>Flexibility</h3>
                <p>
                  Multi-rail orchestration and partner coordination across
                  regions without rewriting the operating model.
                </p>
              </div>
            </div>
          </section>

          <section className="homeBand homePlatformBand" data-animate>
            <div className="homePlatformGrid">
              <div className="homePlatformCopy">
                <h2 className="homeSectionTitle">
                  Why MPE is the control layer
                </h2>
                <p className="p homePlatformIntro">
                  MPE sits above execution partners and rails, giving employers
                  and finance teams one operational layer across worker wallets,
                  cross-border payments, approvals, and release governance.
                </p>

                <div className="homeModuleRow">
                  {siteConfig.nav.solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="homeModuleChip"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="homeVisualShell">
                <div className="card homeVisualCard">
                  <div className="cardInner">
                    <Image
                      src="/mpe-ui.png"
                      alt="MPE platform interface"
                      width={1600}
                      height={1000}
                      priority
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>

                <p className="p homeVisualCaption">
                  Enterprise-grade control across partners, rails, and regions,
                  with partner-enabled regulated execution.
                </p>
              </div>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="panel">
              <h2 className="homeSectionTitle">
                Resilience across terrestrial and satellite-connected operations
              </h2>
              <p className="p" style={{ maxWidth: "none", marginTop: 12 }}>
                Distributed operations do not always run in stable, always-on
                terrestrial environments. MPE is designed for continuity across
                terrestrial and satellite-connected contexts, with redundancy and
                resilient control paths when reliability matters most.
              </p>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="panel">
              <h2 className="homeSectionTitle">
                Building from workforce wallets today to space-linked financial rails tomorrow
              </h2>
              <p className="p" style={{ maxWidth: "none", marginTop: 12 }}>
                The same control logic needed for globally distributed
                workforces today will matter even more in hybrid
                terrestrial/satellite systems tomorrow. MPE is building toward
                that future: resilient, governed financial orchestration for
                increasingly distributed commerce.
              </p>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="panel homeFinalCta">
              <div
                className="homeFinalCtaInner"
                style={{ display: "grid", justifyItems: "center" }}
              >
                <h2 className="homeSectionTitle homeFinalCtaTitle">
                  See how MPE fits your workforce and payments model
                </h2>
                <p
                  className="p homeFinalCtaCopy"
                  style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
                >
                  Talk to us about your worker wallet, cross-border payment,
                  and enterprise control model.
                </p>
                <div className="btnRow homeFinalCtaActions">
                  <Link className="btnPrimary" href="/#kyc">
                    Request Access
                  </Link>
                  <Link className="btnSecondary" href="/about">
                    Talk to the Team
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
