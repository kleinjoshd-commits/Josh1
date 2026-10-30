export type FaqEntry = {
  question: string;
  answer: string;
};

/** Shown on the homepage and, with the same words, on /machines. */
export const whatIsMfam = {
  question: "What is MFAM?",
  answer:
    "MFAM is the Machine Financial Authority Module: identity and authority for machines. It is designed to let a machine check and sign payments within rules its owner sets. Patent pending, prototype working.",
} as const satisfies FaqEntry;

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
  whatIsMfam,
  {
    question: "How do we get started?",
    answer: "Request access on modernpayengine.com. API docs and embeds come with access.",
  },
] as const satisfies readonly FaqEntry[];

export const shipsFaq = [
  {
    question: "How can a ship pay for port services on its own?",
    answer:
      "With MFAM, the ship's systems request the payment, MFAM is designed to check it against rules the owner signed and sign it, and payment is designed to be made from the owner's own account through licensed partner institutions. Patent pending, prototype working.",
  },
  {
    question: "Can a satellite pay for services?",
    answer:
      "MFAM is designed to give each satellite its own hardware identity and owner-set payment authority, so it can pay for services such as ground station time within its owner's rules.",
  },
  {
    question: "Does MPE hold the money?",
    answer:
      "No. MPE never holds funds. Payments are made from the owner's own account through licensed partner institutions.",
  },
] as const satisfies readonly FaqEntry[];

export const hardwareFaq = [
  {
    question: "What is hardware identity for machine payments?",
    answer:
      "It means the machine's identity and signing key are designed to be held in a chip and never leave it, so the machine can prove who it is and its identity is designed not to be copied.",
  },
  {
    question: "What is MFAM?",
    answer:
      "MFAM (Machine Financial Authority Module) by Modern Pay Engine is identity and authority for machines. It is designed to let a machine check and sign payments within rules its owner sets. Patent pending, prototype working.",
  },
] as const satisfies readonly FaqEntry[];

/** FAQPage JSON-LD from the same array the visible section renders. */
export function faqPageSchema(items: readonly FaqEntry[] = homeFaq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
