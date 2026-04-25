import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function postDebugLog(payload) {
  fetch("http://127.0.0.1:7839/ingest/58b1624b-5764-4318-8577-b7b1a8a7cd8d", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "8da1ed",
    },
    body: JSON.stringify({
      sessionId: "8da1ed",
      runId: "pre-fix",
      timestamp: Date.now(),
      ...payload,
    }),
  }).catch(() => {});
}

function cfDeployDebugPlugin() {
  return {
    name: "cf-deploy-debug-plugin",
    configResolved(config) {
      // #region agent log
      postDebugLog({
        hypothesisId: "H1",
        location: "vite.config.js:22",
        message: "Vite config resolved",
        data: { viteVersion: config?.version, mode: config?.mode },
      });
      // #endregion
    },
    buildStart() {
      // #region agent log
      postDebugLog({
        hypothesisId: "H2",
        location: "vite.config.js:31",
        message: "Build started from Vite",
        data: { hasReactPlugin: true },
      });
      // #endregion
    },
    closeBundle() {
      // #region agent log
      postDebugLog({
        hypothesisId: "H3",
        location: "vite.config.js:40",
        message: "Build bundle completed",
        data: { status: "success" },
      });
      // #endregion
    },
  };
}

export default defineConfig({
  plugins: [react(), cfDeployDebugPlugin()],
});
