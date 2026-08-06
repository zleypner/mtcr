# ADR 004: SEO-First Design

## Status
Accepted

## Date
2024-07-26

## Context

This project's primary goal is organic search traffic. Every architectural decision must consider SEO impact.

## Decision

SEO requirements take priority in all design decisions.

## Principles

### 1. Static Generation Default

All content pages are statically generated:
- Treatment pages
- Provider profiles
- Blog posts
- Guides

ISR for dynamic updates without full rebuilds.

### 2. URL Structure

URLs are designed for keywords and user understanding:
```
/treatments/dental/dental-implants  ✓
/t/d/123                            ✗
```

### 3. Semantic HTML

Use proper HTML elements:
```html
<article>, <section>, <nav>, <header>, <footer>
<h1> → <h2> → <h3> (proper hierarchy)
```

### 4. Structured Data

Every page type has appropriate schema:
- Organization (sitewide)
- MedicalProcedure (treatments)
- Physician (doctors)
- Hospital/MedicalClinic (providers)
- Article (blog/guides)
- BreadcrumbList (all pages)
- FAQPage (FAQ sections)

### 5. Core Web Vitals

Performance targets are non-negotiable:
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

### 6. Internal Linking

Built into content creation process:
- Automatic linking of treatment mentions
- Required related content sections
- Breadcrumb navigation

### 7. Content Quality

E-E-A-T requirements for medical content:
- Author attribution
- Medical review
- Sources cited
- Regular updates

## Implementation Requirements

### Every Page Must Have
- [ ] Unique title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Structured data
- [ ] H1 tag
- [ ] Internal links (3+ minimum)
- [ ] Mobile-friendly layout

### Every Content Type Must Have
- [ ] Sitemap inclusion
- [ ] Breadcrumbs
- [ ] Related content section
- [ ] Schema.org markup

## Consequences

### Positive
- Strong organic traffic potential
- Sustainable growth
- Reduced ad spend needs

### Negative
- More development overhead
- Content creation more complex
- Slower feature development

## Monitoring

Track in Google Search Console:
- Indexed pages
- Core Web Vitals
- Search performance
- Mobile usability
