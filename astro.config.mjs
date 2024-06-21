import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import image from "@astrojs/image";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";
import auth from 'auth-astro';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    isr: true,
    edgeMiddleware: true,
  }),
  vite: {
    ssr: {
      noExternal: ["astro-google-fonts-optimizer", "plyr"],
    },
  },
  integrations: [
    tailwind(),
    // image({
      // serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    icon(),
    alpinejs(),
    auth(),
  ],
  
});
