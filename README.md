# enzo-glow

## Quick Start

Clone this repository.

```sh
git clone https://github.com/datle-dev/enzo-glow.git
```

Change directories to the `enzo-glow`.

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

With dev mode running, navigate to `localhost:4321` to preview the website.

## Packages Used

- Astro 5.4.2
- Alpine.js (Collapse and Focus plugins)
  - Uses PenguinUI components
- Tailwind CSS and Tailwind Typography
- GLightbox
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
│   │   ├── policies.astro
│   │   └── services.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── consts.ts
│   └── types.ts
│
├── astro.config.mjs
└── tailwind.config.mjs
```

## Astro Content Collections Configuration

There are 2 content collections defined in `src/content/config.ts`.

`faqCollection` is for frequently asked questions.
It has a simple schema comprising the `question` itself, a `category` for grouping, and `order` for sorting.

`servicesCollection` is for every service offered.
The schema is mostly self-explanatory, but there are some defined but unused fields:

- `category` was originally for grouping the services (e.g. facial, threading, etc.) but for now the grouping is simply "Services" and "Add-Ons"
- `deposit` was originally for customized deposits on a per-service basis, but for now a blanket 50% deposit is in effect for all services
- `imgSrc` and `imgAlt` were originally to recreate a card-based layout of services where each service's title and description were accompanied by a descriptive image, but this was ignored in favor of a simple "menu" style of listing available services

## Components of Note

### GLightbox Wrapper

This project uses GLightbox, a pure Javascript lightbox component.
`LightboxWrapper.astro` is the component that contains the necessary `data-*` attributes and wraps any content with the link to the lightbox image.
The wrapper is required because the link to the optimized image obtained via Astro's `getImage()` is passed to the wrapping `a` tag.

For example, `LightboxWrapper.astro` is used in `CaptionImage.astro`, where Astro's built-in `Image` component is passed as inner HTML to `LightboxWrapper.astro`.
`Image` will display the image while `LightboxWrapper.astro` provides the link to the fullscreen lightbox image.

### Service Listings

In the `servicesCollection` schema, the fields `popUp` (string) and `showPopUp` (boolean) control whether to show a non-modal component or a modal component for any given listing.

The non-modal component, `ServiceNonModal.astro`, is just an `article` with `div` and text elements.

The modal component, `ServiceModal.astro`, contains a modified PenguinUI (Alpine.js) modal component, which is triggered when the user hovers over the service's title and clicks on it, only if `showPopUp` is true in the content collection item's frontmatter.

## Other

### GLightbox Styling and Script

Styling and scripting for GLightbox is in `src/layouts/BaseLayout.astro`.
The default GLightbox styling is loaded in via CDN, and some default GLightbox options are defined in a separate script.

### Tailwind CSS Customization

Fonts for sans-serif and serif are overriden and custom colors are defined in `tailwind.config.mjs`.

Primary background and text colors, heading sizes, link styling, and Tailwind Typography overrides are in `global.css`.

### Portfolio

The site was originally planned with a "Portfolio" page in mind, as evidenced by `src/pages/portfolio.astro` and `src/assets/portfolio`.
However, this idea was put on hold for the time being, so while the page and assets exist, the entry has been commented out in `src/consts.ts`, and so no listing of links (header, footer, mobile menu) contain a link to the portfolio page.
For now, it is only accessible if a user were to manually navigate to it in the browser address bar.

### Dark Mode

There is a script for a basic dark mode toggle in `src/layouts/BaseLayout.astro`.
Dark mode has also been configured in `tailwind.config.mjs` to be class-based.

However, the site has no implementation of dark mode toggling, and instead is dark by default with its current styling.

### Typescript Conveniences

`src/types.ts` contains basic type definitions which are then used in `src/consts.ts` for defining things like site info, page links, and social media links.
These constants are then used in various pages for convenience—one need only update the values in `src/consts.ts` for those changes to propagate to all pages accordingly.

## Astro

Pages and layouts are defined as `.astro` files.
Content is configured as Content Collections and discoverable in `src/content/` as `.md` files.
Routes are generated based on the content collection and file name, if applicable.

Astro components are stored in `src/components/`.

There is only one static asset, which is the favicon, and that is in `public/`.
Otherwise all other assets are in `src/assets/`, where they can be processed and optimized by Astro at build time.

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
- [GLighbox documentation](https://github.com/biati-digital/glightbox/blob/master/README.md)
