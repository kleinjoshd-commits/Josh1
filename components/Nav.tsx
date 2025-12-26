import Link from "next/link";
import Image from "next/image";

export default function Nav() {
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
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          paddingTop: 14,
          paddingBottom: 14,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            minWidth: 180,
          }}
          aria-label="Home"
        >
          <Image
            src="/White-mpe-logo.png"
            alt="Modern PayEngine"
            width={190}
            height={44}
            priority
            style={{ width: 190, height: "auto" }}
          />
        </Link>

        {/* Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="/modern-payengine"
            style={{
              color: "rgba(255,255,255,0.86)",
              fontSize: 14,
              opacity: 0.92,
            }}
          >
            Modern PayEngine
          </Link>

          <Link
            href="/balance"
            style={{
              color: "rgba(255,255,255,0.86)",
              fontSize: 14,
              opacity: 0.92,
            }}
          >
            Balance
          </Link>

          {/* Single CTA to #kyc */}
          <Link className="btnPrimary" href="/#kyc">
            Learn more
          </Link>
        </nav>
      </div>
    </header>
  );
}
