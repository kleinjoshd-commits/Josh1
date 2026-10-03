import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "MPE OS | MPE",
  "Authorize, Route, Sign. Licensed partners execute. MPE does not hold or transmit customer funds."
);

const OUTCOMES = [
  {
    title: "Authorize",
    body: "The payment is authorized before it moves. MPE does not move the money.",
  },
  {
    title: "Route",
    body: "The payment takes the best licensed path. Licensed partners execute.",
  },
  {
    title: "Sign",
    body: "The release is the Sign step. Delivered is the status that follows. MPE never holds funds.",
  },
];

export default function MpeOsPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MPE OS</div>
          <h1>Authorize, Route, Sign.</h1>
          <p className="ebSub">
            The control steps on the platform. Licensed partners execute.
            MPE does not hold or transmit customer funds, and does not store
            customer identity documents.
          </p>
          <div className="ebStats">
            <div className="ebStat"><b>Authorize</b><span>Before the payment moves</span></div>
            <div className="ebStat"><b>Route</b><span>Best licensed path</span></div>
            <div className="ebStat"><b>Sign</b><span>Then the status is Delivered</span></div>
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
                <h2 className="homeSectionTitle">One integration</h2>
                <p className="p homePlatformIntro">
                  Authorize, Route, Sign. Licensed partners provide the
                  regulated services. MPE never holds funds.
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
                  Payroll coverage in 180 countries, on the same integration.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/workforce">Explore MPE Workforce</Link>
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
