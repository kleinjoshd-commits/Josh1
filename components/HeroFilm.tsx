import { preload } from "react-dom";
import { claims } from "@/content/claims";
import { homepageCopy } from "@/content/homepage";
import { homepageMedia } from "@/content/media";
import FilmPlayer from "./FilmPlayer";
import PaymentPanel from "./PaymentPanel";
import StatCount from "./StatCount";

export default function HeroFilm() {
  preload(homepageMedia.brand.loopPosterWebp, { as: "image", fetchPriority: "high" });

  return (
    <section className="cineHero">
      <div className="cineInner">
        <div className="cineTop">
          <div className="cineCopy">
            <p className="hpHeroKicker">{homepageCopy.heroKicker}</p>
            <h1>{claims.hero.headline}</h1>
            <p className="cineSub">{claims.hero.subheadline}</p>
            <div className="btnRow">
              <a className="btnPrimary" href="#kyc">
                {homepageCopy.bookCta}
              </a>
            </div>
          </div>
          <div className="cineMedia">
            <div className="heroFrame">
              <img
                className="heroPoster"
                src={homepageMedia.brand.loopPosterWebp}
                alt=""
                width={1600}
                height={900}
                decoding="sync"
                fetchPriority="high"
              />
              <FilmPlayer source={homepageMedia.brand} framed preload="auto" />
            </div>
            <PaymentPanel />
          </div>
          <div className="cineFoot">
            <div className="cineStats">
              {claims.stats
                .filter((s) => s.strip)
                .map((s) => (
                  <div key={s.value}>
                    <StatCount value={s.value} />
                    <span>{s.label}</span>
                  </div>
                ))}
            </div>
            <p className="cineFine">{homepageCopy.heroFine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
