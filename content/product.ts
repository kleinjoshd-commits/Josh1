export const product = {
  oneLiner: "One Platform API in front of many providers.",
  funds: "MPE never holds funds. Licensed partners do.",
  adapter: "Any provider plugs in through one standard adapter.",
  fallback: "When one degrades, routing picks another eligible one.",
  route:
    "Every allowed route is scored on success, speed and cost. The best one is picked.",
  machines: "MFAM is identity and authority.",
  flow: [
    {
      title: "Authorize",
      body: "Checked against your rules and limits.",
    },
    {
      title: "Route",
      body: "Every allowed route is scored on success, speed and cost. The best one is picked.",
    },
    {
      title: "Sign",
      body: "The decision is signed and written to a tamper-evident record.",
    },
  ],
  coverage: [
    { title: "Bank", body: "A payout to a bank account." },
    { title: "Debit card", body: "A payout to a debit card." },
    { title: "Mobile wallet", body: "A payout to a mobile wallet." },
    {
      title: "Cross-border",
      body: "A cross-border payout, such as a bank payout in MXN or PHP.",
    },
    { title: "Branded cards", body: "Branded cards with spend controls and freeze. The platform can earn a share of card spend." },
    {
      title: "Identity",
      body: "Document and selfie checks, embedded in the platform's app.",
    },
  ],
  consoleSee:
    "See payouts with the route chosen and why, provider health, KYC, webhooks, reconciliation and the audit trail.",
  consoleDo:
    "Approve or reject KYC. Cancel or return payouts. Resend webhooks. Resolve reconciliation cases. Mark a provider degraded.",
  trust: [
    "Signed policy",
    "Signed decisions",
    "Tamper-evident audit log",
    "MPE never holds funds",
    "No identity documents stored by MPE",
    "Verification done by licensed partner institutions",
  ],
  developerSteps: [
    {
      title: "Get access",
      body: "Request access. Keys, docs and embeds follow.",
    },
    {
      title: "Enroll and verify",
      body: "Document and selfie checks, in the platform's app.",
    },
    {
      title: "Pay out",
      body: "MPE authorizes, routes and signs the payout.",
    },
    {
      title: "Listen for webhooks",
      body: "KYC and transfer updates arrive signed.",
    },
  ],
  payoutSample: `POST /v1/programs/{programId}/payouts
Headers: Authorization: Bearer mpe_test_..., Idempotency-Key: <uuid>
Body: { "enrollmentId": "enr_...", "amountInMinor": 248000, "currency": "CAD", "method": "bank" }
Response 201: { "transferId": "trf_...", "state": "Sent", ... }`,
  webhookSample: `X-MPE-Timestamp
X-MPE-Signature
X-MPE-Event-Id
HMAC-SHA256

kyc.updated
transfer.updated`,
  embeds: [
    { title: "Hosted web embed", body: "KYC, payouts and card, hosted by MPE." },
    { title: "JS drop-in", body: "Mount the same screens with MPE.mount." },
    { title: "iOS wrapper", body: "The same screens inside an iOS app." },
  ],
} as const;

export const segments = [
  {
    title: "Platforms",
    body: "Pay people from your app. Give them your branded card and earn a share of their card spend.",
    detail:
      "Pay people from your app. Give them your branded card and earn a share of their card spend.",
    href: "/solutions/platforms",
  },
  {
    title: "Fintechs",
    body: "One API across providers.",
    detail:
      "Payment programs that run more than one provider get orchestration, a signed audit trail, and fallback when a provider degrades.",
    href: "/solutions/fintechs",
  },
  {
    title: "Businesses without an app",
    body: "No app of your own? We can provide a branded app with wallet and card. Pay your people and earn a share of their card spend.",
    detail:
      "No app of your own? We can provide a branded app with wallet and card. Pay your people and earn a share of their card spend.",
    href: "/solutions/businesses",
  },
  {
    title: "Machines",
    body: "MFAM is designed to give each machine an identity that can't be copied and the authority to check and sign payments within rules the owner signs. MPE then pays from the owner's own account.",
    detail:
      "Operators of drone fleets, autonomous vehicles, robotics, EV charging, and remote or maritime equipment.",
    href: "/machines",
    image: "/media/built-machines.webp",
  },
] as const;

export const operators = [
  "Drone fleets",
  "Autonomous vehicles",
  "Robotics",
  "EV charging",
  "Remote or maritime equipment",
] as const;
