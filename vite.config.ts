import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {},
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [vue()],
});
