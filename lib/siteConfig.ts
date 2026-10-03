export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type SolutionContent = {
  title: string;
  subtext: string;
  capabilities: string[];
};

export const siteConfig = {
  productName: "MPE",
  companyName: "MPE Solutions Inc.",
  domain: "modernpayengine.com",
  nav: {
    topLevel: [
      { label: "Use Cases", href: "/use-cases" },
    ] satisfies NavItem[],
    platform: [
      {
        label: "Industries",
        href: "/industries",
        description: "Embed it, or take a branded app.",
      },
      {
        label: "Unified Architecture",
        href: "/unified-approach",
        description: "One Platform API in front of many providers.",
      },
      {
        label: "Trust & Controls",
        href: "/trust-controls",
        description: "Every decision is signed into an audit record.",
      },
      {
        label: "Resources",
        href: "/resources",
        description: "Sandbox, webhooks, embeds, and the console.",
      },
    ] satisfies NavItem[],
    solutions: [
      {
        label: "MPE Send",
        href: "/solutions/send",
        description: "Bank, debit card push, and mobile wallets.",
      },
      {
        label: "MPE OS",
        href: "/solutions/os",
        description: "Platform API, embeds, and the ops console.",
      },
      {
        label: "MPE Workforce",
        href: "/solutions/workforce",
        description: "Pay a global workforce.",
      },
      {
        label: "MPE Network",
        href: "/solutions/network",
        description: "One adapter for licensed providers.",
      },
    ] satisfies NavItem[],
  },
  // Tier 1.6: the compliance footer is rendered verbatim from
  // content/claims.ts (claims.footerDisclaimer) on every page.
  footerFinePrint: [] as string[],
  solutionPages: {
    os: {
      title: "MPE OS",
      subtext: "Platform API, embeds, and the ops console.",
      capabilities: [
        "Sandbox keys, webhooks, and docs",
        "Embeds for KYC, payouts, and card",
        "Every decision signed into the audit record",
      ],
    },
    workforce: {
      title: "MPE Workforce",
      subtext: "Pay a global workforce. 180 countries of payroll coverage.",
      capabilities: [
        "180 countries of payroll coverage",
        "Embed the screens, or take a branded app",
        "MPE never holds funds",
      ],
    },
    network: {
      title: "MPE Network",
      subtext: "One adapter for licensed providers. MPE never holds funds.",
      capabilities: [
        "Best route, Fastest, or Lowest cost",
        "140+ countries where money lands",
        "200+ direct bank connections",
        "130+ payout currencies",
      ],
    },
  } satisfies Record<string, SolutionContent>,
} as const;
