import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [tailwind(), react()]
});