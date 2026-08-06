import type { Metadata } from "next";
import {
  Hero,
  TreatmentCategories,
  WhyLATAM,
  Stats,
  HowItWorks,
  FAQ,
  CTA,
} from "@/components/home";
import { JsonLd } from "@/components/seo";
import { siteConfig, organizationSchema } from "@/config/site";

export const metadata: Metadata = {
  title: "Medical Tourism Latin America | Save 50-70% on Healthcare",
  description:
    "Smart Medical Tourism: Your trusted guide for secure medical travel across Latin America. Find verified hospitals, board-certified doctors, and save 50-70% on treatments including dental, cosmetic surgery, and orthopedics.",
  keywords: [
    "medical tourism latin america",
    "healthcare latam",
    "dental tourism mexico",
    "plastic surgery colombia",
    "medical travel costa rica",
    "affordable healthcare abroad",
    "jci accredited hospitals",
    "smart medical tourism",
  ],
  openGraph: {
    title: "Smart Medical Tourism | Medical Travel Latin America",
    description:
      "Your trusted guide for secure medical travel across Latin America. Find verified hospitals, board-certified doctors, and save 50-70% on treatments.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Smart Medical Tourism - Medical Travel Latin America",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Medical Tourism | Medical Travel Latin America",
    description:
      "Your trusted guide for secure medical travel across Latin America. Save 50-70% on healthcare.",
    images: [`${siteConfig.url}/og-home.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is medical tourism in Latin America safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Latin America offers many safe destinations for medical tourism. Countries like Mexico, Costa Rica, Colombia, and Brazil have JCI-accredited hospitals, US and EU-trained physicians, and modern medical facilities.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save compared to US prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Patients typically save 50-70% on medical procedures compared to US prices, even when including travel and accommodation costs.",
      },
    },
    {
      "@type": "Question",
      name: "Do doctors in Latin America speak English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most doctors and medical staff at international hospitals speak fluent English. Many Latin American physicians trained in the United States, Canada, or Europe.",
      },
    },
    {
      "@type": "Question",
      name: "Which country should I choose for my procedure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best country depends on your specific procedure, budget, and preferences. Mexico is popular for dental and bariatric surgery. Costa Rica excels in dental and cosmetic procedures. Colombia is known for plastic surgery. Brazil is renowned for cosmetic surgery.",
      },
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={webSiteSchema} />
      <JsonLd data={faqSchema} />

      <Hero />
      <TreatmentCategories />
      <WhyLATAM />
      <Stats />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}
