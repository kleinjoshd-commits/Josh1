import Link from "next/link";
import Nav from "@/components/Nav";
import HomeFaq from "@/components/HomeFaq";
import JsonLd from "@/components/JsonLd";
import RequestAccess from "@/components/RequestAccess";
import { faqPageSchema, hardwareFaq } from "@/content/faq";
import { hardwareLead } from "@/content/mfam";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/machines/hardware-identity");

const approaches = [
  {
    approach: "Software keys and API credentials",
    copied: "Yes. A software key or API credential can be copied or moved.",
    limits: "The software that stores the credential, if it enforces limits.",
    money: "The account the credential can spend from.",
  },
  {
    approach: "Card or account credentials issued to an agent",
    copied: "Yes. The credential can be copied or shared.",
    limits: "The issuer of the credential, or the agent using it.",
    money: "The account the credential draws on.",
  },
  {
    approach: "Blockchain device identities",
    copied:
      "A key held in software can be copied. Recording an identity on a chain does not keep that key inside a chip.",
    limits: "The holder of the key, unless a separate rule set is enforced.",
    money: "The wallet or account the key can spend from.",
  },
  {
    approach: "Secure-element hardware identity with owner rules (MFAM)",
    copied: "The key is designed to never leave the hardware.",
    limits: "Designed so the owner signs the rules.",
    money: "Designed to be paid from the owner's own account. MPE never holds funds.",
  },
] as const;

export default function HardwareIdentityPage() {
  return (
    <main className="sitePage">
      <JsonLd data={faqPageSchema(hardwareFaq)} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MFAM</div>
          <h1>Hardware identity for machine payments</h1>
          <p className="ebSub">{hardwareLead}</p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Identity and authority</h2>
            <p className="p">MFAM is identity and authority.</p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle" id="approaches">
              Approaches compared
            </h2>
            <div className="approachTableWrap">
              <table className="approachTable" aria-labelledby="approaches">
                <thead>
                  <tr>
                    <th scope="col">Approach</th>
                    <th scope="col">Can it be copied</th>
                    <th scope="col">Who sets limits</th>
                    <th scope="col">Where money is held</th>
                  </tr>
                </thead>
                <tbody>
                  {approaches.map((row) => (
                    <tr key={row.approach}>
                      <th scope="row">{row.approach}</th>
                      <td data-label="Can it be copied">{row.copied}</td>
                      <td data-label="Who sets limits">{row.limits}</td>
                      <td data-label="Where money is held">{row.money}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Status</h2>
            <p className="p">Patent pending, prototype working.</p>
          </div>

          <p className="p machineBack">
            <Link className="quietLink" href="/machines/ships-and-satellites">
              How can a ship or satellite pay for services?
            </Link>
            {" · "}
            <Link className="quietLink" href="/machines">
              Machines
            </Link>
          </p>
        </div>
      </section>

      <HomeFaq items={hardwareFaq} />

      <RequestAccess
        title="Talk to us."
        lede="Tell us what the machine may pay, and within which limits."
        submitLabel="Talk to us"
      />
    </main>
  );
}
