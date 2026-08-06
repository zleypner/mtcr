# Architecture Overview

Smart Medical Tourism (SMT) is designed as a scalable, SEO-first content platform for medical tourism across Latin America.

## Core Principles

1. **Content-First**: All content lives in MDX files, enabling non-technical editing
2. **Static Generation**: Maximum performance through SSG with ISR for updates
3. **SEO by Design**: Every architectural decision considers search engine optimization
4. **Scalability**: Built to handle 10,000+ pages without performance degradation
5. **Type Safety**: Full TypeScript coverage for content and code

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 15+ (App Router) | Server components, SSG, ISR |
| Language | TypeScript | Type safety |
| Styling | TailwindCSS | Utility-first CSS |
| Content | MDX | Rich content with components |
| Database | Supabase | Future: user accounts, bookings |
| Hosting | Vercel | Edge deployment, analytics |

## Directory Structure

See [folder-structure.md](./folder-structure.md) for complete details.

## Key Architectural Decisions

1. **Route Groups**: Using `(marketing)` group for public pages
2. **Content Separation**: MDX content lives outside `src/` in `/content`
3. **Feature-Based Organization**: Related code grouped by domain
4. **Barrel Exports**: Index files for clean imports

## Data Flow

```
MDX Files (content/)
       ↓
Content Parser (lib/content/)
       ↓
Static Generation (generateStaticParams)
       ↓
Server Components
       ↓
Client Components (interactive only)
```

## Performance Targets

- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Time to First Byte < 200ms

## Related Documents

- [Folder Structure](./folder-structure.md)
- [URL Structure](./url-structure.md)
- [Content Architecture](./content-architecture.md)
- [Component Architecture](./component-architecture.md)
