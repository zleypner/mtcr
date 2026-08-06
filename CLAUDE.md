# CLAUDE.md - Project Rules

## Project Overview

**CostaRicaHealthGuide.com** - The definitive portal for medical tourism in Costa Rica.

**Mission:** Become the #1 authority on medical tourism searches for Costa Rica.

**Primary Audience:** US/Canada patients seeking medical care abroad.

**Language:** English first, Spanish later.

## Critical Rules

### 1. SEO is Non-Negotiable

Every page, component, and content decision MUST consider SEO impact:
- Every page needs unique title (50-60 chars) and meta description (150-160 chars)
- Every page needs canonical URL
- Every page needs structured data (Schema.org)
- Every content page needs 3+ internal links
- URLs must be keyword-optimized and human-readable

### 2. Content Quality Standards

- Medical content MUST include disclaimer
- Medical content SHOULD be marked for medical review
- Never make absolute claims ("will cure", "guaranteed")
- Use "may help", "typically", "many patients experience"
- Cite sources for statistics

### 3. E-E-A-T for Medical Content

- Include author attribution
- Include medical reviewer when applicable
- Include publish and update dates
- Link to authoritative sources

### 4. No Manipulative Backlinks

Backlinks to clinics/providers ONLY when:
- Editorial value to reader
- Part of genuine recommendation
- In directory context
- In comparison context

NEVER create thin content just for links.

## Architecture Guidelines

### File Organization

```
content/         → MDX content files
docs/            → Project documentation
src/app/         → Next.js routes
src/components/  → React components
src/features/    → Feature modules
src/lib/         → Utilities
src/types/       → TypeScript types
```

### Import Conventions

Always use `@/` alias:
```typescript
import { Button } from "@/components/ui";
import type { Treatment } from "@/types";
```

### Component Patterns

- Server Components by default
- "use client" only when necessary (useState, useEffect, events)
- Use `cn()` for conditional classes
- Props over context

## Content Operations

### Adding a Treatment Page

1. Create file: `content/treatments/{category}/{slug}.mdx`
2. Use template from `docs/content/content-templates.md`
3. Include all required frontmatter
4. Add minimum 3 internal links
5. Include medical disclaimer
6. Set status: "draft"

### Adding a Provider Profile

1. Create file: `content/{hospitals|clinics|doctors}/{slug}.mdx`
2. Verify provider is legitimate and licensed
3. Verify all credentials
4. Include complete contact information
5. Set status: "draft"

### Publishing Content

1. Change status: "draft" → "review"
2. Complete editorial review
3. Complete medical review (if applicable)
4. Complete SEO review
5. Change status: "published"
6. Add publishedAt date

## Document Management

### Size Limits

- Max 500 lines recommended
- Max 800 lines absolute
- Split by domain/subtopic when exceeding

### Documentation Structure

```
docs/
├── architecture/   → Technical architecture
├── seo/           → SEO strategy
├── content/       → Content guidelines
├── development/   → Dev guides
├── decisions/     → ADRs
└── roadmap/       → Project planning
```

## Code Standards

### TypeScript

- Strict mode enabled
- No `any` without justification
- Explicit types for function parameters
- Import types separately with `type`

### Naming

- Components: `PascalCase.tsx`
- Utilities: `kebab-case.ts`
- Content: `kebab-case.mdx`

### Git Commits

```
type(scope): description

Types: feat, fix, content, docs, style, refactor, perf, test, chore, seo
```

## Prohibited Actions

- Creating content solely for backlinks
- Making unverified medical claims
- Using `any` type without comment explaining why
- Pushing directly to main
- Skipping SEO metadata
- Ignoring medical disclaimers on medical content
- Creating orphan pages (no internal links)
- Hardcoding URLs (use constants)

## Quick Reference

### Key Files

- `src/types/content.ts` → All content types
- `src/lib/utils.ts` → Utility functions
- `src/config/env.ts` → Environment variables
- `docs/content/content-templates.md` → Content templates

### Key Commands

```bash
npm run dev          # Development
npm run build        # Production build
npm run lint         # Linting
npm run type-check   # Type checking
```

### Required Tools

- Node.js 18.17+
- npm 9+

## Common Patterns

### Creating a New Feature

```
src/features/{feature}/
├── components/
│   ├── FeatureComponent.tsx
│   └── index.ts
├── hooks/
│   └── useFeature.ts
├── lib/
│   └── feature-utils.ts
└── index.ts
```

### Adding MDX Component

1. Create in `src/components/content/`
2. Export from `src/components/content/index.ts`
3. Register in MDX components config
4. Document in `docs/content/mdx-components.md`

## Questions?

1. Check `docs/` folder first
2. Check related ADRs in `docs/decisions/`
3. Review existing similar code
4. Ask in team channel
