// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://datle-dev.github.io',
  base: 'enzo-glow-test',
  integrations: [
    alpinejs(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
