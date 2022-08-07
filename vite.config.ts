import { ConfigEnv, UserConfigExport } from "vite";
import { viteVConsole } from "vite-plugin-vconsole";
import { resolve } from "node:path";

export default ({ command }: ConfigEnv): UserConfigExport => ({
  plugins: [
    viteVConsole({
      entry: [resolve("src/main.ts")],
      localEnabled: command === "serve",
      enabled: false,
      config: {
        maxLogNumber: 1000,
        theme: "dark",
      },
    }),
  ],
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
