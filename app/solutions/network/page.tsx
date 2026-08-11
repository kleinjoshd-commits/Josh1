import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "MPE Network | MPE",
  description:
    "One network of licensed partners: payout and collection in 140+ countries, 200+ direct bank connections, every corridor routed to the best partner for the job.",
};

const OUTCOMES = [
  {
    title: "Coverage without compromise",
    body: "Payout and collection in 140+ countries through 200+ direct bank connections — bank transfer, mobile money and cash over the counter — provided by licensed partner institutions in each market.",
  },
  {
    title: "The best partner, every corridor",
    body: "No single institution is best everywhere. MPE routes each corridor to the licensed partner best placed to serve it, and can move a corridor to a new provider without a rebuild, without disruption, and without renegotiating the customer relationship.",
  },
  {
    title: "Institutional-grade foundations",
    body: "Client funds within partner programmes are safeguarded at globally systemically important banks, under each partner's own licence and regulator. MPE holds no funds at any point.",
  },
];

export default function NetworkPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE NETWORK</div>
          <h1>Every corridor, the best licensed partner.</h1>
          <p className="ebSub">
            One network, many engines: regulatory reach held by MPE&apos;s
            licensed partners, orchestrated as a single system. Providers can
            change — the customer relationship and history stay with MPE.
          </p>
          <div className="ebStats">
            <div className="ebStat"><b>140+</b><span>countries where money lands</span></div>
            <div className="ebStat"><b>200+</b><span>direct bank connections</span></div>
            <div className="ebStat"><b>130+</b><span>payout currencies</span></div>
          </div>
          <div className="btnRow">
            <Link className="btnPrimary" href="/#kyc">Request Access</Link>
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
            <div className="gapBanner">
              Any corridor can move to a new provider seamlessly — the customer
              relationship and history stay with MPE throughout.
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
                  The control layer above the network: approvals, routing and a
                  permanent record for every payment.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/os">Explore MPE OS</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Payroll and employer of record in 180 countries — the
                  employer side of the same relationship.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/workforce">Explore MPE Workforce</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>The network map</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Licensed access across the world, market by market.
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
