# Monorepo UI Starter

A modern monorepo starter built with Turborepo, React, Vite, Storybook, and Tailwind CSS.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [React](https://react.dev/) + [Vite](https://vitejs.dev/) app with Tailwind CSS
- `storybook`: a [Storybook](https://storybook.js.org/) app for component development and documentation
- `@repo/ui`: a shared React component library with [Mantine](https://mantine.dev/) and Tailwind CSS (used by both `web` and `storybook`)
- `@repo/eslint-config`: shared `eslint` configurations
- `@repo/typescript-config`: shared `tsconfig.json` files used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Vite](https://vitejs.dev/) for fast builds and development
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Mantine](https://mantine.dev/) UI component library
- [Storybook](https://storybook.js.org/) for component development

### Build

To build all apps and packages, run the following command:

```sh
cd monorepo-ui-starter
pnpm run build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```sh
pnpm run build --filter=web
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd monorepo-ui-starter
pnpm run dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```sh
# Develop the web app
pnpm run dev --filter=web

# Develop Storybook
pnpm run dev --filter=storybook
```

### Lint

To lint all apps and packages:

```sh
pnpm run lint
```

### Format

To format all files:

```sh
pnpm run format
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```sh
cd monorepo-ui-starter
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
