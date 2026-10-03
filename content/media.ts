/**
 * Homepage film URLs. Files live in /public/media and are referenced by
 * path only. Do not import the media files into the JS bundle.
 *
 * Swap a final encode by replacing the file at that path, or by editing
 * the path here.
 *
 * The brand loop and poster are temporary. They are cut from the 1080p
 * modal film (0:05 to 0:17, muted, 1280 wide) with a worker-shot poster.
 * Point loopWebm, loopMp4, loopPoster, and modalPoster at the final
 * files when those are ready. The modal file is already final.
 */
export const homepageMedia = {
  brand: {
    title: "MPE film",
    loopWebm: "/media/mpe-brand-film-loop.webm",
    loopMp4: "/media/mpe-brand-film-loop.mp4",
    loopPoster: "/media/mpe-brand-film-poster.jpg",
    modalSrc: "/media/mpe-brand-film.mp4",
    modalPoster: "/media/mpe-brand-film-poster.jpg",
  },
  mfam: {
    title: "MFAM film",
    loopWebm: "/media/mpe-mfam-film-loop.webm",
    loopMp4: "/media/mpe-mfam-film-loop.mp4",
    loopPoster: "/media/mpe-mfam-film-loop-poster.jpg",
    modalSrc: "/media/mpe-mfam-film.mp4",
    modalPoster: "/media/mpe-mfam-film-poster.jpg",
  },
} as const;

export type HomepageFilm = (typeof homepageMedia)[keyof typeof homepageMedia];
