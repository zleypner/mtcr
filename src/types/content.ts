// =============================================================================
// CONTENT TYPES - Medical Tourism Costa Rica
// =============================================================================

import type { MDXRemoteSerializeResult } from "next-mdx-remote";

// -----------------------------------------------------------------------------
// Base Types
// -----------------------------------------------------------------------------

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
}

export interface Author {
  name: string;
  slug: string;
  role: string;
  avatar?: string;
  credentials?: string[];
  bio?: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface ContentStatus {
  status: "draft" | "review" | "published" | "archived";
  publishedAt?: string;
  updatedAt?: string;
  reviewedBy?: string;
  medicalReviewedBy?: string;
  medicalReviewedAt?: string;
}

// -----------------------------------------------------------------------------
// Treatment Types
// -----------------------------------------------------------------------------

export interface Treatment {
  slug: string;
  title: string;
  category: TreatmentCategory;
  specialty: string;
  description: string;
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Medical Information
  overview: string;
  benefits?: string[];
  risks?: string[];
  recoveryTime?: string;
  hospitalStay?: string;

  // Pricing
  priceRange?: PriceRange;
  savingsVsUSA?: string;

  // Related Content
  relatedTreatments?: string[];
  relatedSpecialties?: string[];
  relatedClinics?: string[];
  relatedDoctors?: string[];
  faqs?: FAQ[];

  // Schema
  schema: MedicalProcedureSchema;
}

export type TreatmentCategory =
  | "dental"
  | "cosmetic"
  | "orthopedic"
  | "cardiac"
  | "bariatric"
  | "fertility"
  | "ophthalmology"
  | "oncology"
  | "general-surgery"
  | "diagnostics"
  | "wellness";

// -----------------------------------------------------------------------------
// Specialty Types
// -----------------------------------------------------------------------------

export interface Specialty {
  slug: string;
  name: string;
  description: string;
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Related Content
  treatments?: string[];
  doctors?: string[];
  clinics?: string[];
  hospitals?: string[];

  // Statistics
  averageSavings?: string;
  patientCount?: string;

  schema: MedicalSpecialtySchema;
}

// -----------------------------------------------------------------------------
// Provider Types (Hospitals, Clinics, Doctors)
// -----------------------------------------------------------------------------

export interface Hospital {
  slug: string;
  name: string;
  type: "public" | "private";
  accreditations: Accreditation[];
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Location
  city: string;
  address: string;
  coordinates?: Coordinates;

  // Contact
  phone?: string;
  email?: string;
  website?: string;

  // Details
  beds?: number;
  established?: number;
  specialties: string[];
  services: string[];
  languages: string[];

  // Media
  images?: Image[];
  virtualTour?: string;

  // Reviews
  rating?: number;
  reviewCount?: number;

  schema: HospitalSchema;
}

export interface Clinic {
  slug: string;
  name: string;
  specialty: string;
  accreditations: Accreditation[];
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Location
  city: string;
  address: string;
  coordinates?: Coordinates;

  // Contact
  phone?: string;
  email?: string;
  website?: string;

  // Details
  established?: number;
  treatments: string[];
  services: string[];
  languages: string[];

  // Team
  doctors?: string[];

  // Media
  images?: Image[];

  // Reviews
  rating?: number;
  reviewCount?: number;

  // Pricing
  priceRanges?: Record<string, PriceRange>;

  schema: MedicalClinicSchema;
}

export interface Doctor {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  subspecialties?: string[];
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Credentials
  credentials: string[];
  education: Education[];
  certifications: Certification[];
  memberships?: string[];

  // Experience
  yearsExperience?: number;
  proceduresPerformed?: number;

  // Location
  city: string;
  hospitals?: string[];
  clinics?: string[];

  // Contact
  phone?: string;
  email?: string;

  // Languages
  languages: string[];

  // Media
  photo?: string;

  // Reviews
  rating?: number;
  reviewCount?: number;

  schema: PhysicianSchema;
}

// -----------------------------------------------------------------------------
// Location Types
// -----------------------------------------------------------------------------

export interface City {
  slug: string;
  name: string;
  region: string;
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Location
  coordinates?: Coordinates;
  timezone: string;

  // Medical Tourism Info
  hospitals?: string[];
  clinics?: string[];
  hotels?: string[];

  // Travel Info
  nearestAirport: string;
  distanceFromSJO?: string;

  // Highlights
  highlights?: string[];

  schema: CitySchema;
}

export interface Hotel {
  slug: string;
  name: string;
  category: "recovery" | "luxury" | "budget" | "medical-adjacent";
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Location
  city: string;
  address: string;
  coordinates?: Coordinates;

  // Details
  stars?: number;
  rooms?: number;

  // Medical Recovery Features
  medicalServices?: string[];
  accessibilityFeatures?: string[];
  nearbyHospitals?: string[];
  nearbyClinicss?: string[];

  // Amenities
  amenities: string[];

  // Contact
  phone?: string;
  email?: string;
  website?: string;

  // Media
  images?: Image[];

  // Pricing
  priceRange?: PriceRange;

  schema: HotelSchema;
}

// -----------------------------------------------------------------------------
// Content Types
// -----------------------------------------------------------------------------

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: Author;
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Media
  featuredImage?: Image;

  // Related
  relatedPosts?: string[];
  relatedTreatments?: string[];

  // Reading
  readingTime?: number;

  schema: ArticleSchema;
}

export type BlogCategory =
  | "news"
  | "tips"
  | "guides"
  | "patient-experience"
  | "industry"
  | "cost-comparison"
  | "destination";

export interface Guide {
  slug: string;
  title: string;
  category: GuideCategory;
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;
  author: Author;

  // Structure
  tableOfContents: TOCItem[];
  chapters?: GuideChapter[];

  // Media
  featuredImage?: Image;

  // Related
  relatedGuides?: string[];
  relatedTreatments?: string[];

  schema: ArticleSchema;
}

export type GuideCategory =
  | "getting-started"
  | "planning"
  | "travel"
  | "recovery"
  | "costs"
  | "insurance"
  | "legal";

export interface GuideChapter {
  slug: string;
  title: string;
  order: number;
}

export interface PatientStory {
  slug: string;
  title: string;
  patientName: string;
  patientCountry: string;
  treatment: string;
  clinic?: string;
  doctor?: string;
  seo: SEOMetadata;
  content: MDXRemoteSerializeResult;
  status: ContentStatus;

  // Details
  age?: number;
  travelDate?: string;

  // Media
  featuredImage?: Image;
  videoTestimonial?: string;

  // Ratings
  overallRating?: number;

  schema: ReviewSchema;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  relatedTreatments?: string[];
  relatedSpecialties?: string[];
}

export type FAQCategory =
  | "general"
  | "costs"
  | "travel"
  | "insurance"
  | "recovery"
  | "safety"
  | "legal"
  | "treatment-specific";

// -----------------------------------------------------------------------------
// Supporting Types
// -----------------------------------------------------------------------------

export interface Accreditation {
  name: string;
  acronym: string;
  logo?: string;
  url?: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: "USD";
  note?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year?: number;
  country?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: number;
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
  children?: TOCItem[];
}

// -----------------------------------------------------------------------------
// Schema.org Types (Simplified)
// -----------------------------------------------------------------------------

export interface BaseSchema {
  "@context": "https://schema.org";
  "@type": string;
}

export interface MedicalProcedureSchema extends BaseSchema {
  "@type": "MedicalProcedure";
  name: string;
  description: string;
  procedureType?: string;
  bodyLocation?: string;
}

export interface MedicalSpecialtySchema extends BaseSchema {
  "@type": "MedicalSpecialty";
  name: string;
}

export interface HospitalSchema extends BaseSchema {
  "@type": "Hospital";
  name: string;
  address: object;
  geo?: object;
  telephone?: string;
  url?: string;
}

export interface MedicalClinicSchema extends BaseSchema {
  "@type": "MedicalClinic";
  name: string;
  address: object;
  geo?: object;
  telephone?: string;
  url?: string;
  medicalSpecialty?: string[];
}

export interface PhysicianSchema extends BaseSchema {
  "@type": "Physician";
  name: string;
  medicalSpecialty?: string;
  affiliation?: object[];
}

export interface HotelSchema extends BaseSchema {
  "@type": "Hotel";
  name: string;
  address: object;
  starRating?: object;
}

export interface CitySchema extends BaseSchema {
  "@type": "City";
  name: string;
  containedInPlace?: object;
}

export interface ArticleSchema extends BaseSchema {
  "@type": "Article" | "MedicalWebPage";
  headline: string;
  author: object;
  datePublished?: string;
  dateModified?: string;
}

export interface ReviewSchema extends BaseSchema {
  "@type": "Review";
  itemReviewed: object;
  author: object;
  reviewRating?: object;
}

export interface FAQPageSchema extends BaseSchema {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export interface BreadcrumbSchema extends BaseSchema {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface OrganizationSchema extends BaseSchema {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}
