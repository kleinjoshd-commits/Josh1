import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "MPE OS | MPE",
  description:
    "The control layer for global payment operations: every payment approved against policy, routed to the right partner, and written to a permanent record.",
};

const OUTCOMES = [
  {
    title: "Policy before payment",
    body: "Every payment is approved against your rules before it moves — limits, approvers and controls set once and enforced everywhere. No single person can move money alone.",
  },
  {
    title: "Routing without lock-in",
    body: "Payments route to the licensed partner best placed for each corridor. When a better provider exists, the corridor moves by configuration — no rebuild, no disruption, no renegotiation.",
  },
  {
    title: "Proof built in",
    body: "Every approval, release and status change is written to a permanent record as it happens. When an auditor, a regulator or your own board asks what happened, the answer is already on file.",
  },
];

export default function MpeOsPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE OS</div>
          <h1>Every payment approved, routed and proven.</h1>
          <p className="ebSub">
            The control layer for global payment operations. MPE OS holds the
            rules, the approvals and the record — licensed partner institutions
            execute the regulated services in each market.
          </p>
          <div className="ebStats">
            <div className="ebStat"><b>Policy</b><span>enforced before any payment moves</span></div>
            <div className="ebStat"><b>Partners</b><span>changeable by configuration</span></div>
            <div className="ebStat"><b>Record</b><span>permanent, complete, on file</span></div>
          </div>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request Access</Link>
            <Link className="btnSecondary" href="/trust-controls">Trust &amp; controls</Link>
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
            <div className="homePlatformGrid">
              <div className="homePlatformCopy">
                <h2 className="homeSectionTitle">One governed layer, every region</h2>
                <p className="p homePlatformIntro">
                  Approvals, funding checks, FX oversight and release timing in
                  one place — with visibility across partners and regions, and
                  the regulated services provided by licensed partner
                  institutions in each market.
                </p>
              </div>
              <div className="homeVisualShell">
                <div className="card homeVisualCard">
                  <div className="cardInner">
                    <Image
                      src="/mpe-ui.png"
                      alt="MPE platform interface"
                      width={1600}
                      height={1000}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Works with the rest of MPE</h2>
            </div>
            <div className="outcomeGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Payroll and employer of record in 180 countries — from the
                  payroll file to the family.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/workforce">Explore MPE Workforce</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Payout and collection in 140+ countries through licensed
                  partners — every corridor routed to the best one.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/network">Explore MPE Network</Link>
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
