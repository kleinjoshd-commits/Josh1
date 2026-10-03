import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "About | MPE",
  description:
    "Why MPE exists: one integration for every way money moves, for people, platforms and machines, with licensed partners providing the regulated services.",
};

const BELIEFS = [
  {
    title: "The flow, not a single product",
    body: "Payouts, wallets, cards, identity and cross-border are one integration. Platforms keep the customer. Licensed partners move the money. MPE never holds funds.",
  },
  {
    title: "Hard places force better systems",
    body: "Serving people, platforms and machines across borders, weak networks and hard operating conditions forces infrastructure that is honest, resilient and simple. Systems built for the hardest places work everywhere.",
  },
  {
    title: "Never hold the money",
    body: "MPE does not hold or transmit customer funds, and does not store customer identity documents. Licensed partner institutions provide the regulated services, enforced by architecture, not policy.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">ABOUT MPE</div>
          <h1>One integration for every way money moves.</h1>
          <p className="ebSub">
            MPE is financial infrastructure for a borderless economy: smart
            routing, payouts, wallets, cards, identity, cross-border and
            machine payments. For people, platforms and machines. Licensed
            partners move the money. MPE never holds funds.
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
              Leadership across payments, telecoms, Gulf banking and
              Asia-Pacific financial services.{" "}
              <Link href="/about/team" style={{ color: "inherit" }}>Meet the team →</Link>
            </div>
          </section>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
