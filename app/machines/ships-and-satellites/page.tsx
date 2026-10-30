import Link from "next/link";
import Nav from "@/components/Nav";
import HomeFaq from "@/components/HomeFaq";
import JsonLd from "@/components/JsonLd";
import RequestAccess from "@/components/RequestAccess";
import { faqPageSchema, shipsFaq } from "@/content/faq";
import { mfamVisibleLine, shipsLead } from "@/content/mfam";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/machines/ships-and-satellites");

const sections = [
  {
    title: "Why a machine needs a hardware identity",
    body: "The identity and signing key are designed to live on the MFAM chip and never leave the hardware, so the machine's identity is designed to resist spoofing and copying.",
  },
  {
    title: "How a payment works",
    body: "The machine's systems request the payment. MFAM is designed to check that request against rules the owner signed, including limits, payees and categories, and to sign it. Payment is designed to be made from the owner's account through licensed partner institutions, and the result is designed to be kept in one tamper-evident record.",
  },
  {
    title: "Ships first",
    body: "MFAM is designed for autonomous ships, with today's crewed ships as the starting point for port fees, fuel and services.",
  },
  {
    title: "Satellites and fleets next",
    body: "MFAM is designed to scale to large fleets where every machine is uniquely identifiable.",
  },
  {
    title: "Status",
    body: "Patent pending, prototype working.",
  },
] as const;

export default function ShipsAndSatellitesPage() {
  return (
    <main className="sitePage">
      <JsonLd data={faqPageSchema(shipsFaq)} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MFAM</div>
          <h1>How can a ship or satellite pay for services?</h1>
          <p className="ebSub">{shipsLead}</p>
          <p className="ebSub">{mfamVisibleLine}</p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          {sections.map((section) => (
            <div className="sectionBlock" key={section.title}>
              <h2 className="homeSectionTitle">{section.title}</h2>
              <p className="p">{section.body}</p>
            </div>
          ))}
          <p className="p machineBack">
            <Link className="quietLink" href="/machines/hardware-identity">
              Hardware identity for machine payments
            </Link>
            {" · "}
            <Link className="quietLink" href="/machines">
              Machines
            </Link>
          </p>
        </div>
      </section>

      <HomeFaq items={shipsFaq} />

      <RequestAccess
        title="Talk to us."
        lede="Tell us what the machine may pay, and within which limits."
        submitLabel="Talk to us"
      />
    </main>
  );
}
