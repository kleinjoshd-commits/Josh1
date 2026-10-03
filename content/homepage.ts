/**
 * Approved homepage copy, Oct 3 2026. Use these strings as written.
 * MFAM status on the page is "in development, patent pending".
 */

export const homepageCopy = {
  heroKicker: "Financial infrastructure for a borderless economy",
  bookCta: "Book a call",
  watchCta: "Watch the film",
  playCta: "Play film",
  closeCta: "Close",
  filmHeading: "See how it works",
  filmCaption:
    "One integration connects your platform to a network of licensed payment partners. Watch how workers sign up, get paid and use their cards inside your app, and where the same technology goes next.",
  filmCaptionShort:
    "How MPE gets workers paid, and what comes next. Sandbox demo, fictional brand and data.",
  filmDisclaimer: "Demo shown with a fictional brand.",

  orchestration: {
    eyebrow: "For platforms",
    heading: "Get your workers paid without becoming a payments company.",
    lede: "Every new market usually means another provider, another contract and another set of rules. MPE replaces that patchwork. You connect once, and we route each payment to the right licensed partner for where it's going and what the worker needs.",
    howLabel: "How it works",
    steps: [
      "Connect once. Plug in our API and webhooks, or drop our screens straight into your app.",
      "We find the path. Our AI-powered routing engine picks the best path for every payment, through our network of licensed partners.",
      "Workers get paid. They follow every payout from sent, to accepted, to deposited. You see every payment in one dashboard.",
    ],
    workersLabel: "What your workers get",
    tiles: [
      "Verified in your app. A guided selfie and a photo of their ID, with no paperwork and no outside portal.",
      "Paid their way. To their bank, to their card, or a little to family back home, in their local currency.",
      "A balance worth keeping. Pay lands in a wallet inside your app, so it doesn't head straight for the exit.",
      "A card in the app. Ready for fuel, groceries and everything in between. One tap freezes it.",
    ],
    appHeading: "Your app, or ours with your name on it",
    appBody:
      "Already have an app? Drop in our screens for sign-up, identity checks, payouts and cards, in your colors and under your name. No app? We provide a ready-made worker app with your brand on it, built for distributors and partners who serve workers but don't run an app.",
    revenueHeading: "Turn payday into revenue",
    revenueBody:
      "Payday doesn't have to be pure cost. Your platform shares in the revenue from worker wallets, card spending and currency exchange, so you earn when your workers use the money you pay them.",
    trust:
      "MPE never holds funds. Licensed partners hold the money and move it. You keep the worker relationship. We handle the technology in between.",
  },

  mfam: {
    eyebrow: "Next, machines",
    heading: "What happens when the ones getting paid aren't people?",
    lede: "Drones, vessels, vehicles and satellites are starting to work on their own, and they'll need to pay their own way. So we're designing the Machine Financial Authority Module (MFAM), our authority core built into a secure chip. It's designed to let a machine approve its own payments within limits set in advance, even when it's out of contact.",
    points: [
      "The operator sets the rules. What's allowed, who to trust, and the limits it must stay within.",
      "Every decision is signed and recorded. Short-lived, signed authorizations and a tamper-evident audit trail.",
      "Licensed partners move the money. MFAM never holds funds. It decides whether a machine has the authority to pay.",
    ],
    places: "On the ground, at sea, in orbit. The altitude changes. The shape does not.",
    cta: "Talk to us about MFAM",
    status: "MFAM is in development, patent pending.",
  },

  closing: {
    heading: "Let's get your workers paid.",
    lede: "Tell us about your platform and your workers. In a 20-minute call, we'll show you how MPE fits.",
    cta: "Book a call",
  },

  footerNote:
    "MPE is a technology layer, not a bank. MPE does not hold funds. Money services, accounts and cards are provided by licensed partners. Payout options, wallets, cards and currencies vary by platform and country. MFAM is in development, patent pending.",
} as const;
