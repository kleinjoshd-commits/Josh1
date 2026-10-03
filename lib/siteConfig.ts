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
        description: "Where MPE programs fit, industry by industry.",
      },
      {
        label: "Unified Architecture",
        href: "/unified-approach",
        description: "How orchestration, execution, and controls fit together.",
      },
      {
        label: "Trust & Controls",
        href: "/trust-controls",
        description: "Policy, approvals, lifecycle control, and audit authority.",
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
        description: "Approve, route and prove.",
      },
      {
        label: "MPE Workforce",
        href: "/solutions/workforce",
        description: "Pay a global workforce.",
      },
      {
        label: "MPE Network",
        href: "/solutions/network",
        description: "Licensed reach, 140+ countries.",
      },
    ] satisfies NavItem[],
  },
  // Tier 1.6: the compliance footer is rendered verbatim from
  // content/claims.ts (claims.footerDisclaimer) on every page.
  footerFinePrint: [] as string[],
  solutionPages: {
    os: {
      title: "MPE OS",
      subtext: "Approve, route and prove. Authorize, Route, Sign.",
      capabilities: [
        "Approval workflows and separation of duties",
        "Authorize, Route, Sign, then Delivered",
        "Routing and execution abstraction across partners and networks",
        "FX control and governed exposure management",
        "Audit trails, reporting, and governance",
        "Vendor, subcontractor, and mass payout workflows",
      ],
    },
    workforce: {
      title: "MPE Workforce",
      subtext: "Pay a global workforce. 180 countries of payroll coverage.",
      capabilities: [
        "Global payroll execution",
        "Employer of Record (EOR)",
        "Contractor payments",
        "Benefits and statutory payments",
        "Compliance and tax handling",
        "Centralized visibility across entities and regions",
      ],
    },
    network: {
      title: "MPE Network",
      subtext: "Licensed reach in 140+ countries. MPE never holds funds.",
      capabilities: [
        "Local payout coverage",
        "FX optimization checkpoints",
        "Funding accounts and virtual account constructs (where available)",
        "Payment tracking and transparency",
        "Redundancy and failover posture",
      ],
    },
  } satisfies Record<string, SolutionContent>,
} as const;
