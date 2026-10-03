"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeAll = () => setOpen(false);

  return (
    <header
      className="siteHeader"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        background: "rgba(5, 8, 10, 0.92)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container navBar">
        <Link href="/" className="navLogo" aria-label="Home">
          <Image
            src="/mpe-logo.png"
            alt="MPE"
            width={176}
            height={40}
            priority
            style={{ width: 176, height: "auto" }}
          />
        </Link>

        <nav className="navLinks">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="navLink">
              {item.label}
            </Link>
          ))}
          <Link className="btnPrimary" href="#kyc">
            Request access
          </Link>
        </nav>

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

      {open && (
        <div className="navMobileWrap">
          <div className="container navMobileMenu">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="navMobileItem"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#kyc"
              className="btnPrimary navMobileCta"
              onClick={closeAll}
            >
              Request access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
