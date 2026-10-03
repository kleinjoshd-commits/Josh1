import Nav from "../../components/Nav";
import Link from "next/link";
import KycForm from "@/components/KycForm";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Resources | MPE",
  "Notes on the flow: Authorize, Route, Sign. Licensed partners move the money. MPE never holds funds."
);

const NOTES = [
  {
    href: "/resources/payment-lifecycle",
    title: "Payment lifecycle",
    body: "Authorize, Route, Sign, then Delivered. MPE does not move the money.",
  },
  {
    href: "/resources/execution-infrastructure",
    title: "Execution",
    body: "Licensed partners provide the regulated services. MPE never holds funds.",
  },
  {
    href: "/resources/execution-routing",
    title: "Routing",
    body: "Each payment takes the best licensed path.",
  },
  {
    href: "/resources/fx-governed",
    title: "Cross-border payments",
    body: "Cross-border payments are part of the integration. Rates are not published.",
  },
  {
    href: "/resources/settlement-models",
    title: "Where money lands",
    body: "140+ countries, 200+ direct bank connections, 130+ payout currencies.",
  },
  {
    href: "/solutions/workforce",
    title: "Workforce",
    body: "180 countries of payroll coverage, on the same integration.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">RESOURCES</div>
          <h1>How the platform works.</h1>
          <p className="ebSub">
            Short notes limited to the approved facts. Licensed partners move
            the money. MPE never holds funds.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Talk to us</Link>
            <Link className="btnSecondary" href="/solutions/os">MPE OS</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="outcomeGrid">
            {NOTES.map((note) => (
              <Link key={note.href} href={note.href} className="panel" style={{ textDecoration: "none" }}>
                <h3 style={{ marginTop: 0 }}>{note.title}</h3>
                <p className="p" style={{ margin: "10px 0 0" }}>{note.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <KycForm />
    </main>
  );
}
