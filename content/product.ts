export const product = {
  oneLiner: "One Platform API in front of many licensed providers.",
  funds: "MPE never holds funds. Licensed partners do.",
  adapter: "Any licensed provider plugs in through one standard adapter.",
  fallback: "When one degrades, routing picks another eligible one.",
  route:
    "Every allowed route is scored on success, speed and cost. The best one is picked.",
  machines: "Machines approve payments within limits the operator sets.",
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
    { title: "Branded cards", body: "Branded cards with spend controls and freeze." },
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
    "Verification done by licensed providers",
  ],
  developerSteps: [
    {
      title: "Get sandbox access",
      body: "Sandbox access, API docs and embeds come with access.",
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
      title: "Listen for signed webhooks",
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
    body: "Pay people from your app, and earn from it.",
    detail:
      "Pay people from your app, and earn from it. The branded card program is coming soon.",
    href: "/solutions/platforms",
  },
  {
    title: "Fintechs",
    body: "One API for every licensed provider.",
    detail:
      "Payment programs that run more than one provider get orchestration, a signed audit trail, and fallback when a provider degrades.",
    href: "/solutions/fintechs",
  },
  {
    title: "Businesses without an app",
    body: "No app? Get one in your brand. Pay your people, let them spend, and earn from it.",
    detail:
      "No app? Get one in your brand. Pay your people, let them spend, and earn from it. Spend and earn are coming soon.",
    href: "/solutions/businesses",
  },
  {
    title: "Machines",
    body: "A machine pays within limits you set.",
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
