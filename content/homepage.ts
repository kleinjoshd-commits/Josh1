/**
 * Homepage copy for the platform-led pass.
 * Status line on MFAM stays "in development, patent pending".
 * No new figures. Bodies under titles stay within 8 words.
 */

export const homepageCopy = {
  heroKicker: "Financial infrastructure for a borderless economy",
  bookCta: "Book a call",
  watchCta: "Watch the film",
  playCta: "Play film",
  closeCta: "Close",
  filmDisclaimer: "Demo shown with a fictional brand.",
  heroFine: "MPE never holds funds. Licensed partners do.",

  capabilities: {
    heading: "What MPE does",
    items: [
      {
        icon: "route",
        title: "Smart routing",
        body: "Scores every route, then signs it.",
      },
      {
        icon: "payout",
        title: "Payouts",
        body: "Bank, card, wallet, or cross-border.",
      },
      {
        icon: "wallet",
        title: "Wallets",
        body: "Payouts to mobile wallets.",
      },
      {
        icon: "card",
        title: "Cards",
        body: "Spend controls, and a freeze.",
      },
      {
        icon: "identity",
        title: "Identity",
        body: "Document and selfie checks, in your app.",
      },
      {
        icon: "machine",
        title: "Machine payments",
        body: "Patent pending, concept stage.",
      },
    ],
  },

  builtFor: {
    heading: "Built for",
    cards: [
      {
        title: "Workforce platforms",
        body: "Pay workers inside your app.",
        href: "#workforce",
        image: "/media/built-workforce.webp",
      },
      {
        title: "Distributors and partners",
        body: "A ready-made app with your brand.",
        href: "#workforce-app",
        image: "/media/built-distributors.webp",
      },
      {
        title: "Machines and autonomous systems",
        body: "Machines that pay their own way.",
        href: "#mfam",
        image: "/media/built-machines.webp",
      },
    ],
  },

  workforce: {
    eyebrow: "Workforce",
    heading: "Pay a workforce from the same integration.",
    lede: "Connect once. MPE scores every route, picks one, and signs it.",
    howLabel: "How it works",
    steps: [
      { title: "Connect once", body: "API, signed webhooks, or screens in your app." },
      { title: "Score the route", body: "Success, speed and cost. One route is signed." },
      { title: "Workers get paid", body: "Payout status comes back on a signed webhook." },
    ],
    workersLabel: "What your workers get",
    tiles: [
      { icon: "identity", title: "Checked in your app", body: "Document and selfie ID checks." },
      { icon: "payout", title: "Paid their way", body: "Bank, card, wallet, or cross-border." },
      { icon: "wallet", title: "Mobile wallet", body: "A payout to a mobile wallet." },
      { icon: "card", title: "A card in the app", body: "Spend controls, and a freeze." },
    ],
    appTitle: "Your app, or ours",
    appBody: "Identity, payouts and cards, in your name. Or a branded app if you do not run one.",
    revenueTitle: "Scores every route",
    revenueBody: "Success, speed and cost. One route is signed before anything moves.",
    trust: "You keep the worker relationship. MPE handles the technology in between.",
  },

  mfam: {
    eyebrow: "Next, machines",
    heading: "When the payer is a machine.",
    lede: "MFAM is patent pending, concept stage. A machine can approve its own payments within limits set in advance.",
    points: [
      "The operator sets the rules, the limits, and who the machine may trust.",
      "Every decision is signed and written to a tamper-evident record.",
      "MFAM decides whether a machine may pay. It does not move the money.",
    ],
    places: "On the ground, at sea, in orbit. The altitude changes. The shape does not.",
    cta: "Talk to us about MFAM",
    status: "MFAM is patent pending, concept stage.",
  },

  closing: {
    heading: "See how money moves on your platform.",
    lede: "Tell us what you need to pay out, issue, or check. Book a call and we will show you how MPE fits.",
    cta: "Book a call",
  },

  footerNote: "",
} as const;
