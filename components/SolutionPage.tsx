import Link from "next/link";
import Nav from "@/components/Nav";
import Image from "next/image";

type SolutionPageProps = {
  title: string;
  subtext: string;
  capabilities: string[];
  visual?: {
    src: string;
    alt: string;
  };
  visualPlacement?: "header" | "body";
};

export default function SolutionPage({
  title,
  subtext,
  capabilities,
  visual,
  visualPlacement = "body",
}: SolutionPageProps) {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="pageHeaderGrid">
            <div>
              <div className="eyebrow">
                Solutions <span className="dot" />
                MPE platform modules
              </div>

              <h1 className="h1">{title}</h1>

              <p className="p">{subtext}</p>

              <p className="p" style={{ marginTop: 14, maxWidth: 860 }}>
                MPE provides orchestration and control software. Authorize,
                Route, Sign. Licensed partners execute. MPE does not hold or
                transmit customer funds.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/#kyc">
                  Request Access
                </Link>
                <Link className="btnSecondary" href="/resources">
                  Explore Resources
                </Link>
              </div>
            </div>

            {visual && visualPlacement === "header" ? (
              <div
                className="card"
                style={{ maxWidth: 560, marginLeft: "auto", padding: 12 }}
              >
                <div className="cardInner" style={{ maxHeight: "none" }}>
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    width={1600}
                    height={1000}
                    priority
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>
            ) : (
              <div className="panel">
                <h3 style={{ marginTop: 0 }}>Capabilities</h3>
                <ul style={{ margin: "16px 0 0", paddingLeft: 20 }}>
                  {capabilities.map((item) => (
                    <li key={item} style={{ marginTop: 10 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {visual && visualPlacement === "body" ? (
            <div style={{ marginTop: 24 }}>
              <div
                className="card"
                style={{ maxWidth: 560, margin: "0 auto", padding: 12 }}
              >
                <div className="cardInner" style={{ maxHeight: "none" }}>
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    width={1600}
                    height={1000}
                    priority
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>
            </div>
          ) : null}

          {visual && visualPlacement === "header" ? (
            <div style={{ marginTop: 24 }}>
              <div className="panel solutionCapabilities">
                <h3 className="solutionCapabilitiesTitle">Capabilities</h3>
                <ul className="solutionCapabilitiesList">
                  {capabilities.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          <div className="kycGrid" style={{ marginTop: 24 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How it works</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Authorize, Route, Sign, then Delivered. The payment takes the
                best licensed path. MPE does not move the money.
              </p>
            </div>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Operating model</h3>
              <p className="p" style={{ marginTop: 10 }}>
                Licensed partners provide the money transfer and payment
                services. MPE does not hold or transmit customer funds, and
                does not store customer identity documents.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <div className="panel">
              <h3 style={{ marginTop: 0 }}>Execution &amp; Compliance</h3>
              <p className="p" style={{ marginTop: 10, maxWidth: "none" }}>
                Money transfer and payment services within MPE programs are
                provided by licensed partner institutions in each market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
