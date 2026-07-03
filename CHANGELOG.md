# Changelog

All notable changes to **forUs** will be documented in this file.

The format is inspired by Keep a Changelog.

---

## [0.1.0-dev] - 2026-07-03

### Added

#### Engineering
- pnpm workspace
- Turborepo
- Monorepo architecture
- Shared documentation structure

#### Frontend
- React 19
- Vite
- Tailwind CSS v4
- Aurora UI foundation
- Button component
- Card component
- GlassPanel component
- Badge component
- Avatar component
- Theme tokens
- Aurora background
- Path aliases

#### Backend
- Express server
- TypeScript backend
- Modular architecture
- Environment configuration
- Middleware layer
- Route aggregation
- Auth module
- Guest authentication endpoint
- UUID guest generation
- Zod validation
- API response helpers

### Changed

- Backend entry split into `app.ts` and `server.ts`
- Project reorganized into feature-first architecture

### Security

- Guest display-name validation
- Structured API responses