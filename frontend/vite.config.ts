import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api/get_plans": {
        target: "https://ekasit-tech.infinityfree.me",
        changeOrigin: true,
        secure: false,
        headers: {
          Accept: "application/json",
          "User-Agent": "ekasit-tech-local-dev",
        },
        rewrite: (path) => path.replace(/^\/api\/get_plans$/, "/api/get_plans.php"),
      },
    },
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
