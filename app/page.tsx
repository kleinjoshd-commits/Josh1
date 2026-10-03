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
import CodeSample from "../components/CodeSample";
import { homepageCopy } from "@/content/homepage";
import { homepageMedia } from "@/content/media";
import { product, segments } from "@/content/product";

export const metadata: Metadata = {
  description:
    "One API for payouts, cards, identity and machine payments. For platforms, fintechs, businesses without an app, and operators of machines. MPE never holds funds.",
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

export default function Home() {
  const caps = homepageCopy.capabilities;
  const mfam = homepageCopy.mfam;
  const dev = homepageCopy.developers;

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

      <section className="hpWho" id="who" aria-labelledby="who-title">
        <div className="hpWrap">
          <h2 id="who-title" data-reveal>
            {homepageCopy.who.heading}
          </h2>
          <div className="whoGrid">
            {segments.map((card) =>
              "image" in card ? (
                <Link key={card.href} href={card.href} className="hpShot">
                  <BuiltPhoto
                    src={card.image}
                    avif="/media/built-machines.avif"
                    className="hpShotDrone"
                    width={1400}
                    height={1708}
                  />
                  <span className="hpShotShade" aria-hidden="true" />
                  <span className="hpShotCopy">
                    <strong>{card.title}</strong>
                    <p>{card.body}</p>
                  </span>
                </Link>
              ) : (
                <Link key={card.href} href={card.href} className="whoText">
                  <strong>{card.title}</strong>
                  <p>{card.body}</p>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <LicensedMap />

      <section className="hpMfam" id="mfam" aria-labelledby="mfam-title">
        <div className="hpWrap" data-reveal>
          <p className="hpEyebrow">{mfam.eyebrow}</p>
          <h2 id="mfam-title">{mfam.heading}</h2>
          <p className="hpLede">{mfam.lede}</p>

          <div className="hpMfamFilm">
            <FilmPlayer source={homepageMedia.mfam} lazy preload="metadata" />
          </div>

          <ul className="hpPoints">
            {mfam.points.map((point) => (
              <li key={point}>
                <LeadCopy text={point} />
              </li>
            ))}
          </ul>

          <div className="btnRow">
            <Link className="btnPrimary" href="/machines">
              {mfam.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="hpDev" id="developers" aria-labelledby="dev-title">
        <div className="hpWrap">
          <p className="hpEyebrow">{dev.eyebrow}</p>
          <h2 id="dev-title">{dev.heading}</h2>
          <p className="hpLede">{dev.lede}</p>
          <CodeSample code={product.payoutSample} label="Payout request" />
          <div className="btnRow">
            <Link className="btnPrimary" href="/developers#kyc">
              {dev.cta}
            </Link>
          </div>
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
