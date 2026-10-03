import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RequestAccess from "@/components/RequestAccess";
import { claims } from "@/content/claims";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE Workforce | MPE",
  "Pay a workforce on the Platform API. 180 countries of payroll coverage. Embed the screens, or take a branded app. MPE never holds funds."
);

export default function WorkforcePage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE WORKFORCE</div>
          <h1>Pay a workforce from your product.</h1>
          <p className="ebSub">
            For workforce platforms and for distributors who need an app.
            {claims.stats[3].value} countries of payroll coverage. {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">How a payment works</h2>
          <FlowRow steps={product.flow} />

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What people get</h2>
            <div className="outcomeGrid" style={{ marginTop: 18 }}>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Payouts</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Bank, card, wallet, or cross-border. Wallet means a payout to a mobile wallet.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Cards</h3>
                <p className="p" style={{ marginTop: 10 }}>{product.cards}</p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Identity</h3>
                <p className="p" style={{ marginTop: 10 }}>{product.identity}</p>
              </div>
            </div>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">How you ship it</h2>
            <div className="outcomeGrid" style={{ marginTop: 18 }}>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>You have an app</h3>
                <p className="p" style={{ marginTop: 10 }}>{product.embeds}</p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>You do not</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  A ready-made app in your brand comes with access: identity, payouts, and cards.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Same API</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Sandbox access and {product.webhooks}{" "}
                  <Link className="quietLink" href="/solutions/os">The ops console</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
