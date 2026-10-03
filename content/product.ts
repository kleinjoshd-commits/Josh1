/**
 * Product facts for inner pages.
 * The private repo kleinjoshd-commits/MPE-app was not readable from this
 * environment. This file follows Josh's product description for that pass.
 * Do not add providers, fees, speeds, certifications, or offline mechanics.
 */

export const product = {
  oneLiner:
    "One Platform API in front of many licensed providers.",
  funds:
    "MPE never holds funds. Licensed providers move the money.",
  adapter:
    "Any licensed provider plugs in through one standard adapter. Providers are not named.",
  flow: [
    {
      title: "Authorize",
      body: "The payment is allowed to proceed.",
    },
    {
      title: "Route",
      body: "Best route, Fastest, or Lowest cost.",
    },
    {
      title: "Sign",
      body: "The decision is signed into the audit record.",
    },
  ],
  integrate: [
    {
      title: "Sandbox",
      body: "Sandbox keys for the Platform API.",
    },
    {
      title: "Connect",
      body: "Webhooks, docs, and embeddable screens.",
    },
    {
      title: "Operate",
      body: "An ops console for payments, KYC, and payouts.",
    },
  ],
  payouts: [
    { title: "Bank account", body: "Payout to a bank account." },
    { title: "Debit card push", body: "Push funds to a debit card." },
    { title: "Mobile wallet", body: "Payout to a mobile wallet." },
    { title: "Local account", body: "Payout to a local account." },
    { title: "Cross-border", body: "Cross-border payouts on the same API." },
  ],
  platformProducts: [
    {
      title: "Wallets",
      body: "An in-app balance inside the platform's own experience.",
    },
    {
      title: "Branded cards",
      body: "Cards issued in the platform's brand.",
    },
    {
      title: "Instant ID checks",
      body: "KYC as an embeddable screen.",
    },
  ],
  embeds:
    "Embeddable screens for KYC, payouts, and card: a hosted web embed, a JS drop-in for web, and a small Swift wrapper for iOS.",
  audiences: [
    {
      title: "Platforms with an app",
      body: "Embed KYC, payouts, and card. You keep the customer.",
    },
    {
      title: "Distributors and partners",
      body: "No app of your own. You get a ready-made app in your brand.",
    },
    {
      title: "Machines and autonomous systems",
      body: "MFAM is patent pending, at concept stage. It lets a machine approve payments within limits the operator sets. It does not move money.",
    },
  ],
} as const;
