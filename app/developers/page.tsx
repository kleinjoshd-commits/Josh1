import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import CodeSample from "@/components/CodeSample";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Developers | MPE",
  "API docs and embeds come with access. Pay out, then listen for signed webhooks."
);

export default function DevelopersPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">DEVELOPERS</div>
          <h1>Integrate in four steps.</h1>
          <p className="ebSub">
            API docs and embeds come with access.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <FlowRow steps={product.developerSteps} className="flowFour" />

          <div className="codePair">
            <div className="codeWindow">
              <p>Pay out</p>
              <CodeSample code={product.payoutSample} label="Payout request and response" />
            </div>
            <div className="codeWindow">
              <p>Signed webhooks</p>
              <CodeSample code={product.webhookSample} label="Webhook headers and events" />
            </div>
          </div>
          <p className="p" style={{ marginTop: 12 }}>
            Each event carries X-MPE-Timestamp, X-MPE-Signature and X-MPE-Event-Id, signed with HMAC-SHA256.
          </p>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Embeds</h2>
            <div className="outcomeGrid">
              {product.embeds.map((item) => (
                <div className="panel" key={item.title}>
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RequestAccess
        title="Request access."
        lede="API docs and embeds come with access."
        submitLabel="Request access"
      />
    </main>
  );
}
