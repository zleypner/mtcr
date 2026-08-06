# Component Architecture

## Component Categories

### 1. UI Components (`components/ui/`)

Base building blocks from shadcn/ui:
- Button, Input, Select
- Card, Dialog, Sheet
- Table, Tabs
- No business logic
- Fully accessible

### 2. Layout Components (`components/layouts/`)

Page structure components:

```tsx
// MarketingLayout - public pages
// DirectoryLayout - listing pages
// ContentLayout - articles, guides
// ProviderLayout - hospitals, clinics, doctors
```

### 3. Shared Components (`components/shared/`)

Reusable across features:

```tsx
// Breadcrumbs
// TableOfContents
// ShareButtons
// Rating
// PriceDisplay
// ContactForm
```

### 4. Content Components (`components/content/`)

MDX-specific components:

```tsx
// CostComparison
// ProcedureTimeline
// ClinicCard
// DoctorCard
// FAQAccordion
// Callout
// ImageGallery
```

### 5. SEO Components (`components/seo/`)

```tsx
// JsonLd - Schema.org structured data
// Breadcrumbs - with schema
// CanonicalLink
```

### 6. Directory Components (`components/directory/`)

```tsx
// ProviderGrid
// ProviderFilters
// SearchBox
// MapView
// CompareTable
```

## Component Design Principles

### Server Components by Default

```tsx
// Default: Server Component
export function TreatmentCard({ treatment }: Props) {
  return <Card>...</Card>
}

// Only when needed: Client Component
'use client'
export function SearchFilters() {
  const [filters, setFilters] = useState({})
  return <div>...</div>
}
```

### Props Over Context

```tsx
// Prefer explicit props
<TreatmentCard
  treatment={treatment}
  showPrice={true}
  variant="compact"
/>

// Avoid deep prop drilling with composition
<TreatmentList>
  {treatments.map(t => <TreatmentCard key={t.slug} {...t} />)}
</TreatmentList>
```

### Composition Pattern

```tsx
<Card>
  <Card.Header>
    <Card.Title>{title}</Card.Title>
  </Card.Header>
  <Card.Content>{children}</Card.Content>
  <Card.Footer>
    <Button>Learn More</Button>
  </Card.Footer>
</Card>
```

## MDX Component Registry

```tsx
// lib/mdx/components.tsx
export const mdxComponents = {
  // Override HTML elements
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  a: (props) => <SmartLink {...props} />,

  // Custom components
  CostComparison,
  ClinicCard,
  DoctorCard,
  Callout,
  FAQ,
  Gallery,
}
```

## Feature Components

Each feature has its own components:

```
features/treatments/
├── components/
│   ├── TreatmentCard.tsx
│   ├── TreatmentGrid.tsx
│   ├── TreatmentFilters.tsx
│   └── TreatmentComparison.tsx
├── hooks/
│   └── useTreatments.ts
└── index.ts
```

## Styling Approach

1. **Tailwind utilities** for most styling
2. **CVA (class-variance-authority)** for variants
3. **cn()** for conditional classes

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## Accessibility Requirements

- All interactive elements keyboard accessible
- ARIA labels on icons without text
- Color contrast ratio minimum 4.5:1
- Focus states visible
- Screen reader compatible
