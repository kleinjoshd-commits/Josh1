import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { MiniRoute, OpsRouting, SplitStory } from "@/components/ProductVisuals";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Fintechs | MPE",
  "One API and one adapter for every licensed provider. Routing scored on success, speed and cost, with fallback when a provider degrades."
);

export default function FintechsPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">FINTECHS</div>
          <h1>Run more than one provider from one API.</h1>
          <p className="ebSub">
            For fintechs and payment programs that run a provider today, or want to add another.
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
                <MiniRoute />
                <OpsRouting />
              </>
            }
          >
            <h2 className="homeSectionTitle">The job</h2>
            <p className="p">Add a licensed provider without a new integration for each one.</p>
            <h2 className="homeSectionTitle">How you integrate</h2>
            <p className="p">One API. One adapter for every licensed provider.</p>
            <h2 className="homeSectionTitle">What you get</h2>
            <ul className="trustList">
              <li>Routing scored on success, speed and cost</li>
              <li>A signed audit trail</li>
              <li>Fallback when a provider degrades</li>
            </ul>
          </SplitStory>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
