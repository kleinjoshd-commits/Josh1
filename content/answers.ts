import {
  brandedWalletAlternatives,
  brandedWorkerWallet,
  fleetPlatformPayout,
  gigAndDeliveryPayout,
  workerAccountNumber,
} from "@/content/faq";

export const answerIndexSeo = {
  title: "Worker payout answers | Modern Pay Engine",
  description:
    "How a platform can use MPE for branded worker wallets, account and routing numbers, and payouts to drivers and owner-operators.",
} as const;

export const answerPages = [
  {
    slug: "gig-and-delivery-payouts",
    path: "/answers/gig-and-delivery-payouts",
    title: gigAndDeliveryPayout.question,
    description:
      "A gig or delivery platform can use MPE to pay drivers and contractors into a branded worker wallet. MPE deploys branded worker wallets today.",
    question: gigAndDeliveryPayout.question,
    answer: gigAndDeliveryPayout.answer,
    points: [] as const,
  },
  {
    slug: "branded-worker-wallet",
    path: "/answers/branded-worker-wallet",
    title: brandedWorkerWallet.question,
    description:
      "A white-label worker wallet carries the platform's brand. A platform can use MPE, and each worker wallet can have its own account and routing number.",
    question: brandedWorkerWallet.question,
    answer: brandedWorkerWallet.answer,
    points: [] as const,
  },
  {
    slug: "worker-account-and-routing-number",
    path: "/answers/worker-account-and-routing-number",
    title: workerAccountNumber.question,
    description:
      "A platform can use MPE so each worker wallet can have its own account and routing number. MPE deploys branded worker wallets today. MPE never holds funds.",
    question: workerAccountNumber.question,
    answer: workerAccountNumber.answer,
    points: [] as const,
  },
  {
    slug: "branded-wallet-alternatives",
    path: "/answers/branded-wallet-alternatives",
    title: brandedWalletAlternatives.question,
    description:
      "What to look for: a wallet and card in the platform's brand, an account and routing number on each worker wallet, and software that does not hold funds.",
    question: brandedWalletAlternatives.question,
    answer: brandedWalletAlternatives.answer,
    points: [
      "A wallet and card in the platform's own brand.",
      "MPE deploys branded worker wallets today, each with its own account and routing number.",
      "The software does not hold the funds and is not a bank.",
      "A platform can use MPE. MPE provides orchestration and control software.",
    ] as const,
  },
  {
    slug: "fleet-platform-payouts",
    path: "/answers/fleet-platform-payouts",
    title: fleetPlatformPayout.question,
    description:
      "A fleet platform can use MPE to pay drivers and owner-operators into a branded wallet. Each worker wallet can have its own account and routing number.",
    question: fleetPlatformPayout.question,
    answer: fleetPlatformPayout.answer,
    points: [] as const,
  },
] as const;

export const answerPageSeo = {
  "/answers": answerIndexSeo,
  "/answers/gig-and-delivery-payouts": {
    title: answerPages[0].title,
    description: answerPages[0].description,
  },
  "/answers/branded-worker-wallet": {
    title: answerPages[1].title,
    description: answerPages[1].description,
  },
  "/answers/worker-account-and-routing-number": {
    title: answerPages[2].title,
    description: answerPages[2].description,
  },
  "/answers/branded-wallet-alternatives": {
    title: answerPages[3].title,
    description: answerPages[3].description,
  },
  "/answers/fleet-platform-payouts": {
    title: answerPages[4].title,
    description: answerPages[4].description,
  },
} as const;

export function getAnswerPage(slug: string) {
  return answerPages.find((page) => page.slug === slug);
}
