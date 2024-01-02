import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://cjwilliams.io',
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind({
      applyBaseStyles: false
    }), 
    react(), 
    sentry({
      dsn: "https://6ee6025b58e5a0cda45da4b80b6163cd@o4506503710703616.ingest.sentry.io/4506503712604160",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});