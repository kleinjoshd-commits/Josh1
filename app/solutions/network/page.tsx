import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { claims } from "@/content/claims";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE Network | MPE",
  "140+ countries where money lands, 200+ direct bank connections, 130+ payout currencies. Licensed partners move the money. MPE never holds funds."
);

const OUTCOMES = [
  {
    title: "Where money lands",
    body: "140+ countries, 200+ direct bank connections, 130+ payout currencies. Licensed partners provide the regulated services.",
  },
  {
    title: "Best route",
    body: "Each payment takes the best licensed path. MPE does not move the money.",
  },
  {
    title: "MPE never holds funds",
    body: "MPE does not hold or transmit customer funds, and does not store customer identity documents. Licensed partners do.",
  },
];

export default function NetworkPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE NETWORK</div>
          <h1>140+ countries, through licensed partners.</h1>
          <p className="ebSub">
            Money lands through licensed partners. Outputs are bank, card,
            wallet, local account and machine. Machine payments are in
            development, patent pending. MPE is not a bank and does not move
            the money.
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
