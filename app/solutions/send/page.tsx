import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE Send | MPE",
  "Payouts to bank, card, wallet, and cross-border. One Platform API. MPE never holds funds."
);

export default function SendPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE SEND</div>
          <h1>Payouts from your platform.</h1>
          <p className="ebSub">
            For platforms paying people or partners. {product.oneLiner}{" "}
            {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">Where it can land</h2>
          <div className="outcomeGrid" style={{ marginTop: 18 }}>
            {product.outputs.map((item) => (
              <div className="panel" key={item.title}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What you integrate</h2>
            <div className="outcomeGrid" style={{ marginTop: 18 }}>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Payout screen</h3>
                <p className="p" style={{ marginTop: 10 }}>{product.embeds}</p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Platform API</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Sandbox access, API docs and embeds come with access. {product.route}
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Ops console</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  {product.consoleSee}{" "}
                  <Link className="quietLink" href="/solutions/os">See the console</Link>
                </p>
              </div>
            </div>
          </div>
          <p className="p" style={{ marginTop: 18 }}>
            <Link className="quietLink" href="/resources/payment-lifecycle">How a payment is decided</Link>
          </p>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
