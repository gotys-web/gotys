// Separate build config used ONLY for the GitHub Pages deploy (see
// .github/workflows/deploy-pages.yml and scripts/prerender-static.mjs).
// Kept isolated from vite.config.ts on purpose: that file is what Lovable's
// sandbox/live build uses, and it must keep working unmodified (root base
// path, Cloudflare preset). GitHub Pages serves this repo at
// /gotys/ instead of the domain root, and can only serve static files, so
// this config overrides the base path and forces a static-friendly Nitro
// build that we can crawl into plain HTML (see the prerender script).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: { base: "/gotys/" },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: "/gotys" },
  },
  nitro: {
    preset: "node-server",
    output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
  },
});
