import type { Metadata } from "next";
import {
  Hero,
  TreatmentCategories,
  WhyCostaRica,
  Stats,
  HowItWorks,
  FAQ,
} from "@/components/home";
import { JsonLd } from "@/components/seo";
import { siteConfig, organizationSchema } from "@/config/site";

export const metadata: Metadata = {
  title: "Medical Tourism Costa Rica | Save 40-70% on Quality Healthcare",
  description:
    "Smart Medical Tourism Costa Rica: Your guide to affordable dental implants, cosmetic surgery, and orthopedic procedures. JCI-accredited hospitals, board-certified doctors, save 40-70% vs US prices.",
  keywords: [
    "medical tourism costa rica",
    "dental implants costa rica",
    "cosmetic surgery costa rica",
    "plastic surgery costa rica",
    "dental tourism costa rica",
    "affordable healthcare costa rica",
    "jci accredited hospitals costa rica",
    "smart medical tourism",
  ],
  openGraph: {
    title: "Smart Medical Tourism | Medical Tourism Costa Rica",
    description:
      "Your guide to quality, affordable medical care in Costa Rica. Save 40-70% on dental, cosmetic, and orthopedic procedures at JCI-accredited hospitals.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Smart Medical Tourism - Medical Tourism Costa Rica",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Medical Tourism | Medical Tourism Costa Rica",
    description:
      "Your guide to quality, affordable medical care in Costa Rica. Save 40-70% vs US prices.",
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
      name: "Is medical tourism in Costa Rica safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costa Rica is considered one of the safest medical tourism destinations in Latin America. The country has 3 JCI-accredited hospitals meeting international standards, a stable democracy since 1948, and many doctors trained in the US and Europe.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save on procedures in Costa Rica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Patients typically save 40-70% compared to US prices. For example, a dental implant costing $3,000-5,000 in the US costs $800-1,800 in Costa Rica. These savings come from lower operating costs, not lower quality.",
      },
    },
    {
      "@type": "Question",
      name: "Do doctors in Costa Rica speak English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most doctors and specialists treating international patients speak fluent English. Many have completed training or fellowships in the United States, Canada, or Europe. Clinics also employ bilingual patient coordinators.",
      },
    },
    {
      "@type": "Question",
      name: "What is JCI accreditation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JCI (Joint Commission International) is the gold standard for international healthcare accreditation. Costa Rica has 3 JCI-accredited hospitals: Hospital CIMA, Clínica Bíblica, and Hospital Clínica Católica.",
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
      <WhyCostaRica />
      <Stats />
      <HowItWorks />
      <FAQ />
    </>
  );
}
