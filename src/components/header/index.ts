import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "bundle-text:./index.html";
import { toggleThemeButton } from "../toggleThemeButton";
import { showAvatar } from "../../functions/showAvatar";

export const header = parseHtmlString(htmlString).firstElementChild;

header.querySelector("#toggleThemeButton").appendChild(toggleThemeButton);
header.querySelector("button").addEventListener("click", () => showAvatar());
