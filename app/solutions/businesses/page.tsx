import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { OpsConsole, SplitStory, WorkerPhone } from "@/components/ProductVisuals";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/solutions/businesses");

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
          <SplitStory
            visual={
              <>
                <WorkerPhone />
                <OpsConsole />
              </>
            }
          >
            <h2 className="homeSectionTitle">The job</h2>
            <p className="p">
              Your people get verified, get paid, and spend, from an app branded as yours.
            </p>
            <p className="p">
              Your branded wallet and card for the people you pay. You can earn a share of their card spend. Launch without building your own payments stack. Money movement is provided by licensed partner institutions. MPE never holds funds.
            </p>
            <h2 className="homeSectionTitle">How you integrate</h2>
            <p className="p">Take the ready-made app. It carries your brand. You do not build one.</p>
            <h2 className="homeSectionTitle">What you get</h2>
            <ul className="trustList">
              <li>Your people get verified</li>
              <li>Your people get paid</li>
              <li>Your people spend on your branded card</li>
              <li>You see payouts and verification in one console</li>
            </ul>
          </SplitStory>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
