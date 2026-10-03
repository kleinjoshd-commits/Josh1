import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Who it is for | MPE",
  "Platforms embed KYC, payouts, and card. Distributors get a branded app. MFAM is patent pending, concept stage."
);

export default function IndustriesPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">WHO IT IS FOR</div>
          <h1>Embed it, or take the branded app.</h1>
          <p className="ebSub">
            Two ways in, plus a concept for machines. {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>You already have an app</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Embed KYC, payouts, and card. {product.embeds}
              </p>
              <p className="p" style={{ marginTop: 14 }}>
                <Link className="quietLink" href="/solutions/os">Platform API and console</Link>
              </p>
            </div>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>A branded app</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Distributors and partners get a ready-made app in their brand:
                identity, payouts, and cards. Sandbox access, API docs and embeds come with access.
              </p>
              <p className="p" style={{ marginTop: 14 }}>
                <Link className="quietLink" href="/solutions/workforce">Workforce and branded app</Link>
              </p>
            </div>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>The payer is a machine</h3>
              <p className="p" style={{ marginTop: 10 }}>
                {product.audiences[2].body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
