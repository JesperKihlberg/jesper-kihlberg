# Quick Setup Guide

## Installation Steps

1. **Install pnpm** (if not already installed)
   ```bash
   npm install -g pnpm
   ```

2. **Install all dependencies**
   ```bash
   cd C:\src\GitHub\jesper-kihlberg
   pnpm install
   ```

3. **Start development**
   ```bash
   pnpm dev
   ```
   Or simply double-click `start.bat`

4. **Open your browser**
   Navigate to: http://localhost:3000

## What's Included

✅ **Apps:**
- `apps/web` - React 19 + Vite + Tailwind v4 application

✅ **Packages:**
- `@jesper/ui` - Shared React components (Button example included)
- `@jesper/utils` - Shared utilities (cn, formatDate, debounce)
- `@jesper/config-typescript` - Shared TypeScript configurations

✅ **Features:**
- Turborepo for task orchestration and caching
- pnpm workspaces for efficient dependency management
- Hot Module Replacement across packages
- TypeScript path mapping for clean imports
- Tailwind CSS v4 with modern setup
- React 19 with latest features

## Common Commands

```bash
# Development
pnpm dev              # Start all apps
pnpm build            # Build all apps and packages
pnpm lint             # Lint all code
pnpm type-check       # Type check all code
pnpm clean            # Clean build artifacts

# Individual package development
cd apps/web
pnpm dev              # Only web app

cd packages/ui
pnpm dev              # Watch mode for UI package
```

## Project Structure

```
jesper-kihlberg/
├── apps/
│   └── web/                    # Main React application
│       ├── src/
│       │   ├── App.tsx         # Demo app with examples
│       │   ├── main.tsx        # Entry point
│       │   └── index.css       # Tailwind imports
│       ├── index.html
│       ├── vite.config.ts
│       └── tailwind.config.ts
│
├── packages/
│   ├── ui/                     # Shared components
│   │   └── src/
│   │       ├── components/
│   │       │   └── Button.tsx  # Example button component
│   │       └── index.ts        # Package exports
│   │
│   ├── utils/                  # Shared utilities
│   │   └── src/
│   │       └── index.ts        # Utility functions
│   │
│   └── config-typescript/      # Shared TS configs
│       ├── base.json
│       └── react.json
│
├── package.json                # Root package config
├── pnpm-workspace.yaml         # Workspace definition
├── turbo.json                  # Turborepo config
└── tsconfig.json               # Root TypeScript config
```

## How It Works

1. **Shared Packages:**
   - `@jesper/ui` and `@jesper/utils` are linked via `workspace:*`
   - Changes in packages instantly reflect in apps (HMR)
   - No build step needed during development

2. **TypeScript Path Mapping:**
   ```tsx
   // In any app, import directly:
   import { Button } from '@jesper/ui'
   import { formatDate } from '@jesper/utils'
   ```

3. **Turborepo:**
   - Caches build outputs
   - Runs tasks in parallel
   - Only rebuilds changed packages

## Next Steps

1. **Add more components** to `packages/ui/src/components/`
2. **Create new apps** in `apps/` directory
3. **Add testing** (Vitest recommended)
4. **Set up ESLint/Prettier** for code quality
5. **Add CI/CD** pipeline (GitHub Actions)
6. **Consider Storybook** for component documentation

## Troubleshooting

**Port 3000 already in use:**
```bash
# Find process
netstat -ano | findstr :3000
# Kill it
taskkill /PID <PID> /F
```

**Dependencies not found:**
```bash
pnpm install
```

**Types not working:**
```bash
pnpm type-check
```

**Cache issues:**
```bash
pnpm clean
rm -rf node_modules
pnpm install
```

## Resources

- [Turborepo Docs](https://turbo.build/repo/docs)
- [Vite Docs](https://vitejs.dev)
- [React 19 Docs](https://react.dev)
- [Tailwind v4 Docs](https://tailwindcss.com)
- [pnpm Docs](https://pnpm.io)

---

**Ready to go!** Run `pnpm install` and then `pnpm dev` to start development.
