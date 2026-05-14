import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Use Cases | MPE",
  description:
    "Three customer stories: a commercial poultry processor running worker wallets, a consumer goods importer using early-invoice financing, and a multinational construction firm running MPE Workforce.",
};

type Metric = { value: string; label: string };

type UseCase = {
  id: string;
  industry: string;
  region: string;
  product: { label: string; href: string };
  title: string;
  profile: { name: string; lines: string[] };
  challenge: string[];
  solution: string[];
  outcome: Metric[];
};

const useCases: UseCase[] = [
  {
    id: "commercial-poultry-processor",
    industry: "Agriculture · Food production",
    region: "United States",
    product: { label: "MPE Balance", href: "/solutions/balance" },
    title:
      "Worker wallets for a commercial poultry processor with a Mexican and Central American workforce",
    profile: {
      name: "Customer profile",
      lines: [
        "US-based commercial poultry processor",
        "11 processing and packing facilities across five states",
        "≈3,400 hourly workers; ~78% of payroll-day remittance volume sent to Mexico, Guatemala, and Honduras",
        "Existing payroll: ADP-style provider, weekly direct deposit",
      ],
    },
    challenge: [
      "Workers were losing 5–9% of every paycheck to remittance fees and FX spreads at storefront money-transfer outlets in the small towns near the facilities. Several locations had only one or two MSBs operating, and pricing reflected it. Families on the receiving end were often paying additional cash-out fees at local agents.",
      "HR was hearing about the problem at every site visit. Retention in the highest-volume facilities was visibly worse than at sites where workers had family in the US. The producer had no appetite to change payroll, take custody of funds, or become a financial institution — they wanted a benefit that quietly improved take-home outcomes.",
    ],
    solution: [
      "MPE Balance was deployed as the producer's white-labeled workforce wallet. Enrollment was designed for the workforce reality: any government-issued ID was accepted, including matrícula consular and foreign passports. No SSN was required to open or operate a wallet.",
      "Workers can route some or all of their net pay into the MPE wallet, hold balances in USD, send money home with zero fees, and order optional family debit cards delivered to the destination address. Payroll integration sat alongside the existing direct-deposit flow — no payroll system replacement.",
    ],
    outcome: [
      { value: "~6 weeks", label: "from kickoff to first wallet enrollments" },
      { value: "5–9% → $0", label: "remittance cost on in-wallet transfers" },
      { value: "+12 pts", label: "year-over-year retention at pilot facilities" },
      { value: "0", label: "changes to the existing payroll provider" },
    ],
  },
  {
    id: "early-invoice-financing",
    industry: "Supply chain · Consumer goods",
    region: "US ↔ South & Southeast Asia",
    product: { label: "MPE OS", href: "/solutions/os" },
    title:
      "Early-invoice financing for a consumer goods importer with suppliers across South and Southeast Asia",
    profile: {
      name: "Customer profile",
      lines: [
        "Mid-market consumer goods importer (apparel and home category)",
        "Supplier base of ~140 manufacturers in Vietnam, Bangladesh, India, and Pakistan",
        "Standard payment terms: net 90–120 days from invoice approval",
        "Annual GMV through the supplier base: roughly $180M",
      ],
    },
    challenge: [
      "Suppliers in Dhaka, Ho Chi Minh City, and Tiruppur were sitting on approved invoices for three to four months while trying to fund the next production run. The smaller suppliers in particular were turning down purchase orders because they could not finance materials and labor against receivables that wouldn't pay out until well past the next cycle.",
      "The importer didn't want to pay early out of working capital — net-120 was the entire reason their margin model worked. Traditional bank-led supply chain financing programs wouldn't underwrite the smaller foreign suppliers, and local factoring rates in-country were prohibitive.",
    ],
    solution: [
      "MPE was deployed as the financing and settlement layer between the importer and its supplier base. Once an invoice is approved in the importer's ERP, the supplier can elect to take early payment from MPE within 48 hours, in their local currency, at a transparent discount rate. The importer pays MPE on the original net-120 due date, in USD.",
      "Settlement to suppliers routes through licensed local partners in each country. FX is locked at the moment the supplier elects early payment, so delivered amounts in VND, BDT, INR, and PKR are known up front. The importer's balance sheet stays clean — terms are unchanged from their accounting perspective.",
    ],
    outcome: [
      { value: "~$62M", label: "annualized invoice volume financed in year one" },
      { value: "48 hours", label: "from invoice approval to supplier receiving funds" },
      { value: "+28%", label: "growth in active supplier base over 9 months" },
      { value: "−41%", label: "supplier churn vs. the prior 12-month baseline" },
    ],
  },
  {
    id: "construction-contractoros",
    industry: "Construction · Infrastructure",
    region: "GCC, MENA, Southeast Asia",
    product: { label: "MPE Workforce", href: "/solutions/workforce" },
    title:
      "MPE Workforce for a multinational construction firm running projects across 17 countries",
    profile: {
      name: "Customer profile",
      lines: [
        "Multinational engineering and construction firm",
        "Active project sites across the GCC, North Africa, the Levant, and Southeast Asia",
        "≈14,000 total workforce; 1,800+ contractors and specialty consultants paid each month",
        "Mix of full-time staff, sponsored expatriates, day labor, and project-specific specialty firms",
      ],
    },
    challenge: [
      "Contractor payments across 17 countries were running through five different PSPs, three EOR providers, and a long tail of country-specific bank portals. Approvals lived in email threads. FX was guessed at the moment of payout. Withholding and statutory tax compliance varied by country and was tracked in a regional spreadsheet.",
      "Contractors were regularly paid late, paid in the wrong currency, or paid through the wrong entity. Project managers had no real-time view of who had been paid for what milestone. Treasury had no consolidated view of monthly contractor liability across the portfolio.",
    ],
    solution: [
      "MPE Workforce was deployed as the single operating layer for contingent workforce payments across the firm's footprint. Contractor onboarding, KYC, contract storage, and tax documentation flow through one workflow. Approval policies are policy-driven and entity-aware, with maker-checker thresholds and full audit trail per contractor.",
      "FX is locked at the moment of approval, not at payout. Disbursement routes through licensed local partners by country and currency, with the same lifecycle states across markets. Project managers get a real-time view of contractor status by project and milestone. Treasury gets one consolidated liability view across the portfolio.",
    ],
    outcome: [
      { value: "1,800+", label: "contractors paid per month across 17 countries" },
      { value: "11 days → 36 hours", label: "median approval-to-payout cycle" },
      { value: "1 layer", label: "replacing 5 PSPs and 3 EOR providers in the payment path" },
      { value: "100%", label: "of contractor payments under one audit trail" },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <Nav />

      <section className="deckLight">
        <div className="wavesLight" />
        <div className="container deckInner">
          <div className="useCasesHeader">
            <div className="eyebrow">
              Use Cases <span className="dot" />
              How MPE shows up in the field
            </div>

            <h1 className="h1">Three customers, three problems</h1>
          </div>

          <div className="useCasesList">
            {useCases.map((uc, i) => (
              <article
                key={uc.id}
                id={uc.id}
                className="panel useCasePanel"
                data-animate
              >
                <div className="useCaseHead">
                  <div className="useCaseNumber">0{i + 1}</div>
                  <div className="useCaseMeta">
                    <div className="useCaseTag">
                      {uc.industry} · {uc.region}
                    </div>
                    <h2 className="useCaseTitle">{uc.title}</h2>
                  </div>
                </div>

                <div className="useCaseGrid">
                  <div className="useCaseProfile">
                    <h3 className="useCaseProfileTitle">{uc.profile.name}</h3>
                    <ul className="useCaseProfileList">
                      {uc.profile.lines.map((line, j) => (
                        <li key={j}>{line}</li>
                      ))}
                    </ul>
                    <div className="useCaseProductTag">
                      Product:{" "}
                      <Link href={uc.product.href} className="useCaseProductLink">
                        {uc.product.label}
                      </Link>
                    </div>
                  </div>

                  <div className="useCaseBody">
                    <h3 className="useCaseSubhead">The challenge</h3>
                    {uc.challenge.map((p, j) => (
                      <p key={j} className="p useCaseBodyText">
                        {p}
                      </p>
                    ))}

                    <h3 className="useCaseSubhead">What MPE deployed</h3>
                    {uc.solution.map((p, j) => (
                      <p key={j} className="p useCaseBodyText">
                        {p}
                      </p>
                    ))}

                    <h3 className="useCaseSubhead">Outcome</h3>
                    <div className="useCaseOutcomeGrid">
                      {uc.outcome.map((m, j) => (
                        <div key={j} className="useCaseOutcomeCard">
                          <div className="useCaseOutcomeValue">{m.value}</div>
                          <div className="useCaseOutcomeLabel">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="useCasesCta">
            <h2 className="homeSectionTitle">Different shape, same operating layer</h2>
            <p className="p useCasesCtaCopy">
              Every engagement above runs on the same MPE control plane:
              governed approvals, locked FX, multi-currency settlement, and a
              single audit trail. The product wrapper changes by use case;
              the underlying infrastructure does not.
            </p>
            <div className="btnRow useCasesCtaActions">
              <Link className="btnPrimary" href="/#kyc">
                Request Access
              </Link>
              <Link className="btnSecondary" href="/unified-approach">
                Platform architecture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
