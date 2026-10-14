import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { HostApp, SplitStory } from "@/components/ProductVisuals";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Platforms | MPE",
  "Pay your people, give them your branded wallet and card, and earn a share of their card spend. No new licenses needed."
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
              Your branded wallet and card for the people you pay. You can earn a share of their card spend. No new licenses needed. Licensed partners handle the regulated parts. Cards are issued by a licensed bank partner. MPE never holds funds.
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
