import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()],
  server: {
    port: 3030,
  },
  site: 'https://www.clairemerton.co.uk',
});
