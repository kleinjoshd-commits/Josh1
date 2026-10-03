import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Industries | MPE",
  "One integration for platforms, people and machines. Payouts, wallets, cards, identity and cross-border payments across distributed operations."
);

const INDUSTRIES = [
  {
    title: "Machines and autonomous systems",
    body: "Pay machines the same way you pay people: authorize, route and sign, with a machine as the output.",
  },
  {
    title: "Platforms",
    body: "Embed payouts, wallets, cards and identity. The platform keeps the customer. Licensed partners move the money.",
  },
  {
    title: "Maritime",
    body: "Crews, port operations and vendor payments for fleets that do not stay in one country.",
  },
  {
    title: "Logistics",
    body: "Carriers, contractors and warehouses across regions, on one integration.",
  },
  {
    title: "Defense and government support",
    body: "Controlled, auditable payments for distributed personnel, vendors and partners.",
  },
  {
    title: "Construction and field services",
    body: "Crews, subcontractors and project payments, with the record attached.",
  },
  {
    title: "Energy and infrastructure",
    body: "Remote sites, contractors and multi-entity projects under one control layer.",
  },
  {
    title: "Agriculture",
    body: "Seasonal and mobile operations, paid through licensed partners. MPE never holds funds.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">INDUSTRIES</div>
          <h1>One integration, every operation.</h1>
          <p className="ebSub">
            Payouts, wallets, cards, identity and cross-border payments for
            platforms, people and machines. The same flow everywhere:
            Authorize, Route, Sign.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request Access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="kycGrid">
            {INDUSTRIES.map((item) => (
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
