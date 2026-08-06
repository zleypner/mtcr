# Structured Data Implementation

## Schema Types by Page

### All Pages

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Costa Rica Health Guide",
  "url": "https://costaricahealthguide.com",
  "logo": "https://costaricahealthguide.com/logo.png",
  "sameAs": [
    "https://twitter.com/medicaltourismcr",
    "https://facebook.com/medicaltourismcr"
  ]
}
```

### Treatment Pages

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Dental Implants",
  "description": "...",
  "procedureType": "Surgical",
  "bodyLocation": "Mouth",
  "preparation": "...",
  "howPerformed": "...",
  "followup": "..."
}
```

### Hospital/Clinic Pages

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Prisma Dental",
  "medicalSpecialty": "Dentistry",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "San José",
    "addressCountry": "CR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.9281",
    "longitude": "-84.0907"
  },
  "telephone": "+506-2222-2222",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}
```

### Doctor Pages

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Carlos Rodríguez",
  "medicalSpecialty": "Orthopedic Surgery",
  "alumniOf": "Universidad de Costa Rica",
  "affiliation": {
    "@type": "Hospital",
    "name": "Hospital CIMA"
  },
  "availableService": {
    "@type": "MedicalProcedure",
    "name": "Knee Replacement"
  }
}
```

### Blog/Guide Pages

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Dental Tourism in Costa Rica",
  "author": {
    "@type": "Person",
    "name": "Editorial Team"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-06-20",
  "publisher": {
    "@type": "Organization",
    "name": "Costa Rica Health Guide"
  }
}
```

### FAQ Pages

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do dental implants cost in Costa Rica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dental implants in Costa Rica typically cost..."
      }
    }
  ]
}
```

### All Content Pages (Breadcrumbs)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://costaricahealthguide.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Treatments",
      "item": "https://costaricahealthguide.com/treatments"
    }
  ]
}
```

## Implementation

### Component

```tsx
// components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### Usage

```tsx
// app/(marketing)/treatments/[category]/[slug]/page.tsx
import { JsonLd } from '@/components/seo/JsonLd';

export default function TreatmentPage({ treatment }) {
  return (
    <>
      <JsonLd data={treatment.schema} />
      <JsonLd data={generateBreadcrumbSchema(treatment)} />
      {/* Page content */}
    </>
  );
}
```

## Validation

Test all structured data:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Medical Content E-E-A-T

For medical content, include:

```json
{
  "@type": "MedicalWebPage",
  "lastReviewed": "2024-06-20",
  "reviewedBy": {
    "@type": "Person",
    "name": "Dr. María Fernández",
    "jobTitle": "Medical Director"
  }
}
```
