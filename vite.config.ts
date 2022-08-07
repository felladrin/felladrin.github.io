import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      winbox: "winbox/src/js/winbox.js",
    },
  },
  server: {
    hmr: {
      clientPort: process.env.GITPOD_WORKSPACE_ID ? 443 : undefined,
    },
  },
});
