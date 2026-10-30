import { homeFaq, type FaqEntry } from "@/content/faq";

/** Server-rendered. The same array feeds FAQPage JSON-LD. */
export default function HomeFaq({ items = homeFaq }: { items?: readonly FaqEntry[] }) {
  return (
    <section className="hpFaq" id="questions" aria-labelledby="questions-title">
      <div className="hpWrap">
        <h2 id="questions-title">Questions</h2>
        {items.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
