import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

/**
 * @external https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./app")
    }
  },

  test: {
    coverage: {
      all: true,
      exclude: ["node_modules", "public/build/**/*"],
      include: [],
      reporter: ["text", "json", "html"]
    },
    globals: true,
    environment: "jsdom",
    exclude: ["build", "node_modules", "public", ".templates/**"],
    setupFiles: "./test/setup.ts"
  }
});
