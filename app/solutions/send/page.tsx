import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "MPE Send | MPE",
  description:
    "Payouts for people, priced in the open, with enrollment in their language and licensed partner institutions providing the money transfer services.",
};

const OUTCOMES = [
  {
    title: "The rate, in the open",
    body: "The full cost is shown before anyone signs up for anything: the rate, whole and honest, on the first screen. Opaque pricing is this market's oldest complaint; transparency is the product.",
  },
  {
    title: "A human beside them",
    body: "Enrollment can happen in person: a staffed desk, a trained officer, the first payout walked through together, in the person's own language, with around twenty languages structurally supported.",
  },
  {
    title: "Built for their phone",
    body: "Fast on modest hardware and patchy networks, legible on a small screen, and honest at every step, a transfer never claims more than the licensed partner can confirm.",
  },
];

export default function SendPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE SEND</div>
          <h1>Payouts, priced in the open.</h1>
          <p className="ebSub">
            The people side of the platform: a person, a phone, and a payout
            at an honest rate, enrollment in their own language, in person
            where it matters. Money transfer services are provided by licensed
            partner institutions in each market.
          </p>
          <div className="ebStats">
            <div className="ebStat"><b>140+</b><span>countries where money lands</span></div>
            <div className="ebStat"><b>~20</b><span>languages structurally supported</span></div>
            <div className="ebStat"><b>One</b><span>price, shown before signup</span></div>
          </div>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request Access</Link>
            <Link className="btnSecondary" href="/use-cases">See it in use</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <section className="homeBand" data-animate>
            <div className="outcomeGrid">
              {OUTCOMES.map((o) => (
                <div key={o.title} className="panel">
                  <h3 style={{ marginTop: 0 }}>{o.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{o.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Send stands on its own, and compounds with everything else. */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Its own product, stronger with the rest</h2>
              <p className="p homeContextIntro">
                MPE Send is the payout experience for a person: a phone is
                enough, and a community desk can help. It also compounds.
                Workforce can enroll a workforce into it, Network carries the
                corridors, and OS approves and records every payment beneath
                it.
              </p>
            </div>
            <div className="linkRow">
              <Link className="btnSecondary" href="/solutions/workforce">MPE Workforce</Link>
              <Link className="btnSecondary" href="/solutions/network">MPE Network</Link>
              <Link className="btnSecondary" href="/solutions/os">MPE OS</Link>
              <Link className="btnSecondary" href="/#network-map">The network map</Link>
            </div>
          </section>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
