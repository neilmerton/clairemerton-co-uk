import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [compress()],
  server: {
    port: 3030,
  },
  site: 'https://www.clairemerton.co.uk',
});
