import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Resources | MPE",
  "How to integrate the Platform API: sandbox, webhooks, embeds, the payment order, route choice, and coverage."
);

const NOTES = [
  {
    href: "/resources/execution-infrastructure",
    title: "Integrate",
    body: "Sandbox keys, webhooks, docs, embeds, and the ops console.",
  },
  {
    href: "/resources/payment-lifecycle",
    title: "Authorize, Route, Sign",
    body: "The only order. The decision is signed into the audit record.",
  },
  {
    href: "/resources/execution-routing",
    title: "Route choice",
    body: "Best route, Fastest, or Lowest cost. One adapter. No provider names.",
  },
  {
    href: "/solutions/send",
    title: "Payout types",
    body: "Bank account, debit card push, mobile wallet, local account, cross-border.",
  },
  {
    href: "/resources/settlement-models",
    title: "Coverage",
    body: "140+ countries, 200+ direct bank connections, 130+ payout currencies, 180 countries of payroll coverage.",
  },
  {
    href: "/resources/fx-governed",
    title: "Cross-border payouts",
    body: "Cross-border is a payout type on the same API. Rates are not published.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">RESOURCES</div>
          <h1>What you need to integrate.</h1>
          <p className="ebSub">
            Short notes for a developer or a buyer. Nothing here is a second product.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            {NOTES.map((note) => (
              <Link key={note.href + note.title} href={note.href} className="panel" style={{ textDecoration: "none" }}>
                <h3 style={{ marginTop: 0 }}>{note.title}</h3>
                <p className="p" style={{ margin: "10px 0 0" }}>{note.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
