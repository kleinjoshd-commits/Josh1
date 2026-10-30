import { cliffLinkedIn } from "@/content/mfam";
import { CANONICAL_ORIGIN } from "@/content/seo";

const organizationId = `${CANONICAL_ORIGIN}/#org`;

/**
 * Sitewide Organization + WebSite graph. Static constants only.
 * sameAs is the LinkedIn company page already on the site, plus the D&B profile.
 * Crunchbase stays off sameAs until a profile exists.
 * Cliff's sameAs is the LinkedIn URL already published on /company.
 * No other profile, and no claim that a person originated MFAM.
 */
export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Modern Pay Engine",
      alternateName: ["MPE", "mpesolutions.ai"],
      legalName: "MPE Solutions, Inc",
      url: CANONICAL_ORIGIN,
      foundingDate: "2025",
      email: "josh@modernpayengine.com",
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
        streetAddress: "14 Ridge Square NW, 3rd Fl",
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
          worksFor: {
            "@type": "Organization",
            name: "MPE Solutions, Inc (Modern Pay Engine)",
          },
          knowsAbout: ["machine payments", "satellite communications"],
          sameAs: [cliffLinkedIn],
        },
        { "@type": "Person", name: "Josh Klein", jobTitle: "Co-Founder and COO" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/mpesolutions",
        "https://www.dnb.com/business-directory/company-profiles/mpe-solutions-inc.a4123cb022e628ffa031ffa1aa478643",
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
    "One API to pay your people, put payroll into your branded wallet and card, and give each worker wallet its own account and routing number. Money movement is provided by licensed partner institutions. MPE never holds funds.",
} as const;

/** Product block on /machines. No offers, aggregateRating, or review. */
export const mfamProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${CANONICAL_ORIGIN}/machines#mfam`,
  name: "MFAM (Machine Financial Authority Module) by Modern Pay Engine",
  alternateName: "MFAM",
  category: "Identity and authority for machines",
  brand: { "@id": organizationId },
  manufacturer: { "@id": organizationId },
  url: `${CANONICAL_ORIGIN}/machines`,
  description:
    "MFAM (Machine Financial Authority Module) by Modern Pay Engine is identity and authority for machines. It is designed to give each machine an identity that can't be copied and the authority to check and sign payments within rules the owner signs. Patent pending, prototype working.",
} as const;
