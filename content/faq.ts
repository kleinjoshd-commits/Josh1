export const homeFaq = [
  {
    question: "What is MPE?",
    answer:
      "MPE (Modern Pay Engine) is one integration for every way money moves. For people today, for machines tomorrow. It is software for payouts, branded wallets and cards, identity and machine payments.",
  },
  {
    question: "Does MPE hold funds?",
    answer:
      "No. MPE provides orchestration and control software and never holds funds. Money movement within MPE programs is provided by licensed partner institutions.",
  },
  {
    question: "Is MPE a bank?",
    answer:
      "No. MPE is a software company, not a bank. Accounts, cards and transfers within MPE programs are provided by licensed partner institutions.",
  },
  {
    question: "Can payroll land in our own branded wallet and card?",
    answer:
      "Yes. Payroll can land in a wallet and card that carry your brand, and your people can spend from it.",
  },
  {
    question: "Can each worker get their own account and routing number?",
    answer: "Yes. Each worker wallet can have its own account and routing number.",
  },
  {
    question: "Does MPE work for trucking platforms?",
    answer:
      "Yes. MPE works with trucking platforms that give their clients fuel benefits alongside payouts.",
  },
  {
    question: "What is MFAM?",
    answer:
      "MFAM is the Machine Financial Authority Module: identity and authority for machines. It is designed to let a machine check and sign payments within rules its owner sets. Patent pending, prototype working.",
  },
  {
    question: "How do we get started?",
    answer: "Request access on modernpayengine.com. API docs and embeds come with access.",
  },
] as const;

/** FAQPage JSON-LD from the same array the visible section renders. */
export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
