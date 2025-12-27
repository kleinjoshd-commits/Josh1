"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
        setSolutionsOpen(false);
      }
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

        <nav className="navLinks">
          {/* SOLUTIONS */}
          <div
            className="navLink"
            style={{ position: "relative" }}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            Solutions

            {solutionsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 14px)",
                  left: 0,
                  background: "rgba(14, 18, 18, 0.98)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: 20,
                  width: 380,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                }}
              >
                <Link
                  href="/modern-payengine"
                  style={{
                    display: "block",
                    padding: "10px 0",
                    color: "rgba(255,255,255,0.9)",
                    textDecoration: "none",
                  }}
                >
                  <strong>Modern PayEngine</strong>
                  <div style={{ fontSize: 13, opacity: 0.7 }}>
                    Employer payments infrastructure, FX control, and payout execution
                  </div>
                </Link>

                <div style={{ height: 12 }} />

                <Link
                  href="/balance"
                  style={{
                    display: "block",
                    padding: "10px 0",
                    color: "rgba(255,255,255,0.9)",
                    textDecoration: "none",
                  }}
                >
                  <strong>Balance</strong>
                  <div style={{ fontSize: 13, opacity: 0.7 }}>
                    Worker wallet for faster access, remittance, and family support
                  </div>
                </Link>

                <div style={{ height: 12 }} />

                <Link
                  href="/satellite"
                  style={{
                    display: "block",
                    padding: "10px 0",
                    color: "rgba(255,255,255,0.9)",
                    textDecoration: "none",
                  }}
                >
                  <strong>Satellite resilience</strong>
                  <div style={{ fontSize: 13, opacity: 0.7 }}>
                    Continuity patterns for payout operations in degraded networks
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/modern-payengine" className="navLink">
            Platform
          </Link>

          <Link href="/balance" className="navLink">
            Wallet
          </Link>

          <Link href="/resources" className="navLink">
            Resources
          </Link>

          <Link href="/satellite" className="navLink">
            Satellite
          </Link>

          <Link className="btnPrimary" href="/#kyc">
            Learn more
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
            <div
              className="navMobileItem"
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions
            </div>

            {solutionsOpen && (
              <div style={{ paddingLeft: 12 }}>
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
                  href="/satellite"
                  className="navMobileItem"
                  onClick={() => setOpen(false)}
                >
                  Satellite resilience
                </Link>
              </div>
            )}

            <Link
              href="/modern-payengine"
              className="navMobileItem"
              onClick={() => setOpen(false)}
            >
              Platform
            </Link>

            <Link
              href="/balance"
              className="navMobileItem"
              onClick={() => setOpen(false)}
            >
              Wallet
            </Link>

            <Link
              href="/resources"
              className="navMobileItem"
              onClick={() => setOpen(false)}
            >
              Resources
            </Link>

            <Link
              href="/satellite"
              className="navMobileItem"
              onClick={() => setOpen(false)}
            >
              Satellite
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

