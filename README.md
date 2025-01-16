# enzo-glow

## Quick Start

Clone this repository.

```sh
git clone https://github.com/datle-dev/enzo-glow.git
```

Change directories to the `enzo-glow` folder.

```sh
cd enzo-glow
```

Install dependencies.

```sh
npm install
```

Start local dev server.

```sh
npm run dev
```

Navigate to [](localhost:4321) to preview the website in dev mode.

## Dependencies
- Alpine.js
- Tailwind CSS
- GLightBox
- astro-icon
  - Remix icons

## Project Structure

The Astro project is structured as shown, with the most important folders and files listed:


```text
/
├── public/
├── src/
│   ├── assets/
│   │   ├── portfolio/
│   │   ├── services/
│   │   ├── Enzo-Glow-Logo-Leaf.svg
│   │   ├── Enzo-Glow-Logo.svg
│   │   ├── hero.jpg
│   │   └── portrait.jpg
│   │
│   ├── components/
│   ├── content/
│   │   ├── faq/
│   │   │   ├── booking/
│   │   │   ├── products/
│   │   │   └── services/
│   │   │
│   │   ├── services/
│   │   └── config.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── faqs.astro
│   │   ├── index.astro
│   │   ├── portfolio.astro
│   │   └── services.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── consts.ts
│   ├── env.d.ts
│   └── types.ts
│
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Static asssets

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Package Documentation

- [Astro documentation](https://docs.astro.build/en/getting-started/)
- [Alpine.js documentation](https://alpinejs.dev/start-here)
- [Penguin.ui documentation](https://www.penguinui.com/docs)
