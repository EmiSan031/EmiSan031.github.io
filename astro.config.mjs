// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://EmiSan031.github.io',

  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap({
      serialize: (item) => {
        const url = item.url.endsWith('/') ? item.url.slice(0, -1) : item.url;
        return { ...item, url };
      },
    }),
  ],

  output: 'static', // ✅ GitHub Pages only supports static
  devToolbar: {
    enabled: false,
  },
});
