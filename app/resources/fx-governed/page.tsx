import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Cross-border payouts | MPE",
  "Cross-border payouts use the same Platform API. A quote can include an expiry. There is no rate lock. MPE never holds funds."
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
            Same API as a domestic bank payout. 130+ payout currencies. The
            route is scored on success, speed and cost. A quote can include an
            expiry. There is no rate lock. MPE never holds funds.
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
              A quote can carry an expiry. There is no rate lock, and no
              published price list. Licensed partners execute the payout.
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
