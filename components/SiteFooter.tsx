import { siteConfig } from "@/lib/siteConfig";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerRow">
          <div>{siteConfig.companyName}</div>
          <div>{siteConfig.domain}</div>
        </div>

        <div style={{ marginTop: 12 }}>
          {siteConfig.footerFinePrint.map((line) => (
            <div key={line} className="small" style={{ marginTop: 6 }}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

