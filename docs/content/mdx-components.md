# MDX Components

## Available Components

### Layout Components

#### Callout
Highlighted information boxes.

```mdx
<Callout type="info">
This is important information.
</Callout>

<Callout type="warning">
This is a warning.
</Callout>

<Callout type="tip">
This is a helpful tip.
</Callout>
```

**Props:**
- `type`: "info" | "warning" | "tip" | "error"
- `title`: Optional heading

#### QuickFacts
Summary box for treatment pages.

```mdx
<QuickFacts
  procedure="Dental Implants"
  duration="1-2 hours"
  recovery="3-6 months"
  hospital="Outpatient"
  savings="50-70%"
/>
```

### Comparison Components

#### CostComparison
Side-by-side cost comparison.

```mdx
<CostComparison
  treatment="dental-implants"
  usaCost={4000}
  costaRicaCost={1500}
  note="Prices are averages and may vary"
/>
```

#### ComparisonTable
Multi-item comparison table.

```mdx
<ComparisonTable
  items={[
    { name: "USA", cost: 4000, quality: "High", wait: "2-4 weeks" },
    { name: "Costa Rica", cost: 1500, quality: "High", wait: "1-2 weeks" },
  ]}
  columns={["Cost", "Quality", "Wait Time"]}
/>
```

### Provider Components

#### ClinicCard
Single clinic preview.

```mdx
<ClinicCard slug="prisma-dental" />
```

#### ClinicGrid
Grid of clinic cards.

```mdx
<ClinicGrid
  treatment="dental-implants"
  limit={4}
  city="san-jose"
/>
```

#### DoctorCard
Single doctor preview.

```mdx
<DoctorCard slug="dr-carlos-rodriguez" />
```

#### DoctorGrid
Grid of doctor cards.

```mdx
<DoctorGrid
  specialty="orthopedics"
  hospital="hospital-cima"
  limit={6}
/>
```

### Timeline Components

#### RecoveryTimeline
Visual recovery timeline.

```mdx
<RecoveryTimeline
  stages={[
    { period: "Day 1-2", title: "Rest", description: "..." },
    { period: "Week 1", title: "Light Activity", description: "..." },
    { period: "Week 2-4", title: "Normal Activity", description: "..." },
  ]}
/>
```

#### ProcedureTimeline
Step-by-step procedure overview.

```mdx
<ProcedureTimeline
  steps={[
    { title: "Consultation", description: "..." },
    { title: "Preparation", description: "..." },
    { title: "Procedure", description: "..." },
    { title: "Recovery", description: "..." },
  ]}
/>
```

### FAQ Component

```mdx
<FAQ category="dental" />

<FAQ
  items={[
    { q: "Question 1?", a: "Answer 1" },
    { q: "Question 2?", a: "Answer 2" },
  ]}
/>
```

### Media Components

#### ImageGallery
Image gallery with lightbox.

```mdx
<ImageGallery
  images={[
    { src: "/images/clinic-1.jpg", alt: "Clinic exterior" },
    { src: "/images/clinic-2.jpg", alt: "Treatment room" },
  ]}
/>
```

#### Video
Embedded video player.

```mdx
<Video
  src="https://youtube.com/watch?v=..."
  title="Patient Testimonial"
/>
```

### CTA Components

#### CTABox
Call-to-action box.

```mdx
<CTABox
  title="Ready to get started?"
  description="Get a free consultation with top doctors."
  buttonText="Get Free Quote"
  buttonLink="/contact"
/>
```

### Location Components

#### LocationMap
Interactive map.

```mdx
<LocationMap
  address="San José, Costa Rica"
  coordinates={{ lat: 9.9281, lng: -84.0907 }}
/>
```

### Review Components

#### ReviewSummary
Aggregate review display.

```mdx
<ReviewSummary
  provider="prisma-dental"
  showRecent={3}
/>
```

## Creating New Components

1. Create component in `src/components/content/`
2. Export from `src/components/content/index.ts`
3. Register in `src/lib/mdx/components.tsx`
4. Document in this file

### Component Requirements

- Server Component compatible (no useState, useEffect)
- Accept typed props
- Include prop validation
- Accessible by default
- Responsive design
