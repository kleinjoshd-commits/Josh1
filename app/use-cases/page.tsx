import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Use Cases | MPE",
  description: "Operational payment workflows powered by MPE.",
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
                Enterprise payment workflows
              </div>

              <h1 className="h1">Use Cases</h1>

              <p className="p">Operational payment workflows powered by MPE.</p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                Use MPE as a layered platform where you need more control, or
                as a unified operating stack across payment workflows.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Deployment model</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Embed MPE where it makes the most sense today, or use it as the
                central platform for orchestration, visibility, and control.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 24 }}>
            <Link className="panel" href="/solutions/os">
              <h3 style={{ marginTop: 0 }}>MPE OS</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Vendor &amp; subcontractor payments with governed approvals,
                release conditions, and routing.
              </p>
            </Link>

            <Link className="panel" href="/solutions/workforce">
              <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Global workforce payments across employee, contractor, EOR, and
                statutory workflows.
              </p>
            </Link>

            <Link className="panel" href="/solutions/balance">
              <h3 style={{ marginTop: 0 }}>MPE Balance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Worker financial experience with wallets, multi-currency
                balances, and remittance support.
              </p>
            </Link>

            <Link className="panel" href="/solutions/network">
              <h3 style={{ marginTop: 0 }}>MPE Network</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Mass payouts and disbursements across partners, rails, and
                corridors with centralized visibility.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
