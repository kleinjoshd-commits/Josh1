"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu if user resizes back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(8, 12, 12, 0.65)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div className="container navBar">
        {/* Logo */}
        <Link href="/" className="navLogo" aria-label="Home">
          <Image
            src="/White-mpe-logo.png"
            alt="Modern PayEngine"
            width={190}
            height={44}
            priority
            style={{ width: 190, height: "auto" }}
          />
        </Link>

        {/* Desktop nav (unchanged on desktop) */}
        <nav className="navLinks">
          <Link href="/modern-payengine" className="navLink">
            Modern PayEngine
          </Link>
          <Link href="/balance" className="navLink">
            Balance
          </Link>
          <Link className="btnPrimary" href="/#kyc">
            Learn more
          </Link>
        </nav>

        {/* Mobile hamburger (only visible via CSS on mobile) */}
        <button
          type="button"
          className="navBurger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown (only shows when open + on mobile) */}
      {open && (
        <div className="navMobileWrap">
          <div className="container navMobileMenu">
            <Link
              href="/modern-payengine"
              className="navMobileItem"
              onClick={() => setOpen(false)}
            >
              Modern PayEngine
            </Link>
            <Link
              href="/balance"
              className="navMobileItem"
              onClick={() => setOpen(false)}
            >
              Balance
            </Link>
            <Link
              href="/#kyc"
              className="btnPrimary navMobileCta"
              onClick={() => setOpen(false)}
            >
              Learn more
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
