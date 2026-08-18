// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// GitHub Actions sets GITHUB_ACTIONS=true automatically during CI builds.
// Locally (dev/build/preview) it's unset, so base stays "/" and every
// hardcoded path in the app keeps working exactly as before - only the
// CI build that ships to GitHub Pages gets the repo subpath prefix.
const isCI = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: isCI ? '/kawan-jalan-open-trip/' : '/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
