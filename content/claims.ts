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
    "Money transfer and payment services within MPE programs are provided by licensed partner institutions in each market.",

  /** Approved reassurance line. Use verbatim. */
  noCustody:
    "MPE does not hold or transmit customer funds, and does not store customer identity documents.",

  /** Homepage hero. Kicker lives in content/homepage.ts. */
  hero: {
    headline: "One integration for every way money moves.",
    subheadline:
      "Payouts, wallets, cards, identity and cross-border, routed across licensed partners. For people, platforms and machines.",
  },

  /** Hero strip. Same figures as the network map. Not market-size claims. */
  stats: [
    { value: "140+", label: "countries where money lands", strip: true },
    { value: "200+", label: "direct bank connections", strip: true },
    { value: "130+", label: "payout currencies", strip: true },
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
    "© 2026 MPE Solutions Inc. All rights reserved. MPE provides orchestration and control software and community programs. Money transfer and payment services within MPE programs are provided by licensed partner institutions in each market. MPE does not hold or transmit customer funds, and does not store customer identity documents. Market designations describe partner-network capability and programs in development, and do not constitute an offer of regulated services in any jurisdiction.",
} as const;

export type Claims = typeof claims;
