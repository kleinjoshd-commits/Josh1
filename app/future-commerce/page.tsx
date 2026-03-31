import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Beyond Earth | MPE",
  description:
    "Why building resilient financial access for hard places on Earth is the foundation for financial rails in space.",
};

export default function FutureOfCommercePage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                Platform vision <span className="dot" />
                Beyond Earth
              </div>

              <h1 className="h1">
                Frontier finance starts with real payment problems on Earth
              </h1>

              <p className="p" style={{ maxWidth: 860 }}>
                This is not space used as a marketing layer on top of a normal
                fintech story. The systems required to serve hard payment
                environments on Earth are the systems frontier economies will
                require next.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                The proving ground is migrant workers, underbanked families,
                weak connectivity, and difficult remittance corridors. This is
                where the infrastructure has to prove itself first.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
                <Link className="btnSecondary" href="/satellite">
                  Explore Satellite Resilience
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>The thesis</h3>
              <p className="p" style={{ marginTop: 10 }}>
                If a system can move value across borders, weak networks,
                underbanked recipients, and difficult operating conditions, it
                is already being trained for frontier environments.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                That is what makes the path from remittance corridors to
                orbital economies intellectually sound rather than ornamental.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 24, gap: 18 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Start with a real human problem</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Millions of workers still lose wages to fees, bad FX, delays,
                and limited access when they try to support family across
                borders.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Build for difficult environments</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Rural coverage gaps, underbanked recipients, unstable local
                conditions, and weak connectivity force a higher standard for
                how value moves and how access is delivered.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Carry that discipline forward</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Future distributed economies will depend on the same qualities:
                resilient access, hybrid network awareness, value protection,
                and delivery beyond legacy assumptions.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Then go further</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Orbital economies are not the first chapter. They are the next
                one. The work begins with the harder payment access problem in
                front of us now.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
