# Smart Medical Tourism

**Smart Medical Tourism** - Your trusted guide for secure medical travel across Latin America.

## Overview

Smart Medical Tourism (SMT) is an independent content platform designed to become the leading authority on medical tourism in Latin America. The platform helps international patients (primarily from the US, Canada, and Europe) find reliable information about medical treatments across Mexico, Costa Rica, Colombia, Brazil, Argentina, and other LATAM destinations.

## Core Values

- **Secure:** Verified providers, transparent processes, patient safety first
- **Health-focused:** Quality outcomes over cost savings
- **Trustworthy:** Honest information, no hidden agendas

## Vision

- Become the top organic search result for "medical tourism latin america"
- Serve millions of visitors annually
- Index thousands of pages covering treatments, providers, and guides across LATAM
- Generate high-authority backlinks through genuine editorial value

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15+ | Framework (App Router) |
| TypeScript | Type safety |
| TailwindCSS | Styling |
| MDX | Content management |
| shadcn/ui | UI components |
| Supabase | Database (future) |
| Vercel | Deployment |

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm 9+

### Installation

```bash
# Clone repository
git clone https://github.com/zleypner/mtcr.git
cd mtcr

# Install dependencies
npm install

# Set up environment
cp .env.local.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
smart-medical-tourism/
├── content/              # MDX content files
│   ├── treatments/       # Treatment pages
│   ├── hospitals/        # Hospital profiles
│   ├── clinics/          # Clinic profiles
│   ├── doctors/          # Doctor profiles
│   ├── blog/             # Blog posts
│   └── guides/           # Comprehensive guides
├── docs/                 # Project documentation
│   ├── architecture/     # Technical architecture
│   ├── seo/              # SEO strategy
│   ├── content/          # Content guidelines
│   ├── development/      # Development guides
│   ├── decisions/        # Architecture Decision Records
│   └── roadmap/          # Project roadmap
├── public/               # Static assets
└── src/                  # Application source
    ├── app/              # Next.js routes
    ├── components/       # React components
    ├── features/         # Feature modules
    ├── lib/              # Utilities
    ├── types/            # TypeScript types
    └── config/           # Configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Documentation

All documentation is in the `/docs` folder:

- [Architecture Overview](./docs/architecture/overview.md)
- [SEO Strategy](./docs/seo/overview.md)
- [Content Guidelines](./docs/content/writing-guidelines.md)
- [Development Guide](./docs/development/getting-started.md)
- [Project Roadmap](./docs/roadmap/overview.md)

## Key Principles

### SEO-First Design
Every decision prioritizes organic search performance. See [SEO Documentation](./docs/seo/).

### Content Quality
Medical content follows strict E-E-A-T guidelines. See [Medical Content Guidelines](./docs/content/medical-content-guidelines.md).

### Ethical Backlinks
Provider links exist only when they provide genuine value to readers. See [Backlink Strategy](./docs/seo/backlink-strategy.md).

## Contributing

1. Read the [CLAUDE.md](./CLAUDE.md) for project rules
2. Follow the [Coding Standards](./docs/development/coding-standards.md)
3. Use the [Git Workflow](./docs/development/git-workflow.md)

## License

Proprietary - Yieldge

---

Built with Next.js and deployed on Vercel.
