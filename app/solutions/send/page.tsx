import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "MPE Send | MPE",
  description:
    "The consumer experience: money home, honestly priced — enrolment in person and in their language, with licensed partner institutions providing the money transfer services.",
};

const OUTCOMES = [
  {
    title: "The rate, in the open",
    body: "The full cost is shown before anyone signs up for anything — the rate, whole and honest, on the first screen. Opaque pricing is this market's oldest complaint; transparency is the product.",
  },
  {
    title: "A human beside them",
    body: "Enrolment happens where the workforce lives and works: a staffed desk, a trained officer, the first transfer walked through together — in the sender's own language, with around twenty languages structurally supported.",
  },
  {
    title: "Built for their phone",
    body: "Fast on modest hardware and patchy networks, legible on a small screen, and honest at every step — a transfer never claims more than the licensed partner can confirm.",
  },
];

export default function SendPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE SEND</div>
          <h1>Money home, honestly priced.</h1>
          <p className="ebSub">
            The consumer product: a person, a phone, and money home at an
            honest rate — enrolment in their own language, in person where it
            matters. Money transfer services are provided by licensed partner
            institutions in each market.
          </p>
          <div className="ebStats">
            <div className="ebStat"><b>140+</b><span>countries where money lands</span></div>
            <div className="ebStat"><b>~20</b><span>languages structurally supported</span></div>
            <div className="ebStat"><b>One</b><span>price, shown before signup</span></div>
          </div>
          <div className="btnRow">
            <Link className="btnPrimary" href="/#kyc">Request Access</Link>
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

          {/* Send stands on its own — and compounds with everything else. */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Its own product — stronger with the rest</h2>
              <p className="p homeContextIntro">
                MPE Send needs no employer and no programme: a person, a
                phone, and a community desk are enough. And it compounds —
                Workforce enrols whole workforces into it, Network carries its
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
