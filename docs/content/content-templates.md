# Content Templates

## Treatment Page Template

```mdx
---
title: "[Treatment Name] in Costa Rica"
description: "[Treatment] in Costa Rica: costs, top clinics, and complete guide. Save 50-70% vs USA."
slug: "[treatment-slug]"
category: "[category]"
specialty: "[specialty]"
status: "draft"
publishedAt: ""
updatedAt: ""
author: "editorial-team"
medicalReviewer: ""
priceRange:
  min: 0
  max: 0
  currency: "USD"
savingsVsUSA: ""
recoveryTime: ""
hospitalStay: ""
relatedTreatments: []
relatedClinics: []
relatedDoctors: []
---

# [Treatment Name] in Costa Rica

[Opening paragraph: What is this treatment, why Costa Rica is a top destination, key benefit.]

## Quick Facts

<QuickFacts
  procedure="[Treatment Name]"
  duration="[X hours]"
  recovery="[X days/weeks]"
  hospital="[Outpatient/X nights]"
  savings="[X-X%]"
/>

## What is [Treatment Name]?

[2-3 paragraphs explaining the procedure in patient-friendly terms]

## Why Choose Costa Rica for [Treatment]?

### Cost Savings

[Paragraph about cost comparison]

<CostComparison
  treatment="[treatment-slug]"
  usaCost={[X]}
  costaRicaCost={[X]}
/>

### Quality of Care

[Paragraph about quality, accreditations]

### Experienced Surgeons

[Paragraph about doctor qualifications]

## The Procedure

### Before Your [Treatment]

[Pre-procedure requirements and preparation]

### During the Procedure

[What happens during the procedure]

### After Your [Treatment]

[Recovery expectations]

<RecoveryTimeline
  stages={[
    { day: "Day 1-2", description: "..." },
    { day: "Week 1", description: "..." },
  ]}
/>

## Am I a Candidate?

[Candidacy criteria]

**Ideal candidates:**
- [Criteria 1]
- [Criteria 2]

**May not be candidates:**
- [Contraindication 1]
- [Contraindication 2]

## Risks and Considerations

[Honest discussion of risks]

<Callout type="warning">
As with any medical procedure, [treatment] carries risks. Discuss all
concerns with your doctor.
</Callout>

## Top Clinics for [Treatment] in Costa Rica

<ClinicGrid treatment="[treatment-slug]" limit={4} />

## Frequently Asked Questions

<FAQ category="[treatment-slug]" />

## Plan Your [Treatment] in Costa Rica

[Call to action, next steps]

<CTABox
  title="Ready to learn more?"
  description="Get a free consultation..."
/>

---

**Medical Disclaimer:** This content is for informational purposes only...

**Sources:**
- [Source 1]
- [Source 2]
```

## Hospital/Clinic Profile Template

```mdx
---
title: "[Name] - [City], Costa Rica"
description: "[Name] in [City]: services, doctors, accreditations, and patient reviews."
slug: "[slug]"
type: "[hospital/clinic]"
specialty: "[main specialty]"
city: "[city]"
status: "draft"
accreditations: []
services: []
languages: []
---

# [Hospital/Clinic Name]

[Overview paragraph: What makes this facility stand out]

<ProviderQuickInfo
  established={[year]}
  beds={[number]}
  accreditations={["JCI", "..."]}
  languages={["English", "Spanish"]}
/>

## About [Name]

[2-3 paragraphs about history, mission, facilities]

## Accreditations & Certifications

[List and explain accreditations]

## Medical Specialties

[List specialties with links to treatment pages]

## Our Doctors

<DoctorGrid hospital="[slug]" />

## Patient Reviews

<ReviewSummary provider="[slug]" />

## Location & Contact

<LocationMap
  address="[address]"
  coordinates={{ lat: X, lng: X }}
/>

**Contact:**
- Phone: [number]
- Email: [email]
- Website: [url]

## Frequently Asked Questions

<FAQ provider="[slug]" />
```

## Doctor Profile Template

```mdx
---
title: "Dr. [Name] - [Specialty] in Costa Rica"
description: "Dr. [Name], [credentials], [specialty] specialist in Costa Rica."
slug: "dr-[name]"
specialty: "[specialty]"
city: "[city]"
status: "draft"
credentials: []
education: []
languages: []
hospitals: []
clinics: []
---

# Dr. [Full Name]

<DoctorHeader
  name="Dr. [Name]"
  specialty="[Specialty]"
  credentials={["MD", "Board Certified"]}
  photo="/images/doctors/dr-[name].jpg"
/>

## About Dr. [Name]

[Professional biography]

## Education & Training

<EducationList items={[...]} />

## Certifications & Memberships

[List certifications]

## Procedures & Treatments

<TreatmentList doctor="dr-[name]" />

## Where to Find Dr. [Name]

[Hospital/clinic affiliations with links]

## Patient Reviews

<ReviewSummary doctor="dr-[name]" />
```

## Blog Post Template

```mdx
---
title: "[Compelling Title]"
description: "[Meta description]"
slug: "[post-slug]"
category: "[blog-category]"
tags: []
author: "[author-slug]"
status: "draft"
publishedAt: ""
featuredImage: "/images/blog/[slug].jpg"
---

# [Title]

[Hook - engaging opening]

[Introduction - what reader will learn]

## [Main Section 1]

[Content]

## [Main Section 2]

[Content]

## [Main Section 3]

[Content]

## Key Takeaways

- [Takeaway 1]
- [Takeaway 2]
- [Takeaway 3]

## Next Steps

[Call to action]

---

**Related Articles:**
- [Link 1]
- [Link 2]
```
