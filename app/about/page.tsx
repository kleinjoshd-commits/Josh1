import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "About | MPE",
  description:
    "Why MPE exists, who it serves first, and how that mission leads toward resilient financial rails beyond Earth.",
};

type TeamMember = {
  name: string;
  title: string;
  photo: string;
  linkedin: string;
};

const team: TeamMember[] = [
  {
    name: "Cliff Beek",
    title: "CEO & Co-Founder",
    photo: "/CliffBeekMPE.png",
    linkedin: "https://www.linkedin.com/in/cliff-beek-b2163/",
  },
  {
    name: "Josh Klein",
    title: "COO & Co-Founder",
    photo: "/JoshKleinMPE.png",
    linkedin: "https://www.linkedin.com/in/kleinjoshd/",
  },
  {
    name: "Cole Mahoney",
    title: "Business Development & Strategic Partnerships",
    photo: "/ColeMahoneyMPE.png",
    linkedin: "https://www.linkedin.com/in/cole-mahoney-67978b144/",
  },
  {
    name: "Naulissa Tuza",
    title: "Financial Analyst & Investor Relations",
    photo: "/NaulissaTuzaMPE.png",
    linkedin: "https://www.linkedin.com/in/naulissatuza/",
  },
  {
    name: "Kok Rie Ooi",
    title: "Asia Lead",
    photo: "/KokRieOoiMPE.png",
    linkedin:
      "https://www.linkedin.com/in/kok-rie-ooi-%E7%8E%8B%E5%9B%BD%E7%A4%BC-mba-bsc-computing-1a3a551/",
  },
];

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

          <section className="aboutTeamSection" data-animate>
            <div className="aboutTeamHeader">
              <div className="eyebrow">
                MPE <span className="dot" />
                Our team
              </div>
              <h2 className="homeSectionTitle aboutTeamTitle">Our team</h2>
              <p className="p aboutTeamSubtitle">
                The people building MPE.
              </p>
            </div>

            <div className="aboutTeamGrid">
              {team.map((m) => (
                <article key={m.name} className="panel aboutTeamCard">
                  <div className="aboutTeamPhotoFrame">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      width={480}
                      height={480}
                      className="aboutTeamPhoto"
                    />
                  </div>
                  <h3 className="aboutTeamName">{m.name}</h3>
                  <p className="p aboutTeamRole">{m.title}</p>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aboutTeamLinkedin"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

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
