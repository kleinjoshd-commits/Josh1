/**
 * Homepage copy. Short on purpose.
 * The only "Patent pending." line on the site lives on /machines.
 */

export const homepageCopy = {
  heroKicker: "Financial infrastructure for a borderless economy",
  bookCta: "Book a call",
  filmHeading: "Watch the film",
  playCta: "Play film",
  closeCta: "Close",
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
        body: "Machines approve payments within limits the operator sets.",
      },
    ],
  },

  who: {
    heading: "Who it's for",
  },

  mfam: {
    eyebrow: "Machines",
    heading: "When the payer is a machine.",
    lede: "Machines approve payments within limits the operator sets.",
    points: [
      "The operator sets the rules, the limits, and who the machine may pay.",
      "Every decision is signed and written to a tamper-evident record.",
    ],
    cta: "Talk to us about machines",
  },

  developers: {
    eyebrow: "Developers",
    heading: "Pay out, then listen for signed webhooks.",
    lede: "API docs and embeds come with access.",
    cta: "Request access",
  },

  closing: {
    heading: "Request access.",
    lede: "Tell us what you pay out, issue, or check.",
    cta: "Request access",
  },
} as const;
