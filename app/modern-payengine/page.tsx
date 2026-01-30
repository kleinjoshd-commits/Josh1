import Image from "next/image";
import Nav from "../../components/Nav";

export default function ModernPayEnginePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          {/* HERO */}
          <div className="grid">
            <div>
              <div className="eyebrow">
                Financial control plane <span className="dot" />
                Modern PayEngine
              </div>

              <h1 className="h1">
                Predictable payments,
                <br />
                anywhere they need to land
              </h1>

              <p className="p">
                Modern PayEngine is the financial control plane that governs how value moves—
                so enterprises get predictable outcomes even as execution paths, rails, and
                connectivity change.
              </p>

              <p className="p" style={{ marginTop: 14 }}>
                Define policy, approvals, funding, and FX once. Then execute through regulated
                domestic banks, licensed global partners, or hybrid and satellite-enabled
                connectivity—without redesigning workflows or replacing existing systems.
              </p>

              <div className="btnRow">
                <a className="btnPrimary" href="/#kyc">
                  Request a walkthrough
                </a>
                <a className="btnSecondary" href="/trust-controls">
                  Trust & Controls
                </a>
              </div>
            </div>

            {/* UI */}
            <div className="card">
              <div className="cardInner">
                <Image
                  src="/mpe-ui-2.png"
                  alt="Modern PayEngine routing and control"
                  width={1600}
                  height={1000}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* CORE PANELS */}
          <div style={{ marginTop: 40 }} className="kycGrid">
            <div className="panel">
              <h3>Control without rigidity</h3>
              <p>
                Modern PayEngine separates control from execution. Governance stays constant
                while settlement adapts to geography, regulation, and connectivity—eliminating
                manual exceptions and surprises.
              </p>
            </div>

            <div className="panel">
              <h3>Execution that adapts</h3>
              <p>
                Payments execute through the most appropriate regulated path—local banks for
                domestic settlement, licensed partners for cross-border flows—without changing
                approval logic or reporting.
              </p>
            </div>

            <div className="panel">
              <h3>FX and funding with certainty</h3>
              <p>
                FX and funding decisions are governed before release, so delivered amounts
                and timing are known upfront—not discovered after settlement.
              </p>
            </div>

            <div className="panel">
              <h3>Resilience beyond terrestrial limits</h3>
              <p>
                Satellite and hybrid connectivity allow financial control to persist even
                when ground infrastructure degrades—supporting critical operations,
                remote environments, and future autonomous systems.
              </p>
              <p style={{ marginTop: 10 }}>
                <a className="btnSecondary" href="/satellite">
                  Satellite infrastructure
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
