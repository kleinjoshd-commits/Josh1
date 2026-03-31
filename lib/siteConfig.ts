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
  domain: "mpesolutions.ai",
  nav: {
    topLevel: [
      { label: "Use Cases", href: "/use-cases" },
      { label: "Industries", href: "/industries" },
      { label: "About", href: "/about" },
    ] satisfies NavItem[],
    platform: [
      {
        label: "Satellite Resilience",
        href: "/satellite",
        description: "Resilience and assurance for constrained environments.",
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
        label: "Beyond Earth",
        href: "/future-commerce",
        description:
          "Why hard payment environments on Earth are the proving ground for frontier finance.",
      },
      {
        label: "Resources",
        href: "/resources",
        description: "Reference notes on lifecycle, routing, FX, and settlement.",
      },
    ] satisfies NavItem[],
    solutions: [
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
        label: "MPE Balance",
        href: "/solutions/balance",
        description: "Worker financial accounts for globally distributed teams.",
      },
      {
        label: "MPE Network",
        href: "/solutions/network",
        description: "Access to global rails through licensed infrastructure partners.",
      },
    ] satisfies NavItem[],
  },
  footerFinePrint: [
    "MPE is developed by MPE Solutions Inc.",
    "MPE Solutions Inc. provides orchestration and control software. Payment execution infrastructure includes licensed partners such as Papaya Global.",
  ],
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
      subtext: "Global workforce execution — fully controlled through MPE.",
      capabilities: [
        "Global payroll execution",
        "Employer of Record (EOR)",
        "Contractor payments",
        "Benefits and statutory payments",
        "Compliance and tax handling",
        "Centralized visibility across entities and regions",
      ],
    },
    balance: {
      title: "MPE Balance",
      subtext: "Worker financial accounts designed for globally distributed teams.",
      capabilities: [
        "Worker wallet experience (white-labeled)",
        "Multi-currency balances",
        "Cross-border remittance and family support flows",
        "Faster access to wages (where available)",
        "Card access and paycard replacement (where available)",
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
