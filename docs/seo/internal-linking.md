# Internal Linking Strategy

## Principles

1. **Every page links to related content**
2. **Pillar pages receive the most internal links**
3. **Links use descriptive anchor text**
4. **No orphan pages**
5. **Maximum 3 clicks to any page from home**

## Link Architecture

```
Home
├── Treatment Hubs (high authority)
│   ├── Individual Treatments
│   │   ├── Related Treatments
│   │   ├── Related Clinics
│   │   └── Related Doctors
│   └── Treatment Guides
├── Directory Pages
│   ├── Provider Profiles
│   │   ├── Related Treatments
│   │   └── Related Doctors
│   └── City Pages
└── Content Pages
    ├── Blog Posts
    └── Guides
```

## Linking Rules by Content Type

### Treatment Pages
Must link to:
- Parent category hub
- 2-3 related treatments
- 1-2 related clinics/hospitals
- Relevant guide content
- FAQ section

### Provider Profiles (Clinics/Hospitals/Doctors)
Must link to:
- All treatments offered
- City page
- Related providers
- Patient stories (if available)

### Blog Posts
Must link to:
- Relevant pillar page
- 2-3 treatment pages
- 1 provider profile
- Related blog posts

### Guides
Must link to:
- All mentioned treatments
- All mentioned providers
- Related guides
- Relevant FAQ sections

## Anchor Text Guidelines

### DO
```markdown
Learn more about [dental implants in Costa Rica](/treatments/dental/dental-implants)

[Clínica Bíblica](/hospitals/clinica-biblica) is JCI accredited

Read our [complete guide to medical tourism](/guides/getting-started)
```

### DON'T
```markdown
Click [here](/treatments/dental) for more info

Learn more [on this page](/treatments/dental)

[Read more](/treatments/dental)
```

## Contextual Linking

Links should appear:
- Within body content (most valuable)
- In "Related Content" sections
- In breadcrumbs
- In footer navigation

## Link Equity Flow

```
Home (highest authority)
    ↓
Category Hubs (high authority)
    ↓
Individual Pages (receive authority)
    ↓
Deep Content (supported by links)
```

## Automated Internal Linking

Implement automatic linking for:
- Treatment mentions → Treatment pages
- Clinic mentions → Clinic profiles
- Doctor mentions → Doctor profiles
- City mentions → City guides

```typescript
// Example: Auto-link treatment mentions
const autoLinkTreatments = (content: string, treatments: Treatment[]) => {
  treatments.forEach(treatment => {
    const regex = new RegExp(`\\b${treatment.name}\\b`, 'gi');
    content = content.replace(regex, `[${treatment.name}](/treatments/${treatment.category}/${treatment.slug})`);
  });
  return content;
}
```

## Link Audit

Monthly audit should check:
- Broken links
- Orphan pages
- Pages with few incoming links
- Over-optimized anchor text
- Missing contextual links
