import Link from "next/link";
import Nav from "@/components/Nav";
import HomeFaq from "@/components/HomeFaq";
import JsonLd from "@/components/JsonLd";
import RequestAccess from "@/components/RequestAccess";
import { chargingFaq, faqPageSchema } from "@/content/faq";
import { chargingLead, entityLine, mfamVisibleLine } from "@/content/mfam";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/machines/charging");

const sections = [
  {
    title: "Why charging needs machine payments",
    body: "Battery powered machines charge often, sometimes at places their owner has never been. If a person has to approve every session, the machine can't really work on its own. It needs to prove who it is and show it is allowed to pay.",
  },
  {
    title: "Identity: the machine proves who it is",
    body: "The machine's identity and signing key are designed to live on the MFAM chip and are designed never to leave the hardware. A charger can check that the request comes from that exact machine, not a copy.",
  },
  {
    title: "Authority: the owner sets the limits",
    body: "The owner signs the rules: how much the machine may spend, which payees it may pay, and for what. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules.",
  },
] as const;

const paymentSteps = [
  "The machine's systems request payment for a charging session.",
  "MFAM is designed to initiate and sign only the payments that fit the owner's signed rules.",
  "Payment is designed to be made from the owner's own account. MPE never holds funds.",
  "Each payment is designed to be kept in one tamper-evident record the owner can review.",
] as const;

const designedFor = [
  "Electric vehicles and fleets that charge away from home base.",
  "Robots in warehouses, farms or work sites that dock and charge between tasks.",
  "Drones that land at charging points along a route.",
] as const;

export default function ChargingPage() {
  return (
    <main className="sitePage">
      <JsonLd data={faqPageSchema(chargingFaq)} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MFAM</div>
          <h1>How can an EV, robot or drone pay for charging on its own?</h1>
          <p className="ebSub">{chargingLead}</p>
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

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">How a charging payment works</h2>
            <ul className="trustList">
              {paymentSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Who it is designed for</h2>
            <ul className="trustList">
              {designedFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Status</h2>
            <p className="p">Patent pending, prototype working.</p>
          </div>

          <p className="hpDisclaimer">{entityLine}</p>

          <p className="p machineBack">
            <Link className="quietLink" href="/machines/mfam">
              What is MFAM?
            </Link>
            {" · "}
            <Link className="quietLink" href="/machines/hardware-identity">
              Hardware identity for machine payments
            </Link>
            {" · "}
            <Link className="quietLink" href="/machines/ships-and-satellites">
              Ships and satellites
            </Link>
            {" · "}
            <Link className="quietLink" href="/machines">
              Machines
            </Link>
          </p>
        </div>
      </section>

      <HomeFaq items={chargingFaq} />

      <RequestAccess
        title="Talk to us."
        lede="Tell us what the machine may pay, and within which limits."
        submitLabel="Talk to us"
      />
    </main>
  );
}
