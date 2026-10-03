import Nav from "../../../components/Nav";
import Link from "next/link";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Execution | MPE",
  "Licensed partners execute. MPE provides orchestration and control software and never holds funds."
);

export default function ExecutionInfrastructurePage() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">REFERENCE</div>
          <h1>Partners execute.</h1>
          <p className="ebSub">
            MPE provides orchestration and control software. Money transfer
            and payment services within MPE programs are provided by licensed
            partner institutions in each market.
          </p>
          <div className="btnRow">
            <Link className="btnSecondary" href="/resources">Back to Resources</Link>
            <Link className="btnPrimary" href="#kyc">Talk to us</Link>
          </div>
        </div>
      </section>
      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What MPE does</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Orchestration and control. Authorize, Route, Sign. MPE does
                not hold or transmit customer funds, and does not store
                customer identity documents.
              </p>
            </div>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What partners do</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Licensed partner institutions provide the money transfer and
                payment services. MPE is not a bank and is not described here
                as a money transmitter.
              </p>
            </div>
          </div>
          <div className="btnRow" style={{ marginTop: 28 }}>
            <Link className="btnSecondary" href="/resources/execution-routing">Routing</Link>
          </div>
        </div>
      </section>
      <KycForm />
    </main>
  );
}
