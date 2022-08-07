import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "./index.html?raw";

export const avatar = parseHtmlString(htmlString).firstElementChild;
