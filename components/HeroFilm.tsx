"use client";

import Link from "next/link";
import { useRef } from "react";
import FilmPlayer, { type FilmPlayerHandle } from "./FilmPlayer";
import { homepageCopy } from "@/content/homepage";
import { homepageMedia } from "@/content/media";

export default function HeroFilm() {
  const filmRef = useRef<FilmPlayerHandle>(null);

  return (
    <>
      <div className="btnRow">
        <Link className="btnPrimary" href="/#kyc">
          {homepageCopy.bookCta}
        </Link>
        <button
          type="button"
          className="btnSecondary"
          onClick={() => filmRef.current?.open()}
        >
          {homepageCopy.watchCta}
        </button>
      </div>

      <div className="hpFilmBlock">
        <h2>{homepageCopy.filmHeading}</h2>
        <FilmPlayer ref={filmRef} source={homepageMedia.brand} preload="auto" />
        <p className="hpCaption hpCaptionLong">{homepageCopy.filmCaption}</p>
        <p className="hpCaption hpCaptionShort">{homepageCopy.filmCaptionShort}</p>
        <p className="hpDisclaimer">{homepageCopy.filmDisclaimer}</p>
      </div>
    </>
  );
}
