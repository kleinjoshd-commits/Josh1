import Link from "next/link";
import Nav from "@/components/Nav";
import HomeFaq from "@/components/HomeFaq";
import JsonLd from "@/components/JsonLd";
import RequestAccess from "@/components/RequestAccess";
import { answerPages } from "@/content/answers";
import { faqPageSchema, workerAnswerFaq } from "@/content/faq";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("/answers");

export default function AnswersPage() {
  return (
    <main className="sitePage">
      <JsonLd data={faqPageSchema(workerAnswerFaq)} />
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">ANSWERS</div>
          <h1>Worker payout answers</h1>
          <p className="ebSub">
            A platform can use MPE to pay workers into a branded wallet and card. MPE deploys branded worker wallets today, each with its own account and routing number. MPE never holds funds and is not a bank.
          </p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="cardGrid2">
            {answerPages.map((item) => (
              <Link className="panel" href={item.path} key={item.path}>
                <h3 style={{ marginTop: 0 }}>{item.question}</h3>
                <p className="p" style={{ marginTop: 10 }}>{item.description}</p>
                <span className="go">Open</span>
              </Link>
            ))}
          </div>
          <p className="p machineBack">
            <Link className="quietLink" href="/solutions/platforms">
              Platforms
            </Link>
            {" · "}
            <Link className="quietLink" href="/solutions/businesses">
              Businesses without an app
            </Link>
            {" · "}
            <Link className="quietLink" href="/platform">
              Platform
            </Link>
          </p>
        </div>
      </section>

      <HomeFaq items={workerAnswerFaq} />

      <RequestAccess />
    </main>
  );
}
