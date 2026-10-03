import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Route choice | MPE",
  "Each payment is Best route, Fastest, or Lowest cost. One standard adapter. Providers are not named."
);

const MODES = [
  { title: "Best route", body: "One of the three choices for that payment." },
  { title: "Fastest", body: "The route chosen for speed." },
  { title: "Lowest cost", body: "The route chosen for cost. No public price list." },
];

export default function ExecutionAbstractionResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">ROUTING</div>
          <h1>Three ways to route.</h1>
          <p className="ebSub">
            MPE picks one per payment, then signs that decision. {product.adapter}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>
      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            {MODES.map((mode) => (
              <div className="panel" key={mode.title}>
                <h3 style={{ marginTop: 0 }}>{mode.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{mode.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RequestAccess />
    </main>
  );
}
