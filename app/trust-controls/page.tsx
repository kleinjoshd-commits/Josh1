import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Trust and controls | MPE",
  "Every route decision is signed into an audit record. MPE never holds funds. Licensed providers move the money."
);

export default function TrustControlsPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">TRUST AND CONTROLS</div>
          <h1>The decision is signed.</h1>
          <p className="ebSub">
            For a buyer who needs to know who moved the money, and what MPE
            decided.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">What is recorded</h2>
          <div className="outcomeGrid" style={{ marginTop: 18 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Audit record</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Every decision is signed and written to a tamper-evident record.
                Operators can see the route chosen and why, and can approve or
                reject KYC, cancel or return a payout, resend a webhook, and
                resolve a reconciliation case.
              </p>
            </div>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Who holds the funds</h3>
              <p className="p" style={{ marginTop: 10 }}>{product.funds}</p>
            </div>
          </div>
          <p className="p" style={{ marginTop: 18 }}>
            <Link className="quietLink" href="/resources/payment-lifecycle">How a payment is decided</Link>
          </p>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
