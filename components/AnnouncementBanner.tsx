"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { claims } from "@/content/claims";

const STORAGE_KEY = "mpe.announcement.spacebelt-ksa";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEY);
      if (dismissed) setVisible(false);
    } catch {
      // ignore — keep banner visible
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <div className="announceBanner" role="region" aria-label="Announcement">
      <div className="container announceInner">
        <div className="announceCopy">
          <span className="announceIcon" aria-hidden="true">
            {claims.banner.icon}
          </span>
          <span className="announceText">
            {claims.banner.body}{" "}
            <Link href={claims.banner.linkHref} className="announceLink">
              {claims.banner.linkText}
            </Link>
          </span>
        </div>
        <button
          type="button"
          className="announceClose"
          aria-label="Dismiss announcement"
          onClick={dismiss}
        >
          ×
        </button>
      </div>
    </div>
  );
}
