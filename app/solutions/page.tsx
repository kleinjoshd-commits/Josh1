import Link from "next/link";
import Nav from "@/components/Nav";
import RequestAccess from "@/components/RequestAccess";
import { segments } from "@/content/product";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "Solutions | MPE",
  "Platforms, fintechs, businesses without an app, and operators of machines. Four ways to use the same API."
);

export default function SolutionsPage() {
  return (
    <main className="sitePage">
      <Nav />

      <section className="emeraldBand">
        <div className="ebWrap">
          <div className="ebTag">SOLUTIONS</div>
          <h1>Who it is for.</h1>
          <p className="ebSub">
            Four buyers. The same API. Pick the page that matches how you pay.
          </p>
        </div>
      </section>

      <section className="deckLight">
        <div className="container deckInner">
          <div className="cardGrid2">
            {segments.map((item) => (
              <Link className="panel" href={item.href} key={item.href}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="p" style={{ marginTop: 10 }}>{item.detail}</p>
                <span className="go">Open</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RequestAccess />
    </main>
  );
}
