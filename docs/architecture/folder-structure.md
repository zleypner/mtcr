# Folder Structure

## Root Level

```
mtcr/
├── content/              # MDX content (outside src for easy editing)
├── docs/                 # Project documentation
├── public/               # Static assets
└── src/                  # Application source code
```

## Content Directory

```
content/
├── treatments/           # Treatment pages by category
│   ├── dental/
│   ├── cosmetic/
│   ├── orthopedic/
│   └── ...
├── specialties/          # Medical specialties
├── hospitals/            # Hospital profiles
├── clinics/              # Clinic profiles
├── doctors/              # Doctor profiles
├── hotels/               # Recovery hotels
├── cities/               # City guides
├── blog/                 # Blog posts
├── guides/               # Comprehensive guides
│   ├── getting-started/
│   ├── planning/
│   ├── travel/
│   └── recovery/
├── faq/                  # FAQ by category
├── patient-stories/      # Testimonials
└── resources/            # Downloadable resources
```

## Source Directory

```
src/
├── app/                  # Next.js App Router
│   ├── (marketing)/      # Public pages
│   │   ├── treatments/
│   │   ├── specialties/
│   │   ├── hospitals/
│   │   ├── clinics/
│   │   ├── doctors/
│   │   ├── hotels/
│   │   ├── cities/
│   │   ├── blog/
│   │   ├── guides/
│   │   ├── faq/
│   │   ├── patient-stories/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── costs/
│   │   ├── insurance/
│   │   ├── transportation/
│   │   └── recovery/
│   ├── api/              # API routes
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── ui/               # Base UI components (shadcn)
│   ├── layouts/          # Page layouts
│   ├── shared/           # Shared components
│   ├── content/          # MDX components
│   ├── seo/              # SEO components
│   └── directory/        # Directory components
├── features/
│   ├── treatments/       # Treatment feature
│   ├── providers/        # Hospitals, clinics, doctors
│   ├── locations/        # Cities, hotels
│   ├── content/          # Blog, guides
│   └── search/           # Search feature
├── lib/
│   ├── content/          # MDX parsing, content utils
│   ├── seo/              # SEO utilities
│   ├── schema/           # Schema.org generators
│   ├── supabase/         # Database client
│   ├── utils/            # General utilities
│   ├── constants/        # App constants
│   └── validations/      # Zod schemas
├── config/               # Configuration
├── types/                # TypeScript types
├── hooks/                # Custom hooks
├── providers/            # React providers
├── store/                # Zustand stores
├── actions/              # Server actions
└── styles/               # Global styles
```

## Documentation Directory

```
docs/
├── architecture/         # Technical architecture
├── seo/                  # SEO strategy and guidelines
├── content/              # Content guidelines
├── development/          # Development guides
├── decisions/            # ADRs (Architecture Decision Records)
└── roadmap/              # Project roadmap
```

## Naming Conventions

### Files
- Components: `PascalCase.tsx`
- Utilities: `kebab-case.ts`
- Content: `kebab-case.mdx`
- Types: `kebab-case.ts`

### Folders
- All folders: `kebab-case`
- Route groups: `(group-name)`

### Exports
- Use barrel exports (`index.ts`) for each module
- Named exports preferred over default exports
