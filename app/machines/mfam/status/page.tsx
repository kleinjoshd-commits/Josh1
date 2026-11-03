import Link from "next/link";
import Nav from "@/components/Nav";
import JsonLd from "@/components/JsonLd";
import { CANONICAL_ORIGIN } from "@/content/seo";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/machines/mfam/status");

const pageUrl = `${CANONICAL_ORIGIN}/machines/mfam/status`;

const statusPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: pageUrl,
  name: "MFAM status",
  description:
    "Patent pending, prototype working. U.S. Patent Application No. 64/096,334, assigned to MPE Solutions, Inc.",
  dateModified: "2026-11-03",
} as const;

const workingToday = [
  "Gives each machine its own MFAM identity, with a signing key held in a locked secure chip.",
  "Lets the owner set signed spending rules (a per-payment limit, a total limit and an offline budget) and lower them live.",
  "Checks every payment against those rules, then signs it for the machine.",
  "Stops bad payments cold: anything over the limit, from a fake charging pad, or sent to the wrong account is refused and never signed.",
  "Keeps working offline, then replays queued payments in order when the connection returns.",
  "Records every step in a signed, tamper-evident log.",
  "Has flown on a drone in prototype testing.",
  "Pays a charging pad when a drone lands, and the pad powers on only after a valid signed payment.",
  "Runs on a small computer, with a phone as the screen.",
] as const;

const whatsNext = [
  "Real settlement through our payment partners, from the owner's own funded account. MPE never holds the funds.",
  "Satellites: designed to let a satellite pay for ground station passes and data relay, within its owner's limits.",
  "Ships: designed to bind the vessel's IMO identity to a secure chip on board, so the ship can sign for what it used and pay within the owner's limits.",
  "Trucks: designed to let a truck pay for charging, fuel and tolls on its own, within its owner's limits.",
] as const;

export default function MfamStatusPage() {
  return (
    <main className="sitePage">
      <JsonLd data={statusPage} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MFAM</div>
          <h1>MFAM status</h1>
          <p className="ebSub">Patent pending, prototype working.</p>
          <p className="small">U.S. Patent Application No. 64/096,334, assigned to MPE Solutions, Inc.</p>
          <p className="ebSub">Last updated: November 3, 2026</p>
          <p className="ebSub"><strong>MFAM gives a machine its own identity and the authority to pay, within rules its owner controls.</strong></p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What MFAM does today</h2>
            <ul className="trustList">
              {workingToday.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">{"What's next"}</h2>
            <ul className="trustList">
              {whatsNext.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="small">Prototype payments use example amounts on a test ledger.</p>

          <p className="p machineBack">
            <Link className="quietLink" href="/machines/mfam">
              Learn about MFAM
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
