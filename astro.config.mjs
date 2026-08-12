import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

const env = loadEnv("production", process.cwd(), "");
const site =
  env.PUBLIC_SITE_URL || "https://replace-with-your-domain.example";

export default defineConfig({
  site,
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory"
  }
});
