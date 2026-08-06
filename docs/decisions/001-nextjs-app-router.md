# ADR 001: Next.js App Router

## Status
Accepted

## Date
2024-07-26

## Context

We need to choose a framework for building a content-heavy, SEO-focused medical tourism website that will scale to thousands of pages.

### Requirements
- Excellent SEO capabilities
- Static site generation
- Incremental static regeneration
- Server-side rendering when needed
- React ecosystem
- TypeScript support
- Performance optimization built-in

### Options Considered

1. **Next.js Pages Router** - Stable, well-documented
2. **Next.js App Router** - Modern, better DX, React Server Components
3. **Remix** - Good SEO, different mental model
4. **Astro** - Content-focused, multi-framework

## Decision

We will use **Next.js 15+ with App Router**.

## Rationale

1. **Server Components**: Better performance for content pages
2. **Metadata API**: Built-in SEO metadata handling
3. **Streaming**: Progressive page loading
4. **Route Groups**: Better organization for large sites
5. **Parallel Routes**: Future flexibility
6. **Static Generation**: Built-in SSG with ISR
7. **Vercel Integration**: Optimized deployment

## Consequences

### Positive
- Modern React patterns
- Better performance
- Built-in SEO tools
- Active development

### Negative
- Newer, less community resources
- Some patterns still evolving
- Learning curve for team

## Related
- [ADR 002: MDX for Content](./002-mdx-content.md)
