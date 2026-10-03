import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import KycForm from "../components/KycForm";
import LicensedMap from "../components/LicensedMap";
import HeroFilm from "../components/HeroFilm";
import BuiltPhoto from "../components/BuiltPhoto";
import FilmPlayer from "../components/FilmPlayer";
import LineIcon from "../components/LineIcon";
import RoutingDiagram from "../components/RoutingDiagram";
import { claims } from "@/content/claims";
import { homepageCopy } from "@/content/homepage";
import { homepageMedia } from "@/content/media";

export const metadata: Metadata = {
  description:
    "One integration for payouts, wallets, cards, identity and machine payments. For platforms, people and machines. MPE never holds funds.",
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

// Homepage leads with the platform. Workforce detail, the map, products,
// trust, partnership doors, and MFAM follow.

export default function Home() {
  const caps = homepageCopy.capabilities;
  const built = homepageCopy.builtFor;
  const work = homepageCopy.workforce;
  const mfam = homepageCopy.mfam;

  return (
    <main className="home">
      <Nav />
      <HeroFilm />

      <section className="hpCaps" id="capabilities" aria-labelledby="caps-title">
        <div className="hpWrap">
          <h2 id="caps-title" data-reveal>
            {caps.heading}
          </h2>
          <div data-reveal>
            <RoutingDiagram />
          </div>
          <ul className="hpCapGrid">
            {caps.items.map((item, index) => (
              <li key={item.title} data-reveal style={{ transitionDelay: `${index * 50}ms` }}>
                <LineIcon name={item.icon} />
                <div>
                  <strong>
                    {item.title}
                    {item.title === "Machine payments" ? <span className="hpChip">MFAM</span> : null}
                  </strong>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hpBuilt" id="built-for" aria-labelledby="built-title">
        <div className="hpWrap">
          <h2 id="built-title" data-reveal>
            {built.heading}
          </h2>
          <div className="hpBuiltGrid">
            {built.cards.map((card, index) => (
              <a key={card.title} href={card.href} className="hpShot" data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
                <BuiltPhoto
                  src={card.image}
                  avif={card.image.endsWith("built-machines.webp") ? "/media/built-machines.avif" : undefined}
                  className={card.image.endsWith("built-machines.webp") ? "hpShotDrone" : undefined}
                  width={card.image.endsWith("built-machines.webp") ? 1400 : 1400}
                  height={card.image.endsWith("built-machines.webp") ? 1708 : 880}
                />
                <span className="hpShotShade" aria-hidden="true" />
                <span className="hpShotCopy">
                  <strong>{card.title}</strong>
                  <p>{card.body}</p>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hpOrch" id="workforce" aria-labelledby="work-title">
        <div className="hpWrap" data-reveal>
          <p className="hpEyebrow">{work.eyebrow}</p>
          <h2 id="work-title">{work.heading}</h2>
          <p className="hpLede">{work.lede}</p>

          <h3 className="hpBlockLabel">{work.howLabel}</h3>
          <ol className="hpSteps">
            {work.steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                {step.body}
              </li>
            ))}
          </ol>

          <h3 className="hpBlockLabel">{work.workersLabel}</h3>
          <ul className="hpTiles">
            {work.tiles.map((tile) => (
              <li key={tile.title}>
                <LineIcon name={tile.icon} />
                <strong>{tile.title}</strong>
                {tile.body}
              </li>
            ))}
          </ul>

          <div className="hpSplit">
            <article id="workforce-app">
              <h3>{work.appTitle}</h3>
              <p>{work.appBody}</p>
            </article>
            <article>
              <h3>{work.revenueTitle}</h3>
              <p>{work.revenueBody}</p>
            </article>
          </div>

          <p className="hpTrust">{work.trust}</p>
        </div>
      </section>

      <LicensedMap />

      {/* Products. Four cards, one line each. */}
      <section className="deckLight">
        <div className="container deckInner">
          <section className="homeBand" data-animate>
            <div className="productTrio">
              <Link href="/solutions/send" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Send</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Payouts to any account.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/workforce" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Pay a global workforce.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/network" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Licensed reach, 140+ countries.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/os" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE OS</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Approve, route and prove.
                </p>
                <span className="go">Explore →</span>
              </Link>
            </div>
          </section>

          {/* Trust, first-class: the category norm is a compliance section
              on the homepage. Ours states the architecture, not badges. */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader">
              <h2 className="homeSectionTitle">Built to be trusted</h2>
            </div>
            <div className="outcomeGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Never holds funds</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  {claims.noCustody} Enforced by architecture, not policy.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Licensed institutions, every market</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Payment services in each market are provided by licensed partners,
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
            <div className="linkRow">
              <Link className="btnSecondary" href="/trust-controls">How trust works</Link>
            </div>
          </section>
        </div>
      </section>

      {/* 6, Two doors. Employers and institutions, one paragraph each. */}
      <section className="emeraldBand" id="partners">
        <div className="ebWrap">
          <div className="ebTag">WORKING TOGETHER</div>
          <div className="ebDoors">
            <div className="ebDoor">
              <h3>For employers</h3>
              <p>
                One workforce program on the same integration: hire, onboard
                and pay across borders, with payouts, wallets and cards.
              </p>
              <Link className="btnPrimary" href="/#kyc">Request Access</Link>
            </div>
            <div className="ebDoor">
              <h3>For licensed institutions</h3>
              <p>
                Deposits and customers on your license, under your regulation.
              </p>
              <Link className="btnSecondary" href="/#kyc">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hpMfam" id="mfam" aria-labelledby="mfam-title">
        <div className="hpWrap" data-reveal>
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
