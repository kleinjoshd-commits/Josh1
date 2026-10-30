import Link from "next/link";
import Nav from "@/components/Nav";
import FilmPlayer from "@/components/FilmPlayer";
import HomeFaq from "@/components/HomeFaq";
import RequestAccess from "@/components/RequestAccess";
import { faqPageSchema, whatIsMfam } from "@/content/faq";
import { mfamVisibleLine } from "@/content/mfam";
import { homepageMedia } from "@/content/media";
import { operators, product } from "@/content/product";
import { mfamProduct } from "@/content/schema";
import JsonLd from "@/components/JsonLd";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/machines");

const machineGuides = [
  {
    href: "/machines/ships-and-satellites",
    title: "How can a ship or satellite pay for services?",
    body: "A ship or satellite needs an identity that can't be copied and authority its owner sets.",
  },
  {
    href: "/machines/hardware-identity",
    title: "Hardware identity for machine payments",
    body: "Why the identity and signing key are designed to live in the chip.",
  },
] as const;

export default function MachinesPage() {
  return (
    <main className="sitePage machinesPage">
      <JsonLd data={mfamProduct} />
      <JsonLd data={faqPageSchema([whatIsMfam])} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MFAM</div>
          <h1>Set the rules. The machine requests payment.</h1>
          <p className="ebSub">{mfamVisibleLine}</p>
          <p className="ebSub">
            Each payment is designed to be signed by the machine&apos;s chip and kept in one tamper-evident record.
          </p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">Who it is for</h2>
          <ul className="operatorGrid">
            {operators.map((name) => (
              <li className="panel" key={name}>{name}</li>
            ))}
          </ul>

          <div className="sectionBlock">
            <div className="hpMfamFilm">
              <FilmPlayer source={homepageMedia.mfam} preload="metadata" repeat={false} />
            </div>
            <p className="hpDisclaimer">Patent pending, prototype working.</p>
            <p className="p" style={{ marginTop: 18 }}>{product.machines}</p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">Ships, satellites and hardware</h2>
            <div className="cardGrid2">
              {machineGuides.map((guide) => (
                <Link className="panel" href={guide.href} key={guide.href}>
                  <h3 style={{ marginTop: 0 }}>{guide.title}</h3>
                  <p className="p" style={{ marginTop: 10 }}>{guide.body}</p>
                  <span className="go">Open</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeFaq items={[whatIsMfam]} />

      <RequestAccess
        title="Talk to us about machines."
        lede="Tell us what the machine may pay, and within which limits."
        submitLabel="Talk to us about machines"
      />
    </main>
  );
}
