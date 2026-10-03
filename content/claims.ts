/**
 * Single source of truth for marketing claims, stats, and approved copy.
 * Components import from here so a claim can be updated in one place and
 * propagate site-wide.
 *
 * HARD RULES (MPE_Website_Changes_1.md, 11 Aug 2026, apply to every edit):
 * 1. MPE is never the provider of remittance/money-transfer services,
 *    licensed partners are. MPE is never the subject of those verbs.
 * 2. No custody language. No wallets, balances, or stored value
 *    attributed to MPE.
 * 3. No pricing or fee claims of any kind. Pricing is not public.
 * 4. No partner names anywhere on the public site, capability language
 *    only.
 * 5. MFAM appears only in the approved homepage section, marked in development.
 * 6. No traction numbers (users, volumes). None are approved.
 * 7. Every statistic on the site must come from this file.
 */

export const claims = {
  /** Headline wage-loss range workers face on cross-border payments. */
  wageLossRange: "4-10%",

  /** Countries where money lands through the licensed partner network. */
  countryCount: "140+",

  /** Approved framing wherever the service is described. Use verbatim. */
  serviceAttribution:
    "Money transfer and payment services within MPE programmes are provided by licensed partner institutions in each market.",

  /** Approved reassurance line. Use verbatim. */
  noCustody:
    "MPE does not hold or transmit customer funds, and does not store customer identity documents.",

  /** Hero. The kicker above this headline lives in content/homepage.ts. */
  hero: {
    headline: "Pay every worker, anywhere, right inside your app.",
    subheadline:
      "MPE connects your platform to a network of licensed payment partners. One integration gives your workers payouts in their local currency, a wallet and a card, all under your brand.",
  },

  /** Stat strip (Tier 2.2), the only approved figures. */
  stats: [
    { value: "$860B", label: "sent home by migrant workers every year" },
    { value: "280M", label: "people working outside their home country" },
    { value: "~6%", label: "average cost of sending money home today" },
    { value: "140+", label: "countries where money lands through our network" },
  ] as const,

  /** Network stat line (Tier 3.1 / 3.4). */
  networkStats: [
    { value: "140+", label: "countries where money lands" },
    { value: "200+", label: "direct bank connections" },
    { value: "180", label: "countries of payroll coverage" },
    { value: "130+", label: "payout currencies" },
  ] as const,

  /** Markets grid (Tier 3.2), statuses are compliance-reviewed.
   *  Changes come from Josh, not design. */
  markets: [
    { name: "Singapore", status: "LAUNCHING" },
    { name: "United States", status: "LAUNCHING" },
    { name: "Malaysia", status: "READY" },
    { name: "United Arab Emirates", status: "READY" },
    { name: "UK · EU", status: "READY" },
    { name: "Philippines", status: "READY" },
    { name: "Saudi Arabia", status: "IN MOTION" },
    { name: "Indonesia", status: "STRATEGIC" },
  ] as const,

  /** Compliance footer (Tier 1.6). Use verbatim on every page. */
  footerDisclaimer:
    "© 2026 MPE Solutions Inc. All rights reserved. MPE provides orchestration and control software and community programmes. Money transfer and payment services within MPE programmes are provided by licensed partner institutions in each market. MPE does not hold or transmit customer funds, and does not store customer identity documents. Market designations describe partner-network capability and programmes in development, and do not constitute an offer of regulated services in any jurisdiction.",
} as const;

export type Claims = typeof claims;
