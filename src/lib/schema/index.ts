import { siteConfig } from "@/config/site";
import type {
  BreadcrumbSchema,
  FAQPageSchema,
  Breadcrumb,
  FAQ,
} from "@/types";

export function generateBreadcrumbSchema(
  breadcrumbs: Breadcrumb[]
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: index < breadcrumbs.length - 1 ? `${siteConfig.url}${crumb.href}` : undefined,
    })),
  };
}

export function generateFAQSchema(faqs: FAQ[]): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateMedicalProcedureSchema({
  name,
  description,
  procedureType,
  bodyLocation,
}: {
  name: string;
  description: string;
  procedureType?: string;
  bodyLocation?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    ...(procedureType && { procedureType }),
    ...(bodyLocation && { bodyLocation }),
  };
}

export function generateHospitalSchema({
  name,
  description,
  address,
  telephone,
  url,
  geo,
}: {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  };
  telephone?: string;
  url?: string;
  geo?: { latitude: number; longitude: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    ...(telephone && { telephone }),
    ...(url && { url }),
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
  };
}

export function generatePhysicianSchema({
  name,
  specialty,
  description,
  affiliation,
}: {
  name: string;
  specialty: string;
  description?: string;
  affiliation?: { name: string; url?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    medicalSpecialty: specialty,
    ...(description && { description }),
    ...(affiliation && {
      affiliation: affiliation.map((org) => ({
        "@type": "Hospital",
        name: org.name,
        ...(org.url && { url: org.url }),
      })),
    }),
  };
}

export function generateArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: { name: string; url?: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    ...(image && { image }),
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}
