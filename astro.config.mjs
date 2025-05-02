// @ts-check
import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

export default defineConfig({
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp' // o '@astrojs/image/squoosh'
  })],
  site: 'https://BrianPutallazExequiel.github.io',
  base: '/portfolio-brianexequiel',
  output: 'static'
});
