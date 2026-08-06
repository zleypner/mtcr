# Coding Standards

## TypeScript

### Strict Mode

TypeScript strict mode is enabled. All code must:
- Have explicit types (no `any` unless absolutely necessary)
- Handle null/undefined properly
- Use proper type narrowing

### Type Definitions

```typescript
// Good: Explicit types
interface TreatmentCardProps {
  treatment: Treatment;
  variant?: "default" | "compact";
  showPrice?: boolean;
}

// Bad: Implicit any
function processData(data) { ... }
```

### Import Types

```typescript
// Good: Import types separately
import type { Treatment } from "@/types";
import { getTreatment } from "@/lib/content";

// Bad: Mixed imports
import { Treatment, getTreatment } from "@/lib";
```

## React Components

### Server Components (Default)

```tsx
// No "use client" directive = Server Component
export function TreatmentCard({ treatment }: Props) {
  return <div>{treatment.title}</div>;
}
```

### Client Components (Only When Needed)

```tsx
"use client";

import { useState } from "react";

export function SearchFilter() {
  const [query, setQuery] = useState("");
  // ...
}
```

### Component Organization

```tsx
// 1. Imports
import { cn } from "@/lib/utils";
import type { Treatment } from "@/types";

// 2. Types
interface TreatmentCardProps {
  treatment: Treatment;
  className?: string;
}

// 3. Component
export function TreatmentCard({ treatment, className }: TreatmentCardProps) {
  return (
    <article className={cn("rounded-lg border p-4", className)}>
      <h3>{treatment.title}</h3>
    </article>
  );
}
```

## Naming Conventions

### Files

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `TreatmentCard.tsx` |
| Utilities | kebab-case | `format-date.ts` |
| Types | kebab-case | `content.ts` |
| Content | kebab-case | `dental-implants.mdx` |
| Routes | kebab-case | `[slug]/page.tsx` |

### Code

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `TreatmentCard` |
| Functions | camelCase | `getTreatment` |
| Variables | camelCase | `treatmentList` |
| Constants | SCREAMING_SNAKE | `MAX_ITEMS` |
| Types/Interfaces | PascalCase | `TreatmentCategory` |
| Enums | PascalCase | `ContentStatus` |

## Imports

### Order

```typescript
// 1. React/Next
import { useState } from "react";
import Image from "next/image";

// 2. External packages
import { format } from "date-fns";

// 3. Internal aliases
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";

// 4. Types (at the end)
import type { Treatment } from "@/types";
```

### Alias Usage

Always use `@/` alias:

```typescript
// Good
import { Button } from "@/components/ui";

// Bad
import { Button } from "../../../components/ui";
```

## Styling

### Tailwind Classes

```tsx
// Good: Use cn() for conditional classes
<div className={cn(
  "rounded-lg border p-4",
  isActive && "border-primary",
  className
)} />

// Bad: Template literals
<div className={`rounded-lg ${isActive ? 'border-primary' : ''}`} />
```

### CVA for Variants

```typescript
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input bg-background",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## Error Handling

### Server Components

```typescript
export async function TreatmentPage({ params }) {
  const treatment = await getTreatment(params.slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentContent treatment={treatment} />;
}
```

### Client Components

```typescript
"use client";

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(data: FormData) {
    try {
      await submitForm(data);
    } catch (e) {
      setError("Failed to submit. Please try again.");
    }
  }
}
```

## Comments

### When to Comment

- Complex business logic
- Non-obvious workarounds
- TODO items with context

### Format

```typescript
// Single line for brief comments

/**
 * Multi-line for complex explanations.
 * Explain the why, not the what.
 */

// TODO: Implement caching for better performance
// See: https://github.com/org/repo/issues/123
```

## Testing (Future)

- Unit tests for utilities
- Integration tests for API routes
- E2E tests for critical paths
- Accessibility tests for components
