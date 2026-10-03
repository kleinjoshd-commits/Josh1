import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { claims } from "@/content/claims";

const COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Machines", href: "/machines" },
      { label: "Developers", href: "/developers" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Overview", href: "/solutions" },
      { label: "Platforms", href: "/solutions/platforms" },
      { label: "Fintechs", href: "/solutions/fintechs" },
      { label: "Businesses without an app", href: "/solutions/businesses" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Company", href: "/company" },
      { label: "Request access", href: "/#kyc" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerCols">
          <div className="footerBrand">
            <div style={{ fontWeight: 700, color: "rgba(255,255,255,0.92)" }}>
              {siteConfig.companyName}
            </div>
            <div style={{ marginTop: 6 }}>{siteConfig.domain}</div>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.heading}>
              <div className="footerHead">{c.heading}</div>
              {c.links.map((l) => (
                <Link key={l.href} href={l.href} className="footerLink">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <p className="small footerLegal">{claims.footerDisclaimer}</p>
      </div>
    </footer>
  );
}
