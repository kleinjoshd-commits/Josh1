import { siteConfig } from "@/lib/siteConfig";
import { claims } from "@/content/claims";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerRow">
          <div>{siteConfig.companyName}</div>
          <div>{siteConfig.domain}</div>
        </div>

        {/* Tier 1.6: verbatim compliance disclaimer on every page. */}
        <div className="small" style={{ marginTop: 12, lineHeight: 1.7 }}>
          {claims.footerDisclaimer}
        </div>
      </div>
    </footer>
  );
}
