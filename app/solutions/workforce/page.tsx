import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "MPE Workforce | MPE",
  description:
    "One audience on the MPE platform: hire, onboard and pay international workforces in 180 countries, then offer those workers payouts, wallets and cards, with licensed partners at every step.",
};

const OUTCOMES = [
  {
    title: "Hire and pay anywhere",
    body: "Payroll, employer of record and contractor payments in 180 countries and 130+ payout currencies, delivered under the MPE program through licensed partner platforms. One system, one contract, every worker.",
  },
  {
    title: "Then serve the worker",
    body: "Payday is where most workforce tools stop. On MPE, the same workers can also use payouts, a wallet and a card through MPE Send, in their language, with licensed partner institutions providing the regulated services.",
  },
  {
    title: "One relationship, end to end",
    body: "Payroll tools serve the employer and stop at the wage. MPE Workforce keeps payroll and the worker's payouts, wallet and card on one integration.",
  },
];

export default function WorkforcePage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE WORKFORCE</div>
          <h1>A workforce, on the same integration.</h1>
          <p className="ebSub">
            Hire, onboard and pay international workforces, then offer those
            workers payouts, wallets and cards. Money transfer and payment
            services within MPE programs are provided by licensed partner
            institutions in each market.
          </p>
          <div className="ebStats">
            <div className="ebStat"><b>180</b><span>countries of payroll coverage</span></div>
            <div className="ebStat"><b>130+</b><span>payout currencies</span></div>
            <div className="ebStat"><b>140+</b><span>countries where money lands</span></div>
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
            <div className="gapBanner">
              Enrollment where the workforce lives and works, payouts from
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
                  your program makes.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/os">Explore MPE OS</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Every corridor routed to the best licensed partner, and
                  changeable without touching the product.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/network">Explore MPE Network</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Send</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Payouts for people, priced in the open.
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
