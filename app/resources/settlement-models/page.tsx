import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { claims } from "@/content/claims";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Coverage | MPE",
  "140+ countries where money lands, 200+ direct bank connections, 130+ payout currencies, 180 countries of payroll coverage."
);

export default function SettlementModelsResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">COVERAGE</div>
          <h1>Where money can land.</h1>
          <p className="ebSub">
            Licensed providers execute. MPE never holds funds. Licensed partners do.
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
          <h2 className="homeSectionTitle">Payout types</h2>
          <div className="outcomeGrid" style={{ marginTop: 18 }}>
            {product.outputs.map((item) => (
              <div className="panel" key={item.title}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <p className="p" style={{ marginTop: 18 }}>
            <Link className="quietLink" href="/#network-map">Map of where money can land</Link>
          </p>
        </div>
      </section>
      <RequestAccess />
    </main>
  );
}
