# URL Structure

## Design Principles

1. **Human-readable**: URLs should be self-explanatory
2. **SEO-optimized**: Include target keywords naturally
3. **Hierarchical**: Reflect content relationships
4. **Consistent**: Follow patterns across the site
5. **Canonical**: One URL per page, always

## URL Patterns

### Treatments

```
/treatments/                           # All treatments
/treatments/dental/                    # Dental category hub
/treatments/dental/dental-implants/    # Specific treatment
/treatments/dental/veneers/
/treatments/cosmetic/
/treatments/cosmetic/rhinoplasty/
/treatments/orthopedic/
/treatments/orthopedic/knee-replacement/
```

### Specialties

```
/specialties/                          # All specialties
/specialties/cardiology/
/specialties/orthopedics/
/specialties/plastic-surgery/
```

### Providers

```
/hospitals/                            # All hospitals
/hospitals/hospital-cima/
/hospitals/clinica-biblica/

/clinics/                              # All clinics
/clinics/prisma-dental/
/clinics/advance-dental/

/doctors/                              # All doctors
/doctors/dr-carlos-rodriguez/
/doctors/dra-maria-fernandez/
```

### Locations

```
/cities/                               # All cities
/cities/san-jose/
/cities/escazu/
/cities/santa-ana/

/hotels/                               # All hotels
/hotels/intercontinental-costa-rica/
/hotels/marriott-san-jose/
```

### Content

```
/blog/                                 # Blog index
/blog/medical-tourism-guide-2024/

/guides/                               # Guides hub
/guides/getting-started/
/guides/getting-started/first-steps/
/guides/planning/
/guides/planning/choosing-a-doctor/

/faq/                                  # FAQ hub
/faq/costs/
/faq/insurance/
```

### Static Pages

```
/                                      # Home
/about/
/contact/
/costs/
/insurance/
/transportation/
/recovery/
/patient-stories/
/resources/
```

## URL Guidelines

### DO
- Use lowercase letters only
- Use hyphens to separate words
- Keep URLs under 75 characters
- Include primary keyword
- Use trailing slashes consistently (we use NO trailing slash)

### DON'T
- Use underscores
- Include dates in URLs (except time-sensitive content)
- Use query parameters for indexable content
- Include stop words when unnecessary
- Use numerical IDs

## Canonical URL Strategy

Every page must have a canonical URL defined:

```tsx
// In page metadata
export const metadata = {
  alternates: {
    canonical: 'https://costaricahealthguide.com/treatments/dental'
  }
}
```

## Internationalization (Future)

When i18n is implemented:

```
/treatments/dental/               # English (default)
/es/tratamientos/dental/          # Spanish
```

## Redirect Strategy

Document all redirects in `/src/lib/constants/redirects.ts`:

```typescript
export const REDIRECTS = [
  { source: '/old-path', destination: '/new-path', permanent: true },
]
```
