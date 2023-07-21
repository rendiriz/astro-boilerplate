import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  }, 
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    mdx({
      remarkPlugins: [remarkGfm, remarkReadingTime],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
    }),
    partytown({
      config: { debug: false, forward: ['dataLayer.push'] },
    }),
  ],
});
