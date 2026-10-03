import Nav from "../../components/Nav";
import Link from "next/link";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Platform Architecture | MPE",
  "One integration. Authorize, Route, Sign. Licensed partners execute. MPE never holds funds."
);

const LAYERS = [
  {
    title: "One integration",
    body: "Payouts, wallets, cards, identity and cross-border payments. For platforms, people and machines.",
  },
  {
    title: "Authorize, Route, Sign",
    body: "That is the flow. Delivered is the status that follows. MPE does not move the money.",
  },
  {
    title: "Licensed partners execute",
    body: "Money transfer and payment services within MPE programs are provided by licensed partner institutions in each market.",
  },
  {
    title: "Machines, in development",
    body: "Machine payments are in development, patent pending. They are not a live payout product.",
  },
];

export default function UnifiedApproachPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">PLATFORM ARCHITECTURE</div>
          <h1>One integration.</h1>
          <p className="ebSub">
            Authorize, Route, Sign. Licensed partners execute. MPE does not
            hold or transmit customer funds.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Talk to us</Link>
            <Link className="btnSecondary" href="/solutions/os">Explore MPE OS</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            {LAYERS.map((item) => (
              <div className="panel" key={item.title}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
