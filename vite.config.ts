import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import UnocssConfig from "./unocss.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss(UnocssConfig)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
