import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RequestAccess from "@/components/RequestAccess";
import { claims } from "@/content/claims";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE Network | MPE",
  "One standard adapter for licensed providers. Every route is scored on success, speed and cost. 140+ countries. MPE never holds funds."
);

export default function NetworkPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE NETWORK</div>
          <h1>Many providers. One adapter.</h1>
          <p className="ebSub">
            For platforms that keep one integration when the provider changes.{" "}
            {product.adapter} {product.funds}
          </p>
          <div className="ebStats">
            {claims.stats.map((stat) => (
              <div className="ebStat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">How a route is chosen</h2>
          <FlowRow steps={product.flow} />
          <p className="p" style={{ marginTop: 18 }}>
            {product.adapter}
          </p>
          <p className="p" style={{ marginTop: 14 }}>
            <Link className="quietLink" href="/#network-map">See where money can land</Link>
          </p>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
