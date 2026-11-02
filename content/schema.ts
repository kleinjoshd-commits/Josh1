import { cliffLinkedIn, coleLinkedIn, joshLinkedIn, kokRieLinkedIn } from "@/content/mfam";
import { CANONICAL_ORIGIN } from "@/content/seo";

const organizationId = `${CANONICAL_ORIGIN}/#org`;

/**
 * Sitewide Organization + WebSite graph. Static constants only.
 * sameAs is the LinkedIn company page already on the site.
 * The D&B directory URL stays off until that profile can be confirmed.
 * Crunchbase stays off sameAs until a profile exists.
 * Person sameAs values are the LinkedIn URLs already published on /company.
 * No public email. No claim that a person originated MFAM.
 * publisher, provider, brand, manufacturer, and worksFor all use organizationId.
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
      sameAs: ["https://www.linkedin.com/company/mpesolutions"],
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
    "MFAM (Machine Financial Authority Module) by Modern Pay Engine is identity and authority for machines. MFAM is designed to initiate and sign only the payments that fit the owner's signed rules. Patent pending, prototype working.",
} as const;
