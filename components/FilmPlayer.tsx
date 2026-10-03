"use client";

import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { homepageCopy } from "@/content/homepage";
import type { HomepageFilm } from "@/content/media";

export type FilmPlayerHandle = {
  open: () => void;
};

type Props = {
  source: HomepageFilm;
  /** Below-the-fold films wait until they are near the viewport. */
  lazy?: boolean;
  preload?: "none" | "metadata" | "auto";
};

const FilmPlayer = forwardRef<FilmPlayerHandle, Props>(function FilmPlayer(
  { source, lazy = false, preload = "metadata" },
  ref
) {
  const stageRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [near, setNear] = useState(!lazy);
  const [allowMotion, setAllowMotion] = useState(false);

  useImperativeHandle(ref, () => ({ open: () => setOpen(true) }), []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAllowMotion(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!lazy) return;
    const node = stageRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [lazy]);

  const playLoop = allowMotion && near;

  useEffect(() => {
    const loop = loopRef.current;
    if (!loop) return;
    loop.muted = true;
    if (open) {
      loop.pause();
      return;
    }
    if (playLoop) {
      void loop.play().catch(() => {});
    }
  }, [open, playLoop]);

  return (
    <>
      <div className="hpStage" ref={stageRef}>
        {/* Plain img so a replaced poster file is what the page serves. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={source.loopPoster}
          alt=""
          width={1600}
          height={900}
          decoding="async"
          loading={lazy ? "lazy" : "eager"}
          fetchPriority={lazy ? "low" : "high"}
        />
        {playLoop ? (
          <video
            ref={loopRef}
            poster={source.loopPoster}
            muted
            loop
            playsInline
            autoPlay
            preload={preload}
            tabIndex={-1}
            aria-hidden="true"
          >
            <source src={source.loopWebm} type="video/webm" />
            <source src={source.loopMp4} type="video/mp4" />
          </video>
        ) : null}
        <button type="button" className="hpPlay" onClick={() => setOpen(true)}>
          <span className="hpPlayMark" aria-hidden="true">
            <svg width="11" height="12" viewBox="0 0 11 12">
              <path d="M1 1.2v9.6L10 6 1 1.2z" fill="currentColor" />
            </svg>
          </span>
          {homepageCopy.playCta}
        </button>
      </div>
      {open ? (
        <FilmModal source={source} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
});

export default FilmPlayer;

function FilmModal({
  source,
  onClose,
}: {
  source: HomepageFilm;
  onClose: () => void;
}) {
  const titleId = useId();
  const noteId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    closeRef.current?.focus();

    const video = dialog?.querySelector("video");
    if (video) {
      video.muted = false;
      void video.play().catch(() => {});
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const items = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          "button, video, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        )
      ).filter((el) => !el.hasAttribute("disabled"));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      previouslyFocused?.focus?.();
    };
  }, []);

  return createPortal(
    <div className="filmModal" onMouseDown={() => onCloseRef.current()}>
      <div
        className="filmDialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={noteId}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="filmClose"
          data-film-close
          ref={closeRef}
          onClick={() => onCloseRef.current()}
        >
          {homepageCopy.closeCta}
        </button>
        <h2 id={titleId} className="filmDialogTitle">
          {source.title}
        </h2>
        <video
          src={source.modalSrc}
          poster={source.modalPoster}
          controls
          playsInline
          autoPlay
          preload="metadata"
        />
        <p id={noteId}>{homepageCopy.filmDisclaimer}</p>
      </div>
    </div>,
    document.body
  );
}
