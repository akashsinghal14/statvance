import { readFile } from "node:fs/promises";

async function post(payload) {
  await fetch("http://127.0.0.1:7839/ingest/58b1624b-5764-4318-8577-b7b1a8a7cd8d", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "8da1ed",
    },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

async function run() {
  const raw = await readFile(new URL("../package.json", import.meta.url), "utf8");
  const pkg = JSON.parse(raw);

  // #region agent log
  await post({
    sessionId: "8da1ed",
    runId: "pre-fix",
    hypothesisId: "H6",
    location: "scripts/debug-preinstall.mjs:19",
    message: "Preinstall package metadata seen by installer",
    data: {
      name: pkg.name,
      version: pkg.version,
      vite: pkg.devDependencies?.vite,
      pluginReact: pkg.devDependencies?.["@vitejs/plugin-react"],
    },
    timestamp: Date.now(),
  });
  // #endregion
}

run();
