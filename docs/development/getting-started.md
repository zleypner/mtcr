# Getting Started

## Prerequisites

- Node.js 18.17+
- npm 9+
- Git

## Setup

### 1. Clone Repository

```bash
git clone https://github.com/zleypner/mtcr.git
cd mtcr
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Smart Medical Tourism
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Project Structure Overview

```
smart-medical-tourism/
├── content/          # MDX content files
├── docs/             # Documentation
├── public/           # Static assets
└── src/
    ├── app/          # Next.js routes
    ├── components/   # React components
    ├── features/     # Feature modules
    ├── lib/          # Utilities
    ├── types/        # TypeScript types
    └── ...
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript check |

## Development Workflow

1. Create branch from `main`
2. Make changes
3. Run linting and type checks
4. Create pull request
5. Review and merge

## Key Technologies

- **Next.js 15+** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **MDX** - Content management
- **Supabase** - Database and auth (future)
- **shadcn/ui** - UI components

## Documentation

- [Architecture Overview](../architecture/overview.md)
- [Content Guidelines](../content/writing-guidelines.md)
- [SEO Strategy](../seo/overview.md)

## Need Help?

1. Check existing documentation
2. Search issues
3. Ask in team channel
