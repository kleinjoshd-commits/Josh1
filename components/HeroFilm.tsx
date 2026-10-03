"use client";

import { useRef } from "react";
import { claims } from "@/content/claims";
import { homepageCopy } from "@/content/homepage";
import { homepageMedia } from "@/content/media";
import FilmPlayer, { type FilmPlayerHandle } from "./FilmPlayer";

export default function HeroFilm() {
  const filmRef = useRef<FilmPlayerHandle>(null);

  return (
    <section className="cineHero">
      <FilmPlayer ref={filmRef} source={homepageMedia.brand} background preload="auto" />
      <div className="cineScrim" aria-hidden="true" />
      <div className="cineInner">
        <div className="cineCopy">
          <p className="hpHeroKicker">{homepageCopy.heroKicker}</p>
          <h1>{claims.hero.headline}</h1>
          <p className="cineSub">{claims.hero.subheadline}</p>
          <div className="btnRow">
            <a className="btnPrimary" href="#kyc">
              {homepageCopy.bookCta}
            </a>
            <button
              type="button"
              className="btnSecondary"
              onClick={() => filmRef.current?.open()}
            >
              {homepageCopy.watchCta}
            </button>
          </div>
        </div>
        <div className="cineFoot">
          <div className="cineStats">
            {claims.stats
              .filter((s) => s.strip)
              .map((s) => (
                <div key={s.value}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
          </div>
          <p className="cineFine">{homepageCopy.heroFine}</p>
        </div>
      </div>
    </section>
  );
}
