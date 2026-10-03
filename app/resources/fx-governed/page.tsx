import Nav from "../../../components/Nav";
import Link from "next/link";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Cross-border payments | MPE",
  "Cross-border payments are part of the integration. Rates are not published. Licensed partners execute."
);

export default function FxGovernedResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">REFERENCE</div>
          <h1>Cross-border payments.</h1>
          <p className="ebSub">
            Cross-border payments are part of the integration. 130+ payout
            currencies. Rates, locks, and timing are not published on this
            site.
          </p>
          <div className="btnRow">
            <Link className="btnSecondary" href="/resources">Back to Resources</Link>
            <Link className="btnPrimary" href="#kyc">Talk to us</Link>
          </div>
        </div>
      </section>
      <section className="deckLight">
        <div className="container deckInner">
          <div className="panel">
            <h3 style={{ marginTop: 0 }}>What is stated</h3>
            <p className="p" style={{ marginTop: 10 }}>
              Payout currencies are 130+. Licensed partners provide the
              payment services. MPE does not publish a rate, a lock, or a
              guarantee that a delivered amount is known in advance.
            </p>
          </div>
        </div>
      </section>
      <KycForm />
    </main>
  );
}
