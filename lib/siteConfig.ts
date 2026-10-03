export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  productName: "MPE",
  companyName: "MPE Solutions Inc.",
  domain: "modernpayengine.com",
  nav: [
    { label: "Platform", href: "/platform" },
    { label: "Machines", href: "/machines" },
    { label: "Solutions", href: "/solutions" },
    { label: "Developers", href: "/developers" },
    { label: "Company", href: "/company" },
  ] satisfies NavItem[],
  footerFinePrint: [] as string[],
} as const;
