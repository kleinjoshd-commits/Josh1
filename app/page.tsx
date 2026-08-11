import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import KycForm from "../components/KycForm";
import LicensedMap from "../components/LicensedMap";
import { siteConfig } from "@/lib/siteConfig";
import { claims } from "@/content/claims";

// The gap (Tier 2.4) — verbatim rows.
const GAP_ROWS = [
  { who: "Payroll platforms", what: "stop the moment the wage lands; they serve the employer" },
  { who: "Banks", what: "hold the account but cannot acquire or engage a migrant workforce" },
  { who: "Exchange houses & money transfer operators", what: "meet the worker only at the counter, transaction by transaction" },
  { who: "Payment rails", what: "are pipes sold to all of the above; they serve nobody directly" },
];

// MPE is that layer (Tier 2.5) — verbatim cards.
const LAYER_CARDS = [
  {
    title: "The Product",
    body: "A mobile-first money experience for the actual worker — live honest rates, three-tap sends, assisted enrolment at a physical desk, twenty languages structurally supported.",
  },
  {
    title: "The Compliance Perimeter",
    body: "MPE never holds funds, never stores identity documents, never performs licensed activity — enforced by architecture, not policy. One product works with any licence in any country.",
  },
  {
    title: "The Control Core",
    body: "Every transaction approved against local rules, every partner swappable without touching the product, every action written to a permanent audit record.",
  },
];

// How the money moves (Tier 2.6).
const CHAIN = [
  { step: "Employer", mark: "ENTRY POINT", ours: false },
  { step: "Wage lands", mark: "ENTRY POINT", ours: false },
  { step: "Worker engages", detail: "MPE app + desk", mark: "ALWAYS MPE", ours: true },
  { step: "Licensed partners", mark: "ENTRY POINT", ours: false },
  { step: "Family receives", mark: "ENTRY POINT", ours: false },
];

// One multi-rail network (Tier 3.1) — verbatim cards, no partner names.
const NETWORK_CARDS = [
  { title: "Global payroll & employer of record", body: "180 countries · 130+ payout currencies · full workforce capability delivered under the MPE brand" },
  { title: "Corridor coverage", body: "200+ direct bank connections · payout & collection in 140+ countries · cash over the counter" },
  { title: "Licensed across the West", body: "UK · EU/EEA · Canada · Australia · Hong Kong · 36 US states · Israel" },
  { title: "Licensed across the Gulf & Asia", body: "GCC states · Singapore (MAS-licensed) · Malaysia · India · Hong Kong · Philippines" },
  { title: "Institutional-grade", body: "client funds safeguarded at globally systemically important banks · some of the Gulf's largest payroll-protection programmes run inside the network" },
  { title: "Swappable by design", body: "any corridor can move to a new provider seamlessly; the customer relationship and history stay with MPE throughout" },
];

// For institutions (Tier 3.3). Headings per the instruction file; card copy
// authored in site voice (the referenced redesign HTML was not provided).
const INSTITUTION_CARDS = [
  {
    title: "Customer acquisition",
    body: "A workforce you cannot reach through a branch or an ad budget arrives through their employer, enrolled and engaged, under your licence.",
  },
  {
    title: "Deposits that stay",
    body: "Wages that land every month and stay engaged beat balances bought with promotions — the deposit arrives with the relationship attached.",
  },
  {
    title: "Economics that work",
    body: "Programme flow concentrated corridor by corridor, with the volume and repeat behaviour that make corridor economics work.",
  },
  {
    title: "The employer channel",
    body: "One employer relationship delivers a whole workforce at once — acquisition economics no consumer channel can match.",
  },
];

// Working together (Tier 3.5).
const DOORS = [
  { title: "Start a corridor", body: "A programme on a partner's licence with MPE's worker layer on top — one corridor live as a pilot, then expanded lane by lane." },
  { title: "Start with the workforce", body: "Payroll and onboarding for an employer base first — accounts filling from the first pay cycle, with licensed partners throughout." },
  { title: "Start a market", body: "A country entry co-built around you — licence-holder, corridor partner and MPE's acquisition layer assembled together." },
];

const TIMELINE = [
  { phase: "SCOPE", span: "two weeks" },
  { phase: "PAPER", span: "~30 days" },
  { phase: "PILOT", span: "~90 days" },
  { phase: "SCALE", span: "corridor by corridor" },
];

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
                  The relationship layer
                </div>

                <h1 className="h1">{claims.hero.headline}</h1>

                <p className="p homeHeroLead">{claims.hero.subheadline}</p>

                <p className="p homeHeroSecondary">
                  {claims.serviceAttribution} MPE builds the product, the
                  enrolment and the relationship — and keeps them portable
                  across every institution in the network.
                </p>

                <div className="btnRow homeHeroActions">
                  <Link className="btnPrimary" href="/#kyc">
                    Request Access
                  </Link>
                  <Link className="btnSecondary" href="/#institutions">
                    Partner with MPE
                  </Link>
                </div>
              </div>
            </div>

            {/* Stat strip (Tier 2.2) — the only approved figures. */}
            <div className="statStrip" data-animate>
              {claims.stats.map((s) => (
                <div key={s.label} className="statCell">
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <section className="homeBand homeStartBand" data-animate>
              <div className="panel" style={{ textAlign: "center" }}>
                <h2 className="homeSectionTitle">We start where the system fails people</h2>
                <p className="p" style={{ maxWidth: "none", marginTop: 12 }}>
                  Every payday, many workers lose <strong>{claims.wageLossRange}</strong> of
                  their wages just to send money home. Fees take a cut. Bad FX
                  erodes value. Delays create stress. Families in rural and
                  underbanked regions are often left with fewer options when
                  they need money most.
                </p>
              </div>
            </section>

            <div className="homeHeroThesis">
              <h2 className="homeSectionTitle">
                If you can serve an unbanked family in rural Oaxaca, you can serve frontier economies anywhere.
              </h2>
              <p className="p homeHeroSecondary homeHeroThesisBody">
                Financial infrastructure that works across borders, weak
                connectivity, underbanked recipients, and hard operating
                conditions is infrastructure that works, full stop. That is
                the bar MPE builds to.
              </p>
            </div>
          </section>

          {/* The gap (Tier 2.4) */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Everyone holds one piece. Nobody holds the person.</h2>
            </div>
            <div className="gapRows">
              {GAP_ROWS.map((r) => (
                <div key={r.who} className="gapRow">
                  <b>{r.who}</b>
                  <span>{r.what}</span>
                </div>
              ))}
            </div>
            <div className="gapBanner">
              The missing layer — converting a worker into an engaged financial
              customer at the moment the wage lands — is not something any
              licensed institution is built to do.
            </div>
          </section>

          {/* MPE is that layer (Tier 2.5) */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">MPE is that layer</h2>
              <p className="p homeContextIntro">
                One product, working with licensed partners, portable across
                every institution and every market
              </p>
            </div>
            <div className="homeInfoGrid">
              {LAYER_CARDS.map((c) => (
                <div key={c.title} className="panel homeInfoCard">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How the money moves (Tier 2.6) */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">How the money moves — and where we enter</h2>
            </div>
            <div className="chainFlow">
              {CHAIN.map((c, i) => (
                <div key={c.step} className={"chainStep" + (c.ours ? " chainOurs" : "")}>
                  <div className="chainMark">{c.mark}</div>
                  <b>{c.step}</b>
                  {c.detail && <span>{c.detail}</span>}
                  {i < CHAIN.length - 1 && <div className="chainArrow" aria-hidden>→</div>}
                </div>
              ))}
            </div>
            <p className="p" style={{ textAlign: "center", marginTop: 18 }}>
              Start with onboarding, start with payroll, start with sending
              money home — every starting point grows toward the same
              relationship in the middle.
            </p>
          </section>

          {/* Employer track (Tier 0: kept) */}
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
                  MPE is easy to understand: a benefit workers feel on payday
                  and remember at renewal.
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

          {/* Platform band (Tier 0: kept, retitled off custody language) */}
          <section className="homeBand homePlatformBand" data-animate>
            <div className="homePlatformGrid">
              <div className="homePlatformCopy">
                <h2 className="homeSectionTitle">One governed layer behind the experience</h2>
                <p className="p homePlatformIntro">
                  Behind the worker experience is one governed layer for
                  approvals, routing, FX oversight, release logic, and
                  visibility across partners, rails, and regions.
                </p>

                <div className="homeModuleRow">
                  {siteConfig.nav.solutions.map((item) => (
                    <Link key={item.href} href={item.href} className="homeModuleChip">
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

          {/* One multi-rail network (Tier 3.1) */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">One multi-rail network</h2>
            </div>
            <div className="kycGrid">
              {NETWORK_CARDS.map((c) => (
                <div key={c.title} className="panel">
                  <h3 style={{ marginTop: 0 }}>{c.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* The map (Tier 3.4) — the one dark emerald band on the site. */}
      <LicensedMap />

      <section className="deckLight">
        <div className="container deckInner">
          {/* Markets (Tier 3.2) */}
          <section className="homeBand" data-animate id="markets">
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Markets</h2>
            </div>
            <div className="marketGrid">
              {claims.markets.map((m) => (
                <div key={m.name} className="marketCell">
                  <b>{m.name}</b>
                  <span className={"marketPill pill-" + m.status.toLowerCase().replace(/\s+/g, "-")}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* For institutions (Tier 3.3) */}
          <section className="homeBand" data-animate id="institutions">
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">What MPE brings a licensed institution</h2>
              <p className="p homeContextIntro">
                Deposits, flow and customers you cannot acquire yourself — on
                your licence, under your regulation.
              </p>
            </div>
            <div className="kycGrid">
              {INSTITUTION_CARDS.map((c) => (
                <div key={c.title} className="panel">
                  <h3 style={{ marginTop: 0 }}>{c.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{c.body}</p>
                </div>
              ))}
            </div>
            <div className="gapBanner">
              Built to make your licence more valuable.
            </div>
          </section>

          {/* Working together (Tier 3.5) */}
          <section className="homeBand" data-animate id="working-together">
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Working together</h2>
            </div>
            <div className="homeInfoGrid">
              {DOORS.map((d) => (
                <div key={d.title} className="panel homeInfoCard">
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>
            <div className="timelineRow">
              {TIMELINE.map((t, i) => (
                <div key={t.phase} className="timelineStep">
                  <b>{t.phase}</b>
                  <span>{t.span}</span>
                  {i < TIMELINE.length - 1 && <div className="chainArrow" aria-hidden>→</div>}
                </div>
              ))}
            </div>
            <p className="p small" style={{ textAlign: "center", marginTop: 8 }}>
              Timelines illustrative — regulatory and partner steps vary by market.
            </p>
            <div className="gapBanner">
              Aligned by design — MPE earns only when the partnership does.
            </div>
            <div className="btnRow" style={{ justifyContent: "center", marginTop: 20 }}>
              <Link className="btnPrimary" href="/#kyc">Talk to us</Link>
            </div>
          </section>

          {/* Mission voice (Tier 0: kept) */}
          <section className="homeBand" data-animate>
            <div className="panel" style={{ textAlign: "center" }}>
              <h2 className="homeSectionTitle">Where resilience becomes necessary</h2>
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
