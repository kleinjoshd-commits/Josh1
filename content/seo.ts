import { siteConfig } from "@/lib/siteConfig";

/** Chosen canonical host. www and mpesolutions.ai stay aliases. See docs/host-cutover.md. */
export const CANONICAL_ORIGIN = `https://${siteConfig.domain}`;

export const pageSeo = {
  "/": {
    title: "Modern Pay Engine (MPE) - One integration for every way money moves",
    description:
      "One integration for every way money moves. For people today, for machines tomorrow. Payouts, branded wallets and cards. MPE never holds funds.",
  },
  "/platform": {
    title: "Platform: payouts, wallets, cards and identity in one API",
    description:
      "MPE | One API to authorize, route and sign payouts, branded wallets, cards and identity. Licensed partners move the money. MPE never holds funds.",
  },
  "/machines": {
    title: "MFAM (Machine Financial Authority Module) by Modern Pay Engine",
    description:
      "MFAM (Machine Financial Authority Module) by Modern Pay Engine is designed for identity and owner-set payment authority. Patent pending, prototype working.",
  },
  "/machines/ships-and-satellites": {
    title: "How can a ship or satellite pay for services? | MFAM by Modern Pay Engine",
    description:
      "A ship or satellite can pay for services when it has an identity that can't be copied and authority its owner sets. MFAM (Machine Financial Authority Module) by Modern Pay Engine is designed to do both.",
  },
  "/machines/hardware-identity": {
    title: "Hardware identity for machine payments | MFAM by Modern Pay Engine",
    description:
      "Why machine payments need an identity that lives in hardware, and how MFAM (Machine Financial Authority Module) by Modern Pay Engine is designed to provide it.",
  },
  "/solutions": {
    title: "Solutions for platforms, fintechs, businesses and machines",
    description:
      "MPE | One API, four ways to use it: platforms, fintechs, businesses without an app, and operators of machines. See which fits you.",
  },
  "/solutions/platforms": {
    title: "Embedded payouts, branded wallet and card for platforms",
    // The spec table sentence is 169 characters. This keeps the same claims
    // and stays within 155: the "MPE | " prefix is omitted, and "building"
    // is omitted so the ending matches the businesses description.
    description:
      "Pay your people into your branded wallet and card. Each worker wallet can have its own account and routing number. Launch without your own payments stack.",
  },
  "/solutions/fintechs": {
    title: "Run more than one payment provider from one API",
    description:
      "MPE | One API and one adapter across providers, with routing scored on success, speed and cost and fallback when a provider degrades.",
  },
  "/solutions/businesses": {
    title: "Branded wallet and card for businesses without an app",
    description:
      "MPE | Pay your people, let them spend on your branded card, and offer a branded app if you have none of your own. Launch without your own payments stack.",
  },
  "/developers": {
    title: "Developers: payouts API and webhooks",
    description:
      "MPE | Integrate in four steps: pay out through one API, then listen for webhooks. API docs and embeds come with access.",
  },
  "/company": {
    title: "About Modern Pay Engine (MPE Solutions, Inc)",
    description:
      "MPE | MPE builds orchestration and control software. Licensed partners move the money. Based in Washington, DC. MPE never holds funds and is not a bank.",
  },
} as const;

export type SeoPath = keyof typeof pageSeo;

export const SITEMAP_PATHS = Object.keys(pageSeo) as SeoPath[];
