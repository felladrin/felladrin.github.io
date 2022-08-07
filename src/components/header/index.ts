import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "./index.html?raw";
import { toggleThemeButton } from "../toggleThemeButton";

export const header = parseHtmlString(htmlString).firstElementChild;

header.querySelector("#toggleThemeButton").appendChild(toggleThemeButton);
