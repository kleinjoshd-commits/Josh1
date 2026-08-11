import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { claims } from "@/content/claims";

const COLUMNS = [
  {
    heading: "Products",
    links: [
      { label: "MPE Send", href: "/solutions/send" },
      { label: "MPE Workforce", href: "/solutions/workforce" },
      { label: "MPE Network", href: "/solutions/network" },
      { label: "MPE OS", href: "/solutions/os" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Platform architecture", href: "/unified-approach" },
      { label: "Trust & controls", href: "/trust-controls" },
      { label: "Industries", href: "/industries" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Talk to us", href: "#kyc" },
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
                <Link key={l.label} href={l.href} className="footerLink">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Verbatim compliance disclaimer on every page. */}
        <div className="small footerLegal">{claims.footerDisclaimer}</div>
      </div>
    </footer>
  );
}
