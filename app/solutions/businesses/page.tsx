import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Businesses without an app | MPE",
  "Pay your people, let them spend, and earn from it. A ready-made app in your brand."
);

export default function BusinessesPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">BUSINESSES WITHOUT AN APP</div>
          <h1>Pay your people, let them spend, and earn from it.</h1>
          <p className="ebSub">
            For any employer or distributor that pays people and has no app. You get a ready-made app in your brand.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">The job</h2>
          <p className="p">
            Your people get verified, get paid, and send money home, from an app branded as yours.
          </p>
          <p className="p">
            Branded cards for the people you pay, issued by a partner bank. Earn a share of card revenue under the program agreement. {product.funds} The card account sits with the issuing partner.
          </p>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">How you integrate</h2>
            <p className="p">
              Take the ready-made app. It carries your brand. You do not build one.
            </p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What you get</h2>
            <ul className="trustList">
              <li>Your people get verified</li>
              <li>Your people get paid</li>
              <li>Your people send money home</li>
              <li>You see payouts and verification in one console</li>
            </ul>
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
