import Link from "next/link";
import Nav from "@/components/Nav";
import HomeFaq from "@/components/HomeFaq";
import JsonLd from "@/components/JsonLd";
import RequestAccess from "@/components/RequestAccess";
import { faqPageSchema, mfamFaq } from "@/content/faq";
import { entityLine, mfamLead, mfamVisibleLine } from "@/content/mfam";
import { mfamProduct } from "@/content/schema";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/machines/mfam");

const designedToDo = [
  "Identity: the identity and signing key live on the MFAM chip and are designed never to leave the hardware, so the machine's identity can't be copied. There is no software-only key option.",
  "Authority: MFAM is designed to check each payment request against rules the owner signed (limits, payees, categories) and sign only what fits.",
  "Record: each payment is designed to be kept in one tamper-evident record.",
  "Money: MFAM pays from the owner's own account. MPE never holds funds.",
] as const;

const nameParts = [
  "Machine: built for machines such as ships, satellites, vehicles, robots and drones.",
  "Financial Authority: the right to pay, within limits the owner sets.",
  "Module: a hardware module (chip) that holds the machine's identity and signing key.",
] as const;

export default function MfamPage() {
  return (
    <main className="sitePage">
      <JsonLd data={mfamProduct} />
      <JsonLd data={faqPageSchema(mfamFaq)} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MFAM</div>
          <h1>What is MFAM (Machine Financial Authority Module)?</h1>
          <p className="ebSub">{mfamLead}</p>
          <p className="ebSub">{mfamVisibleLine}</p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="sectionBlock">
            <h2 className="homeSectionTitle">MFAM in one line</h2>
            <p className="p">MFAM is identity and authority for machines. Patent pending, prototype working.</p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Who makes MFAM</h2>
            <p className="p">
              MFAM is made by Modern Pay Engine (MPE), legal name MPE Solutions, Inc, at modernpayengine.com. MPE&apos;s positioning: &quot;One integration for every way money moves. For people today, for machines tomorrow.&quot;
            </p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What the name means</h2>
            <ul className="trustList">
              {nameParts.map((part) => (
                <li key={part}>{part}</li>
              ))}
            </ul>
            <p className="p">On this site, MFAM always means Modern Pay Engine&apos;s Machine Financial Authority Module.</p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What MFAM is designed to do</h2>
            <ul className="trustList">
              {designedToDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Where MFAM is designed to be used</h2>
            <ul className="trustList">
              <li>
                <Link className="quietLink" href="/machines/ships-and-satellites">
                  Ships: port fees, fuel and services.
                </Link>
              </li>
              <li>
                <Link className="quietLink" href="/machines/ships-and-satellites">
                  Satellites: services such as ground station time.
                </Link>
              </li>
              <li>
                <Link className="quietLink" href="/machines/charging">
                  EVs, robots and drones: charging.
                </Link>
              </li>
            </ul>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Status</h2>
            <p className="p">Patent pending, prototype working.</p>
          </div>

          <p className="hpDisclaimer">{entityLine}</p>

          <p className="p machineBack">
            <Link className="quietLink" href="/machines">
              Machines
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
            <Link className="quietLink" href="/machines/charging">
              How can an EV, robot or drone pay for charging?
            </Link>
            {" · "}
            <Link className="quietLink" href="/company">
              Company
            </Link>
          </p>
        </div>
      </section>

      <HomeFaq items={mfamFaq} />

      <RequestAccess
        title="Talk to us."
        lede="Tell us what the machine may pay, and within which limits."
        submitLabel="Talk to us"
      />
    </main>
  );
}
