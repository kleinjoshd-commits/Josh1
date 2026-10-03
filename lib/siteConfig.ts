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
        description: "Platforms, people, and machines.",
      },
      {
        label: "Unified Architecture",
        href: "/unified-approach",
        description: "How orchestration, execution, and controls fit together.",
      },
      {
        label: "Trust & Controls",
        href: "/trust-controls",
        description: "Authorize, Route, Sign. Partners execute.",
      },
      {
        label: "Resources",
        href: "/resources",
        description: "Reference notes on lifecycle, routing, FX, and settlement.",
      },
    ] satisfies NavItem[],
    solutions: [
      {
        label: "MPE Send",
        href: "/solutions/send",
        description: "Payouts to any account.",
      },
      {
        label: "MPE OS",
        href: "/solutions/os",
        description: "Authorize, Route, Sign.",
      },
      {
        label: "MPE Workforce",
        href: "/solutions/workforce",
        description: "Pay a global workforce.",
      },
      {
        label: "MPE Network",
        href: "/solutions/network",
        description: "140+ countries, through licensed partners.",
      },
    ] satisfies NavItem[],
  },
  // Tier 1.6: the compliance footer is rendered verbatim from
  // content/claims.ts (claims.footerDisclaimer) on every page.
  footerFinePrint: [] as string[],
  solutionPages: {
    os: {
      title: "MPE OS",
      subtext: "Authorize, Route, Sign. Licensed partners execute.",
      capabilities: [
        "Authorize, Route, Sign, then Delivered",
        "Best licensed path for each payment",
        "MPE does not hold or transmit customer funds",
      ],
    },
    workforce: {
      title: "MPE Workforce",
      subtext: "Pay a global workforce. 180 countries of payroll coverage.",
      capabilities: [
        "180 countries of payroll coverage",
        "Payouts, wallets and cards on the same integration",
        "Licensed partners provide the regulated services",
      ],
    },
    network: {
      title: "MPE Network",
      subtext: "140+ countries where money lands. MPE never holds funds.",
      capabilities: [
        "140+ countries where money lands",
        "200+ direct bank connections",
        "130+ payout currencies",
        "MPE does not hold or transmit customer funds",
      ],
    },
  } satisfies Record<string, SolutionContent>,
} as const;
