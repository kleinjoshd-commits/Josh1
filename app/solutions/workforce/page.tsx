import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "MPE Workforce | MPE",
  description:
    "Hire, onboard and pay international workforces in 180 countries — then serve those same workers' own financial lives, with licensed partners at every step.",
};

const OUTCOMES = [
  {
    title: "Hire and pay anywhere",
    body: "Payroll, employer of record and contractor payments in 180 countries and 130+ payout currencies — delivered under the MPE programme through licensed partner platforms. One system, one contract, every worker.",
  },
  {
    title: "Then serve the worker",
    body: "Payday is where most platforms stop. MPE continues: the same workers' own paydays, served through MPE Send — in their language, at an honest rate, with licensed partner institutions providing the regulated services.",
  },
  {
    title: "One relationship, end to end",
    body: "Payroll platforms serve the employer and stop at the wage. MPE pairs the employer's payroll with the worker's own payday and holds the whole relationship — from the payroll file to the family.",
  },
];

export default function WorkforcePage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE WORKFORCE</div>
          <h1>From the payroll file to the family.</h1>
          <p className="ebSub">
            Hire, onboard and pay international workforces — then serve those
            same workers&apos; own financial lives. Money transfer and payment
            services within MPE programmes are provided by licensed partner
            institutions in each market.
          </p>
          <div className="ebStats">
            <div className="ebStat"><b>180</b><span>countries of payroll coverage</span></div>
            <div className="ebStat"><b>130+</b><span>payout currencies</span></div>
            <div className="ebStat"><b>140+</b><span>countries where money lands</span></div>
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

          <section className="homeBand" data-animate>
            <div className="gapBanner">
              Enrolment where the workforce lives and works — wages home from
              the first pay cycle.
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
                  Approvals, routing and a permanent record for every payment
                  your programme makes.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/os">Explore MPE OS</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Every corridor routed to the best licensed partner — and
                  changeable without touching the product.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/network">Explore MPE Network</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>The network map</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Licensed access across the world — see where programmes can
                  run today.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/#network-map">See the network</Link>
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
