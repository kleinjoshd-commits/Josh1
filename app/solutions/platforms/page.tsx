import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { HostApp, SplitStory } from "@/components/ProductVisuals";
import { product } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Platforms | MPE",
  "Pay your people, and earn from it. Workforce, gig, fleet and logistics software embed MPE and keep their app."
);

export default function PlatformsPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">PLATFORMS</div>
          <h1>Pay your people, and earn from it.</h1>
          <p className="ebSub">
            Workforce, gig, fleet and logistics software. You embed MPE and keep your app.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <SplitStory visual={<HostApp screen="both" />}>
            <h2 className="homeSectionTitle">The job</h2>
            <p className="p">
              Your people get paid from the app they already use.
            </p>
            <p className="p">
              Branded cards for the people you pay, issued by a partner bank. Earn a share of card revenue under the program agreement. {product.funds} The card account sits with the issuing partner.
            </p>
            <h2 className="homeSectionTitle">How you integrate</h2>
            <p className="p">Embed the screens and keep your app.</p>
            <h2 className="homeSectionTitle">What you get</h2>
            <ul className="trustList">
              <li>KYC, with document and selfie checks in your app</li>
              <li>Payouts to bank, debit card and mobile wallet</li>
              <li>Payout status on a signed webhook</li>
            </ul>
          </SplitStory>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
