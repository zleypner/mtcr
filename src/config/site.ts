export const siteConfig = {
  name: "Costa Rica Health Guide",
  shortName: "CRHG",
  description:
    "The definitive guide to medical tourism in Costa Rica. Find top hospitals, clinics, doctors, and treatments. Save 50-70% on healthcare.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://costaricahealthguide.com",
  ogImage: "/og-image.jpg",
  locale: "en_US",
  alternateLocales: ["es_CR"],
  twitter: "@caboricahealth",
  creator: "Yieldge",
  keywords: [
    "medical tourism costa rica",
    "healthcare costa rica",
    "dental tourism costa rica",
    "plastic surgery costa rica",
    "hospitals costa rica",
    "doctors costa rica",
    "medical travel costa rica",
    "costa rica health guide",
  ],
  authors: [
    {
      name: "Costa Rica Health Guide Editorial Team",
      url: "https://costaricahealthguide.com/about",
    },
  ],
} as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  sameAs: [
    "https://twitter.com/costaricahealth",
    "https://facebook.com/costaricahealthguide",
    "https://linkedin.com/company/costaricahealthguide",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Spanish"],
  },
};
