import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "About | MPE",
  "One Platform API in front of many licensed providers. Authorize, Route, Sign. MPE never holds funds."
);

export default function AboutPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">ABOUT MPE</div>
          <h1>One Platform API.</h1>
          <p className="ebSub">
            {product.oneLiner} For platforms that already have an app, and for
            distributors who need one. {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">How a payment moves</h2>
          <FlowRow steps={product.flow} />

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Who it is for</h2>
            <div className="outcomeGrid" style={{ marginTop: 18 }}>
              {product.audiences.map((item) => (
                <div className="panel" key={item.title}>
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="p" style={{ marginTop: 28 }}>
            <Link className="quietLink" href="/about/team">The people building MPE</Link>
          </p>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
