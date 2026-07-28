// Separate build config used ONLY for the GitHub Pages deploy (see
// .github/workflows/deploy-pages.yml and scripts/prerender-static.mjs).
// Kept isolated from vite.config.ts on purpose: that file is what Lovable's
// sandbox/live build uses, and it must keep working unmodified (root base
// path, Cloudflare preset). GitHub Pages serves this repo at the gotys.cz
// custom domain root (see public/CNAME), and can only serve static files,
// so this config forces a static-friendly Nitro build that we can crawl
// into plain HTML (see the prerender script).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: { base: "/" },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: "/" },
  },
  nitro: {
    preset: "node-server",
    output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
  },
});
