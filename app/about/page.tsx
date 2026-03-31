import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "About | MPE",
  description:
    "Why MPE exists, who it serves first, and how that mission leads toward resilient financial rails beyond Earth.",
};

export default function AboutPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                About <span className="dot" />
                Mission and company
              </div>

              <h1 className="h1">Why MPE exists</h1>

              <p className="p" style={{ maxWidth: 880 }}>
                The company is built on a straightforward belief: workers
                should not lose a meaningful share of their wages just to
                support the people who depend on them.
              </p>

              <p className="p" style={{ marginTop: 14, maxWidth: 880 }}>
                The focus today is migrant workers in the U.S. who send money
                home across borders and families in rural or underbanked
                regions that need better access, stronger value protection, and
                more reliable reach.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
                <Link className="btnSecondary" href="/future-commerce">
                  Beyond Earth
                </Link>
              </div>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What we believe</h3>
              <p className="p" style={{ marginTop: 10 }}>
                The hardest payment problems are the most important ones.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                Hard-to-reach people and hard-to-reach places force better
                infrastructure.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                Systems that work across weak networks on Earth are the systems
                that can one day work beyond Earth.
              </p>
            </div>
          </div>

          <div className="kycGrid" style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>What the platform offers today</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Employers can offer a workforce benefit with real weight:
                zero-fee remittances, USD-held wallets, and broader wallet
                access for workers who need to move money across borders or use
                funds while traveling internationally.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why families feel it</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Families can access funds without needing the right traditional
                bank setup. Value can be held in USD where local currencies are
                unstable. Reach can extend into rural and underbanked regions.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Why this leads to space</h3>
              <p className="p" style={{ marginTop: 10 }}>
                If you can build financial infrastructure that reaches an
                unbanked family in rural Oaxaca with limited connectivity, you
                are building the kind of resilient system that can operate in
                much harder environments later.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How we think about execution</h3>
              <p className="p" style={{ marginTop: 10 }}>
                MPE is the worker-facing and employer-facing layer. Licensed
                partners support regulated execution where appropriate. That
                keeps the experience clear while respecting how money movement
                actually gets delivered.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>The arc from today to tomorrow</h3>
              <div className="networkOutcomeGrid">
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    Today, the mission is to help workers keep more of what they
                    earn and help families access funds with less loss, less
                    delay, and less dependence on fragile local infrastructure.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    Next, the same discipline applies to increasingly
                    distributed, hybrid, and satellite-connected financial
                    environments where continuity and trust matter even more.
                  </p>
                </div>
                <div className="networkOutcomeCard">
                  <p className="p networkOutcomeCopy">
                    Long term, MPE is on a mission to put the financial rails in
                    space. That ambition has to prove itself first on Earth, in
                    the real payment problems people live with every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
