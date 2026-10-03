import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";

export const metadata = {
  title: "Use Cases | MPE",
  description:
    "How platforms use MPE for payouts, wallets, cards, identity and machine payments.",
};

export default function UseCasesPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">USE CASES</div>
          <h1>Built for every way money moves.</h1>
          <p className="ebSub">
            One integration for payouts, wallets, cards, identity and machine
            payments. Platforms keep the relationship. Licensed partners
            provide the regulated services.
          </p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Start where it fits</h2>
            </div>
            <div className="productTrio">
              <Link href="/solutions/send" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Send</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>Payouts to any account.</p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/workforce" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>Pay a global workforce.</p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/network" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>Licensed reach, 140+ countries.</p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/os" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE OS</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>Approve, route and prove.</p>
                <span className="go">Explore →</span>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
