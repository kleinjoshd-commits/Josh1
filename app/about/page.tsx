import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "About | MPE",
  "Financial infrastructure for a borderless economy. One integration for platforms, people and machines. MPE never holds funds."
);

const BELIEFS = [
  {
    title: "One integration",
    body: "Payouts, wallets, cards, identity and cross-border payments. For platforms, people and machines. Machine payments are in development, patent pending.",
  },
  {
    title: "Partners move the money",
    body: "Money transfer and payment services within MPE programs are provided by licensed partner institutions in each market. MPE never holds funds.",
  },
  {
    title: "Never hold the money",
    body: "MPE does not hold or transmit customer funds, and does not store customer identity documents.",
  },
];

export default function AboutPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">ABOUT MPE</div>
          <h1>One integration for every way money moves.</h1>
          <p className="ebSub">
            Financial infrastructure for a borderless economy. Payouts,
            wallets, cards, identity and cross-border payments. For platforms,
            people and machines. Licensed partners move the money. MPE never
            holds funds.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="/about/team">Meet the team</Link>
            <Link className="btnSecondary" href="#kyc">Talk to us</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <section className="homeBand" data-animate>
            <div className="outcomeGrid">
              {BELIEFS.map((b) => (
                <div key={b.title} className="panel">
                  <h3 style={{ marginTop: 0 }}>{b.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{b.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="gapBanner">
              <Link href="/about/team" style={{ color: "inherit" }}>Meet the team →</Link>
            </div>
          </section>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
