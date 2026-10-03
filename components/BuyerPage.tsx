import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";

type Props = {
  eyebrow: string;
  title: string;
  lede: string;
  job: string;
  integrate: string;
  gets: readonly string[];
};

export default function BuyerPage({ eyebrow, title, lede, job, integrate, gets }: Props) {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="ebSub">{lede}</p>
          <div className="btnRow">
            <Link className="btnPrimary" href="#kyc">Request access</Link>
          </div>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <h2 className="homeSectionTitle">The job</h2>
          <p className="p">{job}</p>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">How you integrate</h2>
            <p className="p">{integrate}</p>
          </div>

          <div className="sectionBlock">
            <h2 className="homeSectionTitle">What you get</h2>
            <ul className="trustList">
              {gets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
