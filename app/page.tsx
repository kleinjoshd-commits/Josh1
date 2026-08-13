import Link from "next/link";
import Nav from "../components/Nav";
import KycForm from "../components/KycForm";
import LicensedMap from "../components/LicensedMap";
import { claims } from "@/content/claims";

// =====================================================================
// Emerald-first homepage. Seven screens, one idea each:
//
//   1. Hero       , the claim, the numbers, two doors in.
//   2. The map    , the strongest piece; the hero flows straight into it.
//   3. Statement  , the gap, as one sentence with a screen of air.
//   4. Mission    , the only light band: why this company exists.
//   5. Products   , three cards, one line each.
//   6. Two doors  , employers and institutions, one paragraph each.
//   7. Contact.
//
// Everything else this page used to carry lives on the product pages.
// =====================================================================

export default function Home() {
  return (
    <main>
      <Nav />

      {/* 1, Hero. Same world as the map: one emerald surface. */}
      <section className="emeraldBand">
        <div className="ebWrap" style={{ paddingBottom: 28 }}>
          <div className="ebTag">MPE</div>
          <h1>{claims.hero.headline}</h1>
          <p className="ebSub">{claims.hero.subheadline}</p>
          <div className="btnRow">
            <Link className="btnPrimary" href="/#kyc">Request Access</Link>
            <Link className="btnSecondary" href="/#partners">Partner with MPE</Link>
          </div>
          <div className="ebStats">
            {/* The 140+ countries figure lives with the map just below;
                showing it here too said the same thing twice. */}
            {claims.stats
              .filter((s) => !s.label.includes("countries where money lands"))
              .map((s) => (
                <div className="ebStat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
          </div>
          <p className="ebAttribution">{claims.serviceAttribution}</p>
        </div>
      </section>

      {/* 2, The map. No seam: the same emerald, continued. */}
      <LicensedMap />

      {/* 3, The statement. One sentence, a screen of air. */}
      <section className="emeraldBand">
        <div className="ebWrap ebStatement" style={{ paddingTop: 34, paddingBottom: 64 }}>
          <h2>Everyone holds one piece.<br />Nobody holds the person.</h2>
          <p>
            Payroll stops at the wage. Banks hold accounts they cannot fill.
            Counters see a transaction, never a customer. MPE is the missing
            layer: the relationship itself.
          </p>
        </div>
      </section>

      {/* 4, Products. Four cards, one line each. */}
      <section className="deckLight">
        <div className="container deckInner">
          <section className="homeBand" data-animate>
            <div className="productTrio">
              <Link href="/solutions/send" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Send</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Money home, honestly priced.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/workforce" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Workforce</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  From the payroll file to the family.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/network" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE Network</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Every corridor, the best licensed partner.
                </p>
                <span className="go">Explore →</span>
              </Link>
              <Link href="/solutions/os" className="panel">
                <h3 style={{ marginTop: 0 }}>MPE OS</h3>
                <p className="p" style={{ margin: "10px 0 18px" }}>
                  Every payment approved, routed and proven.
                </p>
                <span className="go">Explore →</span>
              </Link>
            </div>
          </section>

          {/* Trust, first-class: the category norm is a compliance section
              on the homepage. Ours states the architecture, not badges. */}
          <section className="homeBand" data-animate>
            <div className="homeSectionHeader homeContextHeader">
              <h2 className="homeSectionTitle">Built to be trusted</h2>
            </div>
            <div className="outcomeGrid">
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Never holds funds</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  MPE does not hold or transmit customer funds, and does not
                  store customer identity documents. Enforced by architecture,
                  not policy.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Licensed institutions, every market</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Money transfer and payment services within MPE programmes are
                  provided by licensed partner institutions in each market,
                  under their own regulators.
                </p>
              </div>
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Everything on the record</h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Every approval, release and status change is written to a
                  permanent record as it happens. When a regulator asks, the
                  answer is already on file.
                </p>
              </div>
            </div>
            <div className="linkRow" style={{ marginTop: 20 }}>
              <Link className="btnSecondary" href="/trust-controls">How trust works</Link>
            </div>
          </section>
        </div>
      </section>

      {/* 6, Two doors. Employers and institutions, one paragraph each. */}
      <section className="emeraldBand" id="partners">
        <div className="ebWrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
          <div className="ebTag">WORKING TOGETHER</div>
          <div className="ebDoors">
            <div className="ebDoor">
              <h3>For employers</h3>
              <p>
                One programme from payroll to payday: hire, onboard and pay
                across borders, and your workforce enrolls on site, in their
                own languages, with licensed partners carrying every wage home.
              </p>
              <Link className="btnPrimary" href="/#kyc">Request Access</Link>
            </div>
            <div className="ebDoor">
              <h3>For licensed institutions</h3>
              <p>
                Deposits, flow and customers you cannot acquire yourself, on
                your licence, under your regulation. MPE holds no funds and
                earns only when the partnership does.
              </p>
              <Link className="btnSecondary" href="/#kyc">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7, Contact. */}
      <KycForm />
    </main>
  );
}
