import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Cross-border payouts | MPE",
  "Cross-border payouts use the same Platform API. 130+ payout currencies. Rates are not published. MPE never holds funds."
);

export default function FxGovernedResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">CROSS-BORDER</div>
          <h1>Cross-border is a payout type.</h1>
          <p className="ebSub">
            Same API as a domestic payout. 130+ payout currencies. The route
            can be Best route, Fastest, or Lowest cost. Rates are not published
            on this site. MPE never holds funds.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>
      <section className="deckLight">
        <div className="container deckInner">
          <div className="panel">
            <h3 style={{ marginTop: 0 }}>What you do not get from this page</h3>
            <p className="p" style={{ marginTop: 10 }}>
              No rate lock, no published FX quote, and no promise that a
              delivered amount is known in advance. Licensed providers execute
              the payout.
            </p>
            <p className="p" style={{ marginTop: 14 }}>
              <Link className="quietLink" href="/solutions/send">Payout types</Link>
            </p>
          </div>
        </div>
      </section>
      <RequestAccess />
    </main>
  );
}
