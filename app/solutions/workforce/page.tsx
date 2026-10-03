import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { claims } from "@/content/claims";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE Workforce | MPE",
  "Pay a global workforce. 180 countries of payroll coverage. Licensed partners move the money. MPE never holds funds."
);

const OUTCOMES = [
  {
    title: "Payroll coverage",
    body: "180 countries of payroll coverage, through licensed partners. MPE does not hold or transmit customer funds.",
  },
  {
    title: "Payouts, wallets and cards",
    body: "Bank, card, wallet or local account, on the same integration. Licensed partners provide the regulated services.",
  },
  {
    title: "One integration",
    body: "Authorize, Route, Sign. You keep the relationship. MPE never holds funds.",
  },
];

export default function WorkforcePage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE WORKFORCE</div>
          <h1>Pay a global workforce.</h1>
          <p className="ebSub">
            Pay a workforce from the same integration. {claims.stats[3].value}{" "}
            countries of payroll coverage. Payouts, wallets and cards sit on
            that integration. Licensed partners move the money.
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
              <h2 className="homeSectionTitle">Works with the rest of MPE</h2>
            </div>
            <div className="outcomeGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE OS</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Authorize, route and sign every payment in the program.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/os">Explore MPE OS</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  140+ countries where money lands. 200+ direct bank connections.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/network">Explore MPE Network</Link>
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
