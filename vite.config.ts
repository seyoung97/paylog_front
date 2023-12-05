import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/index.css";`,
      },
    },
  },
});
