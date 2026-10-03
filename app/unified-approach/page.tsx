import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Platform architecture | MPE",
  "One Platform API, one standard adapter, then Authorize, Route, Sign. Every decision is signed into the audit record."
);

export default function UnifiedApproachPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">PLATFORM ARCHITECTURE</div>
          <h1>One API. Many providers.</h1>
          <p className="ebSub">
            {product.oneLiner} {product.adapter} {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">The shape</h2>
          <div className="outcomeGrid" style={{ marginTop: 18 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Your platform</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Sandbox access, API docs, and embeds. Or a branded app if you do not have one.
              </p>
            </div>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>MPE</h3>
              <p className="p" style={{ marginTop: 10 }}>
                {product.route} MPE does not move the money.
              </p>
            </div>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Licensed providers</h3>
              <p className="p" style={{ marginTop: 10 }}>
                {product.adapter}
              </p>
            </div>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">The order</h2>
            <FlowRow steps={product.flow} />
            <p className="p" style={{ marginTop: 18 }}>
              <Link className="quietLink" href="/solutions/os">What you integrate</Link>
            </p>
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
