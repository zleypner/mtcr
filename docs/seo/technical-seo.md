# Technical SEO

## Core Web Vitals

### Targets

| Metric | Target | Priority |
|--------|--------|----------|
| LCP | < 2.5s | Critical |
| INP | < 200ms | Critical |
| CLS | < 0.1 | Critical |
| TTFB | < 200ms | High |
| FCP | < 1.8s | High |

### Optimization Strategies

**LCP (Largest Contentful Paint)**
- Preload hero images
- Use next/image with priority
- Minimize render-blocking resources
- Use SSG for static pages

**INP (Interaction to Next Paint)**
- Minimize JavaScript
- Use Server Components
- Defer non-critical scripts
- Optimize event handlers

**CLS (Cumulative Layout Shift)**
- Set explicit dimensions on images
- Reserve space for dynamic content
- Avoid inserting content above fold
- Use CSS containment

## URL Canonicalization

```typescript
// app/(marketing)/treatments/[category]/[slug]/page.tsx
export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: `https://costaricahealthguide.com/treatments/${params.category}/${params.slug}`
    }
  }
}
```

## XML Sitemap

Dynamic sitemap generation:

```typescript
// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const treatments = await getAllTreatments();
  const hospitals = await getAllHospitals();
  // ...

  return [
    { url: 'https://costaricahealthguide.com', lastModified: new Date() },
    ...treatments.map(t => ({
      url: `https://costaricahealthguide.com/treatments/${t.category}/${t.slug}`,
      lastModified: t.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8
    })),
    // ...
  ];
}
```

## Robots.txt

```typescript
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://costaricahealthguide.com/sitemap.xml',
  }
}
```

## Meta Tags

### Required for all pages

```typescript
export const metadata: Metadata = {
  title: 'Page Title | Costa Rica Health Guide',
  description: 'Meta description (150-160 characters)',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Page Title',
    description: 'Description',
    url: 'https://costaricahealthguide.com/page',
    siteName: 'Costa Rica Health Guide',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Description',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://costaricahealthguide.com/page',
  },
}
```

## Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/images/clinic.jpg"
  alt="Descriptive alt text with keyword"
  width={800}
  height={600}
  priority={isAboveFold}
  loading={isAboveFold ? 'eager' : 'lazy'}
/>
```

## Mobile Optimization

- Responsive design (mobile-first)
- Touch-friendly targets (min 44x44px)
- Readable font sizes (min 16px)
- No horizontal scrolling
- Fast mobile load times

## Internationalization (Future)

```typescript
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
}
```

Hreflang implementation:

```html
<link rel="alternate" hreflang="en" href="https://costaricahealthguide.com/treatments" />
<link rel="alternate" hreflang="es" href="https://costaricahealthguide.com/es/tratamientos" />
<link rel="alternate" hreflang="x-default" href="https://costaricahealthguide.com/treatments" />
```

## Security Headers

```typescript
// next.config.js
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
]
```

## Monitoring

- Google Search Console
- Google Analytics 4
- Core Web Vitals in Vercel
- Lighthouse CI in deployment
