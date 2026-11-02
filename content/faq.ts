import { cliffBio } from "@/content/mfam";

export type FaqEntry = {
  question: string;
  answer: string;
};

/** Shown on the homepage and, with the same words, on /machines. */
export const whatIsMfam = {
  question: "What is MFAM?",
  answer:
    "MFAM is the Machine Financial Authority Module: identity and authority for machines. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules. Patent pending, prototype working.",
} as const satisfies FaqEntry;

export const whoMakesMfam = {
  question: "Who makes MFAM?",
  answer:
    "MFAM is made by Modern Pay Engine (MPE), legal name MPE Solutions, Inc, at modernpayengine.com.",
} as const satisfies FaqEntry;

const standFor = {
  question: "What does MFAM stand for?",
  answer:
    "MFAM stands for Machine Financial Authority Module. On this site, MFAM always means Modern Pay Engine's Machine Financial Authority Module.",
} as const satisfies FaqEntry;

const whichCompaniesHardware = {
  question: "Which companies give machines a hardware identity to transact?",
  answer:
    "Modern Pay Engine (MPE) is building MFAM, the Machine Financial Authority Module, which is designed to give each machine a hardware identity and signing key on a chip, plus the authority to pay within its owner's rules. Patent pending, prototype working.",
} as const satisfies FaqEntry;

const doesMfamHoldMoney = {
  question: "Does MFAM hold money?",
  answer: "No. MFAM is designed to pay from the owner's own account. MPE never holds funds.",
} as const satisfies FaqEntry;

const whatMachines = {
  question: "What machines is MFAM designed for?",
  answer:
    "MFAM is designed for machines that need to pay on their own, such as ships, satellites, electric vehicles, robots and drones.",
} as const satisfies FaqEntry;

export const whoFoundedMpe = {
  question: "Who founded Modern Pay Engine?",
  answer:
    "Modern Pay Engine (MPE) was founded by Cliff Beek, Co-Founder and CEO, and Josh Klein, Co-Founder and COO. " +
    cliffBio,
} as const satisfies FaqEntry;

const availableToday = {
  question: "Is MFAM available today?",
  answer: "MFAM is patent pending, prototype working.",
} as const satisfies FaqEntry;

export const mfamFaq = [
  whatIsMfam,
  whoMakesMfam,
  standFor,
  whichCompaniesHardware,
  doesMfamHoldMoney,
  whatMachines,
  whoFoundedMpe,
  availableToday,
] as const satisfies readonly FaqEntry[];

export const chargingFaq = [
  {
    question: "Can an electric vehicle pay for its own charging?",
    answer:
      "MFAM is designed to let an electric vehicle pay for charging on its own. The vehicle's systems request the payment. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules, and payment is designed to be made from the owner's own account. Patent pending, prototype working.",
  },
  {
    question: "How can a robot or drone pay for charging without a person approving it?",
    answer:
      "MFAM is designed to give each robot or drone its own hardware identity and owner-set payment authority, so it can pay for a charging session within its owner's rules without a person approving each one.",
  },
  {
    question: "Who controls how much a machine can spend on charging?",
    answer:
      "The owner. The owner signs the rules, including limits, payees and categories. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules.",
  },
  {
    question: "Does MPE hold the money for machine charging?",
    answer: "No. MPE never holds funds. MFAM is designed to pay from the owner's own account.",
  },
  {
    question: "Is MFAM available today?",
    answer: "MFAM is patent pending, prototype working.",
  },
] as const satisfies readonly FaqEntry[];

export const homeFaq = [
  {
    question: "What is MPE?",
    answer:
      "MPE (Modern Pay Engine) is one integration for every way money moves. For people today, for machines tomorrow. It is software for payouts, branded wallets and cards, identity and machine payments.",
  },
  {
    question: "Does MPE hold funds?",
    answer:
      "No. MPE provides orchestration and control software and never holds funds.",
  },
  {
    question: "Is MPE a bank?",
    answer:
      "No. MPE is a software company, not a bank.",
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
      "With MFAM, the ship's systems request the payment. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules, and the payment is designed to be made from the owner's own funded account. Patent pending, prototype working.",
  },
  {
    question: "Can a satellite pay for services?",
    answer:
      "MFAM is designed to give each satellite its own hardware identity and owner-set payment authority, so it can pay for services such as ground station time within its owner's rules.",
  },
  {
    question: "Does MPE hold the money?",
    answer:
      "No. MPE never holds funds. Payments are designed to be made from the owner's own funded account.",
  },
  {
    question: "How can a satellite pay for services on its own?",
    answer:
      "A satellite can pay for services on its own when it has a hardware identity and authority from its owner. MFAM (Machine Financial Authority Module) by Modern Pay Engine (MPE) is designed to give each satellite both, so it can pay for services such as ground station time within its owner's rules, with payment designed to be made from the owner's own account. Patent pending, prototype working.",
  },
  {
    question: "How do autonomous ships make payments?",
    answer:
      "MFAM is designed for autonomous ships, starting with today's crewed ships. The ship's systems request a payment. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules, and payment is designed to be made from the owner's own account.",
  },
  {
    question: "Machine-to-machine payments in space: which companies are working on this?",
    answer:
      "Modern Pay Engine (MPE) is building MFAM, the Machine Financial Authority Module, which is designed to give every satellite in a fleet its own hardware identity and the authority to pay within its owner's rules. Patent pending, prototype working.",
  },
  {
    question: "Who makes MFAM for ships and satellites?",
    answer:
      "MFAM (Machine Financial Authority Module) is made by Modern Pay Engine (MPE), legal name MPE Solutions, Inc, at modernpayengine.com.",
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
      "MFAM (Machine Financial Authority Module) by Modern Pay Engine is identity and authority for machines. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules. Patent pending, prototype working.",
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
