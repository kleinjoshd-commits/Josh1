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
  dateModified: "2026-11-02",
} as const;

const workingToday = [
  "Each machine gets its own MFAM identity, a signing key tied to it.",
  "The owner sets signed spending rules: a per payment limit, a total limit and an offline budget.",
  "MFAM checks each payment against those rules, then initiates and signs it for the machine.",
  "The owner can lower a limit live. The next payment over it is refused.",
  "Payments over the limit are refused and never signed.",
  "A fake charging pad is refused.",
  "A payment sent to the wrong account is refused.",
  "With no connection, MFAM keeps applying the rules and pays from a small offline budget.",
  "When the connection returns, queued payments replay in order and are checked again.",
  "Every step goes into a signed, tamper evident log.",
  "It runs on a small computer, with a phone as the screen.",
  "Signing runs in test mode today, with a software test key and example amounts on a test ledger.",
] as const;

const designedTo = [
  "Keep the signing key inside a certified secure chip on the machine.",
  "Sign each payment in hardware, so the key never leaves the chip.",
  "Settle real money through our payment partners.",
  "Pay from the owner's own funded account. MPE never holds the funds.",
  "Ride on a drone and pay a charging pad when it lands.",
  "Power a pad only after a valid signed payment.",
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
          <p className="ebSub">Last updated: November 2, 2026</p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Working in the prototype today</h2>
            <ul className="trustList">
              {workingToday.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Designed to</h2>
            <ul className="trustList">
              {designedTo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

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
