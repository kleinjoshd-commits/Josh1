import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { claims } from "@/content/claims";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE Send | MPE",
  "Payouts to any account. Bank, card, wallet or local account, in 140+ countries, with licensed partners moving the money."
);

const OUTCOMES = [
  {
    title: "Payouts to any account",
    body: "Bank, card, wallet or local account. One integration. Licensed partners provide the regulated services in each market.",
  },
  {
    title: "Authorize, Route, Sign",
    body: "Every payout follows the same path. Authorize the payment, route it, then sign. Delivered is the record.",
  },
  {
    title: "Platforms keep the relationship",
    body: "MPE never holds funds, and does not store customer identity documents. The platform keeps the customer.",
  },
];

export default function SendPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE SEND</div>
          <h1>Payouts to any account.</h1>
          <p className="ebSub">
            The payout product on the MPE platform. For platforms, people and
            machines. {claims.stats[0].value} countries, {claims.stats[2].value}{" "}
            payout currencies. Licensed partners move the money.
          </p>
          <div className="ebStats">
            {claims.stats.map((stat) => (
              <div className="ebStat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
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

          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">One product, one platform</h2>
              <p className="p homeContextIntro">
                MPE Send is payouts. Workforce pays a global team on the same
                integration. Network is the licensed reach. OS is where you
                authorize, route and sign.
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
