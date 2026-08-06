# Adding Content

## Content Types

| Type | Location | Template |
|------|----------|----------|
| Treatment | `content/treatments/{category}/` | [Treatment Template](../content/content-templates.md#treatment-page-template) |
| Hospital | `content/hospitals/` | [Hospital Template](../content/content-templates.md#hospitalclinic-profile-template) |
| Clinic | `content/clinics/` | [Clinic Template](../content/content-templates.md#hospitalclinic-profile-template) |
| Doctor | `content/doctors/` | [Doctor Template](../content/content-templates.md#doctor-profile-template) |
| Blog Post | `content/blog/` | [Blog Template](../content/content-templates.md#blog-post-template) |
| Guide | `content/guides/{category}/` | [Guide Template](../content/content-templates.md) |
| Hotel | `content/hotels/` | Custom |
| City | `content/cities/` | Custom |

## Adding a Treatment

### 1. Create File

```bash
# Example: Adding dental implants
touch content/treatments/dental/dental-implants.mdx
```

### 2. Add Frontmatter

```yaml
---
title: "Dental Implants in Costa Rica"
description: "Complete guide to dental implants in Costa Rica. Save 50-70% vs USA prices."
slug: "dental-implants"
category: "dental"
specialty: "dentistry"
status: "draft"
publishedAt: ""
updatedAt: ""
author: "editorial-team"
medicalReviewer: ""
priceRange:
  min: 800
  max: 2500
  currency: "USD"
savingsVsUSA: "50-70%"
recoveryTime: "3-6 months"
hospitalStay: "Outpatient"
relatedTreatments:
  - "veneers"
  - "crowns"
relatedClinics:
  - "prisma-dental"
relatedDoctors: []
---
```

### 3. Write Content

Follow the [Treatment Template](../content/content-templates.md#treatment-page-template).

### 4. Add Images

```
public/images/treatments/dental-implants/
├── hero.jpg
├── procedure-1.jpg
└── procedure-2.jpg
```

### 5. Review Checklist

- [ ] Frontmatter complete
- [ ] Content follows template
- [ ] Medical information accurate
- [ ] Images optimized
- [ ] Internal links added
- [ ] SEO metadata complete
- [ ] Medical disclaimer included

### 6. Change Status

When ready for review:

```yaml
status: "review"
```

After approval:

```yaml
status: "published"
publishedAt: "2024-07-26"
```

## Adding a Provider (Hospital/Clinic)

### 1. Create File

```bash
touch content/clinics/prisma-dental.mdx
```

### 2. Add Frontmatter

```yaml
---
title: "Prisma Dental - San José, Costa Rica"
description: "Prisma Dental clinic in San José. Accredited dental care, English-speaking staff."
slug: "prisma-dental"
type: "clinic"
specialty: "dentistry"
city: "san-jose"
status: "draft"
accreditations:
  - name: "ADA"
    acronym: "ADA"
services:
  - "Dental Implants"
  - "Veneers"
  - "Crowns"
languages:
  - "English"
  - "Spanish"
address: "Escazú, San José, Costa Rica"
phone: "+506-2222-2222"
email: "info@prismadental.com"
website: "https://prismadental.com"
---
```

### 3. Verification

Before publishing provider profiles:

- [ ] Verify business is licensed
- [ ] Confirm contact information
- [ ] Verify accreditations
- [ ] Get approval for listing

## Adding a Doctor

### 1. Create File

```bash
touch content/doctors/dr-carlos-rodriguez.mdx
```

### 2. Verification Requirements

- [ ] Verify medical license
- [ ] Confirm credentials
- [ ] Verify hospital/clinic affiliation
- [ ] Get consent for profile

## Adding Blog Posts

### 1. Create File

```bash
touch content/blog/dental-tourism-guide-2024.mdx
```

### 2. Category Options

- `news` - Industry news
- `tips` - Patient tips
- `guides` - How-to guides
- `patient-experience` - Stories
- `industry` - Market insights
- `cost-comparison` - Pricing analysis
- `destination` - Travel content

## Content Workflow

```
1. Draft
   ↓
2. Self-Review
   ↓
3. Editorial Review
   ↓
4. Medical Review (if applicable)
   ↓
5. SEO Check
   ↓
6. Publish
```

## Updating Existing Content

1. Update the MDX file
2. Update `updatedAt` in frontmatter
3. Update `medicalReviewedAt` if medical content changed
4. Create PR with changes

## Archiving Content

```yaml
status: "archived"
```

Archived content:
- Removed from sitemap
- Shows "no longer current" notice
- Redirects may be set up
