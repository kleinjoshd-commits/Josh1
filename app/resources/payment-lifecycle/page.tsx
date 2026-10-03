import Nav from "../../../components/Nav";
import Link from "next/link";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Payment lifecycle | MPE",
  "Authorize, Route, Sign, then Delivered. Licensed partners execute. MPE never holds funds."
);

const STEPS = [
  { title: "Authorize", body: "The payment is authorized before it moves." },
  { title: "Route", body: "The payment takes the best licensed path." },
  { title: "Sign", body: "Sign is the release step." },
  { title: "Delivered", body: "Delivered is the status that follows. MPE does not move the money." },
];

export default function PaymentLifecycleResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">REFERENCE</div>
          <h1>Authorize, Route, Sign.</h1>
          <p className="ebSub">
            That is the flow on the homepage. Licensed partners execute. MPE
            does not hold or transmit customer funds.
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
            {STEPS.map((step) => (
              <div className="panel" key={step.title}>
                <h3 style={{ marginTop: 0 }}>{step.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <KycForm />
    </main>
  );
}
