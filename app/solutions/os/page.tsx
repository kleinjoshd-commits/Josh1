import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE OS | MPE",
  "Platform API with sandbox keys, webhooks, docs, and embeds for KYC, payouts, and card. An ops console for payments, KYC, and payouts."
);

const SURFACE = [
  { title: "Platform API", body: "One API in front of many licensed providers. Sandbox keys first." },
  { title: "Webhooks", body: "Events for payments, KYC, and payouts." },
  { title: "Docs", body: "API docs come with access. There is no public docs URL on this site." },
  { title: "Embeds", body: product.embeds },
  { title: "Ops console", body: "Operators see and act on payments, KYC, and payouts." },
  { title: "Audit record", body: "Every route decision is signed into the audit record." },
];

export default function MpeOsPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE OS</div>
          <h1>The API, the embeds, and the console.</h1>
          <p className="ebSub">
            For developers integrating the platform, and for operators running
            it. {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">How you integrate</h2>
          <FlowRow steps={product.integrate} />

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">How a payment is decided</h2>
            <FlowRow steps={product.flow} />
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What you get</h2>
            <div className="outcomeGrid" style={{ marginTop: 18 }}>
              {SURFACE.map((item) => (
                <div className="panel" key={item.title}>
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Also on the same API</h2>
            <div className="outcomeGrid" style={{ marginTop: 18 }}>
              {product.platformProducts.map((item) => (
                <div className="panel" key={item.title}>
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <p className="p" style={{ marginTop: 18 }}>
              <Link className="quietLink" href="/solutions/send">Payout types</Link>
            </p>
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
