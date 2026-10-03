import Nav from "../../components/Nav";
import Link from "next/link";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Trust & Controls | MPE",
  "Authorize, Route, Sign. Licensed partners move the money. MPE does not hold or transmit customer funds."
);

const POINTS = [
  {
    title: "Authorize",
    body: "The payment is authorized before it moves. MPE does not move the money.",
  },
  {
    title: "Route",
    body: "The payment takes the best licensed path. Licensed partners execute.",
  },
  {
    title: "Sign",
    body: "Sign is the release step. Delivered is the status that follows.",
  },
  {
    title: "MPE never holds funds",
    body: "MPE does not hold or transmit customer funds, and does not store customer identity documents.",
  },
];

export default function TrustControlsPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">TRUST &amp; CONTROLS</div>
          <h1>Authorize, Route, Sign.</h1>
          <p className="ebSub">
            MPE provides orchestration and control software. Licensed partners
            move the money. No certification or uptime claim is published here.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Talk to us</Link>
            <Link className="btnSecondary" href="/solutions/os">MPE OS</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            {POINTS.map((item) => (
              <div className="panel" key={item.title}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="btnRow" style={{ marginTop: 28 }}>
            <Link className="btnSecondary" href="/unified-approach">Platform architecture</Link>
          </div>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
