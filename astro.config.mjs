// [Astro](https://astro.build) configuration file
// - https://docs.astro.build/en/guides/configuring-astro/

import { defineConfig } from 'astro/config';

// [Integrations](https://docs.astro.build/en/guides/integrations-guide/)
import mdx from '@astrojs/mdx'; // https://docs.astro.build/en/guides/integrations-guide/mdx/
import sitemap from '@astrojs/sitemap';  // https://docs.astro.build/en/guides/integrations-guide/sitemap/
import tailwind from "@astrojs/tailwind"; // https://docs.astro.build/en/guides/integrations-guide/tailwind/

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false }
    })]
});