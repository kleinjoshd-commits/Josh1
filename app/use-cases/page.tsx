import Link from "next/link";
import Nav from "@/components/Nav";
import KycForm from "@/components/KycForm";
import { claims } from "@/content/claims";

export const metadata = {
  title: "Use Cases | MPE",
  description:
    "How employers, operators and institutions use MPE — from the payroll file to the family, with licensed partners providing the regulated services.",
};

// Anonymized composites of real programme shapes. No customer names, no
// invented metrics — outcomes are stated as what the programme does, not
// as numbers we cannot publish.
const CASES = [
  {
    kicker: "AGRICULTURE · WORKFORCE BENEFIT",
    problem:
      "A food producer's payday ended at the bank transfer — and its migrant workforce lost 4-10% of every paycheck getting money the rest of the way home.",
    points: [
      "Workers enrol at a staffed desk on site, in their own language, with a trained officer beside them for the first transfer.",
      "The full cost is shown before signup — the rate, in the open, before anyone commits to anything.",
      "Money transfer services are provided by licensed partner institutions; the employer simply offers the programme as a benefit.",
    ],
    outcome:
      "More of each paycheck reaches the people it was earned for — and the employer offers a benefit workers feel on the first payday.",
  },
  {
    kicker: "CONSUMER GOODS · PAYMENT CONTROL",
    problem:
      "An importer ran supplier and contractor payments across borders on spreadsheets and trust — approvals informal, releases nobody could reconstruct later.",
    points: [
      "Every payment is approved against policy before it moves; no single person can move money alone.",
      "Corridors route to the licensed partner best placed to serve each one, and can change without a rebuild.",
      "Every approval, release and status change is written to a permanent record as it happens.",
    ],
    outcome:
      "When an auditor or the board asks what happened, the answer is already on file — for every payment, in every market.",
  },
  {
    kicker: "CONSTRUCTION · GLOBAL WORKFORCE",
    problem:
      "A multinational contractor hired across a dozen countries — and ran payroll, contractor payments and compliance on a different system in each one.",
    points: [
      "Hire, onboard and pay in 180 countries through one programme — payroll, employer of record and contractor payments together.",
      "The same workers' own paydays are served next: the wage, the money sent home, the family's collection — with licensed partners providing the regulated services.",
      "One relationship covers the employer's file and the worker's family, in every market the project touches.",
    ],
    outcome:
      "One system from the payroll file to the family — instead of a different vendor at every border.",
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">USE CASES</div>
          <h1>Built for the payday that crosses borders.</h1>
          <p className="ebSub">
            How employers, operators and institutions use MPE. Composites of
            real programme shapes — no customer names, and the regulated
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
            <div className="outcomeGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE OS</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Every payment approved, routed and proven.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/os">Explore MPE OS</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  From the payroll file to the family.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/workforce">Explore MPE Workforce</Link>
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Every corridor, the best licensed partner.
                </p>
                <div style={{ marginTop: 14 }}>
                  <Link className="btnSecondary" href="/solutions/network">Explore MPE Network</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
