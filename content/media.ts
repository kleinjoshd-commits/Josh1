/**
 * Homepage film URLs. Files live in /public/media and are referenced by
 * path only. Do not import the media files into the JS bundle.
 *
 * Swap an encode by replacing the file at that path, or by editing the
 * path here.
 */
export const homepageMedia = {
  brand: {
    title: "MPE film",
    // Loop stays on the current cut until the orchestration loop arrives.
    loopWebm: "/media/mpe-brand-film-loop.webm",
    loopMp4: "/media/mpe-brand-film-loop.mp4",
    loopPoster: "/media/mpe-brand-network-poster.jpg",
    loopPosterWebp: "/media/mpe-brand-network-poster.webp",
    modalSrc: "/media/mpe-brand-film.mp4",
    modalPoster: "/media/mpe-brand-network-poster.jpg",
    modalPosterWebp: "/media/mpe-brand-network-poster.webp",
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
