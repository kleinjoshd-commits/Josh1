"use client";

import {
  forwardRef,
  useEffect,
  useId,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { homepageCopy } from "@/content/homepage";
import type { HomepageFilm } from "@/content/media";
import { registerPlayer, unregisterPlayer, updatePlayer } from "./filmPlayback";

export type FilmPlayerHandle = {
  open: () => void;
};

type Props = {
  source: HomepageFilm;
  /** Below-the-fold films wait until they are near the viewport. */
  lazy?: boolean;
  preload?: "none" | "metadata" | "auto";
  /** Full-bleed background. No play button. Open the modal from outside. */
  background?: boolean;
};

function subscribeMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function motionNow() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Poster({
  source,
  eager,
}: {
  source: HomepageFilm;
  eager: boolean;
}) {
  const webp = "loopPosterWebp" in source ? source.loopPosterWebp : undefined;
  return (
    <picture>
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      {/* Plain img so the jpg fallback is what non-webp browsers serve. */}
      <img
        src={source.loopPoster}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "low"}
      />
    </picture>
  );
}

const FilmPlayer = forwardRef<FilmPlayerHandle, Props>(function FilmPlayer(
  { source, lazy = false, preload = "metadata", background = false },
  ref
) {
  const stageRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const idRef = useRef<number | null>(null);
  const allowRef = useRef(false);
  const modalRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(!lazy);
  const [shown, setShown] = useState(false);
  const allowMotion = useSyncExternalStore(subscribeMotion, motionNow, () => false);

  const openModal = useCallback(() => {
    modalRef.current = true;
    if (idRef.current != null) updatePlayer(idRef.current, { modal: true });
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    modalRef.current = false;
    if (idRef.current != null) updatePlayer(idRef.current, { modal: false });
    setOpen(false);
  }, []);

  useImperativeHandle(ref, () => ({ open: openModal }), [openModal]);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const id = registerPlayer({
      ratio: background ? 1 : 0,
      modal: modalRef.current,
      canPlay: () => allowRef.current && !modalRef.current && !!loopRef.current,
      play: () => {
        const loop = loopRef.current;
        if (!loop) return;
        loop.muted = true;
        void loop.play().catch(() => {});
      },
      pause: () => {
        loopRef.current?.pause();
      },
    });
    idRef.current = id;

    const onRatio = (ratio: number) => {
      if (ratio > 0) setSeen(true);
      updatePlayer(id, { ratio });
    };
    const observer = new IntersectionObserver(
      ([entry]) => onRatio(entry?.intersectionRatio ?? 0),
      { threshold: [0, 0.15, 0.25, 0.4, 0.55, 0.75, 1] }
    );
    observer.observe(node);

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setSeen(true);
      },
      { rootMargin: "280px 0px" }
    );
    if (lazy) preloadObserver.observe(node);

    return () => {
      observer.disconnect();
      preloadObserver.disconnect();
      idRef.current = null;
      unregisterPlayer(id);
    };
  }, [background, lazy]);

  useEffect(() => {
    allowRef.current = allowMotion;
    if (idRef.current != null) updatePlayer(idRef.current, {});
  }, [allowMotion, seen]);

  useEffect(() => {
    modalRef.current = open;
    if (idRef.current != null) updatePlayer(idRef.current, { modal: open });
  }, [open]);

  const mountVideo = allowMotion && (background || seen);

  return (
    <>
      <div className={background ? "cineFill" : "hpStage"} ref={stageRef}>
        <Poster source={source} eager={!lazy} />
        {mountVideo ? (
          <video
            ref={loopRef}
            className={shown ? "isOn" : undefined}
            data-loop={background ? "hero" : "mfam"}
            poster={source.loopPoster}
            muted
            loop
            playsInline
            preload={background || seen ? "auto" : preload}
            tabIndex={-1}
            aria-hidden="true"
            onPlaying={() => setShown(true)}
          >
            <source src={source.loopWebm} type="video/webm" />
            <source src={source.loopMp4} type="video/mp4" />
          </video>
        ) : null}
        {background ? null : (
          <button type="button" className="hpPlay" onClick={openModal}>
            <span className="hpPlayMark" aria-hidden="true">
              <svg width="11" height="12" viewBox="0 0 11 12">
                <path d="M1 1.2v9.6L10 6 1 1.2z" fill="currentColor" />
              </svg>
            </span>
            {homepageCopy.playCta}
          </button>
        )}
      </div>
      {open ? <FilmModal source={source} onClose={closeModal} /> : null}
    </>
  );
});

export default FilmPlayer;

function canUseWebp() {
  const canvas = document.createElement("canvas");
  return canvas.toDataURL("image/webp").startsWith("data:image/webp");
}

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
  const webp = "modalPosterWebp" in source ? source.modalPosterWebp : undefined;
  const poster = webp && canUseWebp() ? webp : source.modalPoster;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

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
          poster={poster}
          controls
          playsInline
          autoPlay
          preload="metadata"
          data-loop="modal"
        />
        <p id={noteId}>{homepageCopy.filmDisclaimer}</p>
      </div>
    </div>,
    document.body
  );
}
