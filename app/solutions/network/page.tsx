import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { claims } from "@/content/claims";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE Network | MPE",
  "Licensed reach in 140+ countries, 200+ direct bank connections and 130+ payout currencies. MPE never holds funds."
);

const OUTCOMES = [
  {
    title: "Licensed reach",
    body: "Money lands in 140+ countries through 200+ direct bank connections and 130+ payout currencies. Licensed partners provide the regulated services.",
  },
  {
    title: "Best route",
    body: "Each payment routes to the licensed partner best placed for it. A better provider is a configuration change. The platform keeps the relationship.",
  },
  {
    title: "MPE never holds funds",
    body: "Licensed partners hold and move the money. MPE does not hold or transmit customer funds, and does not store customer identity documents.",
  },
];

export default function NetworkPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE NETWORK</div>
          <h1>Licensed reach, 140+ countries.</h1>
          <p className="ebSub">
            One network of licensed partners, orchestrated as one system.
            Outputs are bank, card, wallet, local account and machine.
            Providers can change. The relationship stays.
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
            <Link className="btnSecondary" href="/#network-map">See the map</Link>
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
              <h2 className="homeSectionTitle">Works with the rest of MPE</h2>
            </div>
            <div className="outcomeGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE OS</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Authorize, route and sign above the network.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/os">Explore MPE OS</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Payroll coverage in 180 countries, on the same integration.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/workforce">Explore MPE Workforce</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Send</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Payouts to any account: bank, card, wallet or local account.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/send">Explore MPE Send</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
