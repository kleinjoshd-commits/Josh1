import Link from "next/link";
import Nav from "@/components/Nav";
import HomeFaq from "@/components/HomeFaq";
import JsonLd from "@/components/JsonLd";
import RequestAccess from "@/components/RequestAccess";
import { answerPages } from "@/content/answers";
import { faqPageSchema, type FaqEntry } from "@/content/faq";

type AnswerPageData = (typeof answerPages)[number];

export default function AnswerPage({ page }: { page: AnswerPageData }) {
  const faq = [{ question: page.question, answer: page.answer }] as const satisfies readonly FaqEntry[];
  const related = answerPages.filter((item) => item.path !== page.path);

  return (
    <main className="sitePage">
      <JsonLd data={faqPageSchema(faq)} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">ANSWERS</div>
          <h1>{page.question}</h1>
          <p className="ebSub">{page.answer}</p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          {page.points.length > 0 ? (
            <div className="sectionBlock">
              <h2 className="homeSectionTitle">What to look for</h2>
              <ul className="trustList">
                {page.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="p machineBack">
            <Link className="quietLink" href="/answers">
              All worker payout answers
            </Link>
            {" · "}
            <Link className="quietLink" href="/solutions/platforms">
              Platforms
            </Link>
            {related.map((item) => (
              <span key={item.path}>
                {" · "}
                <Link className="quietLink" href={item.path}>
                  {item.question}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <HomeFaq items={faq} />

      <RequestAccess />
    </main>
  );
}
