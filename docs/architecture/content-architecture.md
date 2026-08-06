# Content Architecture

## Content-First Approach

All content is stored as MDX files, enabling:
- Version control through Git
- Easy editing by non-developers
- Rich content with React components
- Type-safe frontmatter

## MDX File Structure

### Frontmatter

Every MDX file begins with YAML frontmatter:

```yaml
---
title: "Dental Implants in Costa Rica"
description: "Complete guide to dental implants..."
slug: "dental-implants"
category: "dental"
status: "published"
publishedAt: "2024-01-15"
updatedAt: "2024-06-20"
author: "editorial-team"
medicalReviewer: "dr-carlos-rodriguez"
---
```

### Content Body

```mdx
# Introduction

Costa Rica has become a leading destination...

<CostComparison treatment="dental-implants" />

## Procedure Overview

<ProcedureTimeline steps={[...]} />

## Top Clinics

<ClinicCard slug="prisma-dental" />
<ClinicCard slug="advance-dental" />
```

## Content Types Hierarchy

```
Content Types
├── Core Pages (SSG)
│   ├── Treatments (by category)
│   ├── Specialties
│   ├── Hospitals
│   ├── Clinics
│   └── Doctors
├── Location Pages
│   ├── Cities
│   └── Hotels
├── Editorial Content
│   ├── Blog Posts
│   ├── Guides
│   └── Patient Stories
└── Reference Content
    ├── FAQ
    └── Resources
```

## Topic Clusters Structure

Each topic cluster consists of:

1. **Pillar Page**: Comprehensive hub page
2. **Cluster Pages**: Supporting content
3. **Internal Links**: Bi-directional linking

Example: Dental Tourism Cluster

```
Pillar: /treatments/dental/
├── /treatments/dental/dental-implants/
├── /treatments/dental/veneers/
├── /treatments/dental/crowns/
├── /guides/dental/choosing-dentist/
├── /blog/dental-tourism-savings/
└── /faq/dental/
```

## Content Relationships

### Explicit Relationships (frontmatter)

```yaml
relatedTreatments:
  - "veneers"
  - "crowns"
relatedClinics:
  - "prisma-dental"
relatedDoctors:
  - "dr-carlos-rodriguez"
```

### Computed Relationships

The content system computes:
- Treatments by specialty
- Doctors by clinic
- Clinics by city
- Content by tag

## Content Loading

```typescript
// lib/content/treatments.ts
export async function getTreatment(category: string, slug: string) {
  const filePath = `content/treatments/${category}/${slug}.mdx`;
  const { frontmatter, content } = await parseMDX(filePath);
  return { ...frontmatter, content };
}

export async function getAllTreatments() {
  const files = await glob('content/treatments/**/*.mdx');
  return Promise.all(files.map(parseAndValidate));
}
```

## Validation

All content is validated against Zod schemas:

```typescript
const treatmentSchema = z.object({
  title: z.string().min(10).max(70),
  description: z.string().min(120).max(160),
  category: z.enum(['dental', 'cosmetic', ...]),
  status: z.enum(['draft', 'review', 'published']),
  // ...
});
```

## Content Lifecycle

```
Draft → Review → Medical Review → Published → Updated → Archived
```

## Media Management

```
public/
├── images/
│   ├── treatments/
│   ├── clinics/
│   ├── doctors/
│   ├── hospitals/
│   └── blog/
└── documents/
    └── resources/
```

Image naming: `{type}-{slug}-{variant}.{ext}`
Example: `clinic-prisma-dental-exterior.jpg`
