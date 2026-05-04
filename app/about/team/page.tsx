import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Our Team | MPE",
  description:
    "The people building MPE — leadership, partnerships, finance, and regional operations.",
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

export default function TeamPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="aboutTeamHeader">
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              MPE <span className="dot" />
              Our team
            </div>
            <h1 className="h1 aboutTeamTitle">Our team</h1>
            <p className="p aboutTeamSubtitle">The people building MPE.</p>
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

          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link className="btnSecondary" href="/about">
              Back to About
            </Link>
            <Link className="btnPrimary" href="/#kyc">
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
