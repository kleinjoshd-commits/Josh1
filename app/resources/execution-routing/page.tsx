import Nav from "../../../components/Nav";
import Link from "next/link";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Routing | MPE",
  "Each payment takes the best licensed path. Licensed partners execute. MPE never holds funds."
);

export default function ExecutionAbstractionResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">REFERENCE</div>
          <h1>Best licensed path.</h1>
          <p className="ebSub">
            Route is the second step. The payment takes the best licensed
            path. This page does not publish speeds, fees, or a failover SLA.
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
              Smart routing picks the best path for each payment. Licensed
              partners execute. MPE does not move the money.
            </p>
          </div>
        </div>
      </section>
      <KycForm />
    </main>
  );
}
