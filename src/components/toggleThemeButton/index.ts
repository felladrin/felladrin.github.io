import halfmoon from "halfmoon";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "bundle-text:./index.html";
import { replaceHtmlSlots } from "../../functions/replaceHtmlSlots";
import { getIconNode } from "../../functions/getIconNode";

export const toggleThemeButton = parseHtmlString(htmlString).firstElementChild;

toggleThemeButton.addEventListener("click", () => halfmoon.toggleDarkMode());

replaceHtmlSlots(toggleThemeButton, { moonIcon: getIconNode(faMoon) });
