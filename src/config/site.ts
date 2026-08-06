export const siteConfig = {
  name: "Smart Medical Tourism",
  shortName: "SMT",
  description:
    "Your trusted guide for secure medical travel across Latin America. Find verified hospitals, clinics, and doctors. Save 50-70% on quality healthcare.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://smartmedicaltourism.com",
  ogImage: "/og-image.jpg",
  locale: "en_US",
  alternateLocales: ["es_MX", "es_CO", "pt_BR"],
  twitter: "@smartmedtourism",
  creator: "Yieldge",
  keywords: [
    "medical tourism latin america",
    "healthcare latam",
    "medical travel mexico",
    "medical tourism colombia",
    "medical tourism costa rica",
    "medical tourism brazil",
    "affordable healthcare abroad",
    "smart medical tourism",
  ],
  authors: [
    {
      name: "Smart Medical Tourism Editorial Team",
      url: "https://smartmedicaltourism.com/about",
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
    "https://twitter.com/smartmedtourism",
    "https://facebook.com/smartmedicaltourism",
    "https://linkedin.com/company/smartmedicaltourism",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Spanish", "Portuguese"],
  },
};
