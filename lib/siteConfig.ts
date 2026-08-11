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
        description: "Where MPE programmes fit, industry by industry.",
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
        description: "The consumer experience: money home, honestly priced.",
      },
      {
        label: "MPE OS",
        href: "/solutions/os",
        description: "Orchestration and control for global payment operations.",
      },
      {
        label: "MPE Workforce",
        href: "/solutions/workforce",
        description: "Global workforce execution coordinated through MPE.",
      },
      {
        label: "MPE Network",
        href: "/solutions/network",
        description: "Access to global rails through licensed infrastructure partners.",
      },
    ] satisfies NavItem[],
  },
  // Tier 1.6: the compliance footer is rendered verbatim from
  // content/claims.ts (claims.footerDisclaimer) on every page.
  footerFinePrint: [] as string[],
  solutionPages: {
    os: {
      title: "MPE OS",
      subtext: "Orchestration and control for global payment operations.",
      capabilities: [
        "Approval workflows and separation of duties",
        "Payment lifecycle states (create → approve → release → settle)",
        "Routing and execution abstraction across partners and rails",
        "FX control and governed exposure management",
        "Audit trails, reporting, and governance",
        "Vendor, subcontractor, and mass payout workflows",
      ],
    },
    workforce: {
      title: "MPE Workforce",
      subtext: "Global workforce execution, fully controlled through MPE.",
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
      subtext: "Access to global rails through a growing ecosystem of licensed partners.",
      capabilities: [
        "Local payout rails and coverage",
        "FX optimization checkpoints",
        "Funding accounts and virtual account constructs (where available)",
        "Payment tracking and transparency",
        "Redundancy and failover posture",
      ],
    },
  } satisfies Record<string, SolutionContent>,
} as const;
