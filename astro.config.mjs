// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon"; // Import the integration

// https://astro.build/config
export default defineConfig({
  // compressHTML: false,
  build: {
    inlineStylesheets: `never`,
  },
  integrations: [
    icon(), // Add it here
  ],
});
