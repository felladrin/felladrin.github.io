import halfmoon from "halfmoon";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "./index.html?raw";
import { replaceHtmlSlots } from "../../functions/replaceHtmlSlots";

export const toggleThemeButton = parseHtmlString(htmlString).firstElementChild;

toggleThemeButton.addEventListener("click", () => halfmoon.toggleDarkMode());

replaceHtmlSlots(toggleThemeButton, { moonIcon: icon(faMoon).node.item(0) });
