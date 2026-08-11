import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "About | MPE",
  description:
    "Why MPE exists: money for the world's newest earners — one relationship, held across every licensed handoff, with partner institutions providing the regulated services.",
};

const BELIEFS = [
  {
    title: "The person, not the transaction",
    body: "Every institution in the chain monetises one transaction, then loses the customer at the handoff. MPE exists to hold the person — their enrolment, their history, their trust — across every licensed handoff.",
  },
  {
    title: "Hard places force better systems",
    body: "Serving people the system forgot — across borders, weak networks and underbanked regions — forces infrastructure that is honest, resilient and simple. Systems built for the hardest places work everywhere.",
  },
  {
    title: "Never hold the money",
    body: "MPE does not hold or transmit customer funds, and does not store customer identity documents. Licensed partner institutions provide the regulated services — enforced by architecture, not policy.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">ABOUT MPE</div>
          <h1>We hold the person.</h1>
          <p className="ebSub">
            MPE serves globally mobile earners and their employers — across
            the Gulf, Asia and the West — and the families their wages
            support. Built on a straightforward belief: workers should not
            lose a meaningful share of their wages just to support the people
            who depend on them.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="/about/team">Meet the team</Link>
            <Link className="btnSecondary" href="/#kyc">Talk to us</Link>
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
