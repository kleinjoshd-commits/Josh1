import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Integrate | MPE",
  "Sandbox access, API docs, and embeds come with access. Hosted web embed, JS drop-in, and an iOS wrapper."
);

export default function ExecutionInfrastructurePage() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">INTEGRATE</div>
          <h1>Sandbox, then the screens.</h1>
          <p className="ebSub">
            For a developer adding MPE to an existing app. {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>
      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">The sequence</h2>
          <FlowRow steps={product.integrate} />
          <div className="sectionBlock">
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Embeds</h3>
              <p className="p" style={{ marginTop: 10 }}>{product.embeds}</p>
              <p className="p" style={{ marginTop: 10 }}>
                Platforms that already have an app use these. Distributors
                get a ready-made branded app.
              </p>
            </div>
          </div>
          <p className="p" style={{ marginTop: 18 }}>
            <Link className="quietLink" href="/solutions/os">MPE OS</Link>
          </p>
        </div>
      </section>
      <RequestAccess />
    </main>
  );
}
