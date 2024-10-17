// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import icon from 'astro-icon';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind({
    applyBaseStyles: false,
  }), react(), alpinejs()],
});