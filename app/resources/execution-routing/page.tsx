import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Routing | MPE",
  "MPE scores every allowed route on success, speed and cost, picks one, and signs that decision before anything moves."
);

const FACTORS = [
  { title: "Success", body: "Likelihood the payout completes." },
  { title: "Speed", body: "How quickly that route can deliver. No speed figure is published." },
  { title: "Cost", body: "What that route costs. No price list is published." },
];

export default function ExecutionAbstractionResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">ROUTING</div>
          <h1>Scores every route.</h1>
          <p className="ebSub">
            {product.route} A customer does not pick a route. {product.adapter}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>
      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            {FACTORS.map((factor) => (
              <div className="panel" key={factor.title}>
                <h3 style={{ marginTop: 0 }}>{factor.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{factor.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RequestAccess />
    </main>
  );
}
