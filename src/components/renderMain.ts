import { h, spec } from "forest";
import {
  faGithub,
  faImdb,
  faItchIo,
  faLinkedin,
  faMedium,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { renderFontAwesome } from "./renderFontAwesome";

export function renderMain() {
  h("main", () => {
    h("h2", { text: "Welcome, traveler!" });
    h("p", { text: "If you're here, you might be wondering a little more about Victor." });
    h("p", { text: "Maybe the following info can give you an overview:" });
    h("p", () => {
      h("span", { text: "Also, he has open-sourced this website, so you can " });
      h("a", { text: "fork", attr: { href: "https://github.com/felladrin/felladrin.github.io", target: "_blank" } });
      h("span", { text: " and customize it for yourself!" });
    });
    h("ul", () => {
      spec({ style: { listStyleType: "none" } });
      h("li", () => {
        renderFontAwesome(faLinkedin);
        h("span", { text: " he's open to new contacts on " });
        h("a", { text: "LinkedIn", attr: { href: "https://www.linkedin.com/in/victornogueira", target: "_blank" } });
      });
      h("li", () => {
        renderFontAwesome(faGithub);
        h("span", { text: " has released a lot of projects on " });
        h("a", { text: "GitHub", attr: { href: "https://github.com/felladrin", target: "_blank" } });
      });
      h("li", () => {
        renderFontAwesome(faMedium);
        h("span", { text: " has written some posts on " });
        h("a", { text: "Medium", attr: { href: "https://medium.com/@felladrin", target: "_blank" } });
      });
      h("li", () => {
        renderFontAwesome(faTwitter);
        h("span", { text: " has shared a lot of links on " });
        h("a", { text: "Twitter", attr: { href: "https://twitter.com/felladrin", target: "_blank" } });
      });
      h("li", () => {
        renderFontAwesome(faYoutube);
        h("span", { text: " has uploaded a lot of time lapses to " });
        h("a", { text: "Youtube", attr: { href: "https://www.youtube.com/user/Felladrin/videos", target: "_blank" } });
      });
      h("li", () => {
        renderFontAwesome(faItchIo);
        h("span", { text: " has released a dozen games on " });
        h("a", { text: "Itch.io", attr: { href: "https://felladrin.itch.io", target: "_blank" } });
      });
      h("li", () => {
        renderFontAwesome(faImdb);
        h("span", { text: " has rated a thousand movies on " });
        h("a", {
          text: "IMDB",
          attr: { href: "http://www.imdb.com/user/ur36368230/ratings?sort=your_ratings:desc", target: "_blank" },
        });
      });
    });
  });
}
