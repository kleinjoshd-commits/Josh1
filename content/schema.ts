import { cliffLinkedIn, coleLinkedIn, joshLinkedIn, kokRieLinkedIn } from "@/content/mfam";
import { CANONICAL_ORIGIN, pageSeo } from "@/content/seo";

const organizationId = `${CANONICAL_ORIGIN}/#org`;

/**
 * Sitewide Organization + WebSite graph. Static constants only.
 * sameAs is the LinkedIn company page already on the site, plus the Crunchbase profile.
 * The D&B directory URL stays off until that profile can be confirmed.
 * Person sameAs values are the LinkedIn URLs already published on /company.
 * No public email. No claim that a person originated MFAM.
 * publisher, provider, brand, manufacturer, and worksFor all use organizationId.
 * disambiguatingDescription names other companies. Those names stay in this JSON-LD only.
 * MPE Solutions Pte Ltd is a separate Singapore company. It does not reuse the parent's sameAs or disambiguatingDescription.
 */
export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Modern Pay Engine",
      alternateName: ["MPE", "MPE Solutions, Inc"],
      legalName: "MPE Solutions, Inc",
      disambiguatingDescription:
        "MPE (Modern Pay Engine), by MPE Solutions, Inc, a Delaware corporation, is not affiliated with PayEngine, ModernPay, MPE Inc (medical devices) or MPE Services (HVAC).",
      foundingDate: "2025-11-04",
      url: CANONICAL_ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: `${CANONICAL_ORIGIN}/mpe-logo.png`,
      },
      image: `${CANONICAL_ORIGIN}/og.png`,
      slogan:
        "One integration for every way money moves. For people today, for machines tomorrow.",
      description:
        "One integration for every way money moves. For people today, for machines tomorrow. MPE is orchestration and control software for payouts, branded wallets and cards, identity and machine payments. MPE never holds funds.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "14 Ridge Square NW, 3rd Floor",
        addressLocality: "Washington",
        addressRegion: "DC",
        postalCode: "20016",
        addressCountry: "US",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "DUNS",
        name: "D-U-N-S Number",
        value: "150001614",
      },
      duns: "150001614",
      founder: [
        {
          "@type": "Person",
          name: "Cliff Beek",
          jobTitle: "Co-Founder and CEO",
          worksFor: { "@id": organizationId },
          knowsAbout: ["machine payments", "satellite communications"],
          sameAs: [cliffLinkedIn],
        },
        {
          "@type": "Person",
          name: "Josh Klein",
          jobTitle: "Co-Founder and COO",
          worksFor: { "@id": organizationId },
          sameAs: [joshLinkedIn],
        },
      ],
      employee: [
        {
          "@type": "Person",
          name: "Kok Rie Ooi",
          jobTitle: "Managing Director, APAC",
          worksFor: { "@id": organizationId },
          sameAs: [kokRieLinkedIn],
        },
        {
          "@type": "Person",
          name: "Cole Mahoney",
          jobTitle: "Business Development and Strategic Partnerships",
          worksFor: { "@id": organizationId },
          sameAs: [coleLinkedIn],
        },
      ],
      subOrganization: {
        "@type": "Organization",
        name: "MPE Solutions Pte Ltd",
        address: {
          "@type": "PostalAddress",
          addressCountry: "SG",
        },
      },
      sameAs: [
        "https://www.linkedin.com/company/mpesolutions",
        "https://www.crunchbase.com/organization/mpe-4ff4",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${CANONICAL_ORIGIN}/#website`,
      url: CANONICAL_ORIGIN,
      name: "Modern Pay Engine",
      alternateName: "MPE",
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
  ],
} as const;

/** Same Service block on /platform and /solutions/platforms. No offers, prices, ratings, or reviews. */
export const payoutService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_ORIGIN}/platform#service`,
  name: "MPE payouts, branded wallets and cards",
  serviceType: "Payment orchestration software",
  provider: { "@id": organizationId },
  url: `${CANONICAL_ORIGIN}/platform`,
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Platforms, fintechs and businesses that pay people",
  },
  description:
    "One API to pay your people, put payroll into your branded wallet and card. MPE never holds funds.",
} as const;

/** MFAM description on /machines. Not a priced product, so this is not a Product. */
export const mfamEntity = {
  "@context": "https://schema.org",
  "@type": "Thing",
  "@id": `${CANONICAL_ORIGIN}/machines#mfam`,
  name: "MFAM (Machine Financial Authority Module) by Modern Pay Engine",
  url: `${CANONICAL_ORIGIN}/machines`,
  description:
    "MFAM (Machine Financial Authority Module) by Modern Pay Engine is identity and authority for machines. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules. Patent pending, working today.",
} as const;

/** Answer page at /machines/payments. Same fields as the other static schema objects. */
export const machinePaymentsArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${CANONICAL_ORIGIN}/machines/payments#article`,
  headline: "What is a machine payments platform?",
  description: pageSeo["/machines/payments"].description,
  url: `${CANONICAL_ORIGIN}/machines/payments`,
  mainEntityOfPage: `${CANONICAL_ORIGIN}/machines/payments`,
  inLanguage: "en",
  author: { "@id": organizationId },
  publisher: { "@id": organizationId },
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
} as const;
