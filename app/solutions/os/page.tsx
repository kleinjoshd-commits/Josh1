import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE OS | MPE",
  "Sandbox access, API docs, and embeds come with access. Signed webhooks for KYC and payout status. MPE never holds funds."
);

const SURFACE = [
  { title: "Platform API", body: "One API in front of many licensed providers. Sandbox access comes with Request access." },
  { title: "Webhooks", body: product.webhooks },
  { title: "Docs and embeds", body: product.embeds + " API docs come with access." },
  { title: "What operators see", body: product.consoleSee },
  { title: "What operators can do", body: product.consoleDo },
  { title: "Audit record", body: "Every decision is signed and written to a tamper-evident record." },
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
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Wallets</h3>
                <p className="p" style={{ marginTop: 10 }}>Payouts to mobile wallets. MPE does not hold a balance.</p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Branded cards</h3>
                <p className="p" style={{ marginTop: 10 }}>{product.cards}</p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Identity</h3>
                <p className="p" style={{ marginTop: 10 }}>{product.identity}</p>
              </div>
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
