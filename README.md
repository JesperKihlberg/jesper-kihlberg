# Jesper Kihlberg Monorepo

Modern monorepo setup with Turborepo, Vite, React 19, TypeScript, and Tailwind CSS v4.

## Structure

```
jesper-kihlberg/
├── apps/
│   └── web/                 # Main React application
├── packages/
│   ├── ui/                  # Shared React components
│   ├── utils/               # Shared utilities
│   └── config-typescript/   # Shared TypeScript configs
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 9+ (install with `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Start development servers for all apps
pnpm dev

# Or run dev for specific app
cd apps/web
pnpm dev
```

### Available Commands

```bash
# Development
pnpm dev          # Start all apps in dev mode
pnpm build        # Build all apps and packages
pnpm lint         # Lint all code
pnpm type-check   # Type check all code
pnpm clean        # Clean all build artifacts

# Individual package commands
cd apps/web
pnpm dev          # Start web app only
pnpm build        # Build web app only
```

## Packages

### @jesper/ui

Shared React component library with Tailwind CSS styling.

**Usage:**
```tsx
import { Button } from '@jesper/ui'

<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

### @jesper/utils

Shared utility functions.

**Usage:**
```tsx
import { formatDate, cn, debounce } from '@jesper/utils'

const formattedDate = formatDate(new Date())
const className = cn('base', isActive && 'active')
```

## Adding New Packages

1. Create a new directory in `packages/`
2. Add `package.json` with name `@jesper/package-name`
3. Update `tsconfig.json` path mappings if needed
4. Add to workspace dependencies with `workspace:*`

## Adding New Apps

1. Create a new directory in `apps/`
2. Set up Vite config with path aliases
3. Add dependencies with `pnpm add @jesper/ui workspace:*`

## Key Features

- ⚡️ **Turborepo** - Fast task orchestration and caching
- 📦 **pnpm** - Efficient package management
- 🎨 **Tailwind v4** - Latest Tailwind with improved performance
- ⚛️ **React 19** - Latest React features
- 🔥 **Vite** - Lightning fast HMR
- 📘 **TypeScript** - Full type safety across monorepo
- 🔄 **Hot Module Replacement** - Changes in packages instantly reflect in apps

## Path Mapping

TypeScript path mapping is configured to allow direct imports from source:

```tsx
// Works in any app
import { Button } from '@jesper/ui'
import { formatDate } from '@jesper/utils'
```

Vite resolves these to the actual source files for instant HMR.

## TypeScript Configuration

The monorepo uses TypeScript project references for:
- Faster incremental builds
- Better IDE performance
- Proper dependency tracking

## Tailwind CSS v4

Using the latest Tailwind v4 with CSS-first configuration:

```css
/* apps/web/src/index.css */
@import "tailwindcss";
```

Configuration in `tailwind.config.ts` for customization.

## Development Workflow

1. Make changes in `packages/ui` or `packages/utils`
2. See changes instantly in `apps/web` via HMR
3. No build step needed during development
4. Run `pnpm build` before deploying

## Troubleshooting

**Issue: Types not found**
```bash
# Rebuild TypeScript references
pnpm type-check
```

**Issue: Stale cache**
```bash
pnpm clean
pnpm install
```

**Issue: Port already in use**
```bash
# Kill process on port 3000
# Windows: netstat -ano | findstr :3000
# Then: taskkill /PID <PID> /F
```

## Next Steps

- Add more shared components to `@jesper/ui`
- Create additional apps in `apps/`
- Add testing setup (Vitest recommended)
- Configure ESLint/Prettier
- Set up CI/CD pipeline
- Add Storybook for component development

## Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Vite Documentation](https://vitejs.dev)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [pnpm Documentation](https://pnpm.io)
