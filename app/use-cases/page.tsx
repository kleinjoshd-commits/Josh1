import Link from "next/link";
import Nav from "@/components/Nav";
import { siteConfig } from "@/lib/siteConfig";
import { claims } from "@/content/claims";

export const metadata = {
  title: "Use Cases | MPE",
  description:
    "Where MPE fits: governed payment infrastructure for employers, partners, and workforces operating across borders.",
};

const productBlurbs: Record<string, string> = {
  "/solutions/os":
    "The control layer for approvals, routing, FX oversight, and release logic across the payment lifecycle.",
  "/solutions/workforce":
    "Global workforce execution for distributed teams: payroll, contractors, EOR, and statutory obligations.",
  "/solutions/network":
    "Partner-connected delivery across trusted local banks and licensed cross-border partners.",
};

export default function UseCasesPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                Use Cases <span className="dot" />
                Where MPE fits
              </div>

              <h1 className="h1">Where MPE fits</h1>

              <p className="p" style={{ maxWidth: 880 }}>
                MPE is the governed operating layer for cross-border worker
                payments and the cross-border movement of capital that surrounds
                them. Employers offer the benefit. Workers use the MPE app.
                Licensed partner institutions provide the regulated services.
                MPE coordinates the experience.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 880 }}>
                {claims.proofPoint}
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What this means in practice</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Four products, one operating layer. Pick the entry point that
                matches the problem in front of you.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 24 }}>
            {siteConfig.nav.solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="panel"
                style={{ textDecoration: "none", display: "block" }}
              >
                <h3 style={{ marginTop: 0 }}>{item.label}</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  {productBlurbs[item.href] ?? item.description ?? ""}
                </p>
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link className="btnPrimary" href="/#kyc">
              Request Access
            </Link>
            <Link className="btnSecondary" href="/unified-approach">
              Platform architecture
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
