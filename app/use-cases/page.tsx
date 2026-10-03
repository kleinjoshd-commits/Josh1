import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { claims } from "@/content/claims";

export const metadata = {
  title: "Use Cases | MPE",
  description:
    "How platforms, operators and institutions use MPE, for people, workforces and machines, with licensed partners providing the regulated services.",
};

// Anonymized composites of real program shapes. No customer names, no
// invented metrics, outcomes are stated as what the program does, not
// as numbers we cannot publish.
const CASES = [
  {
    kicker: "AGRICULTURE · WORKFORCE BENEFIT",
    problem:
      "A food producer paid a seasonal workforce by bank transfer, and had no payouts, wallet or card inside the same program.",
    points: [
      "Workers enroll in MPE Send at a staffed desk on site, in their own language, with a trained officer beside them for the first transfer.",
      "The full cost is shown before signup: the rate, in the open, before anyone commits to anything.",
      "Money transfer services are provided by licensed partner institutions; the employer simply offers the program as a benefit.",
    ],
    outcome:
      "Workers get paid the way that fits, and the employer offers payouts without becoming a payments company.",
  },
  {
    kicker: "CONSUMER GOODS · PAYMENT CONTROL",
    problem:
      "An importer ran supplier and contractor payments across borders on spreadsheets and trust, approvals informal, releases nobody could reconstruct later.",
    points: [
      "Every payment is approved against policy before it moves; no single person can move money alone.",
      "Corridors route to the licensed partner best placed to serve each one, and can change without a rebuild.",
      "Every approval, release and status change is written to a permanent record as it happens.",
    ],
    outcome:
      "When an auditor or the board asks what happened, the answer is already on file, for every payment, in every market.",
  },
  {
    kicker: "CONSTRUCTION · GLOBAL WORKFORCE",
    problem:
      "A multinational contractor hired across a dozen countries, and ran payroll, contractor payments and compliance on a different system in each one.",
    points: [
      "Hire, onboard and pay in 180 countries through one program, payroll, employer of record and contractor payments together.",
      "The same workers can then use payouts, a wallet and a card, with licensed partners providing the regulated services.",
      "One relationship covers the employer's file and the worker's payouts, in every market the project touches.",
    ],
    outcome:
      "One system from payroll to payout, instead of a different vendor at every border.",
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">USE CASES</div>
          <h1>Built for every way money moves.</h1>
          <p className="ebSub">
            How employers, operators and institutions use MPE. Composites of
            real program shapes, no customer names, and the regulated
            services provided by licensed partner institutions throughout.
          </p>
          <div className="ebStats">
            {claims.stats.map((s) => (
              <div className="ebStat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <section className="homeBand" data-animate>
            <div style={{ display: "grid", gap: 18 }}>
              {CASES.map((c) => (
                <div key={c.kicker} className="caseCard">
                  <div className="caseKicker">{c.kicker}</div>
                  <div className="caseProblem">{c.problem}</div>
                  <ul className="caseList">
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="caseOutcome">{c.outcome}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Start where it fits</h2>
            </div>
            <div className="productTrio">
              <Link href="/solutions/send" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Send</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>Payouts for people, priced in the open.</p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/workforce" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>One audience: a global workforce.</p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/network" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>Every corridor, the best licensed partner.</p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/os" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE OS</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>Every payment approved, routed and proven.</p>
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
