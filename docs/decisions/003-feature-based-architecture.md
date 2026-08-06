# ADR 003: Feature-Based Architecture

## Status
Accepted

## Date
2024-07-26

## Context

As the codebase grows, we need a clear organization strategy that:
- Keeps related code together
- Enables team scaling
- Reduces cognitive load
- Supports thousands of components

### Options Considered

1. **Type-Based**: Group by type (components/, hooks/, etc.)
2. **Feature-Based**: Group by feature (treatments/, providers/)
3. **Hybrid**: Core shared code + feature modules

## Decision

We will use a **hybrid approach** with feature-based modules for domain logic.

## Structure

```
src/
├── components/         # Shared UI components
│   ├── ui/            # Base components (shadcn)
│   ├── layouts/       # Layout components
│   └── shared/        # Cross-feature components
├── features/          # Feature modules
│   ├── treatments/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── index.ts
│   ├── providers/
│   └── search/
├── lib/               # Shared utilities
├── hooks/             # Shared hooks
└── types/             # Shared types
```

## Rationale

1. **Scalability**: Features can be developed independently
2. **Encapsulation**: Feature logic stays within feature
3. **Discoverability**: Easy to find related code
4. **Reusability**: Shared code clearly separated

## Guidelines

### Feature Module Contents
- `components/` - Feature-specific components
- `hooks/` - Feature-specific hooks
- `lib/` - Feature utilities
- `types.ts` - Feature types
- `index.ts` - Public API (barrel export)

### When to Create a Feature
- Has 3+ related components
- Has specific business logic
- Could theoretically be extracted

### Shared vs Feature Code
- Used by 2+ features → shared
- Feature-specific → in feature

## Consequences

### Positive
- Clear ownership
- Easier code reviews
- Better code splitting potential

### Negative
- More directory navigation
- Potential duplication if not careful
- Barrel exports can grow large
