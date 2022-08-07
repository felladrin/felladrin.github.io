import halfmoon from "halfmoon";
import { app } from "./components/app";

if (process.env.NODE_ENV === "development") {
  import("console-panel/src/console-panel.css");
  import("console-panel/src/console-panel.js").then(() => {
    window["consolePanel"]?.enable();
    window["consolePanel"]?.showConsolePanel();
  });
}

document.body.appendChild(app);

halfmoon.onDOMContentLoaded();
