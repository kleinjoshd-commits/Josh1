import Link from "next/link";
import Nav from "@/components/Nav";
import HomeFaq from "@/components/HomeFaq";
import JsonLd from "@/components/JsonLd";
import RequestAccess from "@/components/RequestAccess";
import { faqPageSchema, machinePaymentsFaq } from "@/content/faq";
import { machinePaymentsLead } from "@/content/mfam";
import { machinePaymentsArticle } from "@/content/schema";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/machines/payments");

const howItPays = [
  "The owner signs the rules, including limits, payees and what the machine may pay for.",
  "The machine's systems request the payment.",
  "MFAM is designed to initiate and sign only the payments that fit the owner's signed rules.",
  "The signing key sits in a locked secure chip.",
  "Payment is designed to be made from the owner's own account. MPE never holds funds.",
] as const;

const workingToday = [
  "The signing key sits in a locked secure chip.",
  "A drone pays a charging pad when it lands.",
  "The pad powers on only after a valid signed payment.",
] as const;

const designedFor = [
  "Real money settlement is designed to run through our payment partners, from the owner's own account.",
  "MFAM is designed to let a satellite pay for ground station passes and data relay, within its owner's limits.",
  "MFAM is designed to let a ship pay for port services within its owner's limits.",
  "MFAM is designed to let a truck pay for charging, fuel and tolls on its own, within its owner's limits.",
] as const;

export default function MachinePaymentsPage() {
  return (
    <main className="sitePage">
      <JsonLd data={machinePaymentsArticle} />
      <JsonLd data={faqPageSchema(machinePaymentsFaq)} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MFAM</div>
          <h1>What is a machine payments platform?</h1>
          <p className="ebSub">{machinePaymentsLead}</p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="sectionBlock">
            <h2 className="homeSectionTitle">How a machine pays</h2>
            <ul className="trustList">
              {howItPays.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Working today</h2>
            <ul className="trustList">
              {workingToday.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="p">Patent pending, working today.</p>
            <p className="small">U.S. Patent Application No. 64/096,334, assigned to MPE Solutions, Inc.</p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What it is designed to do</h2>
            <ul className="trustList">
              {designedFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="p">MPE never holds funds.</p>
          </div>

          <p className="p machineBack">
            <Link className="quietLink" href="/machines/mfam">
              What is MFAM?
            </Link>
            {" · "}
            <Link className="quietLink" href="/machines/charging">
              How can an EV, robot or drone pay for charging?
            </Link>
            {" · "}
            <Link className="quietLink" href="/machines/ships-and-satellites">
              Ships and satellites
            </Link>
            {" · "}
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

      <HomeFaq items={machinePaymentsFaq} />

      <RequestAccess
        title="Talk to us."
        lede="Tell us what the machine may pay, and within which limits."
        submitLabel="Talk to us"
      />
    </main>
  );
}
