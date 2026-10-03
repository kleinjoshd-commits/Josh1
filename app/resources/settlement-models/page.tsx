import Nav from "../../../components/Nav";
import Link from "next/link";
import KycForm from "@/components/KycForm";
import { claims } from "@/content/claims";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Where money lands | MPE",
  "140+ countries where money lands, 200+ direct bank connections, 130+ payout currencies. Licensed partners execute."
);

export default function SettlementModelsResource() {
  return (
    <main className="sitePage">
      <Nav />
      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">REFERENCE</div>
          <h1>Where money lands.</h1>
          <p className="ebSub">
            These are the only coverage figures on the site. Licensed partners
            execute. MPE never holds funds.
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
            <Link className="btnSecondary" href="/resources">Back to Resources</Link>
            <Link className="btnPrimary" href="#kyc">Talk to us</Link>
          </div>
        </div>
      </section>
      <section className="deckLight">
        <div className="container deckInner">
          <div className="panel">
            <h3 style={{ marginTop: 0 }}>What is stated</h3>
            <p className="p" style={{ marginTop: 10 }}>
              140+ countries where money lands. 200+ direct bank connections.
              130+ payout currencies. 180 countries of payroll coverage.
              Outputs are bank, card, wallet, local account and machine.
              Machine payments are in development, patent pending.
            </p>
          </div>
        </div>
      </section>
      <KycForm />
    </main>
  );
}
