# Git Workflow

## Branch Strategy

### Main Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code |
| `develop` | Integration branch (optional) |

### Feature Branches

Format: `{type}/{description}`

**Types:**
- `feature/` - New features
- `content/` - Content additions
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `seo/` - SEO improvements

**Examples:**
```
feature/clinic-search
content/dental-implants-page
fix/broken-breadcrumbs
docs/seo-guidelines
seo/structured-data-doctors
```

## Commit Messages

### Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `content` | Content changes |
| `docs` | Documentation |
| `style` | Formatting |
| `refactor` | Code restructuring |
| `perf` | Performance |
| `test` | Tests |
| `chore` | Maintenance |
| `seo` | SEO changes |

### Examples

```bash
# Feature
feat(treatments): add dental implants page

# Content
content(blog): add medical tourism guide 2024

# Fix
fix(seo): correct canonical URLs on treatment pages

# Documentation
docs(architecture): update folder structure guide

# SEO
seo(schema): add FAQ schema to treatment pages
```

## Pull Request Process

### 1. Create PR

```bash
git checkout -b feature/new-feature
# make changes
git add .
git commit -m "feat(scope): description"
git push -u origin feature/new-feature
```

### 2. PR Title

Same format as commit messages:
```
feat(treatments): add dental implants page
```

### 3. PR Description

```markdown
## Summary
Brief description of changes.

## Changes
- Change 1
- Change 2

## Testing
How to test these changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed
- [ ] Documentation updated
- [ ] No console errors
```

### 4. Review Requirements

- At least 1 approval
- All checks passing
- No unresolved comments

## Content PRs

For content changes, include:

```markdown
## Content Checklist
- [ ] Follows content template
- [ ] SEO metadata complete
- [ ] Images optimized
- [ ] Internal links added
- [ ] Medical reviewed (if applicable)
```

## Deployment

### Preview Deployments

- Every PR gets a preview URL
- Test thoroughly before merging

### Production Deployment

- Merging to `main` triggers production deploy
- Vercel handles deployment automatically

## Rollback

If issues in production:

```bash
# Revert last commit
git revert HEAD
git push

# Or revert specific commit
git revert <commit-hash>
git push
```

## Branch Protection

`main` branch has:
- Required PR reviews
- Required status checks
- No direct pushes

## Git Hooks (Future)

Planned hooks:
- Pre-commit: Lint, type-check
- Pre-push: Tests
- Commit-msg: Format validation
