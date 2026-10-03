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
        body: "Picks the best path for each payment.",
      },
      {
        icon: "payout",
        title: "Payouts",
        body: "Bank, card, wallet or local account.",
      },
      {
        icon: "wallet",
        title: "Wallets",
        body: "Balances that live inside your app.",
      },
      {
        icon: "card",
        title: "Cards",
        body: "Branded cards with one-tap controls.",
      },
      {
        icon: "identity",
        title: "Identity",
        body: "Verification built into your flow.",
      },
      {
        icon: "machine",
        title: "Machine payments",
        body: "Authority for autonomous machines, in development.",
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
    lede: "Connect once. Each payment takes the best path for where it is going and what the worker needs.",
    howLabel: "How it works",
    steps: [
      { title: "Connect once", body: "API, webhooks, or screens in your app." },
      { title: "We find the path", body: "AI routing picks each payment's best licensed path." },
      { title: "Workers get paid", body: "Track sent, accepted, deposited in one dashboard." },
    ],
    workersLabel: "What your workers get",
    tiles: [
      { icon: "identity", title: "Verified in your app", body: "Selfie, ID photo, no paperwork or portal." },
      { icon: "payout", title: "Paid their way", body: "Bank, card, wallet or local account." },
      { icon: "wallet", title: "A balance worth keeping", body: "In-app wallet, so pay does not exit." },
      { icon: "card", title: "A card in the app", body: "Fuel, groceries, and a one-tap freeze." },
    ],
    appTitle: "Your app, or ours",
    appBody: "Sign-up, identity, payouts and cards, in your name. Or a branded app if you do not run one.",
    revenueTitle: "Turn payday into revenue",
    revenueBody: "Share wallet, card and exchange revenue when workers use their pay.",
    trust: "You keep the worker relationship. MPE handles the technology in between.",
  },

  mfam: {
    eyebrow: "Next, machines",
    heading: "When the payer is a machine.",
    lede: "MFAM is an authority core in a secure chip, in development. A machine can approve its own payments within limits set in advance, even out of contact.",
    points: [
      "The operator sets the rules, the limits, and who the machine may trust.",
      "Every decision is signed and written to a tamper-evident record.",
      "MFAM decides whether a machine may pay. It does not move the money.",
    ],
    places: "On the ground, at sea, in orbit. The altitude changes. The shape does not.",
    cta: "Talk to us about MFAM",
    status: "MFAM is in development, patent pending.",
  },

  closing: {
    heading: "See how money moves on your platform.",
    lede: "Tell us what you need to pay, store, issue or approve. In a 20-minute call, we'll show you how MPE fits.",
    cta: "Book a call",
  },

  footerNote: "",
} as const;
