/**
 * Single source of truth for marketing claims, stats, partner names,
 * and approved proof-point copy. Components import from here so a claim
 * can be updated in one place and propagate site-wide.
 *
 * Editing rules:
 * - Only SpaceBelt KSA and Papaya Global may be named as external parties.
 * - No customer or pilot names. No invented metrics, volumes, or testimonials.
 * - If a section needs a proof point, use `claims.proofPoint` verbatim.
 */

export const claims = {
  /** Headline wage-loss range workers face on cross-border remittance. */
  wageLossRange: "4-10%",

  /** Number of countries MPE operates across. */
  countryCount: "160+",

  /** Cross-border payout corridors named on the homepage and in the press release. */
  corridors: [
    "United States",
    "Europe",
    "Singapore",
    "GCC",
    "South Asia",
    "Southeast Asia",
    "Africa",
    "Latin America",
  ] as const,

  /** Wallet capabilities used in hero and product copy. */
  wallet: {
    remittanceFee: "zero-fee remittances",
    balance: "USD-held wallets",
    cards: "family debit cards",
    /** Replacement for the disallowed "satellite-accessible cards" phrase. */
    resilientAccess:
      "wallet and card access built to hold up where connectivity fails",
  },

  /** External parties allowed to be named on the site. */
  partners: {
    spaceBeltKsa: {
      name: "SpaceBelt KSA",
      pressReleaseDate: "April 21, 2026",
      pressRouteHref: "/press",
    },
    papayaGlobal: {
      name: "Papaya Global",
      role: "licensed partner for payment execution",
    },
  },

  /** Only approved proof-point sentence for credibility sections. */
  proofPoint:
    "MPE is in active pilots with US employers in agriculture and care services.",

  /** Announcement banner copy. */
  banner: {
    icon: "🛰️",
    body: "MPE has partnered with SpaceBelt KSA to bring global finance to sovereign orbital rails.",
    linkText: "Read the announcement →",
    linkHref: "/press",
  },
} as const;

export type Claims = typeof claims;
