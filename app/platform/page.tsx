import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RoutingDiagram from "@/components/RoutingDiagram";
import RequestAccess from "@/components/RequestAccess";
import { OpsConsole, SplitStory } from "@/components/ProductVisuals";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Platform | MPE",
  "One API. Authorize, route and sign. Every allowed route is scored on success, speed and cost."
);

export default function PlatformPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">PLATFORM</div>
          <h1>One API. Authorize, route and sign.</h1>
          <p className="ebSub">
            Every allowed route is scored on success, speed and cost. The decision is signed before anything moves. {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <SplitStory visual={<OpsConsole />}>
            <h2 className="homeSectionTitle">How a payment moves</h2>
            <FlowRow steps={product.flow} />
          </SplitStory>

          <div className="sectionBlock">
            <SplitStory
              visual={<RoutingDiagram />}
            >
              <h2 className="homeSectionTitle">The score</h2>
              <p className="p">
                Success, speed and cost sit in one score. The line runs from your platform, through MPE, to that score, then to the route that was picked.
              </p>
            </SplitStory>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What it covers</h2>
            <div className="outcomeGrid">
              {product.coverage.map((item) => (
                <div className="panel" key={item.title}>
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">The provider adapter</h2>
            <p className="p">{product.adapter} {product.fallback}</p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">The ops console</h2>
            <div className="cardGrid2">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>See</h3>
                <p className="p" style={{ marginTop: 10 }}>{product.consoleSee}</p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Act</h3>
                <p className="p" style={{ marginTop: 10 }}>{product.consoleDo}</p>
              </div>
            </div>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Trust</h2>
            <ul className="trustList">
              {product.trust.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="p" style={{ marginTop: 18 }}>
              The decision is signed and written to a tamper-evident record.
            </p>
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
