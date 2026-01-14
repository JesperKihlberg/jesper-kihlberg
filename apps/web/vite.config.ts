import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@jesper/ui": resolve(__dirname, "../../packages/ui/src"),
      "@jesper/utils": resolve(__dirname, "../../packages/utils/src"),
    },
  },
  server: {
    port: 3033,
  },
});
