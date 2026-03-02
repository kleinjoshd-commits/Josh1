"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"platform" | "solutions" | null>(
    null
  );
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openMenu = (menu: "platform" | "solutions") => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 120);
  };

  const closeAll = () => {
    setOpen(false);
    setActiveMenu(null);
  };

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
            src="/worth-a-shot.png"
            alt="MPE"
            width={176}
            height={48}
            priority
            style={{ width: 176, height: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="navLinks">
          <Link href="/" className="navLink">
            Home
          </Link>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => openMenu("platform")}
            onMouseLeave={closeMenu}
          >
            <button
              type="button"
              className="navLink"
              aria-haspopup="menu"
              aria-expanded={activeMenu === "platform"}
              onClick={() =>
                setActiveMenu((v) => (v === "platform" ? null : "platform"))
              }
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              Platform
            </button>

            {activeMenu === "platform" && (
              <div
                role="menu"
                aria-label="Platform"
                onMouseEnter={() => openMenu("platform")}
                onMouseLeave={closeMenu}
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
                {siteConfig.nav.platform.map((item, index) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        color: "rgba(255,255,255,0.9)",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <strong>{item.label}</strong>
                      {item.description ? (
                        <div style={{ fontSize: 13, opacity: 0.7 }}>
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                    {index < siteConfig.nav.platform.length - 1 ? (
                      <div style={{ height: 12 }} />
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => openMenu("solutions")}
            onMouseLeave={closeMenu}
          >
            <button
              type="button"
              className="navLink"
              aria-haspopup="menu"
              aria-expanded={activeMenu === "solutions"}
              onClick={() =>
                setActiveMenu((v) => (v === "solutions" ? null : "solutions"))
              }
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              Solutions
            </button>

            {activeMenu === "solutions" && (
              <div
                role="menu"
                aria-label="Solutions"
                onMouseEnter={() => openMenu("solutions")}
                onMouseLeave={closeMenu}
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
                {siteConfig.nav.solutions.map((item, index) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        color: "rgba(255,255,255,0.9)",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <strong>{item.label}</strong>
                      {item.description ? (
                        <div style={{ fontSize: 13, opacity: 0.7 }}>
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                    {index < siteConfig.nav.solutions.length - 1 ? (
                      <div style={{ height: 12 }} />
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>

          {siteConfig.nav.topLevel.map((item) => (
            <Link key={item.href} href={item.href} className="navLink">
              {item.label}
            </Link>
          ))}

          <Link className="btnPrimary" href="/#kyc">
            Request Access
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="navBurger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v);
            setActiveMenu(null);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="navMobileWrap">
          <div className="container navMobileMenu">
            <Link href="/" className="navMobileItem" onClick={closeAll}>
              Home
            </Link>

            <div
              className="navMobileItem"
              onClick={() =>
                setActiveMenu((v) => (v === "platform" ? null : "platform"))
              }
            >
              Platform
            </div>

            {activeMenu === "platform" && (
              <div style={{ paddingLeft: 12 }}>
                {siteConfig.nav.platform.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="navMobileItem"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <div
              className="navMobileItem"
              onClick={() =>
                setActiveMenu((v) => (v === "solutions" ? null : "solutions"))
              }
            >
              Solutions
            </div>

            {activeMenu === "solutions" && (
              <div style={{ paddingLeft: 12 }}>
                {siteConfig.nav.solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="navMobileItem"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {siteConfig.nav.topLevel.map((item) => (
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
              href="/#kyc"
              className="btnPrimary navMobileCta"
              onClick={closeAll}
            >
              Request Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
