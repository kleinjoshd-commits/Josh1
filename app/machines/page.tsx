import Nav from "@/components/Nav";
import FilmPlayer from "@/components/FilmPlayer";
import RequestAccess from "@/components/RequestAccess";
import { operators, product } from "@/content/product";
import { homepageMedia } from "@/content/media";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Machines | MPE",
  "Set the rules, limits and counterparties a machine may pay. MPE authorizes, routes and signs the request."
);

export default function MachinesPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">MFAM</div>
          <h1>Set the rules. The machine requests payment.</h1>
          <p className="ebSub">
            The operator sets the rules, the limits, and the counterparties a machine may pay. The machine requests payment and MPE authorizes, routes and signs it. Every decision lands in a tamper-evident record.
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
              <FilmPlayer source={homepageMedia.mfam} preload="metadata" />
            </div>
            <p className="hpDisclaimer">Patent pending.</p>
            <p className="p" style={{ marginTop: 18 }}>{product.machines}</p>
          </div>
        </div>
      </section>

      <RequestAccess
        title="Talk to us about machines."
        lede="Tell us what the machine may pay, and within which limits."
        submitLabel="Talk to us about machines"
      />
    </main>
  );
}
