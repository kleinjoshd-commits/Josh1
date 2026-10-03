import { claims } from "@/content/claims";
import { homepageCopy } from "@/content/homepage";
import PaymentPanel from "./PaymentPanel";
import StatCount from "./StatCount";

export default function HeroFilm() {
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
