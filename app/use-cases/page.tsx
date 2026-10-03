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
    body: "Bank account, debit card push, mobile wallet, local account, and cross-border.",
  },
  {
    href: "/solutions/os",
    title: "Wallets, cards, and KYC",
    body: "In-app balance, branded cards, and instant ID checks, embedded in your app.",
  },
  {
    href: "/solutions/workforce",
    title: "A workforce",
    body: "180 countries of payroll coverage on the same Platform API.",
  },
  {
    href: "/solutions/network",
    title: "Many providers, one adapter",
    body: "Best route, Fastest, or Lowest cost. Providers are not named.",
  },
  {
    href: "/industries",
    title: "No app yet",
    body: "A ready-made app in your brand, instead of an embed.",
  },
  {
    href: "/industries",
    title: "Machines",
    body: "MFAM is patent pending, concept stage. A machine can approve payments within limits you set.",
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
            One Platform API. Pick the job you need to ship. MPE never holds funds.
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
