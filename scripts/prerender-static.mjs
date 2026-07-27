// Renders every route of the built TanStack Start server to static HTML files
// under dist/client, so the result can be hosted as a plain static site
// (e.g. GitHub Pages). Works around @tanstack/start-plugin-core's built-in
// `prerender` option, which assumes an unwrapped SSR build and breaks once
// Nitro re-bundles the server entry under a different filename.
import { spawn } from "node:child_process";
import { mkdir, writeFile, cp } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const clientDir = join(root, "dist", "client");
const base = "/gotys"; // must match tanstackStart.router.basepath in vite.config.ts
const port = 4173;

const routes = [
  "/",
  "/rizikove-kaceni",
  "/mulcovani-naletu",
  "/sekani-travy",
  "/sekani-svahu",
  "/reference",
  "/cenik",
  "/kontakt",
  "/ochrana-osobnich-udaju",
];

function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok || res.status === 404) return resolve();
      } catch {}
      if (Date.now() - start > timeoutMs) return reject(new Error("server did not start in time"));
      setTimeout(tick, 200);
    };
    tick();
  });
}

async function main() {
  const server = spawn(process.execPath, [join(root, "dist", "server", "index.mjs")], {
    env: { ...process.env, PORT: String(port), HOST: "127.0.0.1" },
    stdio: "inherit",
  });

  const kill = () => server.kill();
  process.on("exit", kill);

  try {
    await waitForServer(`http://127.0.0.1:${port}${base}/`);

    for (const route of routes) {
      const url = `http://127.0.0.1:${port}${base}${route}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`GET ${route} -> ${res.status}`);
      const html = await res.text();
      const outPath = route === "/" ? join(clientDir, "index.html") : join(clientDir, route.slice(1), "index.html");
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf8");
      console.log(`wrote ${outPath.replace(root + "\\", "")} (${html.length} bytes)`);
    }

    // sitemap.xml — server route, not HTML
    {
      const url = `http://127.0.0.1:${port}${base}/sitemap.xml`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`GET /sitemap.xml -> ${res.status}`);
      const xml = await res.text();
      const outPath = join(clientDir, "sitemap.xml");
      await writeFile(outPath, xml, "utf8");
      console.log(`wrote ${outPath.replace(root + "\\", "")} (${xml.length} bytes)`);
    }

    // 404 page — GitHub Pages serves dist/client/404.html for unmatched paths
    {
      const url = `http://127.0.0.1:${port}${base}/__not-found-probe__`;
      const res = await fetch(url);
      const html = await res.text();
      const outPath = join(clientDir, "404.html");
      await writeFile(outPath, html, "utf8");
      console.log(`wrote ${outPath.replace(root + "\\", "")} (${html.length} bytes, status ${res.status})`);
    }
  } finally {
    kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
