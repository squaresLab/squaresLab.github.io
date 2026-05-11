import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://squareslab.github.io',
  integrations: [tailwind(), preact()],
  output: 'static',
});
