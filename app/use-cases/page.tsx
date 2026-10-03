import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Use cases | MPE",
  "Start with payouts, wallets and cards, a workforce, or the provider adapter. Machine payments are concept stage, patent pending."
);

const STARTS = [
  {
    href: "/solutions/send",
    title: "Payouts",
    body: "Bank, card, wallet, and cross-border. A wallet is a payout to a mobile wallet.",
  },
  {
    href: "/solutions/os",
    title: "Cards and KYC",
    body: "Branded cards with spend controls and freeze. Document and selfie checks in your app.",
  },
  {
    href: "/solutions/workforce",
    title: "A workforce",
    body: "180 countries of payroll coverage on the same Platform API.",
  },
  {
    href: "/solutions/network",
    title: "Many providers, one adapter",
    body: "Every allowed route is scored on success, speed and cost. The best one is picked.",
  },
  {
    href: "/industries",
    title: "A branded app",
    body: "A ready-made app in your brand comes with access.",
  },
  {
    href: "/industries",
    title: "Machines",
    body: "MFAM is patent pending, concept stage. Machines approve payments within limits the operator sets.",
  },
];

export default function UseCasesPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">USE CASES</div>
          <h1>Start with the job.</h1>
          <p className="ebSub">
            One Platform API. Pick the job you need to ship. MPE never holds funds. Licensed partners do.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            {STARTS.map((item) => (
              <Link key={item.title} href={item.href} className="panel" style={{ textDecoration: "none" }}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="p" style={{ margin: "10px 0 0" }}>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
