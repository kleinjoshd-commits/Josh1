import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Industries | MPE",
  "One integration for platforms, people and machines. Machine payments are in development, patent pending. MPE never holds funds."
);

const AUDIENCES = [
  {
    title: "Platforms",
    body: "Payouts, wallets, cards, identity and cross-border payments, in the platform's own experience. Licensed partners move the money.",
  },
  {
    title: "People",
    body: "Pay a workforce from the same integration. 180 countries of payroll coverage. You keep the relationship.",
  },
  {
    title: "Machines and autonomous systems",
    body: "Machine payments are in development, patent pending. MFAM is not a live payout product. It does not move money.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">INDUSTRIES</div>
          <h1>Platforms, people and machines.</h1>
          <p className="ebSub">
            One integration for payouts, wallets, cards, identity and
            cross-border payments. These are the audiences on the homepage.
            They are not a list of live customer programs.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request Access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            {AUDIENCES.map((item) => (
              <div className="panel" key={item.title}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
