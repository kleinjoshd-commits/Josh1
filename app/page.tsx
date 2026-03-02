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
                  The operating system for a new era of payments
              </div>

                <h1 className="h1">Unified Control for Global Payments</h1>

                <p className="p homeHeroLead">
                  Global payments are no longer handled through one bank, one
                  provider, or one operating flow. As workforces, counterparties,
                  and execution paths become more distributed, the financial
                  operating model has to become more coordinated.
                </p>

                <p className="p homeHeroSecondary">
                  MPE gives finance teams that layer: control, visibility,
                  governed execution, FX oversight, multi-network coordination,
                  and satellite-resilient operating continuity in one system.
                </p>

                <p className="p homeHeroSecondary" style={{ marginTop: 12 }}>
                  Deploy MPE as a layered control platform where it adds the
                  most value, or use it as a unified operating stack across
                  the full payment environment.
                </p>

                <div className="btnRow homeHeroActions">
                  <Link className="btnPrimary" href="/#kyc">
                    Request Access
                  </Link>
                  <Link className="btnSecondary" href="/solutions/os">
                    View Platform
                  </Link>
                </div>
              </div>

              <div className="homeHeroRail" aria-label="Operating priorities">
                <div className="homeHeroRailLabel">Operating priorities</div>
                <div className="homeHeroRailList">
                  {[
                    {
                      title: "Control",
                      body: "Approvals, funding governance, FX oversight, and release authority in one system.",
                    },
                    {
                      title: "Execution",
                      body: "AI-informed routing across rails and partner-connected infrastructure as complexity scales.",
                    },
                    {
                      title: "Resilience",
                      body: "Built for distributed, hybrid, and satellite-reliant environments where continuity matters.",
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

          <section className="homeBand homePlatformBand" data-animate>
            <div className="homePlatformGrid">
              <div className="homePlatformCopy">
                <h2 className="homeSectionTitle">
                  One operational layer across your entire payment ecosystem
                </h2>
                <p className="p homePlatformIntro">
                  The next era of payments will be defined by orchestration,
                  not isolated provider workflows. MPE gives finance teams a
                  single operational layer across execution, control, and
                  visibility.
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
                  MPE sits above providers, giving finance a single system of
                  control as workflows scale across entities, regions, partners,
                  and execution paths.
              </p>
            </div>
            </div>

            <div className="homePillarGrid">
              <div className="panel homePillarCard">
                <h3>Orchestrate</h3>
                <p>Coordinate banks, providers, and AI-informed multi-network execution in one governed layer</p>
              </div>

              <div className="panel homePillarCard">
                <h3>Control</h3>
                <p>Govern policy, approvals, funding, and FX exposure centrally</p>
              </div>

              <div className="panel homePillarCard">
                <h3>Maintain Visibility</h3>
                <p>Bring status, audit, and reporting into one system of record</p>
              </div>
            </div>
          </section>

          <section className="homeBand homeContextBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">
                Built for complex payment environments
              </h2>
              <p className="p homeContextIntro">
                MPE is built for finance teams managing distributed operations,
                multiple execution paths, and rising exposure across providers,
                currencies, counterparties, and environments.
              </p>
            </div>

            <div className="homeTagGrid">
              {[
                "Global Workforces",
                "Vendor & Contractor Payments",
                "Distributed Operations",
                "Cross-Border Treasury & FX",
              ].map((tag) => (
                <div key={tag} className="homeTag">
                  {tag}
                </div>
              ))}
            </div>

            <div className="homeInfoGrid">
              <div className="panel homeInfoCard">
                <h3>Enterprise-grade global execution</h3>
                <p>
                  Payments are executed through licensed global banking and
                  payment infrastructure, while MPE keeps multi-network
                  operational control in one place.
                </p>
              </div>

              <div className="panel homeInfoCard">
                <h3>Operational credibility</h3>
                <p>
                  Audit-grade controls, role-based approvals, funding
                  governance, and execution oversight built for finance teams
                  operating at enterprise scale.
                </p>
              </div>

              <div className="panel homeInfoCard">
                <h3>Designed for resilient financial operations</h3>
                <p>
                  Built for finance teams operating across distributed, hybrid,
                  and connectivity-constrained environments where satellite
                  resilience and continuity matter.
                </p>
              </div>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="panel homeFinalCta">
              <div
                className="homeFinalCtaInner"
                style={{ display: "grid", justifyItems: "center" }}
              >
                <h2 className="homeSectionTitle homeFinalCtaTitle">
                  Finance is evolving into a multi-provider operating system
                </h2>
                <p
                  className="p homeFinalCtaCopy"
                  style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
                >
                  MPE is built for that shift: one layer for orchestration,
                  control, FX visibility, and resilient execution across the
                  payment ecosystem enterprises run today and the more
                  distributed one they are growing into next.
                </p>
                <div className="btnRow homeFinalCtaActions">
                  <Link className="btnPrimary" href="/#kyc">
                    Request Access
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
