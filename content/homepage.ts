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
        body: "Your branded wallet and card for the people you pay. Balances are held by licensed partner institutions, never by MPE.",
      },
      {
        icon: "card",
        title: "Cards",
        body: "Your branded card, with spend controls. You can earn a share of card spend.",
      },
      {
        icon: "identity",
        title: "Identity",
        body: "Document and selfie checks, in your app.",
      },
      {
        icon: "machine",
        title: "Machine payments",
        body: "MFAM is identity and authority.",
      },
    ],
  },

  who: {
    heading: "Who it's for",
  },

  mfam: {
    eyebrow: "Machines",
    heading: "When the payer is a machine.",
    lede: "MFAM is designed to give each machine an identity that can't be copied and the authority to check and sign payments within rules the owner signs. MPE then pays from the owner's own account.",
    points: [
      "The operator sets the rules, the limits, and who the machine may pay.",
      "Each payment is designed to be signed by the machine's chip and kept in one tamper-evident record.",
    ],
    cta: "Talk to us about machines",
  },

  developers: {
    eyebrow: "Developers",
    heading: "Pay out, then listen for webhooks.",
    lede: "API docs and embeds come with access.",
    cta: "Request access",
  },

  closing: {
    heading: "Request access.",
    lede: "Tell us what you pay out, issue, or check.",
    cta: "Request access",
  },
} as const;
