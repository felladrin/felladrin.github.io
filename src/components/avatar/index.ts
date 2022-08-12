import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "bundle-text:./index.html";

export const avatar = parseHtmlString(htmlString).firstElementChild;
