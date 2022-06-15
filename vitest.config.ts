import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

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
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts"
  }
});
