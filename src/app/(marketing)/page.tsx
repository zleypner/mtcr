import type { Metadata } from "next";
import {
  Hero,
  TreatmentCategories,
  WhyCostaRica,
  Stats,
  HowItWorks,
  FAQ,
  CTA,
} from "@/components/home";
import { JsonLd } from "@/components/seo";
import { siteConfig, organizationSchema } from "@/config/site";

export const metadata: Metadata = {
  title: "Medical Tourism Costa Rica | Save 50-70% on Healthcare",
  description:
    "Costa Rica Health Guide: Your trusted resource for medical tourism in Costa Rica. Find JCI-accredited hospitals, board-certified doctors, and save 50-70% on treatments including dental, cosmetic surgery, and orthopedics.",
  keywords: [
    "medical tourism costa rica",
    "healthcare costa rica",
    "dental tourism costa rica",
    "plastic surgery costa rica",
    "hospitals costa rica",
    "doctors costa rica",
    "affordable healthcare",
    "jci accredited hospitals",
  ],
  openGraph: {
    title: "Costa Rica Health Guide | Medical Tourism Costa Rica",
    description:
      "Your trusted resource for medical tourism in Costa Rica. Find JCI-accredited hospitals, board-certified doctors, and save 50-70% on treatments.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Costa Rica Health Guide - Medical Tourism",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Costa Rica Health Guide | Medical Tourism Costa Rica",
    description:
      "Your trusted resource for medical tourism in Costa Rica. Save 50-70% on healthcare.",
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
        text: "Yes, Costa Rica is one of the safest destinations for medical tourism. The country has multiple JCI-accredited hospitals, US and EU-trained physicians, and a stable democracy with excellent infrastructure.",
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
      name: "Do doctors in Costa Rica speak English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most doctors and medical staff at international hospitals speak fluent English. Many Costa Rican physicians trained in the United States, Canada, or Europe.",
      },
    },
    {
      "@type": "Question",
      name: "What is JCI accreditation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JCI (Joint Commission International) accreditation is the gold standard for healthcare quality worldwide. Costa Rica has over 10 JCI-accredited facilities.",
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
      <CTA />
    </>
  );
}
