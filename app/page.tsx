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
                  Global financial infrastructure
                </div>

                <h1 className="h1">
                  Financial rails where they&apos;re needed most.
                </h1>

                <p className="p homeHeroLead homeHeroAltitude">
                  Global financial infrastructure across 160+ countries.
                  Multi-currency settlement, programmable and agentic payments,
                  terrestrial and orbital.
                </p>

                <p className="p homeHeroSecondary">
                  MPE operates global financial infrastructure across 160+
                  countries today, spanning the cross-border payment corridors
                  that define modern labor and capital flows{"\u2014"}including
                  the United States, Europe, Singapore, the GCC, South Asia,
                  Southeast Asia, Africa, and Latin America. As SpaceBelt
                  KSA&apos;s sovereign orbital constellation comes online, MPE
                  will progressively migrate its commercial stack onto
                  sovereign orbital rails.
                </p>

                <div className="btnRow homeHeroActions">
                  <Link className="btnPrimary" href="/#kyc">
                    Request Access
                  </Link>
                  <Link className="btnSecondary" href="/solutions/balance">
                    See How It Works
                  </Link>
                </div>
              </div>

              <div className="homeHeroRail" aria-label="Operating priorities">
                <div className="homeHeroRailLabel">Why it matters</div>
                <div className="homeHeroRailList">
                  {[
                    {
                      title: "More wages reach home",
                      body: "Built so more of each paycheck reaches the people it was earned for.",
                    },
                    {
                      title: "A real employer benefit",
                      body: "Employers can offer something workers feel immediately: a better outcome after payday.",
                    },
                    {
                      title: "Built for frontier conditions",
                      body: "Hard remittance corridors train the infrastructure future distributed economies will require.",
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

            <div className="homeHeroThesis">
              <h2 className="homeSectionTitle">
                If you can serve an unbanked family in rural Oaxaca, you can serve frontier economies anywhere.
              </h2>
              <p className="p homeOrbitLead">
                That includes orbital economies.
              </p>
              <p className="p homeHeroSecondary homeHeroThesisBody">
                If financial infrastructure can work across borders, weak
                connectivity, underbanked recipients, and hard operating
                conditions on Earth, it is already being trained for frontier
                environments.
              </p>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="panel" style={{ textAlign: "center" }}>
              <h2 className="homeSectionTitle">We start where the system fails people</h2>
              <p className="p" style={{ maxWidth: "none", marginTop: 12 }}>
                Every payday, many workers lose <strong>3-10%</strong> of their
                wages just to send money home. Fees take a cut. Bad FX erodes
                value. Delays create stress. Families in rural and underbanked
                regions are often left with fewer options when they need money
                most.
              </p>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Why employers offer MPE</h2>
            </div>
            <div className="kycGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Help employees keep more</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  If workers send money abroad every month, improving that
                  outcome matters immediately.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Turn support into retention</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  A real financial benefit creates loyalty in a way generic
                  perks do not.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Stand out in hiring</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  MPE is easy to understand: help workers send more money home
                  and protect more of what they earn.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Support distributed teams</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Built for workforces whose financial lives span borders,
                  currencies, travel, and inconsistent access.
                </p>
              </div>
            </div>
          </section>

          <section className="homeBand homeContextBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">How MPE works</h2>
              <p className="p homeContextIntro">
                The model is simple. Employers offer MPE as a workforce
                benefit. Workers get a wallet built for sending money home,
                holding value in USD, and accessing funds across borders.
                Licensed partners handle regulated execution where appropriate.
              </p>
            </div>

            <div className="homeTagGrid">
              {[
                "Employers offer MPE as a workforce benefit after payroll",
                "Workers receive a wallet for send-home transfers, employee payments, and international travel use",
                "Families access funds without relying on a traditional bank account in supported regions",
                "USD-held balances and satellite-accessible cards extend reach where terrestrial systems are weak",
              ].map((tag) => (
                <div key={tag} className="homeTag">
                  {tag}
                </div>
              ))}
            </div>

            <div className="homeInfoGrid">
              <div className="panel homeInfoCard">
                <h3>Free remittance</h3>
                <p>
                  Workers move money home without losing a share of each transfer
                  to avoidable fees.
                </p>
              </div>

              <div className="panel homeInfoCard">
                <h3>Protected value</h3>
                <p>
                  USD-held balances help workers and families reduce exposure to
                  local currency devaluation and volatility.
                </p>
              </div>

              <div className="panel homeInfoCard">
                <h3>Partner-enabled execution</h3>
                <p>
                  MPE orchestrates the experience while licensed partners support
                  regulated money movement and delivery.
                </p>
              </div>
            </div>
          </section>

          <section className="homeBand homePlatformBand" data-animate>
            <div className="homePlatformGrid">
              <div className="homePlatformCopy">
                <h2 className="homeSectionTitle">
                  Why MPE matters beyond the wallet
                </h2>
                <p className="p homePlatformIntro">
                  Behind the worker experience is one governed layer for
                  approvals, routing, FX oversight, release logic, and
                  visibility across partners, rails, and regions.
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
              </div>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="panel" style={{ textAlign: "center" }}>
              <h2 className="homeSectionTitle">
                Why this matters
              </h2>
              <p className="p" style={{ maxWidth: "none", marginTop: 12 }}>
                For workers, it means more of each paycheck reaches home. For
                families, it means better access, stronger value protection,
                and less dependence on fragile local infrastructure. For
                employers, it means offering a benefit people understand
                immediately and remember for the right reasons.
              </p>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="panel" style={{ textAlign: "center" }}>
              <h2 className="homeSectionTitle">
                Where resilience becomes necessary
              </h2>
              <p className="p" style={{ maxWidth: "none", marginTop: 12 }}>
                Some workers and families live at the edge of conventional
                financial access. Weak connectivity, rural distance, and
                limited banking coverage are not edge cases for them. They are
                normal operating conditions. The platform is designed with that
                reality in mind.
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
                  Build what comes next by solving what matters now
                </h2>
                <p
                  className="p homeFinalCtaCopy"
                  style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
                >
                  MPE is for employers, partners, and operators who want to
                  help workers keep more of what they earn and extend financial
                  access into harder environments.
                </p>
                <div className="btnRow homeFinalCtaActions">
                  <Link className="btnPrimary" href="/#kyc">
                    Request Access
                  </Link>
                  <Link className="btnSecondary" href="/about">
                    Talk to Us
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
