import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Use Cases | MPE",
  description: "How employers and partners use MPE to improve worker outcomes and extend financial access across borders.",
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
                Employers and partners
              </div>

              <h1 className="h1">Where MPE fits</h1>

              <p className="p">
                MPE helps employers support workers who regularly move money
                across borders and partners who want to extend financial access
                into harder environments.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                The immediate use case is simple: help employees keep more of
                what they earn and help families receive more of what was sent.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What this means in practice</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Employers offer the benefit. Workers use the wallet. Families
                gain better access. MPE coordinates the experience across the
                underlying network.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 24 }}>
            <Link className="panel" href="/solutions/os">
              <h3 style={{ marginTop: 0 }}>MPE OS</h3>
              <p className="p" style={{ marginTop: 10 }}>
                The control layer for approvals, routing, FX oversight, and
                release logic behind the worker-facing experience.
              </p>
            </Link>

            <Link className="panel" href="/solutions/workforce">
              <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Employer-sponsored workforce payment programs for distributed
                teams that need a better outcome after payroll.
              </p>
            </Link>

            <Link className="panel" href="/solutions/balance">
              <h3 style={{ marginTop: 0 }}>MPE Balance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Worker wallets for zero-fee remittances, USD-held balances,
                employee payments, and international travel use.
              </p>
            </Link>

            <Link className="panel" href="/solutions/network">
              <h3 style={{ marginTop: 0 }}>MPE Network</h3>
              <p className="p" style={{ marginTop: 10 }}>
                The partner-connected delivery layer that helps extend access
                across borders, harder corridors, and constrained environments.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
