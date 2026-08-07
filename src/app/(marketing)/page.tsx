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
  title: "Medical Tourism Latin America | Explore Care & Potential Savings",
  description:
    "Smart Medical Tourism: An informational guide to evaluating medical travel options across Latin America. Understand credential standards, costs, and safety considerations for dental, cosmetic surgery, and orthopedics.",
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
      "Informational guide to evaluating medical travel options across Latin America. Learn about credentials, safety, and potential cost savings.",
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
      "Informational guide to evaluating medical travel options across Latin America.",
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
        text: "Safety depends on the specific country, facility, and provider. Many clinics and hospitals in Latin America adhere to high international standards and employ specialists trained globally. Patients should independently verify facility accreditations (such as JCI) and physician credentials prior to booking any medical travel.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save compared to US prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Patients often observe potential cost reductions of 40-70% on procedures compared to US private healthcare costs, although final prices vary by treatment type, materials used, and travel expenses.",
      },
    },
    {
      "@type": "Question",
      name: "Do doctors in Latin America speak English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many doctors and medical staff at facilities catering to international patients speak fluent English. Many physicians have completed training or fellowships in the United States, Canada, or Europe.",
      },
    },
    {
      "@type": "Question",
      name: "Which country should I choose for my procedure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The choice depends on the treatment category and individual logistics. Costa Rica is highly regarded for dental implants and cosmetic surgery due to its proximity and developed private health sector. Mexico and Colombia are also popular destinations for other specialized procedures. We recommend consulting with qualified professionals to discuss your options.",
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
