import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import KycForm from "../components/KycForm";
import LicensedMap from "../components/LicensedMap";
import HeroFilm from "../components/HeroFilm";
import FilmPlayer from "../components/FilmPlayer";
import { claims } from "@/content/claims";
import { homepageCopy } from "@/content/homepage";
import { homepageMedia } from "@/content/media";

export const metadata: Metadata = {
  description: claims.hero.subheadline,
};

function LeadCopy({ text }: { text: string }) {
  const splitAt = text.indexOf(". ");
  if (splitAt === -1) return <>{text}</>;
  return (
    <>
      <strong>{text.slice(0, splitAt + 1)}</strong>
      <span>{text.slice(splitAt + 2)}</span>
    </>
  );
}

// =====================================================================
// Homepage. The hero, orchestration, and MFAM sections use the approved
// Oct 3 copy. The map, products, trust, and partnership doors stay.
// =====================================================================

export default function Home() {
  const orch = homepageCopy.orchestration;
  const mfam = homepageCopy.mfam;

  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap hpHeroWrap">
          <p className="hpHeroKicker">{homepageCopy.heroKicker}</p>
          <h1>{claims.hero.headline}</h1>
          <p className="ebSub">{claims.hero.subheadline}</p>
          <HeroFilm />
          <div className="ebStats">
            {/* The 140+ countries figure lives with the map just below;
                showing it here too said the same thing twice. */}
            {claims.stats
              .filter((s) => !s.label.includes("countries where money lands"))
              .map((s) => (
                <div className="ebStat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
          </div>
          <p className="ebAttribution">{claims.serviceAttribution}</p>
        </div>
      </section>

      <section className="hpOrch" id="orchestration" aria-labelledby="orch-title">
        <div className="hpWrap">
          <p className="hpEyebrow">{orch.eyebrow}</p>
          <h2 id="orch-title">{orch.heading}</h2>
          <p className="hpLede">{orch.lede}</p>

          <h3 className="hpBlockLabel">{orch.howLabel}</h3>
          <ol className="hpSteps">
            {orch.steps.map((step) => (
              <li key={step}>
                <LeadCopy text={step} />
              </li>
            ))}
          </ol>

          <h3 className="hpBlockLabel">{orch.workersLabel}</h3>
          <ul className="hpTiles">
            {orch.tiles.map((tile) => (
              <li key={tile}>
                <LeadCopy text={tile} />
              </li>
            ))}
          </ul>

          <div className="hpSplit">
            <article>
              <h3>{orch.appHeading}</h3>
              <p>{orch.appBody}</p>
            </article>
            <article>
              <h3>{orch.revenueHeading}</h3>
              <p>{orch.revenueBody}</p>
            </article>
          </div>

          <p className="hpTrust">{orch.trust}</p>
        </div>
      </section>

      {/* The map. No seam with the sections around it: the same emerald. */}
      <LicensedMap />

      {/* 3, The statement. One sentence, a screen of air. */}
      <section className="emeraldBand">
        <div className="ebWrap ebStatement" style={{ paddingTop: 34, paddingBottom: 64 }}>
          <h2>Everyone holds one piece.<br />Nobody holds the person.</h2>
          <p>
            Payroll stops at the wage. Banks hold accounts they cannot fill.
            Counters see a transaction, never a customer. MPE is the missing
            layer: the relationship itself.
          </p>
        </div>
      </section>

      {/* 4, Products. Four cards, one line each. */}
      <section className="deckLight">
        <div className="container deckInner">
          <section className="homeBand" data-animate>
            <div className="productTrio">
              <Link href="/solutions/send" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Send</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Money home, honestly priced.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/workforce" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  From the payroll file to the family.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/network" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Every corridor, the best licensed partner.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/os" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE OS</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Every payment approved, routed and proven.
                </p>
                <span className="go">Explore →</span>
              </Link>
            </div>
          </section>

          {/* Trust, first-class: the category norm is a compliance section
              on the homepage. Ours states the architecture, not badges. */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Built to be trusted</h2>
            </div>
            <div className="outcomeGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Never holds funds</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  MPE does not hold or transmit customer funds, and does not
                  store customer identity documents. Enforced by architecture,
                  not policy.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Licensed institutions, every market</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Money transfer and payment services within MPE programmes are
                  provided by licensed partner institutions in each market,
                  under their own regulators.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Everything on the record</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Every approval, release and status change is written to a
                  permanent record as it happens. When a regulator asks, the
                  answer is already on file.
                </p>
              </div>
            </div>
            <div className="linkRow" style={{ marginTop: 20 }}>
              <Link className="btnSecondary" href="/trust-controls">How trust works</Link>
            </div>
          </section>
        </div>
      </section>

      {/* 6, Two doors. Employers and institutions, one paragraph each. */}
      <section className="emeraldBand" id="partners">
        <div className="ebWrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
          <div className="ebTag">WORKING TOGETHER</div>
          <div className="ebDoors">
            <div className="ebDoor">
              <h3>For employers</h3>
              <p>
                One programme from payroll to payday: hire, onboard and pay
                across borders, and your workforce enrolls on site, in their
                own languages, with licensed partners carrying every wage home.
              </p>
              <Link className="btnPrimary" href="/#kyc">Request Access</Link>
            </div>
            <div className="ebDoor">
              <h3>For licensed institutions</h3>
              <p>
                Deposits, flow and customers you cannot acquire yourself, on
                your licence, under your regulation. MPE holds no funds and
                earns only when the partnership does.
              </p>
              <Link className="btnSecondary" href="/#kyc">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hpMfam" id="mfam" aria-labelledby="mfam-title">
        <div className="hpWrap">
          <p className="hpEyebrow">{mfam.eyebrow}</p>
          <h2 id="mfam-title">{mfam.heading}</h2>
          <p className="hpLede">{mfam.lede}</p>

          <div className="hpMfamFilm">
            <FilmPlayer source={homepageMedia.mfam} lazy preload="metadata" />
            <p className="hpDisclaimer">{homepageCopy.filmDisclaimer}</p>
          </div>

          <ul className="hpPoints">
            {mfam.points.map((point) => (
              <li key={point}>
                <LeadCopy text={point} />
              </li>
            ))}
          </ul>

          <p className="hpPlaces">{mfam.places}</p>
          <div className="btnRow">
            <Link className="btnPrimary" href="/#kyc">
              {mfam.cta}
            </Link>
          </div>
          <p className="hpFine">{mfam.status}</p>
        </div>
      </section>

      <KycForm
        title={homepageCopy.closing.heading}
        lede={homepageCopy.closing.lede}
        submitLabel={homepageCopy.closing.cta}
      />
    </main>
  );
}
