import Nav from "../../components/Nav";

export const metadata = {
  title: "Press | MPE",
  description: "News and announcements from MPE.",
};

type Release = {
  id: string;
  dateTag: string;
  dateline: string;
  headline: string;
  deck: string;
  body: Array<{ kind: "p"; text: string } | { kind: "h3"; text: string }>;
  quotes: Array<{ text: string; attribution: string }>;
  aboutBoxes: Array<{ title: string; body: string }>;
  mediaContacts: Array<{ label: string; value: string }>;
};

const releases: Release[] = [
  {
    id: "mpe-spacebelt-ksa-2026-04-21",
    dateTag: "April 21, 2026",
    dateline: "RIYADH, KINGDOM OF SAUDI ARABIA — April 21, 2026",
    headline:
      "MPE Partners with SpaceBelt KSA to Bring Global Finance to Sovereign Orbital Rails",
    deck:
      "Ahead of the launch of KSA-1, MPE will serve as the global commercial application layer for financial services delivered on SpaceBelt KSA's sovereign low-Earth orbit constellation.",
    body: [
      {
        kind: "p",
        text:
          "MPE Solutions Inc. (\u201CMPE\u201D / \u201CModern Pay Engine\u201D) today announced that it has entered into an agreement with SpaceBelt KSA to serve as the global application layer for financial services delivered on SpaceBelt KSA's sovereign, encrypted low-Earth orbit constellation. The agreement takes effect ahead of the launch of KSA-1, the first operational satellite in the SpaceBelt KSA network.",
      },
      {
        kind: "p",
        text:
          "MPE is a global fintech entity operating across 160+ countries, with multi-currency wallet and cross-border settlement capabilities. The platform is available today and architected for programmable and agentic payments \u2014 terrestrial, or orbital. Under the agreement, MPE will progressively migrate its commercial stack onto SpaceBelt KSA's sovereign orbital rails as the constellation comes online, bringing with it the global financial network the company has already built.",
      },
      { kind: "h3", text: "What the agreement delivers" },
      {
        kind: "p",
        text:
          "The partnership pairs sovereign orbital rails with a global financial network from day one of commercial operations. For SpaceBelt KSA, it means orbital infrastructure that carries real economic activity the moment it enters service \u2014 not a pilot, not a concept, but a commercial partner already operating at global scale. For MPE, it means the financial infrastructure the company has built extends from licensed terrestrial rails into the most significant sovereign orbital infrastructure in the world.",
      },
      {
        kind: "p",
        text:
          "MPE operates the application layer of the SpaceBelt KSA stack: the financial products, the global distribution network, the end-user experience.",
      },
      {
        kind: "p",
        text: "KSA-1 is aligned with Saudi Arabia's Vision 2030.",
      },
    ],
    quotes: [
      {
        text:
          "With the launch of KSA-1 later this month, we are aiming to modernize global payments securely for our customers across authenticated sovereign orbital infrastructure. MPE ensures that the moment our rails enter service, they are already connected to a live global financial network operating at scale.",
        attribution:
          "Eng. Mohammed Al-Tuwaijri, Co-Founder and Chairman of SpaceBelt KSA",
      },
      {
        text:
          "MPE was built on a single thesis: that the next era of financial infrastructure will not be defined by which banks or borders it sits inside, but by where it can reach. The next generation of financial infrastructure runs across 160+ countries, settles without requiring a bank on either end \u2014 and now, extends into orbit.",
        attribution: "Josh Klein, Co-Founder and COO of MPE",
      },
      {
        text:
          "Sovereign rails become commercially valuable when they carry real economic activity at scale, and scale requires global distribution. MPE brings both: a proven product generating revenue today, and a cross-border network across 160+ countries. That is the fastest and most credible path from sovereign infrastructure to sovereign commercial reality.",
        attribution: "Cliff Beek, minority owner, SpaceBelt KSA",
      },
    ],
    aboutBoxes: [
      {
        title: "About MPE",
        body:
          "MPE Solutions Inc. (dba \u201CMPE\u201D and \u201CModern Pay Engine\u201D) is a Washington, D.C.-based fintech operating global USD-denominated financial infrastructure across 160+ countries. www.modernpayengine.com",
      },
      {
        title: "About SpaceBelt KSA",
        body:
          "SpaceBelt KSA is a Saudi-based space logistics and satellite security platform developing sovereign, encrypted satellite communications infrastructure within the Kingdom of Saudi Arabia and the broader GCC region. Co-founded by Eng. Mohammed Al-Tuwaijri, SpaceBelt KSA is aligned with Saudi Arabia's Vision 2030 and is deploying its constellation under multi-year launch agreements exceeding USD 500M+.",
      },
    ],
    mediaContacts: [
      { label: "Media Contact (MPE)", value: "Josh Klein, josh@modernpayengine.com" },
      { label: "Media Contact (SpaceBelt KSA)", value: "info@spacebeltksa.com" },
    ],
  },
];

export default function PressPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pressHeader">
            <div className="eyebrow">
              MPE <span className="dot" />
              Press
            </div>
            <h1 className="h1" style={{ marginBottom: 12 }}>
              Press
            </h1>
            <p className="p pressSubtitle">News and announcements from MPE.</p>
          </div>

          <div className="pressList">
            {releases.map((release) => (
              <article
                key={release.id}
                id={release.id}
                className="panel pressRelease"
                data-animate
              >
                <div className="pressDateTag">{release.dateTag}</div>

                <h2 className="pressHeadline">{release.headline}</h2>

                <p className="p pressDeck">{release.deck}</p>

                <p className="p pressDateline">
                  <strong>{release.dateline}</strong>
                </p>

                {release.body.map((block, i) =>
                  block.kind === "h3" ? (
                    <h3 key={i} className="pressH3">
                      {block.text}
                    </h3>
                  ) : (
                    <p key={i} className="p pressBody">
                      {block.text}
                    </p>
                  )
                )}

                <h3 className="pressH3">Quotes</h3>
                <div className="pressQuotes">
                  {release.quotes.map((q, i) => (
                    <blockquote key={i} className="pressQuote">
                      <p className="p pressQuoteText">
                        &ldquo;{q.text}&rdquo;
                      </p>
                      <footer className="pressQuoteAttrib">
                        {q.attribution}
                      </footer>
                    </blockquote>
                  ))}
                </div>

                <div className="pressAboutGrid">
                  {release.aboutBoxes.map((a) => (
                    <div key={a.title} className="pressAboutBox">
                      <h3 className="pressAboutTitle">{a.title}</h3>
                      <p className="p pressAboutBody">{a.body}</p>
                    </div>
                  ))}
                </div>

                <div className="pressContacts">
                  {release.mediaContacts.map((m) => (
                    <p key={m.label} className="p pressContactLine">
                      <strong>{m.label}:</strong> {m.value}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
