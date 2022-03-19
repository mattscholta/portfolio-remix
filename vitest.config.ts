import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * @external https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts"
  }
});
