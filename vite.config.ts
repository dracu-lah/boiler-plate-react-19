import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["debian.local"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/modules": path.resolve(
        __dirname,
        "./src/routes/_authenticated/modules",
      ),
    },
  },
  plugins: [react(), TanStackRouterVite(), tailwindcss()],
});
