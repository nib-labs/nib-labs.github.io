import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Optionally set `site: 'https://<user>.github.io/<repo>'` when known
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [tailwind({ applyBaseStyles: true })],
});