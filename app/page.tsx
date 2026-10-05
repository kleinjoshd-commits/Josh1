import type { Metadata } from "next";
import { preload } from "react-dom";
import Link from "next/link";
import Nav from "../components/Nav";
import KycForm from "../components/KycForm";
import LicensedMap from "../components/LicensedMap";
import HeroFilm from "../components/HeroFilm";
import FilmPlayer from "../components/FilmPlayer";
import { SegmentVisual } from "../components/ProductVisuals";
import CapabilitySwitch from "../components/CapabilitySwitch";
import HomeDev from "../components/HomeDev";
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
  preload(homepageMedia.brand.modalPoster, { as: "image", fetchPriority: "high" });
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
            <CapabilitySwitch items={caps.items} />
          </div>
        </div>
      </section>

      <section className="hpWho" id="who" aria-labelledby="who-title">
        <div className="hpWrap">
          <h2 id="who-title" data-reveal>
            {homepageCopy.who.heading}
          </h2>
          <div className="whoGrid">
            {segments.map((card) => (
              <Link key={card.href} href={card.href} className="whoCard">
                <span className="whoVisual" aria-hidden="true">
                  <SegmentVisual
                    frame="card"
                    kind={
                      card.href.endsWith("/platforms")
                        ? "platforms"
                        : card.href.endsWith("/fintechs")
                          ? "fintechs"
                          : card.href.endsWith("/businesses")
                            ? "businesses"
                            : "machines"
                    }
                  />
                </span>
                <span className="whoCopy">
                  <strong>{card.title}</strong>
                  <p>{card.body}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hpFilm" id="film" aria-labelledby="film-title">
        <div className="hpWrap">
          <h2 id="film-title">{homepageCopy.filmHeading}</h2>
          <FilmPlayer source={homepageMedia.brand} still="modal" preview={false} preload="none" />
        </div>
      </section>

      <LicensedMap />

      <section className="hpMfam" id="mfam" aria-labelledby="mfam-title">
        <div className="hpWrap" data-reveal>
          <p className="hpEyebrow">{mfam.eyebrow}</p>
          <h2 id="mfam-title">{mfam.heading}</h2>
          <p className="hpLede">{mfam.lede}</p>

          <div className="hpMfamFilm">
            <FilmPlayer source={homepageMedia.mfam} lazy preload="metadata" repeat={false} />
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
          <HomeDev code={product.payoutSample} />
          <p className="devMore">
            <Link className="textLink" href="#kyc">
              {dev.cta}
            </Link>
          </p>
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
