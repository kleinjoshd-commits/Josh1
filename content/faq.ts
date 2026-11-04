import { cliffBio, machinePaymentsLead } from "@/content/mfam";

export type FaqEntry = {
  question: string;
  answer: string;
};

/** Shown on the homepage and, with the same words, on /machines. */
export const whatIsMfam = {
  question: "What is MFAM?",
  answer:
    "MFAM is the Machine Financial Authority Module: identity and authority for machines. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules. Patent pending, working today.",
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
    "Modern Pay Engine (MPE) is building MFAM, the Machine Financial Authority Module, which is designed to give each machine a hardware identity and signing key on a chip, plus the authority to pay within its owner's rules. Patent pending, working today.",
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
  answer: "MFAM is patent pending, working today.",
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
      "MFAM is designed to let an electric vehicle pay for charging on its own. The vehicle's systems request the payment. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules, and payment is designed to be made from the owner's own account. Patent pending, working today.",
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
    answer: "MFAM is patent pending, working today.",
  },
] as const satisfies readonly FaqEntry[];

/** Plain answer used on the home page and the worker payout pages. */
export const workerPayoutLine =
  "Modern Pay Engine (MPE) lets platforms pay workers, drivers and crews into a branded wallet and card. Each worker wallet can have its own account and routing number.";

export const workerPayoutFaq = [
  {
    question: "How do I pay gig workers?",
    answer:
      "Modern Pay Engine (MPE) lets platforms pay gig workers into a branded wallet and card. Each worker wallet can have its own account and routing number.",
  },
  {
    question: "How do I pay contractors?",
    answer:
      "Modern Pay Engine (MPE) lets platforms pay contractors into a branded wallet and card. Each worker wallet can have its own account and routing number.",
  },
  {
    question: "Which platforms give each worker their own account and routing number?",
    answer: workerPayoutLine,
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
    question: "Who is MPE Solutions, Inc?",
    answer:
      "MPE Solutions, Inc is the company behind Modern Pay Engine. It was founded in 2025 by Cliff Beek, CEO, and Josh Klein, COO, and is based in Washington, DC, with a Singapore entity, MPE Solutions Pte Ltd.",
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
  ...workerPayoutFaq,
  {
    question: "Does MPE work for trucking platforms?",
    answer:
      "Yes. Fleet platforms can use MPE to pay drivers and owner-operators into a wallet and card that carry the platform's brand. Each driver's wallet can have its own account and routing number.",
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
      "With MFAM, the ship's systems request the payment. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules, and the payment is designed to be made from the owner's own funded account. Patent pending, working today.",
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
      "A satellite can pay for services on its own when it has a hardware identity and authority from its owner. MFAM (Machine Financial Authority Module) by Modern Pay Engine (MPE) is designed to give each satellite both, so it can pay for services such as ground station time within its owner's rules, with payment designed to be made from the owner's own account. Patent pending, working today.",
  },
  {
    question: "How do autonomous ships make payments?",
    answer:
      "MFAM is designed for autonomous ships, starting with today's crewed ships. The ship's systems request a payment. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules, and payment is designed to be made from the owner's own account.",
  },
  {
    question: "Machine-to-machine payments in space: which companies are working on this?",
    answer:
      "Modern Pay Engine (MPE) is building MFAM, the Machine Financial Authority Module, which is designed to give every satellite in a fleet its own hardware identity and the authority to pay within its owner's rules. Patent pending, working today.",
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
      "MFAM (Machine Financial Authority Module) by Modern Pay Engine is identity and authority for machines. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules. Patent pending, working today.",
  },
] as const satisfies readonly FaqEntry[];

export const machinePaymentsFaq = [
  {
    question: "What is a machine payments platform?",
    answer: machinePaymentsLead,
  },
  {
    question: "How does a machine pay from its owner's own account?",
    answer:
      "Modern Pay Engine (MPE) uses MFAM (Machine Financial Authority Module) so a machine is designed to pay from its owner's own account, and only within the rules the owner sets. The signing key sits in a locked secure chip. MPE never holds funds.",
  },
  {
    question: "Can a drone pay a charging pad when it lands?",
    answer:
      "Modern Pay Engine (MPE) builds MFAM (Machine Financial Authority Module), which is designed to let a drone pay a charging pad when it lands. The pad is designed to power on only after a valid signed payment.",
  },
  {
    question: "Does MPE hold the money a machine spends?",
    answer:
      "No. Modern Pay Engine (MPE) never holds funds. MFAM is designed to pay from the owner's own account.",
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
