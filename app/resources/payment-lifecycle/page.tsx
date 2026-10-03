import Link from "next/link";
import Nav from "@/components/Nav";
import FlowRow from "@/components/FlowRow";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Authorize, Route, Sign | MPE",
  "Every payment is authorized, routed, and signed. The decision goes into the audit record. MPE never holds funds."
);

export default function PaymentLifecycleResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">PAYMENT ORDER</div>
          <h1>Authorize, Route, Sign.</h1>
          <p className="ebSub">
            That is the order for every payment. {product.funds}
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>
      <section className="deckLight">
        <div className="container deckInner">
          <FlowRow steps={product.flow} />
        </div>
      </section>
      <RequestAccess />
    </main>
  );
}
