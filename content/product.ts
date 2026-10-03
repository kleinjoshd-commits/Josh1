export const product = {
  oneLiner: "One Platform API in front of many licensed providers.",
  funds: "MPE never holds funds. Licensed partners do.",
  adapter:
    "Any licensed provider plugs in through one standard adapter. Providers are not named.",
  route:
    "MPE scores every allowed route on success, speed and cost, picks one, and signs that decision before anything moves.",
  flow: [
    {
      title: "Authorize",
      body: "The payment is allowed to proceed.",
    },
    {
      title: "Route",
      body: "Success, speed and cost are scored. One route is picked.",
    },
    {
      title: "Sign",
      body: "The decision is signed and written to a tamper-evident record.",
    },
  ],
  integrate: [
    {
      title: "Sandbox",
      body: "Sandbox access comes with Request access. There is no self-serve signup.",
    },
    {
      title: "Connect",
      body: "API docs and embeds come with access. Signed webhooks cover KYC and payout status.",
    },
    {
      title: "Operate",
      body: "The ops console shows the route chosen and why, and the work operators can do.",
    },
  ],
  outputs: [
    { title: "Bank", body: "A payout to a bank account." },
    { title: "Card", body: "A payout to a card, including a debit card push." },
    { title: "Wallet", body: "A payout to a mobile wallet. Not a balance held by MPE." },
    { title: "Cross-border", body: "A cross-border payout, such as a bank payout in MXN or PHP." },
    {
      title: "Machine",
      body: "Patent pending, concept stage. A machine can approve a payment within limits the operator sets. It does not move money.",
    },
  ],
  cards: "Branded cards with spend controls and freeze.",
  identity:
    "Document and selfie ID checks, embedded in the platform's app.",
  embeds:
    "Embeds for KYC, payouts and card: a hosted web embed, a JS drop-in, and an iOS wrapper.",
  webhooks: "Signed events for KYC and payout status.",
  consoleSee:
    "See payouts with the route chosen and why, provider health, KYC, webhooks, reconciliation and the audit trail.",
  consoleDo:
    "Approve or reject KYC. Cancel or return payouts. Resend webhooks. Resolve reconciliation cases.",
  audiences: [
    {
      title: "Platforms with an app",
      body: "Embed KYC, payouts and card. Document and selfie checks sit in your app.",
    },
    {
      title: "Distributors and partners",
      body: "No app of your own. A ready-made app in your brand comes with access.",
    },
    {
      title: "Machines and autonomous systems",
      body: "MFAM is patent pending, concept stage. A machine can approve payments within limits the operator sets. It does not move money.",
    },
  ],
} as const;
