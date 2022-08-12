import { ConfigEnv, UserConfigExport } from "vite";
import { viteVConsole } from "vite-plugin-vconsole";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

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
  server: (() => {
    try {
      const port = 5173;
      const gitpodPortUrl = execSync(`gp url ${port}`).toString().trim();
      return {
        strictPort: true,
        port,
        hmr: {
          protocol: "wss",
          host: new URL(gitpodPortUrl).hostname,
          clientPort: 443,
        },
      };
    } catch {}
  })(),
});
