import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { spec, h } from "forest";
import { renderFontAwesome } from "./renderFontAwesome";

export function renderFooter() {
  h("footer", () => {
    h("hr", {});
    h("span", { text: `Victor Nogueira © ${new Date().getFullYear()}` });
    h("br", {});
    h("a", () => {
      spec({
        attr: {
          href: "https://github.com/felladrin/felladrin.github.io",
          target: "_blank",
        } as HTMLAnchorElement as any,
      });
      renderFontAwesome(faGithub);
      h("span", { text: " Fork on GitHub!" });
    });
  });
}
