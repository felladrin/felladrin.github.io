import { h, spec } from "forest";
import { themeStore, Theme, themeToggled } from "../features/theme";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { renderFontAwesome } from "./renderFontAwesome";

export function renderHeader() {
  h("header", () => {
    h("nav", () => {
      h("ul", () => {
        h("li", () => {
          h("a", () => {
            spec({
              attr: { href: "images/avatar.jpg", title: "Click to see my face :)" } as HTMLAnchorElement as any,
              style: { marginRight: "6px" },
            });
            h("img", {
              attr: { src: "images/avatar.jpg" },
              style: { maxHeight: "24px", borderRadius: "500rem" },
            });
          });
          h("span", { text: "Victor Nogueira" });
        });
        h("li", () => {
          spec({ attr: { class: "float-right sticky" } });
          h("a", () => {
            spec({ handler: { on: { click: themeToggled } } });
            h("span", () => {
              spec({
                attr: { title: "Use Light Theme" },
                visible: themeStore.map((theme) => theme === Theme.Dark),
              });
              renderFontAwesome(faSun);
            });
            h("span", () => {
              spec({
                attr: { title: "Use Dark Theme" },
                visible: themeStore.map((theme) => theme !== Theme.Dark),
              });
              renderFontAwesome(faMoon);
            });
          });
        });
      });
    });
  });
}
