# ADR 002: MDX for Content Management

## Status
Accepted

## Date
2024-07-26

## Context

We need a content management approach that:
- Allows non-technical editing
- Supports rich content with components
- Enables version control
- Scales to thousands of articles
- Integrates with our React components

### Options Considered

1. **Headless CMS (Contentful, Sanity)** - Full CMS features
2. **MDX Files** - Markdown with React components
3. **Database-backed CMS** - Custom solution
4. **Notion as CMS** - Easy editing, API access

## Decision

We will use **MDX files stored in the repository**.

## Rationale

1. **Version Control**: All content in Git with full history
2. **Component Integration**: Embed React components in content
3. **Type Safety**: Frontmatter validated with Zod
4. **No Dependencies**: No external CMS to manage
5. **Developer Experience**: Edit in IDE with preview
6. **Performance**: Static generation at build time
7. **Cost**: No CMS subscription fees

## Implementation

```
content/
├── treatments/
│   ├── dental/
│   │   ├── dental-implants.mdx
│   │   └── veneers.mdx
│   └── cosmetic/
│       └── rhinoplasty.mdx
└── ...
```

## Consequences

### Positive
- Full control over content
- No vendor lock-in
- Fast builds
- Easy backup

### Negative
- Non-technical editors need Git training (or PR workflow)
- No real-time preview for editors
- No built-in media management

### Mitigations
- Future: Build simple admin UI
- Future: Integrate with Tina CMS or similar
- Use GitHub web editor for simple edits

## Related
- [Content Architecture](../architecture/content-architecture.md)
