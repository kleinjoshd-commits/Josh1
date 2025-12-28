import Nav from "../../components/Nav";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Unified Approach | Modern PayEngine",
  description:
    "A unified, end-to-end approach to global payroll payments, worker wallets, and optional trust layers including satellite-enabled security.",
};

export default function UnifiedApproachPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="eyebrow">
            Unified approach <span className="dot" />
            End-to-end global payments infrastructure
          </div>

          <h1 className="h1" style={{ marginBottom: 12 }}>
            One infrastructure.
            <br />
            Multiple entry points.
          </h1>

          <p className="p" style={{ maxWidth: 900 }}>
            Organizations rarely replace payroll, HR, and finance systems all at
            once. Modern PayEngine is designed to integrate where you are today
            and extend capabilities over time—from enterprise payroll payments
            to worker access and global remittance—without forcing a full
            re-platform.
          </p>

          {/* DIAGRAM */}
          <div style={{ marginTop: 32 }}>
            <Image
              src="/unified-architecture.svg"
              alt="Unified global payments architecture"
              width={1200}
              height={320}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* LAYERS */}
          <div className="kycGrid" style={{ marginTop: 32 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Enterprise integration</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Connect existing enterprise systems such as SAP, HRIS, payroll
                inputs, and finance tools. Core systems remain unchanged while
                payments infrastructure is added alongside them.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Payroll payments infrastructure</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Modern PayEngine handles employer funding, foreign exchange (FX)
                control, and payout execution. This layer provides predictability,
                governance, and visibility across global payroll payment flows.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Worker access & remittance</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Balance extends the platform to workers—enabling faster access to
                earnings, international remittance, and family support without
                disrupting employer payroll operations.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Optional trust & reach layers</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Additional layers such as satellite-enabled security and
                corridor-specific Web3 rails can be applied selectively based on
                risk, geography, and operational requirements.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link className="btnPrimary" href="/#kyc">
              Request an architecture walkthrough
            </Link>
            <Link className="btnSecondary" href="/modern-payengine">
              Explore Modern PayEngine
            </Link>
            <Link className="btnSecondary" href="/balance">
              Explore Balance
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
